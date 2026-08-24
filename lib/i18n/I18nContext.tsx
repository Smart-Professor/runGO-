"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  DEFAULT_LOCALE,
  LOCALE_LABEL,
  SUPPORTED_LOCALES,
  isLocale,
  translations,
} from "./registry";
import type { Locale, TranslationDict } from "./types";

export const STORAGE_KEY = "aurora-locale";

/* ---------- helpers ---------- */

/**
 * 从 Accept-Language 或浏览器 navigator.language 推断 Locale
 */
function detectInitialLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(saved)) return saved;
  } catch {
    /* ignore */
  }
  // 回退：navigator.language / navigator.userLanguage
  const nav =
    (window.navigator?.language as string | undefined) ||
    (window.navigator as any)?.userLanguage ||
    "";
  const lower = nav.toLowerCase();
  if (lower.startsWith("zh")) return "zh";
  if (lower.startsWith("en")) return "en";
  return DEFAULT_LOCALE;
}

function applyHtmlLang(locale: Locale) {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("lang", locale);
}

/**
 * 深层点路径取字典值：get(obj, "home.heroTitle") → value
 */
function deepGet<T = any>(obj: any, path: string): T | undefined {
  const parts = path.split(".");
  let cur: any = obj;
  for (const p of parts) {
    if (cur == null) return undefined;
    cur = cur[p];
  }
  return cur as T | undefined;
}

/**
 * 插值：把 {{name}} 替换成对应变量值
 */
function interpolate(template: string, vars?: Record<string, any>): string {
  if (!vars || typeof template !== "string") return template;
  return template.replace(/\{\{\s*([a-zA-Z0-9_$-]+)\s*\}\}/g, (_, key) => {
    const v = vars[key];
    if (v == null) return "";
    return String(v);
  });
}

/* ---------- Context ---------- */
interface I18nContextValue {
  locale: Locale;
  setLocale: (next: Locale) => void;
  t: (key: string, vars?: Record<string, any>) => string;
  dicts: TranslationDict;
  locales: typeof SUPPORTED_LOCALES;
  labelOf: (l: Locale) => string;
  switchTo: (next: Locale) => void; // setLocale 别名，语义化
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  // SSR 默认 DEFAULT，客户端水合后 useEffect 一次性对齐真实值
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const initial = detectInitialLocale();
    applyHtmlLang(initial);
    setLocaleState(initial);

    // 监听其它标签页的语言切换（storage 事件同步）
    const onStorage = (e: StorageEvent) => {
      if (e.key !== STORAGE_KEY || !e.newValue) return;
      if (!isLocale(e.newValue)) return;
      setLocaleState(e.newValue);
      applyHtmlLang(e.newValue);
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    applyHtmlLang(next);
    try { window.localStorage.setItem(STORAGE_KEY, next); } catch { /* ignore */ }
  }, []);

  const t = useCallback(
    (key: string, vars?: Record<string, any>): string => {
      const dict = translations[locale] ?? translations[DEFAULT_LOCALE];
      const v = deepGet<string>(dict, key);
      if (v == null) {
        // 缺失翻译：兜底到默认语言字典，仍缺失则返回 key 便于排查
        const fallback = deepGet<string>(translations[DEFAULT_LOCALE], key);
        return fallback != null
          ? interpolate(fallback, vars)
          : key;
      }
      return interpolate(v, vars);
    },
    [locale],
  );

  const labelOf = useCallback((l: Locale) => LOCALE_LABEL[l], []);

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      t,
      dicts: translations[locale] ?? translations[DEFAULT_LOCALE],
      locales: SUPPORTED_LOCALES,
      labelOf,
      switchTo: setLocale,
    }),
    [locale, setLocale, t, labelOf],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    if (process.env.NODE_ENV === "development") {
      // eslint-disable-next-line no-console
      console.warn("[Aurora i18n] useI18n() 必须在 <I18nProvider> 内部使用");
    }
    const fallbackDict = translations[DEFAULT_LOCALE];
    return {
      locale: DEFAULT_LOCALE,
      setLocale: () => {},
      switchTo: () => {},
      t: (key, vars) => {
        const v = deepGet<string>(fallbackDict, key);
        return v != null ? interpolate(v, vars) : key;
      },
      dicts: fallbackDict,
      locales: SUPPORTED_LOCALES,
      labelOf: (l) => LOCALE_LABEL[l],
    };
  }
  return ctx;
}
