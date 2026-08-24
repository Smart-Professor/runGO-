"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Theme = "light" | "dark";
const STORAGE_KEY = "aurora-theme";

/**
 * 同步读取当前主题（浏览器环境优先 localStorage，
 * 再回退到系统 prefers-color-scheme，最后默认 light）。
 * 这个函数只在客户端执行：首帧脚本 / useEffect / 事件处理里调用。
 */
function readInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "dark" || saved === "light") return saved;
  } catch {
    /* ignore */
  }
  const prefersDark =
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

/**
 * 把 theme 应用到 <html> 根节点 + color-scheme meta
 */
function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  if (theme === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
  root.style.colorScheme = theme;
}

/* ---------------- Context ---------------- */
interface ThemeContextValue {
  theme: Theme;
  resolvedTheme: Theme;
  setTheme: (next: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // 服务端先给 light，避免 SSR/客户端首帧 classList 不一致
  const [theme, setThemeState] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  // 客户端水合后一次对齐真实主题
  useEffect(() => {
    const initial = readInitialTheme();
    applyTheme(initial);
    setThemeState(initial);
    setMounted(true);

    // 监听系统主题变化（仅当用户未手动选过时跟随）
    const mql =
      typeof window.matchMedia === "function"
        ? window.matchMedia("(prefers-color-scheme: dark)")
        : null;
    if (!mql) return;
    const onSysChange = (e: MediaQueryListEvent) => {
      try {
        if (window.localStorage.getItem(STORAGE_KEY)) return; // 已手动设置就不跟随
      } catch { /* ignore */ }
      const next: Theme = e.matches ? "dark" : "light";
      applyTheme(next);
      setThemeState(next);
    };
    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", onSysChange);
      return () => mql.removeEventListener("change", onSysChange);
    } else {
      // Safari 旧版兼容
      (mql as any).addListener(onSysChange);
      return () => (mql as any).removeListener(onSysChange);
    }
  }, []);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    applyTheme(next);
    try { window.localStorage.setItem(STORAGE_KEY, next); } catch { /* ignore */ }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      // mounted 之前保持初始 light，让依赖主题的 UI 不要参与水合
      resolvedTheme: mounted ? theme : "light",
      setTheme,
      toggleTheme,
    }),
    [theme, mounted, setTheme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    // 开发环境兜底，避免未包 Provider 时崩溃
    if (process.env.NODE_ENV === "development") {
      // eslint-disable-next-line no-console
      console.warn("[Aurora] useTheme() 必须在 <ThemeProvider> 内部使用");
    }
    return {
      theme: "light",
      resolvedTheme: "light",
      setTheme: () => {},
      toggleTheme: () => {},
    };
  }
  return ctx;
}

export const THEME_STORAGE_KEY = STORAGE_KEY;
