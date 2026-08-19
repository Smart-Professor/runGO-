import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const URL = 'https://hnbkayonseorszuaxqiu.supabase.co'
const SVC = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhuYmtheW9uc2VvcnN6dWF4cWl1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4NzEwNzU0NSwiZXhwIjoyMTAyNjgzNTQ1fQ.D96IzqfORWi909PLt1GkPpUNZ_cyWH_V0HZahTWt4p8'

const sqlPath = fileURLToPath(import.meta.url).replace(/_run-migration\.mjs$/, 'schema.sql')
const sql = readFileSync(sqlPath, 'utf8')

// First probe: which SQL endpoints exist on this project?
async function probe(method, path, body) {
  const r = await fetch(`${URL}${path}`, {
    method,
    headers: { apikey: SVC, Authorization: `Bearer ${SVC}`, 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined
  })
  return { status: r.status, text: await r.text().catch(() => '') }
}

console.log('=== probe: /pg/query (legacy pg-meta) ===')
let p = await probe('POST', '/pg/query', { query: 'select 1 as ok' })
console.log(p.status, p.text.slice(0, 200))

console.log('\n=== probe: /postgres/query ===')
p = await probe('POST', '/postgres/query', { query: 'select 1 as ok' })
console.log(p.status, p.text.slice(0, 200))

console.log('\n=== probe: /rest/v1/rpc (no fn) ===')
p = await probe('POST', '/rest/v1/rpc/nonexistent', {})
console.log(p.status, p.text.slice(0, 200))

// If /pg/query works, split migration into per-statement chunks and execute
async function runPgQuery(query) {
  const r = await fetch(`${URL}/pg/query`, {
    method: 'POST',
    headers: { apikey: SVC, Authorization: `Bearer ${SVC}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ query })
  })
  if (!r.ok) {
    const t = await r.text()
    throw new Error(`HTTP ${r.status}: ${t.slice(0, 500)}`)
  }
  return r.json()
}

// Try the full migration as one statement (pg-meta accepts multi-statement)
console.log('\n=== run full migration via /pg/query ===')
try {
  const result = await runPgQuery(sql)
  console.log('OK:', JSON.stringify(result).slice(0, 300))
} catch (e) {
  console.log('full migration failed, will split:', e.message.slice(0, 300))
  // Split by semicolons respecting $$ blocks
  const stmts = []
  let buf = '', inDollar = false
  for (const line of sql.split('\n')) {
    const opens = (line.match(/\$\$/g) || []).length
    if (opens % 2 === 1) inDollar = !inDollar
    buf += line + '\n'
    if (!inDollar && line.trim().endsWith(';')) {
      stmts.push(buf.trim())
      buf = ''
    }
  }
  if (buf.trim()) stmts.push(buf.trim())
  console.log(`split into ${stmts.length} statements`)
  let ok = 0, fail = 0
  for (let i = 0; i < stmts.length; i++) {
    const s = stmts[i]
    try {
      await runPgQuery(s)
      ok++
    } catch (e) {
      fail++
      console.log(`[stmt ${i+1}] FAIL: ${e.message.slice(0,200)}`)
      console.log(`         preview: ${s.slice(0,80).replace(/\n/g,' ')}...`)
    }
  }
  console.log(`done: ${ok} ok, ${fail} fail`)
}
