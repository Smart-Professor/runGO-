"use client"

import type { Metadata } from "next";
import "./globals.css";
import { UserPointsProvider } from "@/lib/points/UserPointsContext";
import { ToastProvider } from "@/components/Toast";
import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";

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
    <html lang="en" className="h-full antialiased">
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
      </head>
      <body className="min-h-full flex flex-col">
        <ToastProvider>
          <UserPointsProvider authenticatedUserId={authUserId}>
            {children}
          </UserPointsProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
