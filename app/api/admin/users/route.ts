import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'

export async function GET() {
  try {
    const supabase = createAdminClient()

    const { data, error } = await supabase.auth.admin.listUsers({
      perPage: 100,
      page: 1
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    const users = data.users.map(user => ({
      id: user.id,
      email: user.email || '',
      created_at: user.created_at,
      email_confirmed_at: user.email_confirmed_at,
      last_sign_in_at: user.last_sign_in_at,
      user_metadata: user.user_metadata
    }))

    return NextResponse.json({ users, total: data.total })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 })
  }
}
