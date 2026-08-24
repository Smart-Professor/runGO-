"use client";

import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/lib/i18n/I18nContext";
import { LOCALE_SHORT } from "@/lib/i18n/registry";
import type { Locale } from "@/lib/i18n/types";

/**
 * 🌐 语言切换下拉按钮
 * - 和 ThemeToggle 同样的 mounted 防水合门控
 * - 展开后点击外部关闭（useRef + document pointerdown capture）
 * - 后续加语言只需在 registry/SUPPORTED_LOCALES 注册，此处自动枚举
 */
export default function LangSwitcher({ className = "" }: { className?: string }) {
  const { locale, switchTo, locales, labelOf, t } = useI18n();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      const wrap = wrapRef.current;
      if (wrap && !wrap.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown, true);
    document.addEventListener("keydown", onKey, true);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown, true);
      document.removeEventListener("keydown", onKey, true);
    };
  }, [open]);

  const pick = (l: Locale) => {
    switchTo(l);
    setOpen(false);
  };

  const aria = mounted ? t("nav.switchLanguage") : "Language";

  return (
    <div className={`relative ${className}`} ref={wrapRef}>
      <button
        type="button"
        aria-label={aria}
        aria-haspopup="menu"
        aria-expanded={open}
        title={mounted ? `${labelOf(locale)} — ${t("nav.switchLanguage")}` : "Language"}
        onClick={() => setOpen((v) => !v)}
        className="theme-toggle"
        style={{ width: "auto", padding: "0 0.7rem", gap: "0.35rem", borderRadius: 999 }}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <span style={{ fontSize: "0.8rem", fontWeight: 600 }}>
          {mounted ? LOCALE_SHORT[locale] : "…"}
        </span>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          className="user-menu"
          style={{ minWidth: 150, right: 0 }}
        >
          {locales.map((l) => {
            const selected = mounted && l === locale;
            return (
              <button
                key={l}
                role="menuitemradio"
                aria-checked={selected}
                type="button"
                onClick={() => pick(l)}
                className="user-menu-item"
                style={{ justifyContent: "space-between" }}
              >
                <span style={{ display: "inline-flex", alignItems: "center", gap: "0.55rem" }}>
                  <span
                    aria-hidden
                    style={{
                      width: 20, height: 20, borderRadius: 6,
                      display: "inline-flex", alignItems: "center", justifyContent: "center",
                      fontSize: "0.65rem", fontWeight: 700, letterSpacing: 0.2,
                      background: selected ? "#ededed" : "transparent",
                      color: selected ? "#0a0a0a" : "inherit",
                      border: `1px solid ${selected ? "#ededed" : "var(--line)"}`,
                    }}
                  >
                    {LOCALE_SHORT[l]}
                  </span>
                  <span>{labelOf(l)}</span>
                </span>
                {selected && (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
