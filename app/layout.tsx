"use client";

import "./globals.css";
import { UserPointsProvider } from "@/lib/points/UserPointsContext";
import { ToastProvider } from "@/components/Toast";
import { ThemeProvider } from "@/lib/theme/ThemeContext";
import { I18nProvider } from "@/lib/i18n/I18nContext";
import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import Script from "next/script";

/**
 * 防闪烁同步脚本（beforeInteractive 策略，合并 Theme + i18n）
 * 在 React 水合之前完成两件事：
 *   1. Theme：根据 aurora-theme + 系统 prefers-color-scheme 设置 <html>.dark
 *   2. i18n ：根据 aurora-locale + navigator.language 设置 <html lang=...>
 * 这样首帧渲染就已经是正确的主题+语言，避免刷新瞬间闪错状态。
 */
const NO_FLASH_SCRIPT = `
(function(){
  try {
    var root = document.documentElement;

    /* -------- Theme -------- */
    var TKEY = 'aurora-theme';
    var theme = localStorage.getItem(TKEY);
    if (theme !== 'dark' && theme !== 'light') theme = null;
    if (!theme) {
      theme = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
    }
    root.style.colorScheme = theme;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');

    /* -------- Locale -------- */
    var LKEY = 'aurora-locale';
    var SUPPORTED = ['zh','en'];
    var locale = localStorage.getItem(LKEY);
    if (SUPPORTED.indexOf(locale) === -1) {
      var nav = (window.navigator && (window.navigator.language || (window.navigator.userLanguage || '')));
      if (nav) {
        nav = nav.toLowerCase();
        locale = nav.indexOf('zh') === 0 ? 'zh' : (nav.indexOf('en') === 0 ? 'en' : null);
      }
    }
    if (!locale) locale = 'zh';
    root.setAttribute('lang', locale);
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [authUserId, setAuthUserId] = useState<string | null>(null);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const supabase = createClient();
        const { data: { user } } = await supabase.auth.getUser();
        setAuthUserId(user?.id || null);
      } catch {
        setAuthUserId(null);
      }
    };
    checkUser();
  }, []);

  return (
    // suppressHydrationWarning: 防闪烁脚本会在水合前改 html.class/style/lang，
    // 这里显式允许水合不匹配（只会出现在 html 根属性，不影响业务 DOM）
    <html className="h-full antialiased" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* 提前声明 theme-color，让移动端浏览器地址栏立刻跟随主题色（避免闪烁）*/}
        <meta name="theme-color" content="#fafafa" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0f0f11" media="(prefers-color-scheme: dark)" />
      </head>
      {/* body suppress: 浏览器扩展(代理/安全类)常在 body 注入自定义属性，SSR/客户端差异会报警告 */}
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Script
          id="aurora-no-flash"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: NO_FLASH_SCRIPT }}
        />
        <I18nProvider>
          <ThemeProvider>
            <ToastProvider>
              <UserPointsProvider authenticatedUserId={authUserId}>
                {children}
              </UserPointsProvider>
            </ToastProvider>
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
