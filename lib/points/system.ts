// 积分系统工具 - 本地持久化 + 未来可扩展到 Supabase

export const POINTS_CONFIG = {
  // 每次生成图片消耗的积分
  GENERATE_COST_STANDARD: 10,
  GENERATE_COST_HD: 25,
  GENERATE_COST_ULTRA: 50,
  // 新用户赠送积分
  NEW_USER_BONUS: 100,
} as const

export interface PointsPackage {
  id: string
  name: string
  points: number
  price: number
  bonus?: number
  popular?: boolean
}

export const POINTS_PACKAGES: PointsPackage[] = [
  {
    id: "starter",
    name: "入门包",
    points: 100,
    price: 9.9,
  },
  {
    id: "basic",
    name: "基础包",
    points: 500,
    price: 39.9,
    bonus: 50,
    popular: true,
  },
  {
    id: "pro",
    name: "专业包",
    points: 2000,
    price: 129.9,
    bonus: 300,
  },
  {
    id: "enterprise",
    name: "企业包",
    points: 10000,
    price: 499.9,
    bonus: 2000,
  },
]

export type AspectRatio = "1:1" | "3:4" | "4:3" | "9:16" | "16:9"
export type ImageStyle = "auto" | "photo" | "illustration" | "anime" | "cyberpunk" | "3d" | "oil-painting" | "sketch" | "flat-design" | "minimalist"

export interface GenerationRecord {
  id: string
  prompt: string
  imageUrl: string
  thumbnailUrl?: string
  cost: number
  quality: "standard" | "hd" | "ultra"
  aspectRatio: AspectRatio
  style?: ImageStyle
  width?: number
  height?: number
  isFavorite: boolean
  isPublic: boolean
  deletedAt?: number
  createdAt: number
}

export interface TransactionRecord {
  id: string
  type: "recharge" | "generate" | "bonus" | "refund" | "referral"
  amount: number
  points: number
  packageId?: string
  description: string
  createdAt: number
}

export interface UserPreferences {
  defaultQuality: "standard" | "hd" | "ultra"
  defaultAspectRatio: AspectRatio
  autoSaveToGallery: boolean
  notifyOnComplete: boolean
  uiLanguage: string
}

const STORAGE_KEYS = {
  POINTS: (userId: string) => `aurora_points_${userId}`,
  GENERATIONS: (userId: string) => `aurora_generations_${userId}`,
  TRANSACTIONS: (userId: string) => `aurora_transactions_${userId}`,
  INITIALIZED: (userId: string) => `aurora_initialized_${userId}`,
  PREFERENCES: (userId: string) => `aurora_preferences_${userId}`,
}

export const ASPECT_RATIOS: { value: AspectRatio; label: string; size: string; css: React.CSSProperties }[] = [
  { value: "1:1",   label: "正方形", size: "1024×1024", css: { aspectRatio: "1 / 1", width: "24px", height: "24px" } },
  { value: "3:4",   label: "竖版 3:4", size: "864×1152", css: { aspectRatio: "3 / 4", width: "20px", height: "27px" } },
  { value: "4:3",   label: "横版 4:3", size: "1152×864", css: { aspectRatio: "4 / 3", width: "28px", height: "21px" } },
  { value: "9:16",  label: "手机竖屏 9:16", size: "720×1280", css: { aspectRatio: "9 / 16", width: "18px", height: "32px" } },
  { value: "16:9",  label: "电影宽屏 16:9", size: "1280×720", css: { aspectRatio: "16 / 9", width: "32px", height: "18px" } },
]

