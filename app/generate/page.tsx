"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import Nav from "@/components/Nav"
import { useUserPoints, aspectRatioToImageSize } from "@/lib/points/UserPointsContext"
import { useToast } from "@/components/Toast"
import { useI18n } from "@/lib/i18n/I18nContext"
import type { AspectRatio, ImageStyle } from "@/lib/points/system"
import {
  ASPECT_RATIOS,
  IMAGE_STYLES,
} from "@/lib/points/system"

type Quality = "standard" | "hd" | "ultra"

const QUALITY_OPTIONS: { value: Quality; label: string; size: string }[] = [
  { value: "standard", label: "标准画质", size: "1024px" },
  { value: "hd", label: "高清画质", size: "2048px" },
  { value: "ultra", label: "超清画质", size: "2048+ px" },
]

const PRESET_PROMPTS = [
  { label: "产品摄影", prompt: "A minimalist product photo of a sleek smartwatch on a white marble surface, soft natural lighting from window, professional commercial photography, shallow depth of field, 85mm lens" },
  { label: "角色设计", prompt: "A cute female anime character with long silver hair and blue eyes, wearing a magical girl outfit, pastel color palette, detailed illustration style, fantasy background with cherry blossoms" },
  { label: "电商海报", prompt: "E-commerce promotion banner for summer sale, tropical beach background with palm trees, vibrant orange and teal color scheme, modern clean design, product display area, golden hour lighting" },
  { label: "插画风格", prompt: "Watercolor illustration of a cozy cabin in the snowy mountains at sunset, pine trees covered in snow, warm glowing windows, smoke from chimney, dreamy and peaceful atmosphere" },
  { label: "概念艺术", prompt: "Cyberpunk neon city street at night, rainy reflections on wet asphalt, holographic advertisements, flying cars in background, moody cinematic lighting, ultra detailed concept art" },
  { label: "美食摄影", prompt: "Professional food photography of a gourmet brunch set, eggs benedict with hollandaise sauce, avocado toast, fresh berries, artisan coffee, marble table, soft natural window light, top down flat lay" },
  { label: "Logo 设计", prompt: "Minimalist logo design for a modern coffee brand, geometric vector mark, bold single color black on white background, clean typography, timeless brand identity design" },
  { label: "建筑渲染", prompt: "Architectural visualization of a modern minimalist house with large glass windows, wooden deck facing infinity pool, sunset golden hour light, realistic 3D render, vray quality" },
]

const IMAGE_API_BASE = "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image"

function buildImageUrl(prompt: string, quality: Quality, ar: AspectRatio): string {
  const size = aspectRatioToImageSize(ar)
  // 高清档自动升级到 hd 版本 size
  const finalSize = quality === "standard" ? size.replace(/_hd$/, "") : (quality === "ultra" ? (size + "_hd").replace("_hd_hd", "_hd") : (size === "square" ? "square_hd" : size))
  const encoded = encodeURIComponent(prompt)
  return `${IMAGE_API_BASE}?prompt=${encoded}&image_size=${finalSize === "square" || finalSize === "square_hd" ? (quality === "standard" ? "square" : "square_hd") : finalSize}`
}

