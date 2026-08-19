"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { createClient } from "@/lib/supabase/client"

export default function SignInPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        setError(error.message)
        setLoading(false)
        return
      }

      router.push("/admin")
      router.refresh()
    } catch {
      setError("An unexpected error occurred")
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2 mb-8">
          <span className="accent-logo inline-block h-2 w-2 rounded-full" />
          <span className="text-lg font-semibold tracking-tight tx-foreground">Aurora</span>
        </Link>

        {/* Card */}
        <div className="card p-8">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-semibold tx-foreground">Welcome back</h1>
            <p className="mt-2 text-sm tx-muted">Sign in to your account</p>
          </div>

          <form onSubmit={handleSignIn} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium tx-foreground mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ borderColor: 'var(--line)', background: 'var(--bg-card)', color: 'var(--fg)' }}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium tx-foreground mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ borderColor: 'var(--line)', background: 'var(--bg-card)', color: 'var(--fg)' }}
              />
            </div>

            {error && (
              <div className="text-red-500 text-sm p-2 bg-red-50 rounded">{error}</div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 px-4 btn-primary font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          {/* Divider */}
          <div className="mt-6 text-center">
            <p className="text-sm tx-muted">
              Don&apos;t have an account?{" "}
              <Link href="/sign-up" className="font-medium tx-foreground hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>

        {/* Back to home */}
        <div className="mt-6 text-center">
          <Link href="/" className="text-sm tx-muted hover:tx-foreground transition">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}
