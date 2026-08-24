"use client"

import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from "react"
import {
  getUserPoints,
  consumePoints,
  rechargePoints,
  addGenerationRecord,
  getGenerationRecords,
  getTransactionRecords,
  getGenerationCost,
  addTransaction,
  toggleFavorite as sysToggleFavorite,
  togglePublic as sysTogglePublic,
  softDeleteGeneration,
  restoreGeneration,
  permanentlyDeleteGeneration,
  getActiveGenerations,
  getDeletedGenerations,
  getFavoriteGenerations,
  getUserPreferences,
  saveUserPreferences,
  getUserStats,
  aspectRatioToImageSize,
  GenerationRecord,
  TransactionRecord,
  PointsPackage,
  AspectRatio,
  ImageStyle,
  UserPreferences,
  UserStats,
} from "./system"

interface UserPointsContextType {
  points: number
  loading: boolean
  userId: string | null
  generationRecords: GenerationRecord[]
  activeGenerations: GenerationRecord[]
  favoriteGenerations: GenerationRecord[]
  deletedGenerations: GenerationRecord[]
  transactionRecords: TransactionRecord[]
  preferences: UserPreferences
  stats: UserStats
  refreshAll: () => void
  refreshPoints: () => void
  refreshGenerations: () => void
  refreshPreferences: () => void
  refreshStats: () => void
  generateImage: (opts: {
    prompt: string
    imageUrl: string
    quality: "standard" | "hd" | "ultra"
    aspectRatio?: AspectRatio
    style?: ImageStyle
  }) => Promise<{ success: boolean; remaining?: number; message?: string; record?: GenerationRecord }>
  recharge: (packageId: string) => Promise<{ success: boolean; total?: number; added?: number; pkg?: PointsPackage; message?: string }>
  getCost: (quality: "standard" | "hd" | "ultra") => number
  toggleFavorite: (recordId: string) => boolean | null
  togglePublic: (recordId: string) => boolean | null
  softDelete: (recordId: string) => boolean
  restore: (recordId: string) => boolean
  permanentDelete: (recordId: string) => boolean
  updatePreferences: (partial: Partial<UserPreferences>) => UserPreferences
}

const UserPointsContext = createContext<UserPointsContextType | undefined>(undefined)

