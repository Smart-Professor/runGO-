"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import FAQ from "./FAQ";
import Nav from "../components/Nav";
import { useUserPoints } from "@/lib/points/UserPointsContext";
import { useI18n } from "@/lib/i18n/I18nContext";

/* =========================================================
   Data
   ========================================================= */

const logos = ["VERCEL", "LINEAR", "NOTION", "FIGMA", "STRIPE", "GITHUB", "RAYCAST", "RESEND"];

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" /><rect x="7" y="11" width="3" height="7" /><rect x="12" y="7" width="3" height="11" /><rect x="17" y="13" width="3" height="5" />
      </svg>
    ),
    title: "Real-time dashboards",
    desc: "Watch metrics move as they happen. Sub-second updates, no refresh needed. Build dashboards in minutes with drag-and-drop.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "AI-powered insights",
    desc: "Aurora reads your data and surfaces anomalies before you'd notice them. Get explanations, not just numbers.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
      </svg>
    ),
    title: "Smart alerts",
    desc: "Set thresholds, get notified via Slack, email, or webhook. Aurora learns what's noise and what actually matters.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="12" r="3" /><path d="M9 6h6a3 3 0 0 1 3 3v0M9 18h6a3 3 0 0 0 3-3v0" />
      </svg>
    ),
    title: "Data pipelines",
    desc: "Connect any source. Transform in flight with SQL or visual blocks. Ship to any destination. No ETL to maintain.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Team workspaces",
    desc: "Share dashboards, leave comments, and decide together. Role-based access means everyone sees what they need.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 18l6-6-6-6" /><path d="M8 6l-6 6 6 6" />
      </svg>
    ),
    title: "API & SDKs",
    desc: "One API, ten SDKs. Integrate Aurora into anything — your app, your CI, your Slack bot. Query programmatically.",
  },
];

const stats = [
  { value: "99.99%", label: "Uptime SLA" },
  { value: "10B+", label: "Events / day" },
  { value: "<50ms", label: "Query latency" },
  { value: "12,000+", label: "Teams onboard" },
];

const productSections = [
  {
    badge: "Dashboards",
    title: "See everything, in real time.",
    desc: "Drag, drop, and ship dashboards in minutes. Every chart updates live — no refresh, no waiting. Share with your team or embed in your product.",
    bullets: ["Sub-second live updates", "30+ chart types", "Embed anywhere", "Custom formulas"],
    bars: [40, 65, 50, 80, 55, 90, 70, 85],
  },
  {
    badge: "AI Insights",
    title: "Anomalies, found before you look.",
    desc: "Aurora continuously learns your baselines and alerts you when something deviates. Not just a number — a full explanation of what changed and why.",
    bullets: ["Automatic anomaly detection", "Root-cause analysis", "Natural language explanations", "Predictive forecasting"],
    bars: [30, 45, 35, 60, 75, 50, 80, 65],
  },
];

const pricing = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    desc: "For small teams getting started.",
    features: ["3 dashboards", "1M events / month", "7-day data retention", "Community support", "1 data source"],
    cta: "Get started",
    featured: false,
  },
  {
    name: "Pro",
    price: "$49",
    period: "per month",
    desc: "For growing teams that need more.",
    features: ["Unlimited dashboards", "50M events / month", "90-day retention", "AI-powered insights", "10 data sources", "Priority support"],
    cta: "Start free trial",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For organizations at scale.",
    features: ["Everything in Pro", "Unlimited events", "Unlimited retention", "SSO / SAML", "Dedicated infra", "On-prem option"],
    cta: "Contact sales",
    featured: false,
  },
];

const testimonials = [
  {
    quote: "We replaced three tools with Aurora. Our incident response time dropped from 30 minutes to under 5.",
    name: "Sarah Chen",
    role: "VP Engineering, Flowbase",
    initials: "SC",
  },
  {
    quote: "The AI insights caught a revenue dip 12 hours before our weekly review. That alone paid for the year.",
    name: "Marcus Webb",
    role: "Head of Data, Nimbus",
    initials: "MW",
  },
  {
    quote: "Aurora's dashboards are the first thing my team opens every morning. It's become our single source of truth.",
    name: "Priya Patel",
    role: "CTO, Stratos",
    initials: "PP",
  },
];

