"use client"

import Link from "next/link"
import Nav from "@/components/Nav"
import { useUserPoints } from "@/lib/points/UserPointsContext"
import { POINTS_PACKAGES } from "@/lib/points/system"

export default function DashboardPage() {
  const { points, stats, transactionRecords, activeGenerations, favoriteGenerations, preferences, updatePreferences } = useUserPoints()

  const qualityPct = (k: "standard" | "hd" | "ultra") => {
    const total = stats.imagesByQuality.standard + stats.imagesByQuality.hd + stats.imagesByQuality.ultra || 1
    return Math.round((stats.imagesByQuality[k] / total) * 100)
  }

  const packageName = (id?: string) => POINTS_PACKAGES.find((p) => p.id === id)?.name || id || "—"
  const packagePrice = (id?: string) => {
    const p = POINTS_PACKAGES.find((x) => x.id === id)
    return p ? `¥${p.price}` : "—"
  }

  const avgCostPerImage = stats.totalImages ? Math.round(stats.totalSpent / stats.totalImages) : 0
  const canStandard = stats.totalImages ? Math.floor(points / 10) : 0
  const joinDate = stats.firstCreatedAt ? new Date(stats.firstCreatedAt).toLocaleDateString("zh-CN") : "—"
  const lastCreateDate = stats.lastCreatedAt ? new Date(stats.lastCreatedAt).toLocaleString("zh-CN", { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }) : "—"

  const statCards = [
    {
      label: "当前积分余额",
      value: points.toLocaleString(),
      suffix: "积分",
      sub: `可生成标准画质约 ${canStandard} 张`,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
      tint: { bg: "linear-gradient(135deg,#fff8e1,#ffecb3)", fg: "#d4af37" },
      cta: { text: "立即充值", href: "/recharge" },
    },
    {
      label: "累计生成作品",
      value: stats.totalImages.toString(),
      suffix: "张",
      sub: `近 7 天新增 ${stats.recent7DaysCount} 张`,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" />
        </svg>
      ),
      tint: { bg: "linear-gradient(135deg,#eff6ff,#dbeafe)", fg: "#2563eb" },
      cta: { text: "查看作品库", href: "/gallery" },
    },
    {
      label: "累计消耗积分",
      value: stats.totalSpent.toLocaleString(),
      suffix: "积分",
      sub: `平均 ${avgCostPerImage} 积分 / 张`,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      tint: { bg: "linear-gradient(135deg,#f5f3ff,#ede9fe)", fg: "#7c3aed" },
      cta: { text: "开始创作", href: "/generate" },
    },
    {
      label: "收藏的作品",
      value: stats.favoriteCount.toString(),
      suffix: "张",
      sub: `加入收藏夹，永不丢失`,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
      tint: { bg: "linear-gradient(135deg,#fef2f2,#fee2e2)", fg: "#dc2626" },
      cta: { text: "收藏夹", href: "/gallery" },
    },
  ]

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <Nav />
      <main style={{ paddingTop: 80 }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-8">
          {/* Header */}
          <div className="mb-8 fade-up">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
              <div>
                <div className="section-eyebrow">
                  <span className="inline-block w-1 h-1 rounded-full accent-logo" />
                  USER DASHBOARD
                </div>
                <h1 className="section-title mb-2">用户中心</h1>
                <p className="section-subtitle">
                  查看你的创作数据与积分状况，管理偏好设置。
                </p>
              </div>
              <div className="flex gap-2">
                <Link href="/recharge" className="btn-outline px-4 py-2 text-sm font-medium no-underline">
                  积分充值
                </Link>
                <Link href="/generate" className="btn-primary px-4 py-2 text-sm font-medium no-underline">
                  创作新图
                </Link>
              </div>
            </div>
          </div>

          {/* Hero + profile card */}
          <div className="dashboard-hero mb-7 fade-up delay-1">
            <div className="dashboard-hero-bg" style={{ backgroundImage: "url(/images/dashboard-hero.jpg)" }} />
            <div className="dashboard-hero-mask" />
            <div className="dashboard-hero-content">
              <div className="flex items-center gap-5 flex-wrap">
                <div className="dashboard-avatar">A</div>
                <div className="flex-1 min-w-[200px]">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-medium mb-1.5"
                       style={{ background: "rgba(255,255,255,0.18)", color: "#fff", backdropFilter: "blur(8px)" }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e" }} />
                    活跃创作者
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-white mb-1">Aurora Creator</h2>
                  <p className="text-sm text-white/80">
                    加入时间 {joinDate} · 最后创作 {lastCreateDate}
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-5 min-w-[360px]">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">{stats.totalImages}</div>
                    <div className="text-xs text-white/75 mt-0.5">作品总数</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">{stats.rechargedPackageIds.length}</div>
                    <div className="text-xs text-white/75 mt-0.5">购买套餐</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">¥{stats.totalRechargedCNY.toFixed(2)}</div>
                    <div className="text-xs text-white/75 mt-0.5">累计充值</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-7 fade-up delay-2">
            {statCards.map((c, i) => (
              <div key={i} className="dash-card">
                <div className="flex items-start justify-between mb-4">
                  <div className="dash-icon" style={{ background: c.tint.bg, color: c.tint.fg }}>
                    {c.icon}
                  </div>
                  <Link href={c.cta.href} className="dash-cta no-underline">{c.cta.text} →</Link>
                </div>
                <div className="flex items-end gap-1.5 mb-1">
                  <div className="dash-value">{c.value}</div>
                  <div className="dash-unit tx-soft">{c.suffix}</div>
                </div>
                <div className="text-sm tx-muted">{c.sub}</div>
              </div>
            ))}
          </div>

          {/* Main two columns */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-5 mb-7">
            {/* Left: Charts + recent */}
            <div className="space-y-5 fade-up delay-3">
              {/* Quality breakdown */}
              <div className="gen-panel">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold tx-foreground">画质使用分布</h3>
                  <span className="badge-soft">{stats.totalImages} 件作品</span>
                </div>
                <div className="mb-5">
                  <div className="dash-bar-track">
                    <div className="dash-bar dash-bar-s" style={{ width: `${qualityPct("standard")}%` }} title={`标准 ${stats.imagesByQuality.standard}`} />
                    <div className="dash-bar dash-bar-h" style={{ width: `${qualityPct("hd")}%` }} title={`高清 ${stats.imagesByQuality.hd}`} />
                    <div className="dash-bar dash-bar-u" style={{ width: `${qualityPct("ultra")}%` }} title={`超清 ${stats.imagesByQuality.ultra}`} />
                  </div>
                  <div className="flex justify-between mt-2 text-xs tx-muted">
                    <span className="flex items-center gap-1.5"><span className="dot dot-s" />标准 {stats.imagesByQuality.standard} ({qualityPct("standard")}%)</span>
                    <span className="flex items-center gap-1.5"><span className="dot dot-h" />高清 {stats.imagesByQuality.hd} ({qualityPct("hd")}%)</span>
                    <span className="flex items-center gap-1.5"><span className="dot dot-u" />超清 {stats.imagesByQuality.ultra} ({qualityPct("ultra")}%)</span>
                  </div>
                </div>

                {Object.keys(stats.imagesByStyle).length > 0 && (
                  <>
                    <div className="my-5 dash-divider" />
                    <h4 className="text-sm font-semibold tx-foreground mb-3">风格使用 TOP</h4>
                    <div className="space-y-2.5">
                      {Object.entries(stats.imagesByStyle)
                        .sort((a, b) => b[1] - a[1])
                        .slice(0, 5)
                        .map(([key, val]) => {
                          const total = Object.values(stats.imagesByStyle).reduce((s, v) => s + v, 0) || 1
                          const pct = Math.round((val / total) * 100)
                          const labelMap: Record<string, string> = {
                            photo: "写实摄影", illustration: "插画手绘", anime: "二次元动漫",
                            cyberpunk: "赛博朋克", "3d": "3D 渲染", "oil-painting": "油画艺术",
                            sketch: "线稿素描", "flat-design": "扁平设计", minimalist: "极简主义",
                          }
                          return (
                            <div key={key}>
                              <div className="flex justify-between text-xs mb-1">
                                <span className="tx-foreground font-medium">{labelMap[key] || key}</span>
                                <span className="tx-muted">{val} · {pct}%</span>
                              </div>
                              <div className="dash-style-bar"><div style={{ width: `${pct}%` }} /></div>
                            </div>
                          )
                        })}
                    </div>
                  </>
                )}
              </div>

              {/* Recent images */}
              <div className="gen-panel">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold tx-foreground">最近作品</h3>
                  <Link href="/gallery" className="text-sm tx-muted hover:tx-foreground no-underline">查看全部 →</Link>
                </div>
                {activeGenerations.length === 0 ? (
                  <div className="gen-placeholder py-8">
                    <p className="text-sm">暂无作品，快去创作吧</p>
                  </div>
                ) : (
                  <div className="dash-recent-grid">
                    {activeGenerations.slice(0, 6).map((r) => (
                      <Link key={r.id} href="/gallery" className="dash-recent-item no-underline"
                            style={{ backgroundImage: `url(${r.imageUrl})`, aspectRatio: /\d:\d/.test(r.aspectRatio) ? r.aspectRatio.replace(":", " / ") : "1 / 1" }}
                            title={r.prompt}>
                        <div className="dash-recent-overlay">
                          <span className="text-xs">{r.cost}积分</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right: Preferences + Transactions */}
            <div className="space-y-5 fade-up delay-4">
              {/* Preferences */}
              <div className="gen-panel">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold tx-foreground">偏好设置</h3>
                  <span className="text-xs tx-soft">自动保存</span>
                </div>
                <div className="space-y-5">
                  <div>
                    <label className="form-label">默认画质</label>
                    <div className="flex gap-2">
                      {(["standard", "hd", "ultra"] as const).map((q) => (
                        <button key={q}
                          onClick={() => updatePreferences({ defaultQuality: q })}
                          className={`chip ${preferences.defaultQuality === q ? "chip-active" : ""}`}>
                          {q === "standard" ? "标准" : q === "hd" ? "高清" : "超清"}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="form-label">默认画幅比例</label>
                    <div className="flex gap-2 flex-wrap">
                      {[{ v: "1:1", l: "正方形" }, { v: "3:4", l: "竖版 3:4" }, { v: "4:3", l: "横版 4:3" }, { v: "9:16", l: "手机 9:16" }, { v: "16:9", l: "电影 16:9" }].map((x) => (
                        <button key={x.v}
                          onClick={() => updatePreferences({ defaultAspectRatio: x.v as any })}
                          className={`chip ${preferences.defaultAspectRatio === x.v ? "chip-active" : ""}`}>
                          {x.l}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="toggle-row">
                    <div>
                      <div className="form-label" style={{ marginBottom: 2 }}>完成通知</div>
                      <div className="text-xs tx-muted">图片生成完成后弹出提示</div>
                    </div>
                    <button
                      onClick={() => updatePreferences({ notifyOnComplete: !preferences.notifyOnComplete })}
                      className={`toggle ${preferences.notifyOnComplete ? "toggle-on" : ""}`}
                    >
                      <span className="toggle-knob" />
                    </button>
                  </div>
                  <div className="toggle-row">
                    <div>
                      <div className="form-label" style={{ marginBottom: 2 }}>自动保存作品</div>
                      <div className="text-xs tx-muted">生成后自动保存至我的作品库</div>
                    </div>
                    <button
                      onClick={() => updatePreferences({ autoSaveToGallery: !preferences.autoSaveToGallery })}
                      className={`toggle ${preferences.autoSaveToGallery ? "toggle-on" : ""}`}
                    >
                      <span className="toggle-knob" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Transactions */}
              <div className="gen-panel">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold tx-foreground">最近交易</h3>
                  <Link href="/recharge" className="text-sm tx-muted hover:tx-foreground no-underline">充值 →</Link>
                </div>
                {transactionRecords.length === 0 ? (
                  <div className="gen-placeholder py-6">
                    <p className="text-sm tx-muted">暂无交易记录</p>
                  </div>
                ) : (
                  <div className="dash-txn-list">
                    {transactionRecords.slice(0, 8).map((t) => (
                      <div key={t.id} className="dash-txn">
                        <div className="dash-txn-icon" style={{
                          background:
                            t.type === "recharge" ? "linear-gradient(135deg,#ecfdf5,#d1fae5)" :
                            t.type === "bonus"    ? "linear-gradient(135deg,#eff6ff,#dbeafe)" :
                                                     "linear-gradient(135deg,#fafafa,#f0f0f0)",
                          color:
                            t.type === "recharge" ? "#059669" :
                            t.type === "bonus"    ? "#2563eb" :
                                                     "#737373",
                        }}>
                          {t.type === "recharge" ? "¥" : t.type === "bonus" ? "★" : t.type === "generate" ? "✦" : "·"}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="dash-txn-title">{t.description}</div>
                          <div className="dash-txn-sub">
                            {t.packageId ? `${packageName(t.packageId)} · ${packagePrice(t.packageId)} · ` : ""}
                            {new Date(t.createdAt).toLocaleString("zh-CN", { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" })}
                          </div>
                        </div>
                        <div className={`dash-txn-amount ${t.points >= 0 ? "amount-pos" : "amount-neg"}`}>
                          {t.points >= 0 ? "+" : ""}{t.points}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Quick links */}
              <div className="gen-panel">
                <h3 className="text-lg font-semibold tx-foreground mb-4">快捷入口</h3>
                <div className="grid grid-cols-2 gap-2.5">
                  <Link href="/generate" className="dash-qlink no-underline">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2l2.09 6.26L20 9l-5 4.1L16.18 20 12 17.27 7.82 20 9 13.1 4 9l5.91-.74L12 2z" />
                    </svg>
                    立即生成
                  </Link>
                  <Link href="/gallery" className="dash-qlink no-underline">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" />
                    </svg>
                    作品库
                  </Link>
                  <Link href="/recharge" className="dash-qlink no-underline">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                    充值积分
                  </Link>
                  <Link href="/#faq" className="dash-qlink no-underline">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                    帮助中心
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