export default function GeneratePage() {
  const { t } = useI18n()
  const { points, loading: pointsLoading, preferences, getCost, generateImage, generationRecords, refreshPoints } = useUserPoints()
  const { showToast } = useToast()
  const router = useRouter()
  const searchParams = useSearchParams()

  const [prompt, setPrompt] = useState("")
  const [quality, setQuality] = useState<Quality>(preferences.defaultQuality)
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>(preferences.defaultAspectRatio)
  const [style, setStyle] = useState<ImageStyle>("auto")
  const [generating, setGenerating] = useState(false)
  const [currentImage, setCurrentImage] = useState<string | null>(null)
  const [lastPrompt, setLastPrompt] = useState<string>("")
  const [lastQuality, setLastQuality] = useState<Quality | null>(null)
  const [lastAR, setLastAR] = useState<AspectRatio | null>(null)
  const [lastStyle, setLastStyle] = useState<ImageStyle | null>(null)
  const imgRef = useRef<HTMLImageElement>(null)

  // 同步偏好默认值（仅首次）
  useEffect(() => {
    setQuality(preferences.defaultQuality)
    setAspectRatio(preferences.defaultAspectRatio)
  }, [preferences.defaultQuality, preferences.defaultAspectRatio])

  // 从URL读取预设prompt
  useEffect(() => {
    const p = searchParams.get("p")
    if (p) {
      try { setPrompt(decodeURIComponent(p)) } catch { setPrompt(p) }
    }
  }, [searchParams])

  const styleEntry = IMAGE_STYLES.find((s) => s.value === style)
  const enrichedPrompt = styleEntry && styleEntry.suffix ? `${prompt}${styleEntry.suffix}` : prompt
  const cost = getCost(quality)
  const canAfford = points >= cost
  const selectedAR = ASPECT_RATIOS.find((a) => a.value === aspectRatio) || ASPECT_RATIOS[0]

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      showToast(t('generate.noPrompt'), "error")
      return
    }
    if (!canAfford) {
      showToast(`积分不足！当前 ${points}，需要 ${cost} 积分`, "error")
      setTimeout(() => router.push("/recharge"), 1500)
      return
    }

    setGenerating(true)
    setCurrentImage(null)
    setLastPrompt(prompt)
    setLastQuality(quality)
    setLastAR(aspectRatio)
    setLastStyle(style)

    try {
      const imageUrl = buildImageUrl(enrichedPrompt, quality, aspectRatio)
      await new Promise((resolve) => setTimeout(resolve, 2000))
      const result = await generateImage({
        prompt: enrichedPrompt, imageUrl, quality, aspectRatio, style,
      })
      if (result.success) {
        setCurrentImage(imageUrl)
        showToast(`生成成功！消耗 ${cost} 积分，剩余 ${result.remaining} 积分`, "success")
      } else {
        showToast(result.message || "生成失败", "error")
      }
    } catch (err) {
      showToast("生成出错，请稍后重试", "error")
    } finally {
      setGenerating(false)
    }
  }

  const applyPreset = (p: string) => setPrompt(p)
  const viewImage = (url: string) => window.open(url, "_blank")

  const handleDownload = async () => {
    if (!currentImage) return
    try {
      const res = await fetch(currentImage)
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      const ts = new Date().toISOString().slice(0, 19).replace(/[:T]/g, "-")
      a.download = `aurora_${quality}_${aspectRatio.replace(":", "-")}_${ts}.jpg`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
      showToast("已开始下载图片", "success")
    } catch {
      // 跨域场景 fallback
      window.open(currentImage, "_blank")
      showToast("已打开原图，请右键另存为", "info")
    }
  }

  const handleUseAsPrompt = (r: { prompt: string; quality?: string; aspectRatio?: string; style?: string }) => {
    setPrompt(r.prompt)
    if (r.quality) setQuality(r.quality as Quality)
    if (r.aspectRatio) setAspectRatio(r.aspectRatio as AspectRatio)
    if (r.style) setStyle(r.style as ImageStyle)
    window.scrollTo({ top: 0, behavior: "smooth" })
    showToast("已载入历史参数，可继续修改后重新生成", "info")
  }

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <Nav />
      <main style={{ paddingTop: 80 }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-8">
          {/* Header */}
          <div className="mb-8 fade-up">
            <div className="section-eyebrow">
              <span className="inline-block w-1 h-1 rounded-full accent-logo" />
              AI IMAGE STUDIO
            </div>
            <h1 className="section-title mb-3">{t('generate.title')}</h1>
            <p className="section-subtitle">
              {t('generate.subtitle')}
            </p>
          </div>

          <div className="gen-layout">
            {/* 左侧：输入面板 */}
            <div className="space-y-5">
              {/* 创作描述 */}
              <div className="gen-panel fade-up delay-1">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold tx-foreground">{t('generate.promptLabel')}</h2>
                  <div className="flex items-center gap-2 text-sm tx-muted">
                    <span className="points-icon points-icon-gold">★</span>
                    <span>当前积分：</span>
                    <span className="font-semibold tx-foreground">
                      {!pointsLoading ? points.toLocaleString() : "..."}
                    </span>
                  </div>
                </div>

                <textarea
                  className="gen-textarea mb-3"
                  placeholder={t('generate.promptPlaceholder')}
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />

                {/* 快速模板 */}
                <div className="mb-5">
                  <p className="text-xs tx-soft mb-2" style={{ letterSpacing: "0.04em", textTransform: "uppercase", fontWeight: 600 }}>{t('generate.templatesLabel')}</p>
                  <div className="flex flex-wrap gap-2">
                    {PRESET_PROMPTS.map((p, i) => (
                      <button key={i} className="chip" onClick={() => applyPreset(p.prompt)}>
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 风格选择 */}
                <div className="mb-5">
                  <p className="text-xs tx-soft mb-2" style={{ letterSpacing: "0.04em", textTransform: "uppercase", fontWeight: 600 }}>{t('generate.styleLabel')}</p>
                  <div className="flex flex-wrap gap-2">
                    {IMAGE_STYLES.map((s) => {
                      const sel = style === s.value
                      return (
                        <button
                          key={s.value}
                          onClick={() => setStyle(s.value)}
                          className={`chip ${sel ? "chip-active" : ""}`}
                          title={s.suffix || "原样输出提示词"}
                        >
                          {s.label}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* 画幅比例 */}
                <div className="mb-5">
                  <p className="text-xs tx-soft mb-2" style={{ letterSpacing: "0.04em", textTransform: "uppercase", fontWeight: 600 }}>{t('generate.aspectLabel')}</p>
                  <div className="grid grid-cols-5 gap-2">
                    {ASPECT_RATIOS.map((opt) => {
                      const sel = aspectRatio === opt.value
                      return (
                        <button
                          key={opt.value}
                          onClick={() => setAspectRatio(opt.value)}
                          className={`aspect-option ${sel ? "aspect-selected" : ""}`}
                        >
                          <div className="aspect-thumb" style={opt.css}>
                            <div className="aspect-thumb-inner" />
                          </div>
                          <div className="aspect-label">{opt.label}</div>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* 画质选择 */}
                <div className="mb-5">
                  <p className="text-xs tx-soft mb-2" style={{ letterSpacing: "0.04em", textTransform: "uppercase", fontWeight: 600 }}>{t('generate.qualityLabel')}</p>
                  <div className="flex gap-3">
                    {QUALITY_OPTIONS.map((opt) => {
                      const optCost = getCost(opt.value)
                      const selected = quality === opt.value
                      const qualityLabel = opt.value === "standard" ? t('generate.standard') : opt.value === "hd" ? t('generate.hd') : t('generate.ultra')
                      return (
                        <button
                          key={opt.value}
                          className={`quality-option ${selected ? "quality-selected" : ""}`}
                          onClick={() => setQuality(opt.value)}
                        >
                          <div className="quality-label">{qualityLabel}</div>
                          <div className="quality-cost">{opt.size} · {optCost} {t('generate.costLabel')}</div>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* 生成按钮 */}
                <div className="flex gap-3">
                  <button
                    onClick={handleGenerate}
                    disabled={generating || !canAfford || !prompt.trim()}
                    className="btn-primary flex-1 py-3 px-5 font-semibold text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {generating ? (
                      <>
                        <div className="spinner spinner-white" style={{ width: 18, height: 18, borderWidth: 2 }} />
                        <span>{t('generate.generating')}</span>
                      </>
                    ) : (
                      <>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 2l2.09 6.26L20 9l-5 4.1L16.18 20 12 17.27 7.82 20 9 13.1 4 9l5.91-.74L12 2z" />
                        </svg>
                        <span>{t('generate.generateButton')}</span>
                        <span className="opacity-75" style={{ fontWeight: 500 }}>({cost} {t('generate.costLabel')})</span>
                      </>
                    )}
                  </button>
                  {!canAfford && (
                    <Link href="/recharge" className="btn-outline px-5 py-3 text-sm font-medium flex items-center gap-1.5 no-underline">
                      <span className="points-icon points-icon-gold">★</span>
                      {t('generate.goRecharge')}
                    </Link>
                  )}
                </div>

                {!canAfford && (
                  <div className="mt-3 text-sm text-center p-3 rounded-lg" style={{ background: "#fef2f2", color: "#dc2626" }}>
                    <div className="font-semibold mb-1">{t('generate.notEnoughPoints')}</div>
                    <div>{t('generate.notEnoughPointsDesc')} <strong>{cost - points}</strong> {t('generate.costLabel')}</div>
                  </div>
                )}
              </div>

              {/* 生成记录 */}
              <div className="gen-panel fade-up delay-2">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold tx-foreground">{t('generate.historyLabel')}</h2>
                  <div className="flex items-center gap-2">
                    <span className="badge-soft">{generationRecords.length} 张</span>
                    {generationRecords.length > 0 && (
                      <Link href="/gallery" className="btn-outline px-3 py-1.5 text-xs font-medium no-underline">
                        查看全部 →
                      </Link>
                    )}
                  </div>
                </div>
                {generationRecords.length === 0 ? (
                  <div className="gen-placeholder py-8">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto mb-3 opacity-40">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                    <p className="text-sm">{t('generate.historyEmpty')}</p>
                    <p className="text-xs mt-1">{t('generate.historyEmptyDesc')}</p>
                  </div>
                ) : (
                  <>
                    <div className="gen-history">
                      {generationRecords.slice(0, 12).map((r) => (
                        <div
                          key={r.id}
                          className="gen-history-item"
                          onClick={() => handleUseAsPrompt(r)}
                          title={`${r.prompt.slice(0, 50)} · 点击重新载入参数`}
                          style={{ backgroundImage: `url(${r.imageUrl})`, aspectRatio: r.aspectRatio === "1:1" ? "1 / 1" : undefined }}
                        >
                          {r.isFavorite && (
                            <span className="fav-chip" title="已收藏">★</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* 右侧：预览面板 */}
            <div className="space-y-5">
              <div className="gen-panel fade-up delay-3 sticky" style={{ top: 90 }}>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold tx-foreground">预览</h2>
                  <div className="flex gap-2">
                    {currentImage && !generating && (
                      <>
                        <button
                          onClick={handleDownload}
                          className="btn-primary px-4 py-1.5 text-xs font-medium inline-flex items-center gap-1.5"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                          </svg>
                          {t('generate.download')}
                        </button>
                        <a
                          href={currentImage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-outline px-4 py-1.5 text-xs font-medium no-underline inline-flex items-center gap-1.5"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                          原图
                        </a>
                      </>
                    )}
                  </div>
                </div>

                <div className="gen-preview mb-4" style={selectedAR.css}>
                  {generating ? (
                    <div className="text-center py-12">
                      <div className="spinner spinner-lg mx-auto mb-4" />
                      <p className="font-medium tx-foreground mb-1">AI 正在创作中...</p>
                      <p className="text-sm tx-muted">大约需要几秒钟</p>
                    </div>
                  ) : currentImage ? (
                    <img
                      ref={imgRef}
                      src={currentImage}
                      alt="Generated"
                      crossOrigin="anonymous"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'><rect width='400' height='400' fill='%23f5f5f5'/><text x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%238c8c8c' font-family='Arial' font-size='14'>Click to view image</text></svg>"
                      }}
                    />
                  ) : (
                    <div className="gen-placeholder">
                      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="mx-auto mb-4 opacity-40">
                        <path d="M12 2l2.09 6.26L20 9l-5 4.1L16.18 20 12 17.27 7.82 20 9 13.1 4 9l5.91-.74L12 2z" />
                      </svg>
                      <p className="font-medium tx-foreground mb-1">{t('generate.previewPlaceholder')}</p>
                      <p className="text-sm">{t('generate.previewReady')}</p>
                      <div className="mt-6 skeleton mx-auto" style={{ width: "80%", height: 8, marginBottom: 8 }} />
                      <div className="skeleton mx-auto" style={{ width: "60%", height: 8 }} />
                    </div>
                  )}
                </div>

                {/* 当前信息 */}
                {lastPrompt && !generating && (
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {lastQuality && (
                        <span className="badge-soft">
                          画质：{QUALITY_OPTIONS.find((q) => q.value === lastQuality)?.label}
                        </span>
                      )}
                      {lastAR && (
                        <span className="badge-soft">
                          画幅：{ASPECT_RATIOS.find((a) => a.value === lastAR)?.label}
                        </span>
                      )}
                      {lastStyle && lastStyle !== "auto" && (
                        <span className="badge-soft">
                          风格：{IMAGE_STYLES.find((s) => s.value === lastStyle)?.label}
                        </span>
                      )}
                      <span className="badge-soft">-{cost} {t('generate.costLabel')}</span>
                    </div>
                    <div className="p-4 rounded-xl" style={{ background: "var(--bg-soft)" }}>
                      <p className="text-xs tx-soft mb-2" style={{ letterSpacing: "0.04em", textTransform: "uppercase", fontWeight: 600 }}>本次创作描述</p>
                      <p className="text-sm tx-foreground leading-relaxed whitespace-pre-wrap">{lastPrompt}</p>
                    </div>
                  </div>
                )}

                {/* 快速提示 */}
                <div className="mt-5 p-4 rounded-xl border" style={{ borderColor: "var(--line-soft)" }}>
                  <p className="text-xs tx-soft mb-2" style={{ letterSpacing: "0.04em", textTransform: "uppercase", fontWeight: 600 }}>创作小贴士</p>
                  <ul className="space-y-1.5 text-sm tx-muted">
                    <li className="flex gap-2">
                      <span style={{ color: "var(--fg)" }}>•</span>
                      <span>描述越具体效果越好：主体 + 风格 + 光影 + 构图</span>
                    </li>
                    <li className="flex gap-2">
                      <span style={{ color: "var(--fg)" }}>•</span>
                      <span>选择「艺术风格」可一键注入专业后缀，提升出片质量</span>
                    </li>
                    <li className="flex gap-2">
                      <span style={{ color: "var(--fg)" }}>•</span>
                      <span>点击「最近生成」缩略图可一键载入历史参数再创作</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