const footerLinks = [
  { h: "Product", l: ["Dashboards", "AI Insights", "Alerts", "Pipelines", "API", "Changelog"] },
  { h: "Company", l: ["About", "Blog", "Careers", "Press", "Contact"] },
  { h: "Resources", l: ["Docs", "Tutorials", "Community", "Status", "Security"] },
  { h: "Legal", l: ["Privacy", "Terms", "Cookies", "DPA", "SLA"] },
];

/* =========================================================
   AI Image Generation Cards
   ========================================================= */

const imageGenCards = [
  {
    tag: "产品摄影",
    tagColor: "#0a0a0a",
    title: "商业级产品摄影",
    desc: "为电商、品牌、营销物料生成专业级产品图，多场景光影，真实质感。",
    image: "/images/gen-card-1.jpg",
    prompt: "Professional commercial product photography, premium wireless earbuds on marble surface, soft studio lighting",
  },
  {
    tag: "角色设计",
    tagColor: "#8b5cf6",
    title: "原创角色 & IP",
    desc: "一键生成原创动漫、游戏、插画风格角色，可定制外貌、服装、风格。",
    image: "/images/gen-card-2.jpg",
    prompt: "Anime girl with long flowing lavender hair and starry eyes, elegant fantasy dress, pastel colors",
  },
  {
    tag: "概念艺术",
    tagColor: "#ef4444",
    title: "影视级概念场景",
    desc: "打造赛博朋克、奇幻、科幻等宏大世界观的场景概念图，电影级质感。",
    image: "/images/gen-card-3.jpg",
    prompt: "Cyberpunk neon city street at night in rain, dramatic lighting, blade runner aesthetic, cinematic",
  },
  {
    tag: "时尚电商",
    tagColor: "#f59e0b",
    title: "穿搭 & 时尚大片",
    desc: "生成高端服装穿搭图、生活方式、杂志风人像，助力品牌视觉营销。",
    image: "/images/gen-card-4.jpg",
    prompt: "Minimalist fashion flat lay, beige trench coat on marble table, warm natural lighting, lifestyle aesthetic",
  },
];

/* =========================================================
   Dashboard Mockup (pure CSS)
   ========================================================= */