export const IMAGE_STYLES: { value: ImageStyle; label: string; suffix: string }[] = [
  { value: "auto",        label: "自动",        suffix: "" },
  { value: "photo",       label: "写实摄影",    suffix: ", professional photography, DSLR, 85mm lens, natural lighting, ultra detailed" },
  { value: "illustration", label: "插画手绘",   suffix: ", watercolor illustration style, hand drawn, soft pastel color palette, artistic brush strokes" },
  { value: "anime",       label: "二次元动漫",  suffix: ", anime style, studio ghibli inspired, beautiful detailed eyes, vibrant colors, manga aesthetic" },
  { value: "cyberpunk",   label: "赛博朋克",    suffix: ", cyberpunk aesthetic, neon lights, rainy reflections, futuristic city, holographic elements, cinematic mood" },
  { value: "3d",          label: "3D 渲染",     suffix: ", 3D render, octane render, cinema 4D, soft global illumination, isometric view" },
  { value: "oil-painting", label: "油画艺术",   suffix: ", classical oil painting style, thick impasto brushwork, renaissance lighting, museum quality" },
  { value: "sketch",      label: "线稿素描",    suffix: ", pencil sketch, black and white line art, hand drawn study, paper texture, cross hatching" },
  { value: "flat-design", label: "扁平设计",    suffix: ", flat vector design, clean geometric shapes, bold solid colors, minimalist graphic illustration" },
  { value: "minimalist",  label: "极简主义",    suffix: ", minimalist aesthetic, pure white background, negative space, elegant composition, high key lighting" },
]

const DEFAULT_PREFERENCES: UserPreferences = {
  defaultQuality: "standard",
  defaultAspectRatio: "1:1",
  autoSaveToGallery: true,
  notifyOnComplete: true,
  uiLanguage: "zh-CN",
}

function getStorage() {
  if (typeof window === "undefined") return null
  return window.localStorage
}

// 获取用户积分
export function getUserPoints(userId: string): number {
  const storage = getStorage()
  if (!storage) return 0

  const raw = storage.getItem(STORAGE_KEYS.POINTS(userId))
  if (raw === null) {
    // 首次初始化赠送积分
    if (!storage.getItem(STORAGE_KEYS.INITIALIZED(userId))) {
      storage.setItem(STORAGE_KEYS.POINTS(userId), String(POINTS_CONFIG.NEW_USER_BONUS))
      storage.setItem(STORAGE_KEYS.INITIALIZED(userId), "1")
      addTransaction(userId, {
        type: "bonus",
        amount: 0,
        points: POINTS_CONFIG.NEW_USER_BONUS,
        description: "新用户注册奖励",
      })
      return POINTS_CONFIG.NEW_USER_BONUS
    }
    return 0
  }
  return parseInt(raw, 10) || 0
}

// 设置用户积分
export function setUserPoints(userId: string, points: number): void {
  const storage = getStorage()
  if (!storage) return
  storage.setItem(STORAGE_KEYS.POINTS(userId), String(Math.max(0, points)))
}

// 消耗积分
export function consumePoints(userId: string, cost: number): { success: boolean; remaining: number; message?: string } {
  const current = getUserPoints(userId)
  if (current < cost) {
    return {
      success: false,
      remaining: current,
      message: `积分不足，当前积分：${current}，需要：${cost}`,
    }
  }
  const remaining = current - cost
  setUserPoints(userId, remaining)
  return { success: true, remaining }
}

// 增加积分
export function addPoints(userId: string, points: number): number {
  const current = getUserPoints(userId)
  const newTotal = current + points
  setUserPoints(userId, newTotal)
  return newTotal
}

// 充值积分
export function rechargePoints(userId: string, packageId: string): { success: boolean; total: number; added: number; pkg?: PointsPackage; message?: string } {
  const pkg = POINTS_PACKAGES.find((p) => p.id === packageId)
  if (!pkg) {
    return { success: false, total: 0, added: 0, message: "无效的充值套餐" }
  }
  const added = pkg.points + (pkg.bonus || 0)
  const total = addPoints(userId, added)
  addTransaction(userId, {
    type: "recharge",
    amount: pkg.price,
    points: added,
    packageId: pkg.id,
    description: `购买${pkg.name}`,
  })
  return { success: true, total, added, pkg }
}

