"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import type { User } from "@supabase/supabase-js"

export default function Nav() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
      setLoading(false)
    }
    getUser()
  }, [supabase])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push("/sign-in")
    router.refresh()
  }

  return (
    <header className="nav-bar fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <nav className="flex items-center justify-between py-3.5">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="accent-logo inline-block h-2 w-2 rounded-full" />
            <span className="text-lg font-semibold tracking-tight tx-foreground">Aurora</span>
          </Link>
          <div className="hidden items-center gap-7 text-sm tx-muted md:flex">
            <Link href="/products" className="link-underline transition hover:tx-foreground">Platform</Link>
            <Link href="/#features" className="link-underline transition hover:tx-foreground">Features</Link>
            <Link href="/#pricing" className="link-underline transition hover:tx-foreground">Pricing</Link>
            <span className="link-underline transition hover:tx-foreground cursor-pointer">Docs</span>
            <span className="link-underline transition hover:tx-foreground cursor-pointer">Blog</span>
          </div>
          <div className="flex items-center gap-3">
            {!loading && (
              user ? (
                <>
                  <Link href="/admin" className="hidden text-sm tx-muted transition hover:tx-foreground sm:inline">
                    Dashboard
                  </Link>
                  <div className="flex items-center gap-2">
                    <div className="avatar w-8 h-8 text-xs">
                      {user.email?.charAt(0).toUpperCase() || "U"}
                    </div>
                    <button
                      onClick={handleSignOut}
                      className="text-sm tx-muted transition hover:tx-foreground"
                    >
                      Sign out
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <Link href="/sign-in" className="hidden text-sm tx-muted transition hover:tx-foreground sm:inline">
                    Sign in
                  </Link>
                  <Link href="/sign-up" className="btn-primary px-5 py-2 text-sm font-medium">
                    Get started
                  </Link>
                </>
              )
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}
