"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import Nav from "@/components/Nav"
import { useUserPoints } from "@/lib/points/UserPointsContext"
import { useToast } from "@/components/Toast"
import type { GenerationRecord, ImageStyle } from "@/lib/points/system"
import { IMAGE_STYLES, ASPECT_RATIOS } from "@/lib/points/system"

type Tab = "all" | "favorite" | "trash"
type SortKey = "newest" | "oldest" | "cost"

const QUALITY_LABEL: Record<string, string> = {
  standard: "标准",
  hd: "高清",
  ultra: "超清",
}

export default function GalleryPage() {
  const {
    activeGenerations,
    favoriteGenerations,
    deletedGenerations,
    toggleFavorite,
    togglePublic,
    softDelete,
    restore,
    permanentDelete,
    loading,
  } = useUserPoints()
  const { showToast } = useToast()

  const [tab, setTab] = useState<Tab>("all")
  const [sort, setSort] = useState<SortKey>("newest")
  const [search, setSearch] = useState("")
  const [qualityFilter, setQualityFilter] = useState<string>("all")
  const [styleFilter, setStyleFilter] = useState<string>("all")
  const [viewerId, setViewerId] = useState<string | null>(null)

  const sourceList: GenerationRecord[] =
    tab === "all" ? activeGenerations : tab === "favorite" ? favoriteGenerations : deletedGenerations

  const list: GenerationRecord[] = useMemo(() => {
    let arr = [...sourceList]
    if (search.trim()) {
      const q = search.trim().toLowerCase()
      arr = arr.filter((r) => r.prompt.toLowerCase().includes(q))
    }
    if (qualityFilter !== "all") arr = arr.filter((r) => r.quality === qualityFilter)
    if (styleFilter !== "all") arr = arr.filter((r) => (r.style || "auto") === styleFilter)
    switch (sort) {
      case "oldest": arr.sort((a, b) => a.createdAt - b.createdAt); break
      case "cost":   arr.sort((a, b) => b.cost - a.cost); break
      default:       arr.sort((a, b) => b.createdAt - a.createdAt)
    }
    return arr
  }, [sourceList, search, sort, qualityFilter, styleFilter])

  const viewer: GenerationRecord | undefined = useMemo(
    () => activeGenerations.concat(deletedGenerations).find((r) => r.id === viewerId),
    [viewerId, activeGenerations, deletedGenerations]
  )

  const handleFav = (id: string, e: React.MouseEvent) => {
    e.stopPropagation()
    const r = toggleFavorite(id)
    if (r !== null) showToast(r ? "已收藏" : "已取消收藏", "success")
  }
  const handlePublic = (id: string, e: React.MouseEvent) => {
    e.stopPropagation()
    const r = togglePublic(id)
    if (r !== null) showToast(r ? "已设为公开" : "已设为私有", "success")
  }
  const handleSoftDelete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation()
    if (softDelete(id)) showToast("已移入回收站", "info")
  }
  const handleRestore = (id: string, e: React.MouseEvent) => {
    e.stopPropagation()
    if (restore(id)) showToast("已恢复", "success")
  }
  const handlePermanent = (id: string, e: React.MouseEvent) => {
    e.stopPropagation()
    if (confirm("确定要彻底删除这张图片？此操作无法撤销。")) {
      if (permanentDelete(id)) {
        setViewerId(null)
        showToast("已彻底删除", "info")
      }
    }
  }

  const handleDownload = async (r: GenerationRecord, e: React.MouseEvent) => {
    e.stopPropagation()
    try {
      const res = await fetch(r.imageUrl)
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      const ts = new Date(r.createdAt).toISOString().slice(0, 19).replace(/[:T]/g, "-")
      a.download = `aurora_${r.quality}_${r.aspectRatio.replace(":", "-")}_${ts}.jpg`
      document.body.appendChild(a); a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
      showToast("已开始下载", "success")
    } catch {
      window.open(r.imageUrl, "_blank")
    }
  }

  const arLabel = (ar: string) => ASPECT_RATIOS.find((a) => a.value === ar)?.label || ar
  const styleLabel = (s?: string) =>
    s && s !== "auto" ? IMAGE_STYLES.find((x) => x.value === s)?.label || s : "自动"

  const tabs: { key: Tab; label: string; count: number }[] = [
    { key: "all",      label: "全部作品", count: activeGenerations.length },
    { key: "favorite", label: "我的收藏", count: favoriteGenerations.length },
    { key: "trash",    label: "回收站",   count: deletedGenerations.length },
  ]

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <Nav />
      <main style={{ paddingTop: 80 }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-8">
          {/* Header */}
          <div className="mb-6 fade-up">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
              <div>
                <div className="section-eyebrow">
                  <span className="inline-block w-1 h-1 rounded-full accent-logo" />
                  MY GALLERY
                </div>
                <h1 className="section-title mb-2">我的作品库</h1>
                <p className="section-subtitle">
                  管理所有使用 AI 生成的图片，支持收藏、下载、分享、删除与恢复。
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Link href="/dashboard" className="btn-outline px-4 py-2 text-sm font-medium no-underline inline-flex items-center gap-1.5">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                  数据统计
                </Link>
                <Link href="/generate" className="btn-primary px-4 py-2 text-sm font-medium no-underline inline-flex items-center gap-1.5">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                  创作新图
                </Link>
              </div>
            </div>
          </div>

          {/* Hero banner + filter bar */}
          <div className="gallery-hero mb-6 fade-up delay-1">
            <div className="gallery-hero-img" style={{ backgroundImage: "url(/images/gallery-hero.jpg)" }} />
            <div className="gallery-hero-mask" />
            <div className="gallery-hero-content">
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-1.5">
                已有 {activeGenerations.length} 件作品
              </h2>
              <p className="text-sm text-white/80 max-w-xl">
                共收藏 {favoriteGenerations.length} 张 · 累计消耗 {activeGenerations.reduce((s, r) => s + r.cost, 0)} 积分 · 回收站 {deletedGenerations.length} 张
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div className="gallery-tabs mb-5 fade-up delay-2">
            {tabs.map((t) => (
              <button
                key={t.key}
                className={`gallery-tab ${tab === t.key ? "gallery-tab-active" : ""}`}
                onClick={() => setTab(t.key)}
              >
                {t.label}
                <span className="gallery-tab-count">{t.count}</span>
              </button>
            ))}
          </div>

          {/* Filters */}
          <div className="gallery-filter gen-panel mb-5 fade-up delay-3">
            <div className="grid md:grid-cols-[1fr_auto_auto_auto] gap-3 items-center">
              <div className="relative">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "var(--fg-soft)" }}>
                  <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="搜索 prompt 关键词..."
                  className="filter-input pl-9"
                />
              </div>
              <select value={qualityFilter} onChange={(e) => setQualityFilter(e.target.value)} className="filter-select">
                <option value="all">全部画质</option>
                <option value="standard">标准</option>
                <option value="hd">高清</option>
                <option value="ultra">超清</option>
              </select>
              <select value={styleFilter} onChange={(e) => setStyleFilter(e.target.value)} className="filter-select">
                <option value="all">全部风格</option>
                {IMAGE_STYLES.map((s) => (<option key={s.value} value={s.value}>{s.label}</option>))}
              </select>
              <select value={sort} onChange={(e) => setSort(e.target.value as SortKey)} className="filter-select">
                <option value="newest">最新创建</option>
                <option value="oldest">最早创建</option>
                <option value="cost">消耗积分</option>
              </select>
            </div>
          </div>

          {/* Grid */}
          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="skeleton" style={{ aspectRatio: "1 / 1", borderRadius: 14 }} />
              ))}
            </div>
          ) : list.length === 0 ? (
            <div className="gallery-empty fade-up">
              <img src="/images/empty-gallery.jpg" alt="empty" />
              <h3 className="text-lg font-semibold mt-4 mb-1 tx-foreground">
                {tab === "trash" ? "回收站是空的" : tab === "favorite" ? "还没有收藏作品" : "还没有生成任何作品"}
              </h3>
              <p className="text-sm tx-muted mb-5 max-w-md mx-auto">
                {tab === "all" && "前往创作工作台，输入描述即可生成第一张 AI 图片。"}
                {tab === "favorite" && "在作品卡片上点击「心形」按钮，即可收藏喜欢的图片。"}
                {tab === "trash" && "删除的作品会在这里保留 30 天，可以随时恢复或彻底删除。"}
              </p>
              <Link href="/generate" className="btn-primary px-6 py-2.5 text-sm font-semibold no-underline inline-flex items-center gap-1.5">
                开始创作
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          ) : (
            <div className="gallery-grid fade-up delay-4">
              {list.map((r) => (
                <div key={r.id} className="gallery-card" onClick={() => setViewerId(r.id)}>
                  <div className="gallery-imgwrap" style={{ backgroundImage: `url(${r.imageUrl})`, aspectRatio: /\d:\d/.test(r.aspectRatio) ? r.aspectRatio.replace(":", " / ") : "1 / 1" }}>
                    <div className="gallery-overlay" />
                    <div className="gallery-chip-tl">
                      {r.isFavorite && <span className="chip-gold">★ 收藏</span>}
                      {r.isPublic && <span className="chip-green">公开</span>}
                    </div>
                    <div className="gallery-chip-br">
                      <span className="chip-dark">{QUALITY_LABEL[r.quality] || r.quality}</span>
                      <span className="chip-dark">{arLabel(r.aspectRatio)}</span>
                    </div>
                    <div className="gallery-actions">
                      <button className="ga-btn" onClick={(e) => handleFav(r.id, e)} title="收藏">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill={r.isFavorite ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      </button>
                      <button className="ga-btn" onClick={(e) => handleDownload(r, e)} title="下载">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                      </button>
                      {tab !== "trash" ? (
                        <button className="ga-btn" onClick={(e) => handleSoftDelete(r.id, e)} title="删除">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="3 6 5 6 21 6" /><path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6" /><path d="M10 11v6" /><path d="M14 11v6" />
                          </svg>
                        </button>
                      ) : (
                        <>
                          <button className="ga-btn" onClick={(e) => handleRestore(r.id, e)} title="恢复">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
                            </svg>
                          </button>
                          <button className="ga-btn ga-danger" onClick={(e) => handlePermanent(r.id, e)} title="彻底删除">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="gallery-body">
                    <p className="gallery-prompt" title={r.prompt}>{r.prompt}</p>
                    <div className="gallery-meta">
                      <span>
                        <span className="points-icon points-icon-gold" style={{ width: 12, height: 12, fontSize: 7 }}>★</span>
                        {r.cost}
                      </span>
                      <span>{styleLabel(r.style)}</span>
                      <span className="tx-soft">
                        {new Date(r.createdAt).toLocaleDateString("zh-CN", { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" })}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Viewer Modal */}
      {viewer && (
        <div className="viewer-modal" onClick={() => setViewerId(null)}>
          <div className="viewer-inner" onClick={(e) => e.stopPropagation()}>
            <button className="viewer-close" onClick={() => setViewerId(null)} aria-label="close">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div className="viewer-left">
              <img src={viewer.imageUrl} alt="detail" />
            </div>
            <div className="viewer-right">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="badge-soft">{QUALITY_LABEL[viewer.quality] || viewer.quality}</span>
                <span className="badge-soft">{arLabel(viewer.aspectRatio)}</span>
                <span className="badge-soft">{styleLabel(viewer.style)}</span>
                <span className="badge-soft">消耗 {viewer.cost} 积分</span>
                {viewer.isFavorite && <span className="badge-gold">★ 已收藏</span>}
                {viewer.isPublic && <span className="badge-green">公开</span>}
              </div>
              <p className="text-xs tx-soft mb-2" style={{ letterSpacing: "0.04em", textTransform: "uppercase", fontWeight: 600 }}>创作描述 Prompt</p>
              <div className="viewer-prompt">{viewer.prompt}</div>
              <div className="viewer-meta-row">
                <span className="tx-muted">创建时间</span>
                <span className="tx-foreground">{new Date(viewer.createdAt).toLocaleString("zh-CN")}</span>
              </div>
              {viewer.deletedAt && (
                <div className="viewer-meta-row">
                  <span className="tx-muted">删除时间</span>
                  <span className="tx-foreground">{new Date(viewer.deletedAt).toLocaleString("zh-CN")}</span>
                </div>
              )}
              <div className="viewer-meta-row">
                <span className="tx-muted">积分消耗</span>
                <span className="tx-foreground font-semibold">{viewer.cost} 积分</span>
              </div>
              <div className="viewer-actions">
                {!viewer.deletedAt && (
                  <>
                    <button className="btn-primary flex-1 inline-flex items-center justify-center gap-1.5" onClick={(e) => handleDownload(viewer, e)}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      下载原图
                    </button>
                    <button className="btn-outline" onClick={(e) => handleFav(viewer.id, e)}>
                      {viewer.isFavorite ? "取消收藏" : "收藏"}
                    </button>
                    <button className="btn-outline" onClick={(e) => handlePublic(viewer.id, e)}>
                      {viewer.isPublic ? "设为私有" : "设为公开"}
                    </button>
                    <button className="btn-outline" onClick={(e) => handleSoftDelete(viewer.id, e)}>
                      移至回收站
                    </button>
                  </>
                )}
                {viewer.deletedAt && (
                  <>
                    <button className="btn-primary flex-1" onClick={(e) => { handleRestore(viewer.id, e); setViewerId(null) }}>
                      恢复作品
                    </button>
                    <button className="btn-outline" style={{ color: "#b91c1c", borderColor: "#fecaca" }} onClick={(e) => handlePermanent(viewer.id, e)}>
                      彻底删除
                    </button>
                  </>
                )}
              </div>
              <a href={viewer.imageUrl} target="_blank" rel="noopener noreferrer"
                 className="text-xs tx-soft hover:tx-foreground inline-flex items-center gap-1 mt-4 no-underline">
                在新标签页打开原图
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