// 获取生成质量对应的消耗
export function getGenerationCost(quality: "standard" | "hd" | "ultra"): number {
  switch (quality) {
    case "ultra":
      return POINTS_CONFIG.GENERATE_COST_ULTRA
    case "hd":
      return POINTS_CONFIG.GENERATE_COST_HD
    default:
      return POINTS_CONFIG.GENERATE_COST_STANDARD
  }
}

// 生成记录操作
export function addGenerationRecord(userId: string, record: Partial<GenerationRecord> & Pick<GenerationRecord, "prompt" | "imageUrl" | "cost" | "quality">): GenerationRecord {
  const storage = getStorage()
  const fullRecord: GenerationRecord = {
    isFavorite: false,
    isPublic: false,
    aspectRatio: "1:1",
    ...record,
    id: `gen_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    createdAt: Date.now(),
  }
  if (storage) {
    const raw = storage.getItem(STORAGE_KEYS.GENERATIONS(userId))
    const list: GenerationRecord[] = raw ? JSON.parse(raw) : []
    list.unshift(fullRecord)
    storage.setItem(STORAGE_KEYS.GENERATIONS(userId), JSON.stringify(list.slice(0, 500)))
  }
  return fullRecord
}

export function getGenerationRecords(userId: string): GenerationRecord[] {
  const storage = getStorage()
  if (!storage) return []
  const raw = storage.getItem(STORAGE_KEYS.GENERATIONS(userId))
  return raw ? JSON.parse(raw) : []
}

// 交易记录操作
export function addTransaction(
  userId: string,
  record: Omit<TransactionRecord, "id" | "createdAt">
): TransactionRecord {
  const storage = getStorage()
  const fullRecord: TransactionRecord = {
    ...record,
    id: `tx_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    createdAt: Date.now(),
  }
  if (storage) {
    const raw = storage.getItem(STORAGE_KEYS.TRANSACTIONS(userId))
    const list: TransactionRecord[] = raw ? JSON.parse(raw) : []
    list.unshift(fullRecord)
    storage.setItem(STORAGE_KEYS.TRANSACTIONS(userId), JSON.stringify(list.slice(0, 200)))
  }
  return fullRecord
}

export function getTransactionRecords(userId: string): TransactionRecord[] {
  const storage = getStorage()
  if (!storage) return []
  const raw = storage.getItem(STORAGE_KEYS.TRANSACTIONS(userId))
  return raw ? JSON.parse(raw) : []
}

// =========================================================
// 生成记录进阶操作
// =========================================================

function writeGenerations(userId: string, list: GenerationRecord[]) {
  const storage = getStorage()
  if (!storage) return
  storage.setItem(STORAGE_KEYS.GENERATIONS(userId), JSON.stringify(list.slice(0, 500)))
}

// 切换收藏
export function toggleFavorite(userId: string, recordId: string): boolean | null {
  const list = getGenerationRecords(userId)
  const idx = list.findIndex((r) => r.id === recordId)
  if (idx === -1) return null
  list[idx].isFavorite = !list[idx].isFavorite
  writeGenerations(userId, list)
  return list[idx].isFavorite
}

// 切换公开
export function togglePublic(userId: string, recordId: string): boolean | null {
  const list = getGenerationRecords(userId)
  const idx = list.findIndex((r) => r.id === recordId)
  if (idx === -1) return null
  list[idx].isPublic = !list[idx].isPublic
  writeGenerations(userId, list)
  return list[idx].isPublic
}

// 软删除
export function softDeleteGeneration(userId: string, recordId: string): boolean {
  const list = getGenerationRecords(userId)
  const idx = list.findIndex((r) => r.id === recordId)
  if (idx === -1) return false
  list[idx].deletedAt = Date.now()
  writeGenerations(userId, list)
  return true
}

// 恢复软删除
export function restoreGeneration(userId: string, recordId: string): boolean {
  const list = getGenerationRecords(userId)
  const idx = list.findIndex((r) => r.id === recordId)
  if (idx === -1) return false
  delete list[idx].deletedAt
  writeGenerations(userId, list)
  return true
}

