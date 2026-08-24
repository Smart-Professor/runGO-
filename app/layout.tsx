"use client";

import "./globals.css";
import { UserPointsProvider } from "@/lib/points/UserPointsContext";
import { ToastProvider } from "@/components/Toast";
import { ThemeProvider } from "@/lib/theme/ThemeContext";
import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import Script from "next/script";

/**
 * 防主题闪烁同步脚本（beforeInteractive 策略）
 * 在 React 水合之前就根据 localStorage/系统偏好给 <html> 加 dark class，
 * 彻底避免"刷新先亮一下再变暗"的 FOUC 问题。
 */
const NO_FLASH_SCRIPT = `
(function(){
  try {
    var KEY = 'aurora-theme';
    var saved = localStorage.getItem(KEY);
    var theme = (saved === 'dark' || saved === 'light') ? saved : null;
    if (!theme) {
      theme = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
    }
    var root = document.documentElement;
    root.style.colorScheme = theme;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
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
    // suppressHydrationWarning: 防闪烁脚本会在水合前改 html.class/style.color-scheme，
    // 这里显式允许水合不匹配（只会出现在 html 根属性，不影响业务 DOM）
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
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
      <body className="min-h-full flex flex-col">
        <Script
          id="aurora-no-flash-theme"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: NO_FLASH_SCRIPT }}
        />
        <ThemeProvider>
          <ToastProvider>
            <UserPointsProvider authenticatedUserId={authUserId}>
              {children}
            </UserPointsProvider>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
