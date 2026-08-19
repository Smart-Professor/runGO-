"use client"

import Link from "next/link"
import { useState } from "react"
import { createClient } from "@/lib/supabase/client"

export default function SignUpPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const supabase = createClient()

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters")
      return
    }

    setLoading(true)

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      })

      if (error) {
        setError(error.message)
        setLoading(false)
        return
      }

      setSuccess(true)
      setLoading(false)
    } catch {
      setError("An unexpected error occurred")
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <Link href="/" className="flex items-center justify-center gap-2 mb-8">
            <span className="accent-logo inline-block h-2 w-2 rounded-full" />
            <span className="text-lg font-semibold tracking-tight tx-foreground">Aurora</span>
          </Link>

          <div className="card p-8 text-center">
            <h1 className="text-2xl font-semibold tx-foreground mb-4">Check your email</h1>
            <p className="text-sm tx-muted mb-6">
              We sent a confirmation link to <strong>{email}</strong>. Please check your inbox and click the link to verify your account.
            </p>
            <Link
              href="/sign-in"
              className="inline-block py-2 px-4 btn-primary font-medium"
            >
              Go to Sign In
            </Link>
          </div>
        </div>
      </div>
    )
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
            <h1 className="text-2xl font-semibold tx-foreground">Create account</h1>
            <p className="mt-2 text-sm tx-muted">Start your free trial today</p>
          </div>

          <form onSubmit={handleSignUp} className="space-y-4">
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

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium tx-foreground mb-1">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
              {loading ? "Creating account..." : "Create Account"}
            </button>
          </form>

          {/* Divider */}
          <div className="mt-6 text-center">
            <p className="text-sm tx-muted">
              Already have an account?{" "}
              <Link href="/sign-in" className="font-medium tx-foreground hover:underline">
                Sign in
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