// 彻底删除
export function permanentlyDeleteGeneration(userId: string, recordId: string): boolean {
  const list = getGenerationRecords(userId)
  const next = list.filter((r) => r.id !== recordId)
  if (next.length === list.length) return false
  writeGenerations(userId, next)
  return true
}

// 只拿未删除的作品(画廊用)
export function getActiveGenerations(userId: string): GenerationRecord[] {
  return getGenerationRecords(userId).filter((r) => !r.deletedAt)
}

// 回收站
export function getDeletedGenerations(userId: string): GenerationRecord[] {
  return getGenerationRecords(userId).filter((r) => !!r.deletedAt)
}

// 收藏的作品
export function getFavoriteGenerations(userId: string): GenerationRecord[] {
  return getActiveGenerations(userId).filter((r) => r.isFavorite)
}

// =========================================================
// 用户偏好
// =========================================================
export function getUserPreferences(userId: string): UserPreferences {
  const storage = getStorage()
  if (!storage) return { ...DEFAULT_PREFERENCES }
  const raw = storage.getItem(STORAGE_KEYS.PREFERENCES(userId))
  if (!raw) return { ...DEFAULT_PREFERENCES }
  try {
    return { ...DEFAULT_PREFERENCES, ...(JSON.parse(raw) as Partial<UserPreferences>) }
  } catch {
    return { ...DEFAULT_PREFERENCES }
  }
}

export function saveUserPreferences(userId: string, partial: Partial<UserPreferences>): UserPreferences {
  const current = getUserPreferences(userId)
  const next: UserPreferences = { ...current, ...partial }
  const storage = getStorage()
  if (storage) storage.setItem(STORAGE_KEYS.PREFERENCES(userId), JSON.stringify(next))
  return next
}

// =========================================================
// 数据统计（Dashboard 用）
// =========================================================
export interface UserStats {
  totalImages: number
  favoriteCount: number
  totalSpent: number
  totalRechargedCNY: number
  rechargedPackageIds: string[]
  imagesByQuality: Record<GenerationRecord["quality"], number>
  imagesByStyle: Record<string, number>
  recent7DaysCount: number
  firstCreatedAt?: number
  lastCreatedAt?: number
}

export function getUserStats(userId: string): UserStats {
  const records = getActiveGenerations(userId)
  const tx = getTransactionRecords(userId)
  const now = Date.now()
  const WEEK = 7 * 24 * 60 * 60 * 1000

  const stats: UserStats = {
    totalImages: records.length,
    favoriteCount: records.filter((r) => r.isFavorite).length,
    totalSpent: records.reduce((s, r) => s + r.cost, 0),
    totalRechargedCNY: 0,
    rechargedPackageIds: [],
    imagesByQuality: { standard: 0, hd: 0, ultra: 0 },
    imagesByStyle: {},
    recent7DaysCount: records.filter((r) => now - r.createdAt <= WEEK).length,
  }

  tx.forEach((t) => {
    if (t.type === "recharge") {
      stats.totalRechargedCNY += t.amount
      if (t.packageId && !stats.rechargedPackageIds.includes(t.packageId)) {
        stats.rechargedPackageIds.push(t.packageId)
      }
    }
  })
  records.forEach((r) => {
    stats.imagesByQuality[r.quality] = (stats.imagesByQuality[r.quality] || 0) + 1
    if (r.style) stats.imagesByStyle[r.style] = (stats.imagesByStyle[r.style] || 0) + 1
  })
  if (records.length) {
    const sorted = [...records].sort((a, b) => a.createdAt - b.createdAt)
    stats.firstCreatedAt = sorted[0].createdAt
    stats.lastCreatedAt = sorted[sorted.length - 1].createdAt
  }
  return stats
}

// 画幅比例对应 image_size 参数
export function aspectRatioToImageSize(ar: AspectRatio): string {
  switch (ar) {
    case "3:4":  return "portrait_4_3"
    case "4:3":  return "landscape_4_3"
    case "9:16": return "portrait_16_9"
    case "16:9": return "landscape_16_9"
    default:     return "square"
  }
}