function getGuestUserId(): string {
  if (typeof window === "undefined") return "guest"
  let id = window.localStorage.getItem("aurora_guest_id")
  if (!id) {
    id = `guest_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
    window.localStorage.setItem("aurora_guest_id", id)
  }
  return id
}

export function UserPointsProvider({
  children,
  authenticatedUserId,
}: {
  children: ReactNode
  authenticatedUserId?: string | null
}) {
  const [points, setPoints] = useState(0)
  const [loading, setLoading] = useState(true)
  const [userId, setUserId] = useState<string | null>(null)
  const [generationRecords, setGenerationRecords] = useState<GenerationRecord[]>([])
  const [activeGenerations, setActiveGenerations] = useState<GenerationRecord[]>([])
  const [favoriteGenerations, setFavoriteGenerations] = useState<GenerationRecord[]>([])
  const [deletedGenerations, setDeletedGenerations] = useState<GenerationRecord[]>([])
  const [transactionRecords, setTransactionRecords] = useState<TransactionRecord[]>([])
  const [preferences, setPreferences] = useState<UserPreferences>({
    defaultQuality: "standard",
    defaultAspectRatio: "1:1",
    autoSaveToGallery: true,
    notifyOnComplete: true,
    uiLanguage: "zh-CN",
  })
  const [stats, setStats] = useState<UserStats>({
    totalImages: 0, favoriteCount: 0, totalSpent: 0, totalRechargedCNY: 0,
    rechargedPackageIds: [], imagesByQuality: { standard: 0, hd: 0, ultra: 0 },
    imagesByStyle: {}, recent7DaysCount: 0,
  })

  const resolveUserId = useCallback(() => {
    return authenticatedUserId || getGuestUserId()
  }, [authenticatedUserId])

  const refreshGenerations = useCallback(() => {
    const uid = resolveUserId()
    const all = getGenerationRecords(uid)
    setGenerationRecords(all)
    setActiveGenerations(getActiveGenerations(uid))
    setFavoriteGenerations(getFavoriteGenerations(uid))
    setDeletedGenerations(getDeletedGenerations(uid))
  }, [resolveUserId])

  const refreshPreferences = useCallback(() => {
    const uid = resolveUserId()
    setPreferences(getUserPreferences(uid))
  }, [resolveUserId])

  const refreshStats = useCallback(() => {
    const uid = resolveUserId()
    setStats(getUserStats(uid))
  }, [resolveUserId])

  const refreshPoints = useCallback(() => {
    const uid = resolveUserId()
    setUserId(uid)
    setPoints(getUserPoints(uid))
    setTransactionRecords(getTransactionRecords(uid))
  }, [resolveUserId])

  const refreshAll = useCallback(() => {
    refreshPoints()
    refreshGenerations()
    refreshPreferences()
    refreshStats()
    setLoading(false)
  }, [refreshPoints, refreshGenerations, refreshPreferences, refreshStats])

  useEffect(() => {
    refreshAll()
  }, [refreshAll])

  const generateImage: UserPointsContextType["generateImage"] = useCallback(
    async ({ prompt, imageUrl, quality, aspectRatio = "1:1", style }) => {
      const uid = resolveUserId()
      const cost = getGenerationCost(quality)
      const result = consumePoints(uid, cost)

      if (!result.success) return result

      const record = addGenerationRecord(uid, {
        prompt, imageUrl, cost, quality, aspectRatio, style,
      })
      addTransaction(uid, {
        type: "generate",
        amount: 0,
        points: -cost,
        description: `生成图片 (${quality} / ${aspectRatio}${style ? ` / ${style}` : ""})`,
      })

      setPoints(result.remaining)
      setTransactionRecords(getTransactionRecords(uid))
      refreshGenerations()
      refreshStats()

      return { success: true, remaining: result.remaining, record }
    },
    [resolveUserId, refreshGenerations, refreshStats]
  )

  const recharge: UserPointsContextType["recharge"] = useCallback(
    async (packageId) => {
      const uid = resolveUserId()
      const result = rechargePoints(uid, packageId)
      if (result.success) {
        setPoints(result.total)
        setTransactionRecords(getTransactionRecords(uid))
        refreshStats()
      }
      return result
    },
    [resolveUserId, refreshStats]
  )

  const getCost = useCallback((quality: "standard" | "hd" | "ultra") => getGenerationCost(quality), [])

  const toggleFavorite = useCallback(
    (id: string) => {
      const uid = resolveUserId()
      const r = sysToggleFavorite(uid, id)
      if (r !== null) refreshGenerations()
      return r
    },
    [resolveUserId, refreshGenerations]
  )

  const togglePublic = useCallback(
    (id: string) => {
      const uid = resolveUserId()
      const r = sysTogglePublic(uid, id)
      if (r !== null) refreshGenerations()
      return r
    },
    [resolveUserId, refreshGenerations]
  )

  const softDelete = useCallback(
    (id: string) => {
      const uid = resolveUserId()
      const r = softDeleteGeneration(uid, id)
      if (r) refreshGenerations()
      return r
    },
    [resolveUserId, refreshGenerations]
  )

  const restore = useCallback(
    (id: string) => {
      const uid = resolveUserId()
      const r = restoreGeneration(uid, id)
      if (r) refreshGenerations()
      return r
    },
    [resolveUserId, refreshGenerations]
  )

  const permanentDelete = useCallback(
    (id: string) => {
      const uid = resolveUserId()
      const r = permanentlyDeleteGeneration(uid, id)
      if (r) refreshGenerations()
      return r
    },
    [resolveUserId, refreshGenerations]
  )

  const updatePreferences = useCallback(
    (partial: Partial<UserPreferences>) => {
      const uid = resolveUserId()
      const next = saveUserPreferences(uid, partial)
      setPreferences(next)
      return next
    },
    [resolveUserId]
  )

  return (
    <UserPointsContext.Provider
      value={{
        points, loading, userId,
        generationRecords, activeGenerations, favoriteGenerations, deletedGenerations,
        transactionRecords, preferences, stats,
        refreshAll, refreshPoints, refreshGenerations, refreshPreferences, refreshStats,
        generateImage, recharge, getCost,
        toggleFavorite, togglePublic, softDelete, restore, permanentDelete,
        updatePreferences,
      }}
    >
      {children}
    </UserPointsContext.Provider>
  )
}

export function useUserPoints() {
  const context = useContext(UserPointsContext)
  if (context === undefined) {
    throw new Error("useUserPoints must be used within a UserPointsProvider")
  }
  return context
}

export { aspectRatioToImageSize }
