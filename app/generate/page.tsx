"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import Nav from "@/components/Nav"
import CustomSelect from "@/components/CustomSelect"
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

const MODELS = [
  { value: "seedream", label: "Seedream", desc: "通用模型" },
  { value: "seedream-3-0-t2i-turbo", label: "Seedream 3.0 Turbo", desc: "极速生成" },
  { value: "seedream-3-0-t2i", label: "Seedream 3.0", desc: "高清画质" },
]

const COUNTS = [1, 2, 4] as const

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

function buildImageUrl(prompt: string, quality: Quality, ar: AspectRatio, model: string): string {
  const size = aspectRatioToImageSize(ar)
  const finalSize = quality === "standard" ? size.replace(/_hd$/, "") : (quality === "ultra" ? (size + "_hd").replace("_hd_hd", "_hd") : (size === "square" ? "square_hd" : size))
  const encoded = encodeURIComponent(prompt)
  
  const params = new URLSearchParams({ prompt, model: model })
  
  const sizeParam = finalSize === "square" || finalSize === "square_hd" 
    ? (quality === "standard" ? "square" : "square_hd") 
    : finalSize
  params.append("image_size", sizeParam)
  
  return `${IMAGE_API_BASE}?${params.toString()}`
}

export default function GeneratePage() {
  const { t } = useI18n()
  const { points, loading: pointsLoading, preferences, getCost, generateImage, generationRecords, refreshPoints } = useUserPoints()
  const { showToast } = useToast()
  const router = useRouter()
  const searchParams = useSearchParams()

  const [mode, setMode] = useState<"text2img" | "img2img">("text2img")
  const [prompt, setPrompt] = useState("")
  const [quality, setQuality] = useState<Quality>(preferences.defaultQuality)
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>(preferences.defaultAspectRatio)
  const [style, setStyle] = useState<ImageStyle>("auto")
  const [model, setModel] = useState<string>(MODELS[0].value)
  const [count, setCount] = useState<number>(1)
  const [generating, setGenerating] = useState(false)
  const [currentImages, setCurrentImages] = useState<string[]>([])
  const [lastPrompt, setLastPrompt] = useState<string>("")
  const [lastQuality, setLastQuality] = useState<Quality | null>(null)
  const [lastAR, setLastAR] = useState<AspectRatio | null>(null)
  const [lastStyle, setLastStyle] = useState<ImageStyle | null>(null)
  const [sourceImage, setSourceImage] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
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
  const effectiveCost = mode === "img2img" ? cost * 2 : cost
  const canAfford = points >= effectiveCost
  const selectedAR = ASPECT_RATIOS.find((a) => a.value === aspectRatio) || ASPECT_RATIOS[0]

  const handleSourceImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    if (!file.type.startsWith("image/")) {
      showToast("请上传图片文件", "error")
      return
    }
    if (file.size > 10 * 1024 * 1024) {
      showToast("图片不能超过 10MB", "error")
      return
    }
    const reader = new FileReader()
    reader.onload = (ev) => setSourceImage(ev.target?.result as string)
    reader.readAsDataURL(file)
  }

  const handleRemoveSource = () => {
    setSourceImage(null)
    if (fileInputRef.current) fileInputRef.current.value = ""
  }

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      showToast(t('generate.noPrompt'), "error")
      return
    }
    if (mode === "img2img" && !sourceImage) {
      showToast("请先上传一张参考图片", "error")
      return
    }
    
    const totalCostPerImage = mode === "img2img" ? cost * 2 : cost
    const totalCost = totalCostPerImage * count

    if (!canAfford || points < totalCost) {
      showToast(`积分不足！当前 ${points}，需要 ${totalCost} 积分`, "error")
      setTimeout(() => router.push("/recharge"), 1500)
      return
    }

    setGenerating(true)
    setCurrentImages([])
    setLastPrompt(prompt)
    setLastQuality(quality)
    setLastAR(aspectRatio)
    setLastStyle(style)

    try {
      if (mode === "img2img") {
        // 图生图：显示占位提示，后端接口待接入
        await new Promise((resolve) => setTimeout(resolve, 1500))
        showToast("Pro 功能即将上线，敬请期待 🚀", "info")
        return
      }

      const generatedImages: string[] = []
      let remainingPoints = points

      for (let i = 0; i < count; i++) {
        const imageUrl = buildImageUrl(enrichedPrompt, quality, aspectRatio, model)
        await new Promise((resolve) => setTimeout(resolve, 1500))
        const result = await generateImage({
          prompt: enrichedPrompt, imageUrl, quality, aspectRatio, style,
        })
        if (result.success) {
          generatedImages.push(imageUrl)
          if (result.remaining !== undefined) {
            remainingPoints = result.remaining
          }
        } else {
          showToast(`第 ${i + 1} 张生成失败：${result.message}`, "error")
          break
        }
      }
      
      if (generatedImages.length > 0) {
        setCurrentImages(generatedImages)
        const actualCost = totalCostPerImage * generatedImages.length
        showToast(`成功生成 ${generatedImages.length} 张图片！共消耗 ${actualCost} 积分，剩余 ${remainingPoints}`, "success")
      }
    } catch (err) {
      showToast("生成出错，请稍后重试", "error")
    } finally {
      setGenerating(false)
    }
  }

  const applyPreset = (p: string) => setPrompt(p)
  const viewImage = (url: string) => window.open(url, "_blank")

  const handleDownload = async (imageUrl: string, index: number = 0) => {
    if (!imageUrl) return
    try {
      const res = await fetch(imageUrl)
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      const ts = new Date().toISOString().slice(0, 19).replace(/[:T]/g, "-")
      a.download = `aurora_${quality}_${aspectRatio.replace(":", "-")}_${index + 1}_${ts}.jpg`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
      showToast(`已开始下载图片 ${index + 1}`, "success")
    } catch {
      // 跨域场景 fallback
      window.open(imageUrl, "_blank")
      showToast(`已打开图片 ${index + 1}，请右键另存为`, "info")
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
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-8">
          {/* 顶部切换 */}
          <div className="flex justify-center mb-6 fade-up">
            <div className="inline-flex p-1 rounded-full border" style={{ borderColor: "var(--line)", background: "var(--bg-card)" }}>
              <button 
                onClick={() => setMode("text2img")}
                className="px-6 py-2 rounded-full text-sm font-medium transition-all"
                style={mode === "text2img" ? { background: "#0a0a0a", color: "#fff" } : { color: "var(--fg-muted)" }}
              >
                文生图
              </button>
              <button 
                onClick={() => setMode("img2img")}
                className="px-6 py-2 rounded-full text-sm font-medium transition-all"
                style={mode === "img2img" ? { background: "#0a0a0a", color: "#fff" } : { color: "var(--fg-muted)" }}
              >
                图生图 (Pro)
              </button>
            </div>
          </div>

          {/* 图生图模式：上传源图 */}
          {mode === "img2img" && (
            <div className="gen-container fade-up mb-4">
              {sourceImage ? (
                <div className="relative">
                  <img src={sourceImage} alt="Source" className="w-full max-h-64 object-contain rounded-xl border" style={{ borderColor: "var(--line)", background: "var(--bg-soft)" }} />
                  <button
                    onClick={handleRemoveSource}
                    className="absolute top-2 right-2 px-3 py-1 rounded-lg text-xs font-medium"
                    style={{ background: "rgba(0,0,0,0.6)", color: "#fff" }}
                  >
                    更换图片
                  </button>
                  <div className="mt-2 text-xs tx-muted text-center">已上传参考图，可配合 prompt 生成新图</div>
                </div>
              ) : (
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="flex flex-col items-center justify-center py-12 cursor-pointer rounded-xl border-2 border-dashed transition-colors"
                  style={{ borderColor: "var(--line)", background: "var(--bg-card)" }}
                >
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="tx-muted mb-3">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                  <div className="text-sm font-medium tx-foreground">点击上传参考图片</div>
                  <div className="text-xs tx-muted mt-1">支持 JPG / PNG，最大 10MB</div>
                </div>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleSourceImage}
                className="hidden"
              />
            </div>
          )}

          {/* 核心单块容器 */}
          <div className="gen-container fade-up">
            {/* 大输入框 */}
            <div className="relative mb-4">
              <textarea
                className="w-full p-5 pb-10 text-base rounded-xl border resize-none focus:outline-none focus:ring-2 focus:ring-offset-0 transition-colors"
                style={{ 
                  minHeight: "140px", 
                  background: "var(--bg-card)", 
                  borderColor: "var(--line)",
                  color: "var(--fg)"
                }}
                placeholder="描述你想生成的内容 (例如：赛博朋克城市、动漫角色、油画风格)"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                maxLength={2000}
              />
              <div className="absolute bottom-3 right-4 text-xs tx-muted">
                {prompt.length} / 2000
              </div>
            </div>

            {/* 参数紧凑行 */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {/* 生成数量选择 */}
              <CustomSelect
                value={count}
                onChange={(v) => setCount(v as number)}
                options={COUNTS.map((c) => ({ value: c, label: `数量: ${c}x` }))}
              />
              
              {/* 模型选择 */}
              <CustomSelect
                value={model}
                onChange={(v) => setModel(v as string)}
                options={MODELS.map((m) => ({ value: m.value, label: `模型: ${m.label}` }))}
              />

              {/* 分辨率选择 */}
              <CustomSelect
                value={quality}
                onChange={(v) => setQuality(v as Quality)}
                options={QUALITY_OPTIONS.map((q) => ({ value: q.value, label: `分辨率: ${q.value === "standard" ? "标准" : q.value === "hd" ? "高清" : "超清"} (${q.size})` }))}
              />
            </div>

            {/* 底部操作区 */}
            <div className="flex items-center justify-between">
              {/* 左侧：状态/积分信息 */}
              <div className="text-sm tx-muted flex items-center gap-2">
                {generating ? (
                  <>
                    <div className="spinner" style={{ width: 14, height: 14, borderWidth: 2 }} />
                    <span>正在生成中... (预估 5-10 秒)</span>
                  </>
                ) : (
                  <>
                    <span className="font-medium" style={{ color: "var(--fg)" }}>
                      消耗 {(mode === "img2img" ? cost * 2 : cost) * count} 积分
                      {mode === "img2img" && <span className="tx-soft ml-1 text-xs">(Pro ×2)</span>}
                    </span>
                    <span className="text-xs">· 当前余额 {points}</span>
                  </>
                )}
              </div>

              {/* 右侧：按钮组 */}
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => { setPrompt(""); handleRemoveSource() }}
                  className="gen-action-btn"
                  disabled={generating || (!prompt && !sourceImage)}
                >
                  清空
                </button>
                <button 
                  onClick={handleGenerate}
                  disabled={generating || !canAfford || !prompt.trim() || (mode === "img2img" && !sourceImage)}
                  className="gen-generate-btn"
                >
                  {generating ? `生成中... (${currentImages.length}/${count})` : mode === "img2img" ? "✨ Pro 生成" : `✨ 生成 ${count} 张`}
                </button>
              </div>
            </div>
          </div>

          {/* 结果展示区 */}
          {currentImages.length > 0 && !generating && (
            <div className="mt-8 fade-up">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold tx-foreground">生成结果</h2>
                <div className="flex gap-2">
                  <button 
                    onClick={() => currentImages.forEach((url, idx) => handleDownload(url, idx))} 
                    className="gen-action-btn"
                  >
                    全部下载
                  </button>
                </div>
              </div>
              
              {/* 多图网格展示 */}
              <div className={`grid gap-4 ${currentImages.length === 1 ? 'grid-cols-1' : currentImages.length === 2 ? 'grid-cols-2' : 'grid-cols-2 sm:grid-cols-2'}`}>
                {currentImages.map((imgUrl, idx) => (
                  <div key={idx} className="relative rounded-xl overflow-hidden border group" style={{ borderColor: "var(--line)" }}>
                    <img 
                      src={imgUrl} 
                      alt={`Generated ${idx + 1}`} 
                      className="w-full h-auto block hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute bottom-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button 
                        onClick={() => handleDownload(imgUrl, idx)}
                        className="px-2 py-1 rounded text-xs bg-black/60 text-white hover:bg-black/80"
                      >
                        下载
                      </button>
                      <a 
                        href={imgUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-2 py-1 rounded text-xs bg-black/60 text-white hover:bg-black/80 no-underline"
                      >
                        原图
                      </a>
                    </div>
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded text-xs bg-black/60 text-white">
                      #{idx + 1}
                    </div>
                  </div>
                ))}
              </div>
              
              {lastPrompt && (
                <div className="mt-3 p-4 rounded-xl text-sm" style={{ background: "var(--bg-soft)" }}>
                  <div className="text-xs tx-soft mb-1.5 font-medium">提示词</div>
                  <div className="tx-foreground leading-relaxed whitespace-pre-wrap">{lastPrompt}</div>
                </div>
              )}
            </div>
          )}

          {/* 历史记录 */}
          {generationRecords.length > 0 && (
            <div className="mt-12 fade-up">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold tx-foreground">最近生成</h2>
                <Link href="/gallery" className="text-sm tx-muted hover:tx-foreground no-underline">
                  查看全部 →
                </Link>
              </div>
              <div className="gen-history">
                {generationRecords.slice(0, 8).map((r) => (
                  <div
                    key={r.id}
                    className="gen-history-item"
                    onClick={() => handleUseAsPrompt(r)}
                    style={{ backgroundImage: `url(${r.imageUrl})`, aspectRatio: r.aspectRatio === "1:1" ? "1 / 1" : undefined }}
                  >
                    {r.isFavorite && <span className="fav-chip">★</span>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
