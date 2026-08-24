"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import type { User } from "@supabase/supabase-js"
import { useUserPoints } from "@/lib/points/UserPointsContext"
import ThemeToggle from "@/components/ThemeToggle"

export default function Nav() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()
  const supabase = createClient()
  const { points, loading: pointsLoading } = useUserPoints()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
      setLoading(false)
    }
    getUser()
  }, [supabase])

  const handleSignOut = async () => {
    setMenuOpen(false)
    await supabase.auth.signOut()
    router.push("/sign-in")
    router.refresh()
  }

  const initial = user?.email?.charAt(0).toUpperCase() || "U"

  return (
    <header className="nav-bar fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <nav className="flex items-center justify-between py-3.5">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="accent-logo inline-block h-2 w-2 rounded-full" />
            <span className="text-lg font-semibold tracking-tight tx-foreground">Aurora</span>
          </Link>
          <div className="hidden items-center gap-7 text-sm tx-muted md:flex">
            <Link href="/generate" className="link-underline transition hover:tx-foreground font-medium">
              <span className="inline-flex items-center gap-1.5">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l2.09 6.26L20 9l-5 4.1L16.18 20 12 17.27 7.82 20 9 13.1 4 9l5.91-.74L12 2z" />
                </svg>
                图片生成
              </span>
            </Link>
            <Link href="/gallery" className="link-underline transition hover:tx-foreground">
              <span className="inline-flex items-center gap-1.5">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" />
                </svg>
                我的作品
              </span>
            </Link>
            <Link href="/dashboard" className="link-underline transition hover:tx-foreground">
              <span className="inline-flex items-center gap-1.5">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
                </svg>
                用户中心
              </span>
            </Link>
            <Link href="/products" className="link-underline transition hover:tx-foreground">Platform</Link>
            <Link href="/#features" className="link-underline transition hover:tx-foreground">Features</Link>
            <Link href="/#pricing" className="link-underline transition hover:tx-foreground">Pricing</Link>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            {!loading && (
              user ? (
                <>
                  {/* 积分徽章 */}
                  <Link href="/recharge" className="points-badge no-underline">
                    <span className="points-icon points-icon-gold">★</span>
                    <span>{!pointsLoading ? points.toLocaleString() : "..."}</span>
                    <span className="tx-soft" style={{ fontSize: "0.7rem", fontWeight: 500 }}>积分</span>
                  </Link>
                  <div className="relative">
                    <button
                      onClick={() => setMenuOpen((v) => !v)}
                      className="flex items-center gap-2"
                    >
                      <div className="avatar avatar-btn w-8 h-8 text-xs">{initial}</div>
                    </button>
                    {menuOpen && (
                      <div className="user-menu">
                        <div className="user-menu-head">
                          <div className="avatar w-10 h-10">{initial}</div>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold tx-foreground truncate">
                              {user.email?.split("@")[0] || "Creator"}
                            </div>
                            <div className="text-xs tx-muted truncate">{user.email}</div>
                          </div>
                        </div>
                        <div className="user-menu-sep" />
                        <Link href="/dashboard" onClick={() => setMenuOpen(false)} className="user-menu-item">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                          </svg>
                          用户中心
                        </Link>
                        <Link href="/gallery" onClick={() => setMenuOpen(false)} className="user-menu-item">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" />
                          </svg>
                          我的作品
                        </Link>
                        <Link href="/generate" onClick={() => setMenuOpen(false)} className="user-menu-item">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2l2.09 6.26L20 9l-5 4.1L16.18 20 12 17.27 7.82 20 9 13.1 4 9l5.91-.74L12 2z" />
                          </svg>
                          创作新图
                        </Link>
                        <Link href="/recharge" onClick={() => setMenuOpen(false)} className="user-menu-item">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                          </svg>
                          充值积分
                        </Link>
                        <Link href="/admin" onClick={() => setMenuOpen(false)} className="user-menu-item">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
                          </svg>
                          管理后台
                        </Link>
                        <div className="user-menu-sep" />
                        <button onClick={handleSignOut} className="user-menu-item user-menu-danger">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" />
                          </svg>
                          Sign out
                        </button>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  {/* 未登录也显示积分（访客模式） */}
                  <Link href="/recharge" className="points-badge no-underline">
                    <span className="points-icon points-icon-gold">★</span>
                    <span>{!pointsLoading ? points.toLocaleString() : "..."}</span>
                    <span className="tx-soft" style={{ fontSize: "0.7rem", fontWeight: 500 }}>积分</span>
                  </Link>
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
