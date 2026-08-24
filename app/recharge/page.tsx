"use client"

import { useState } from "react"
import Link from "next/link"
import Nav from "@/components/Nav"
import { useUserPoints } from "@/lib/points/UserPointsContext"
import { useToast } from "@/components/Toast"
import { POINTS_PACKAGES, PointsPackage } from "@/lib/points/system"

export default function RechargePage() {
  const { points, loading: pointsLoading, recharge, transactionRecords, refreshPoints } = useUserPoints()
  const { showToast } = useToast()
  const [processingId, setProcessingId] = useState<string | null>(null)
  const [showConfirm, setShowConfirm] = useState<PointsPackage | null>(null)

  const handleRecharge = async (pkg: PointsPackage) => {
    setShowConfirm(pkg)
  }

  const confirmRecharge = async () => {
    if (!showConfirm) return
    const pkg = showConfirm
    setShowConfirm(null)
    setProcessingId(pkg.id)

    try {
      // 模拟支付延迟
      await new Promise((resolve) => setTimeout(resolve, 1200))

      const result = await recharge(pkg.id)
      if (result.success) {
        showToast(`充值成功！获得 ${result.added} 积分，当前积分 ${result.total}`, "success")
      } else {
        showToast(result.message || "充值失败", "error")
      }
    } catch (err) {
      showToast("支付出错，请稍后重试", "error")
    } finally {
      setProcessingId(null)
    }
  }

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <Nav />
      <main style={{ paddingTop: 80 }}>
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-10">
          {/* Header */}
          <div className="text-center mb-12 fade-up">
            <div className="section-eyebrow justify-center mb-3">
              <span className="inline-block w-1 h-1 rounded-full accent-logo" />
              POINTS RECHARGE
            </div>
            <h1 className="section-title mb-4" style={{ margin: "0 auto 1rem" }}>积分充值中心</h1>
            <p className="section-subtitle mx-auto mb-6">
              充值积分，解锁更多 AI 创作能力。选择适合你的套餐，支持多种支付方式，即时到账。
            </p>
            {/* 当前积分显示 */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl card">
              <div className="flex items-center gap-2">
                <span className="points-icon points-icon-gold" style={{ width: 28, height: 28, fontSize: "0.8rem" }}>★</span>
                <div className="text-left">
                  <div className="text-xs tx-muted" style={{ fontSize: "0.72rem", letterSpacing: "0.05em", textTransform: "uppercase", fontWeight: 600 }}>当前积分余额</div>
                  <div className="text-2xl font-bold tx-foreground">
                    {!pointsLoading ? points.toLocaleString() : "..."}
                  </div>
                </div>
              </div>
              <div className="h-8 w-px" style={{ background: "var(--line)" }} />
              <div className="text-left">
                <div className="text-xs tx-muted" style={{ fontSize: "0.72rem", letterSpacing: "0.05em", textTransform: "uppercase", fontWeight: 600 }}>可生成图片</div>
                <div className="text-lg font-semibold tx-foreground">
                  {!pointsLoading ? Math.floor(points / 10) : "..."} <span className="text-sm tx-muted font-normal">张标准</span>
                </div>
              </div>
            </div>
          </div>

          {/* 套餐卡片 */}
          <div className="mb-14 fade-up delay-1">
            <h2 className="text-lg font-semibold tx-foreground mb-5 flex items-center gap-2">
              <span>选择充值套餐</span>
              <span className="badge-soft">限时赠送</span>
            </h2>
            <div className="recharge-packages">
              {POINTS_PACKAGES.map((pkg) => {
                const perPoint = (pkg.price / (pkg.points + (pkg.bonus || 0))).toFixed(4)
                const processing = processingId === pkg.id
                return (
                  <div
                    key={pkg.id}
                    className={`recharge-card ${pkg.popular ? "featured" : ""}`}
                    onClick={() => !processing && handleRecharge(pkg)}
                  >
                    <div className="recharge-points">
                      {pkg.points.toLocaleString()}
                      <span className="text-base tx-muted font-normal" style={{ fontSize: "1rem" }}> 积分</span>
                    </div>
                    {pkg.bonus && (
                      <div className="recharge-bonus">
                        赠送 +{pkg.bonus.toLocaleString()} 积分
                      </div>
                    )}
                    {!pkg.bonus && <div style={{ height: 30 }} />}
                    <div className="recharge-price">¥{pkg.price}</div>
                    <div className="recharge-name">{pkg.name}</div>
                    <div className="recharge-per mb-5">约 ¥{perPoint}/积分</div>
                    <button
                      disabled={processing}
                      className="w-full py-2.5 rounded-xl font-semibold text-sm transition flex items-center justify-center gap-2 disabled:opacity-60"
                      style={{
                        background: pkg.popular ? "#0a0a0a" : "transparent",
                        color: pkg.popular ? "#ffffff" : "var(--fg)",
                        border: `1px solid ${pkg.popular ? "#0a0a0a" : "var(--line)"}`,
                      }}
                    >
                      {processing ? (
                        <>
                          <div className="spinner" style={pkg.popular ? { borderColor: "rgba(255,255,255,0.3)", borderTopColor: "#fff", width: 16, height: 16, borderWidth: 2 } : { width: 16, height: 16, borderWidth: 2 }} />
                          处理中...
                        </>
                      ) : (
                        <>立即购买</>
                      )}
                    </button>
                  </div>
                )
              })}
            </div>
          </div>

          {/* 交易记录 */}
          <div className="mb-10 fade-up delay-2">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-semibold tx-foreground">积分交易记录</h2>
              <span className="badge-soft">{transactionRecords.length} 条</span>
            </div>
            <div className="card overflow-hidden">
              {transactionRecords.length === 0 ? (
                <div className="gen-placeholder py-14">
                  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="mx-auto mb-4 opacity-40">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="9" y1="14" x2="15" y2="14" />
                    <line x1="9" y1="18" x2="15" y2="18" />
                  </svg>
                  <p className="font-medium tx-foreground mb-1">暂无交易记录</p>
                  <p className="text-sm tx-muted">充值或生成图片后会在此显示记录</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="record-table w-full">
                    <thead>
                      <tr>
                        <th>类型</th>
                        <th>描述</th>
                        <th>积分变动</th>
                        <th>金额</th>
                        <th>时间</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactionRecords.slice(0, 20).map((tx) => (
                        <tr key={tx.id}>
                          <td>
                            <span
                              className="badge-soft inline-flex items-center gap-1"
                              style={{
                                background: tx.type === "recharge" ? "#ecfdf5" : tx.type === "bonus" ? "#fffbeb" : "#f5f5f5",
                                color: tx.type === "recharge" ? "#047857" : tx.type === "bonus" ? "#92400e" : "var(--fg-muted)",
                                border: "none",
                              }}
                            >
                              {tx.type === "recharge" && "💳 充值"}
                              {tx.type === "generate" && "🎨 生成"}
                              {tx.type === "bonus" && "🎁 奖励"}
                            </span>
                          </td>
                          <td>{tx.description}</td>
                          <td className={tx.points > 0 ? "font-semibold" : "tx-muted font-medium"} style={{ color: tx.points > 0 ? "#047857" : undefined }}>
                            {tx.points > 0 ? `+${tx.points.toLocaleString()}` : tx.points.toLocaleString()}
                          </td>
                          <td>{tx.amount > 0 ? `¥${tx.amount.toFixed(2)}` : "—"}</td>
                          <td className="tx-muted" style={{ fontSize: "0.82rem" }}>
                            {new Date(tx.createdAt).toLocaleString("zh-CN", {
                              year: "numeric",
                              month: "2-digit",
                              day: "2-digit",
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>

          {/* FAQ */}
          <div className="fade-up delay-3">
            <h2 className="text-lg font-semibold tx-foreground mb-5">常见问题</h2>
            <div className="space-y-3">
              {[
                {
                  q: "积分会过期吗？",
                  a: "积分永久有效，不会过期。您可以随时使用，无需担心有效期问题。",
                },
                {
                  q: "支持哪些支付方式？",
                  a: "目前支持微信支付、支付宝、银行卡等主流支付方式，安全便捷，即时到账。",
                },
                {
                  q: "充值后可以退款吗？",
                  a: "根据平台政策，积分一经充值使用后不支持退款。如有特殊情况，请联系客服处理。",
                },
                {
                  q: "如何获得更多积分？",
                  a: "除了直接充值，您还可以参与平台活动、邀请好友注册等方式获得额外积分奖励。",
                },
              ].map((item, i) => (
                <div key={i} className="card p-5">
                  <p className="font-semibold tx-foreground mb-2 flex items-center gap-2">
                    <span className="badge-soft">Q{i + 1}</span>
                    {item.q}
                  </p>
                  <p className="text-sm tx-muted leading-relaxed pl-9">{item.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link href="/generate" className="btn-outline px-6 py-2.5 text-sm font-medium no-underline inline-flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                返回图片生成页面
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* 确认充值弹窗 */}
      {showConfirm && (
        <div className="modal-backdrop" onClick={(e) => e.target === e.currentTarget && setShowConfirm(null)}>
          <div className="modal-content p-7">
            <div className="text-center mb-5">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4" style={{ background: "linear-gradient(135deg, #f4e4a6 0%, #ffe8a3 100%)" }}>
                <span className="text-2xl">★</span>
              </div>
              <h3 className="text-xl font-bold tx-foreground mb-1">确认充值</h3>
              <p className="text-sm tx-muted">即将购买以下套餐</p>
            </div>

            <div className="rounded-2xl p-5 mb-6" style={{ background: "var(--bg-soft)" }}>
              <div className="flex items-center justify-between mb-2">
                <span className="tx-muted text-sm">套餐</span>
                <span className="font-semibold tx-foreground">{showConfirm.name}</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="tx-muted text-sm">获得积分</span>
                <span className="font-bold tx-foreground text-lg">
                  {showConfirm.points.toLocaleString()}
                  {showConfirm.bonus && (
                    <span className="text-sm ml-1" style={{ color: "#92400e" }}>
                      + 赠送 {showConfirm.bonus.toLocaleString()}
                    </span>
                  )}
                </span>
              </div>
              <div className="h-px my-3" style={{ background: "var(--line)" }} />
              <div className="flex items-center justify-between">
                <span className="tx-muted text-sm">应付金额</span>
                <span className="font-bold text-2xl tx-foreground">¥{showConfirm.price}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowConfirm(null)}
                className="flex-1 py-3 rounded-xl font-semibold text-sm transition"
                style={{ border: "1px solid var(--line)", color: "var(--fg)" }}
              >
                取消
              </button>
              <button
                onClick={confirmRecharge}
                className="flex-1 py-3 rounded-xl btn-primary font-semibold text-sm"
              >
                确认支付
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
