import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../../components/Nav";

export const metadata: Metadata = {
  title: "Platform — Aurora",
  description:
    "The Aurora platform — real-time dashboards, AI-powered insights, smart alerts, data pipelines, team workspaces, and a full API.",
};

const capabilities = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" /><rect x="7" y="11" width="3" height="7" /><rect x="12" y="7" width="3" height="11" /><rect x="17" y="13" width="3" height="5" />
      </svg>
    ),
    title: "Real-time dashboards",
    desc: "Build live dashboards with sub-second updates. Drag-and-drop builder with 30+ chart types, custom formulas, and embed-anywhere sharing.",
    points: ["Sub-second live data", "30+ chart types", "Custom SQL formulas", "White-label embedding"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "AI-powered insights",
    desc: "Automatic anomaly detection with root-cause analysis. Aurora learns your baselines and surfaces what matters, with natural language explanations.",
    points: ["Automatic anomaly detection", "Root-cause analysis", "Natural language summaries", "Predictive forecasting"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
      </svg>
    ),
    title: "Smart alerts",
    desc: "Threshold-based or AI-driven alerts. Route to Slack, email, PagerDuty, or any webhook. Aurora learns what's noise and suppresses it.",
    points: ["Slack / email / PagerDuty", "Webhook destinations", "Noise suppression", "Escalation policies"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="12" r="3" /><path d="M9 6h6a3 3 0 0 1 3 3v0M9 18h6a3 3 0 0 0 3-3v0" />
      </svg>
    ),
    title: "Data pipelines",
    desc: "Connect any source, transform in flight with SQL or visual blocks, and ship to any destination. No ETL to maintain.",
    points: ["20+ native connectors", "Visual + SQL transforms", "CDC streaming", "Reverse ETL"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Team workspaces",
    desc: "Share dashboards, leave comments, and decide together. Role-based access, audit logs, and SSO for enterprise teams.",
    points: ["Role-based access control", "Comments & annotations", "SSO / SAML", "Audit logs"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 18l6-6-6-6" /><path d="M8 6l-6 6 6 6" />
      </svg>
    ),
    title: "API & SDKs",
    desc: "One API, ten SDKs. Query programmatically, manage dashboards as code, and integrate Aurora into anything.",
    points: ["REST + GraphQL API", "10 SDKs (JS, Python, Go...)", "Dashboard-as-code", "Webhooks"],
  },
];

const integrations = [
  "PostgreSQL", "MySQL", "Kafka", "Snowflake", "BigQuery", "Redshift",
  "S3", "MongoDB", "Redis", "Elasticsearch", "Stripe", "Segment",
  "Datadog", "PagerDuty", "Slack", "GitHub",
];

export default function PlatformPage() {
  return (
    <div className="relative">
      {/* ===== NAV ===== */}
      <Nav />

      {/* ===== HERO ===== */}
      <section className="flex min-h-[60vh] items-center pt-28 pb-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="badge-soft inline-block fade-up delay-1">The Aurora Platform</span>
          <h1 className="fade-up delay-2 mt-5 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl tx-foreground">
            One platform.
            <br />
            Six capabilities.
          </h1>
          <p className="fade-up delay-3 mx-auto mt-6 max-w-xl text-lg leading-relaxed tx-muted">
            From ingestion to insight. Aurora unifies dashboards, AI, alerts, pipelines, collaboration, and API into a single, cohesive platform.
          </p>
          <div className="fade-up delay-4 mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="/#pricing" className="btn-primary px-7 py-3.5 text-sm font-medium">Start free trial</a>
            <a href="#" className="btn-outline px-7 py-3.5 text-sm font-medium">Read the docs</a>
          </div>
        </div>
      </section>

      {/* ===== CAPABILITIES ===== */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {capabilities.map((c) => (
              <div key={c.title} className="card card-hover p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-soft tx-foreground">
                  {c.icon}
                </div>
                <h2 className="mt-5 text-xl font-semibold tx-foreground">{c.title}</h2>
                <p className="mt-3 text-sm leading-relaxed tx-muted">{c.desc}</p>
                <ul className="mt-6 grid grid-cols-2 gap-3">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm tx-foreground">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                        <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INTEGRATIONS ===== */}
      <section className="py-24 bg-soft">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs uppercase tracking-[0.2em] tx-muted">Integrations</span>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl tx-foreground">
              Connects to everything.
            </h2>
            <p className="mt-5 text-lg tx-muted">
              20+ native integrations. Plus a full API for everything else.
            </p>
          </div>
          <div className="mx-auto mt-14 flex max-w-4xl flex-wrap items-center justify-center gap-3">
            {integrations.map((i) => (
              <span key={i} className="badge-soft">{i}</span>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href="#" className="link-underline text-sm font-medium tx-foreground">
              View all integrations →
            </a>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="card rounded-2xl px-8 py-20 text-center sm:px-16">
            <span className="text-xs uppercase tracking-[0.2em] tx-muted">Get started</span>
            <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl tx-foreground">
              Ship your first dashboard today.
            </h2>
            <p className="mx-auto mt-6 max-w-md text-lg tx-muted">
              Free 14-day trial. No credit card. Set up in 5 minutes.
            </p>
            <a href="/#pricing" className="btn-primary mt-10 inline-flex items-center gap-2 px-8 py-4 text-sm font-medium">
              Start free trial
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t ln-line py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col items-center justify-between gap-4 text-xs tx-soft sm:flex-row">
            <div className="flex items-center gap-2">
              <span className="accent-logo inline-block h-2 w-2 rounded-full" />
              <span className="font-medium tx-foreground">Aurora</span>
              <span>· © 2026 Aurora, Inc.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="pulse-dot" />
              <span>All systems operational</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