function DashboardMock() {
  return (
    <div className="mock-window bg-card">
      {/* title bar */}
      <div className="mock-titlebar">
        <span className="mock-dot" style={{ background: "#ff5f57" }} />
        <span className="mock-dot" style={{ background: "#febc2e" }} />
        <span className="mock-dot" style={{ background: "#28c840" }} />
        <span className="ml-3 text-xs tx-soft">app.aurora.dev/overview</span>
      </div>

      <div className="flex">
        {/* sidebar */}
        <div className="mock-sidebar">
          <div className="mock-sb-item mock-sb-active" />
          <div className="mock-sb-item" />
          <div className="mock-sb-item" />
          <div className="mock-sb-item" />
          <div className="mt-auto mock-sb-item" />
        </div>

        {/* main */}
        <div className="flex-1 p-5">
          {/* header */}
          <div className="mb-5 flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold tx-foreground">Overview</div>
              <div className="text-xs tx-soft">Last 24 hours</div>
            </div>
            <div className="flex items-center gap-2">
              <span className="pulse-dot" />
              <span className="text-xs tx-soft">Live</span>
            </div>
          </div>

          {/* stat cards */}
          <div className="mb-5 grid grid-cols-3 gap-3">
            <div className="mock-stat">
              <div className="text-xs tx-soft">Revenue</div>
              <div className="mt-1 text-lg font-semibold tx-foreground">$48.2k</div>
              <div className="text-xs font-medium" style={{ color: "#28c840" }}>↑ 12.4%</div>
            </div>
            <div className="mock-stat">
              <div className="text-xs tx-soft">Active users</div>
              <div className="mt-1 text-lg font-semibold tx-foreground">8,431</div>
              <div className="text-xs font-medium" style={{ color: "#28c840" }}>↑ 3.2%</div>
            </div>
            <div className="mock-stat">
              <div className="text-xs tx-soft">Latency</div>
              <div className="mt-1 text-lg font-semibold tx-foreground">42ms</div>
              <div className="text-xs font-medium tx-soft">↓ 8ms</div>
            </div>
          </div>

          {/* chart */}
          <div className="mock-stat">
            <div className="mb-3 flex items-center justify-between">
              <div className="text-xs font-medium tx-foreground">Events / hour</div>
              <div className="flex gap-1.5">
                <div className="h-1.5 w-1.5 rounded-full" style={{ background: "#0a0a0a" }} />
                <div className="h-1.5 w-1.5 rounded-full" style={{ background: "#e5e5e5" }} />
              </div>
            </div>
            <div className="bar-chart">
              {[40, 55, 45, 70, 60, 85, 75, 90, 65, 80, 50, 95].map((h, i) => (
                <div
                  key={i}
                  className={`bar ${i >= 8 ? "bar-dark" : ""}`}
                  style={{ height: `${h}%`, animationDelay: `${i * 0.05}s` }}
                />
              ))}
            </div>
            <div className="mt-2 flex justify-between text-[10px] tx-soft">
              <span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span><span>24:00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   Page
   ========================================================= */

export default function Home() {
  const router = useRouter()
  const { points, loading: pointsLoading } = useUserPoints()
  const { t } = useI18n()

  const handleCardClick = (prompt: string) => {
    // 跳转到生成页面，并携带预设prompt
    const encoded = encodeURIComponent(prompt)
    router.push(`/generate?p=${encoded}`)
  }

  return (
    <div className="relative">
      {/* ===== NAV ===== */}
      <Nav />

      {/* ===== HERO ===== */}
      <section className="flex min-h-screen items-center pt-28 pb-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
          <div className="fade-up delay-1">
            <span className="badge-soft inline-block">{t("home.heroEyebrow")}</span>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4rem] tx-foreground">
              {t("home.heroTitle")}
              <br />{t("home.heroTitleAccent")}
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed tx-muted">
              {t("home.heroSubtitle")}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#pricing" className="btn-primary group flex items-center gap-2 px-7 py-3.5 text-sm font-medium">
                {t("home.heroPrimary")}
                <span className="transition group-hover:translate-x-1">→</span>
              </a>
              <a href="#features" className="btn-outline flex items-center gap-2 px-7 py-3.5 text-sm font-medium">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l6 4-6 4V4z" fill="currentColor" /></svg>
                {t("home.heroSecondary")}
              </a>
            </div>
            <p className="mt-5 text-xs tx-soft">{t("home.trustText")}</p>
          </div>

          <div className="fade-in delay-3">
            <DashboardMock />
          </div>
        </div>
      </section>

      {/* ===== LOGO CLOUD ===== */}
      <section className="py-12 border-y ln-soft">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="mb-8 text-center text-xs uppercase tracking-[0.2em] tx-soft">
            {t("home.logosEyebrow")}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {logos.map((logo) => (
              <span key={logo} className="text-lg font-semibold tracking-tight tx-soft transition hover:tx-muted">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section id="features" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs uppercase tracking-[0.2em] tx-muted">{t("home.featuresSection.eyebrow")}</span>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl tx-foreground">
              {t("home.featuresSection.title")}
            </h2>
            <p className="mt-5 text-lg tx-muted">
              {t("home.featuresSection.subtitle")}
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <div key={f.title} className="card card-hover p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-soft tx-foreground">
                  {f.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold tx-foreground">
                  {t(`home.featuresSection.items.${i}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed tx-muted">
                  {t(`home.featuresSection.items.${i}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== AI IMAGE GENERATION STUDIO ===== */}
      <section className="py-24 bg-soft">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
            <div className="fade-up">
              <div className="section-eyebrow">
                <span className="inline-block w-1 h-1 rounded-full accent-logo" />
                {t("home.genCardsSection.eyebrow")}
              </div>
              <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t("home.genCardsSection.title") }} />
              <p className="section-subtitle">
                {t("home.genCardsSection.subtitle")}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 fade-up delay-2">
              <div className="points-badge" style={{ padding: "0.55rem 1rem", fontSize: "0.9rem" }}>
                <span className="points-icon points-icon-gold" style={{ width: 20, height: 20, fontSize: "0.72rem" }}>★</span>
                <span className="font-semibold">
                  {t("home.genCardsSection.myPoints", { points: pointsLoading ? "..." : points.toLocaleString() })}
                </span>
              </div>
              <Link href="/generate" className="btn-primary px-6 py-3 text-sm font-medium inline-flex items-center gap-2 no-underline">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l2.09 6.26L20 9l-5 4.1L16.18 20 12 17.27 7.82 20 9 13.1 4 9l5.91-.74L12 2z" />
                </svg>
                {t("home.genCardsSection.cta")}
                <span>→</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {imageGenCards.map((card, i) => (
              <div
                key={card.title}
                className={`gen-card fade-up delay-${(i % 4) + 1}`}
                onClick={() => handleCardClick(card.prompt)}
              >
                <div
                  className="gen-card-image"
                  style={{ backgroundImage: `url(${card.image})` }}
                >
                  <span
                    className="gen-card-tag badge-soft"
                    style={{
                      background: card.tagColor,
                      color: "#ffffff",
                      border: "none",
                      textShadow: "0 1px 2px rgba(0,0,0,0.2)",
                    }}
                  >
                    {t(`home.genCardsSection.cards.${i}.tag`)}
                  </span>
                  <div className="gen-card-overlay">
                    <div className="text-sm font-medium inline-flex items-center gap-1">
                      {t(`home.genCardsSection.cards.${i}.cta`)}
                      <span>→</span>
                    </div>
                  </div>
                </div>
                <div className="gen-card-body">
                  <h3 className="gen-card-title">{t(`home.genCardsSection.cards.${i}.title`)}</h3>
                  <p className="gen-card-desc">{t(`home.genCardsSection.cards.${i}.desc`)}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mascot & CTA row */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-8 items-center card rounded-2xl p-8 lg:p-10 fade-up">
            <div className="lg:col-span-2 flex justify-center">
              <div
                className="w-48 h-48 lg:w-56 lg:h-56 rounded-3xl bg-soft flex items-center justify-center overflow-hidden"
                style={{
                  backgroundImage: "url(/images/aurora-mascot.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  border: "1px solid var(--line)",
                }}
              />
            </div>
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="accent-logo inline-block h-2 w-2 rounded-full" />
                <span className="text-xs uppercase tracking-widest tx-muted">{t("home.mascot.eyebrow")}</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-semibold tx-foreground mb-3 leading-tight">
                {t("home.mascot.title")}
              </h3>
              <p className="tx-muted leading-relaxed mb-6 max-w-xl">
                {t("home.mascot.desc")}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/generate" className="btn-primary px-6 py-3 text-sm font-medium inline-flex items-center gap-2 no-underline">
                  {t("home.mascot.primaryCta")}
                  <span>→</span>
                </Link>
                <Link href="/recharge" className="btn-outline px-6 py-3 text-sm font-medium inline-flex items-center gap-2 no-underline">
                  <span className="points-icon points-icon-gold">★</span>
                  {t("home.mascot.secondaryCta")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRODUCT DETAIL SECTIONS ===== */}
      <section className="py-24 bg-soft">
        <div className="mx-auto max-w-7xl space-y-24 px-6 lg:px-10">
          {productSections.map((s, idx) => (
            <div key={s.badge} className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <span className="badge-soft inline-block">{t(`home.productSections.${idx}.badge`)}</span>
                <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl tx-foreground">
                  {t(`home.productSections.${idx}.title`)}
                </h2>
                <p className="mt-5 max-w-md text-lg leading-relaxed tx-muted">{t(`home.productSections.${idx}.desc`)}</p>
                <ul className="mt-7 space-y-3">
                  {s.bullets.map((b, bi) => (
                    <li key={b} className="flex items-center gap-3 text-sm tx-foreground">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M4 9l3.5 3.5L14 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {t(`home.productSections.${idx}.bullets.${bi}`)}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <div className="card p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="text-xs font-medium tx-soft">{s.badge} · last 8 hours</div>
                    <div className="flex items-center gap-1.5">
                      <span className="pulse-dot" />
                      <span className="text-xs tx-soft">Live</span>
                    </div>
                  </div>
                  <div className="bar-chart" style={{ height: "180px" }}>
                    {s.bars.map((h, i) => (
                      <div
                        key={i}
                        className={`bar ${i >= 5 ? "bar-dark" : ""}`}
                        style={{ height: `${h}%`, animationDelay: `${i * 0.06}s` }}
                      />
                    ))}
                  </div>
                  <div className="mt-3 flex justify-between text-[10px] tx-soft">
                    <span>00:00</span><span>02:00</span><span>04:00</span><span>06:00</span><span>08:00</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl font-semibold tracking-tight sm:text-5xl tx-foreground">
                  {s.value}
                </div>
                <div className="mt-2 text-sm tx-muted">{t(`home.stats.${i}`)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section id="pricing" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs uppercase tracking-[0.2em] tx-muted">{t("home.pricingSection.eyebrow")}</span>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl tx-foreground">
              {t("home.pricingSection.title")}
            </h2>
            <p className="mt-5 text-lg tx-muted">
              {t("home.pricingSection.subtitle")}
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {pricing.map((p, pi) => (
              <div
                key={p.name}
                className={`card pricing-card ${p.featured ? "pricing-featured" : ""}`}
              >
                {p.featured && (
                  <span className="badge absolute -top-3 left-1/2 -translate-x-1/2">{t("home.pricingSection.popular")}</span>
                )}
                <h3 className="text-lg font-semibold tx-foreground">{t(`home.pricingSection.plans.${pi}.name`)}</h3>
                <p className="mt-1 text-sm tx-muted">{t(`home.pricingSection.plans.${pi}.desc`)}</p>
                <div className="mt-6 flex items-baseline gap-1.5">
                  <span className="text-4xl font-semibold tracking-tight tx-foreground">{p.price}</span>
                  {p.period && <span className="text-sm tx-soft">{t(`home.pricingSection.plans.${pi}.period`)}</span>}
                </div>
                <a
                  href={p.featured ? "/sign-up" : "#"}
                  className={`mt-6 block text-center py-3 text-sm font-medium ${p.featured ? "btn-primary" : "btn-outline"}`}
                >
                  {pi === 0 ? t("home.pricingSection.ctaFree") : t("home.pricingSection.cta")}
                </a>
                <ul className="mt-7 space-y-3">
                  {p.features.map((f, fi) => (
                    <li key={f} className="flex items-start gap-3 text-sm tx-muted">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="mt-0.5 shrink-0">
                        <path d="M4 9l3.5 3.5L14 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {t(`home.pricingSection.plans.${pi}.features.${fi}`)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-24 bg-soft">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] tx-muted">{t("home.testimonials.eyebrow")}</span>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl tx-foreground">
              {t("home.testimonials.title")}
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((tm, i) => (
              <div key={tm.name} className="card p-7">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="tx-soft mb-4">
                  <path d="M11 7H6a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h2v3a3 3 0 0 1-3 3M25 7h-5a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h2v3a3 3 0 0 1-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-base leading-relaxed tx-foreground">{t(`home.testimonials.items.${i}.quote`)}</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="avatar">{tm.initials}</span>
                  <div>
                    <div className="text-sm font-medium tx-foreground">{t(`home.testimonials.items.${i}.name`)}</div>
                    <div className="text-xs tx-soft">{t(`home.testimonials.items.${i}.role`)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs uppercase tracking-[0.2em] tx-muted">{t("home.faq.eyebrow")}</span>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl tx-foreground">
              {t("home.faq.title")}
            </h2>
          </div>
          <div className="mt-12">
            <FAQ />
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="card rounded-2xl px-8 py-20 text-center sm:px-16">
            <span className="text-xs uppercase tracking-[0.2em] tx-muted">{t("home.ctaSection.eyebrow")}</span>
            <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl tx-foreground">
              {t("home.ctaSection.title")}
            </h2>
            <p className="mx-auto mt-6 max-w-md text-lg tx-muted">
              {t("home.ctaSection.subtitle")}
            </p>
            <a href="#pricing" className="btn-primary mt-10 inline-flex items-center gap-2 px-8 py-4 text-sm font-medium">
              {t("home.ctaSection.primary")}
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t ln-line py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
            <div className="col-span-2">
              <Link href="/" className="flex items-center gap-2">
                <span className="accent-logo inline-block h-2 w-2 rounded-full" />
                <span className="text-lg font-semibold tracking-tight tx-foreground">{t("nav.logo")}</span>
              </Link>
              <p className="mt-4 max-w-xs text-sm tx-soft">
                {t("home.footer.tagline")}
              </p>
              <div className="mt-6 flex gap-3">
                {["X", "in", "GH", "@"].map((s) => (
                  <a key={s} href="#" className="flex h-9 w-9 items-center justify-center rounded-lg border ln-line text-xs tx-muted transition hover:tx-foreground hover:border-[#0a0a0a]">
                    {s}
                  </a>
                ))}
              </div>
            </div>
            {footerLinks.map((col, ci) => (
              <div key={col.h}>
                <div className="text-xs uppercase tracking-wider tx-soft">{t(`home.footer.cols.${ci}.h`)}</div>
                <ul className="mt-4 space-y-2.5 text-sm tx-muted">
                  {col.l.map((x, li) => (
                    <li key={x}>
                      <a href="#" className="link-underline transition hover:tx-foreground">
                        {t(`home.footer.cols.${ci}.items.${li}`)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t ln-line pt-8 text-xs tx-soft sm:flex-row">
            <div>{t("home.footer.rights")}</div>
            <div className="flex items-center gap-2">
              <span className="pulse-dot" />
              <span>{t("home.footer.status")}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
