"use client";

import { useTheme } from "@/lib/theme/ThemeContext";
import { useEffect, useState } from "react";

/**
 * 主题切换按钮（☀️/🌙）
 * - 带 mounted 门控：SSR + 水合阶段渲染一个稳定结构，
 *   避免水合时主题从"服务端 light"跳到"客户端 dark"导致的属性/文本 mismatch
 * - 语义：图标 = 点击后会切换到的状态（当前 light 显示月亮）
 */
export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  const ariaLabel = mounted
    ? isDark
      ? "切换到浅色模式"
      : "切换到深色模式"
    : "切换主题";

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      title={ariaLabel}
      onClick={toggleTheme}
      className={`theme-toggle ${className}`}
    >
      {/*
        mounted 前用一个中性 SVG（半太阳半月亮），
        不依赖 resolvedTheme，确保 SSR 和客户端首帧完全一致
      */}
      {!mounted ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      ) : isDark ? (
        // 当前 dark → 点击变 light → 展示太阳图标（代表"切换到浅色"）
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        // 当前 light → 点击变 dark → 展示月亮图标
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      )}
    </button>
  );
}
