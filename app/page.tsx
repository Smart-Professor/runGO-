import Link from "next/link";
import FAQ from "./FAQ";
import Nav from "../components/Nav";

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
  return (
    <div className="relative">
      {/* ===== NAV ===== */}
      <Nav />

      {/* ===== HERO ===== */}
      <section className="flex min-h-screen items-center pt-28 pb-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
          <div className="fade-up delay-1">
            <span className="badge-soft inline-block">Aurora 2.0 — now with AI insights</span>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4rem] tx-foreground">
              Data,
              <br />decided.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed tx-muted">
              Aurora turns raw events into decisions. Real-time dashboards, AI-powered insights, and alerts that actually matter — all in one platform.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#pricing" className="btn-primary group flex items-center gap-2 px-7 py-3.5 text-sm font-medium">
                Start free trial
                <span className="transition group-hover:translate-x-1">→</span>
              </a>
              <a href="#features" className="btn-outline flex items-center gap-2 px-7 py-3.5 text-sm font-medium">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l6 4-6 4V4z" fill="currentColor" /></svg>
                Watch demo
              </a>
            </div>
            <p className="mt-5 text-xs tx-soft">No credit card required · 14-day Pro trial · Cancel anytime</p>
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
            Trusted by 12,000+ teams worldwide
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
            <span className="text-xs uppercase tracking-[0.2em] tx-muted">Platform</span>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl tx-foreground">
              Everything you need to run on data.
            </h2>
            <p className="mt-5 text-lg tx-muted">
              Six core capabilities. One unified platform. No bolt-ons, no integrations to maintain.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="card card-hover p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-soft tx-foreground">
                  {f.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold tx-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed tx-muted">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUCT DETAIL SECTIONS ===== */}
      <section className="py-24 bg-soft">
        <div className="mx-auto max-w-7xl space-y-24 px-6 lg:px-10">
          {productSections.map((s, idx) => (
            <div key={s.badge} className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <span className="badge-soft inline-block">{s.badge}</span>
                <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl tx-foreground">
                  {s.title}
                </h2>
                <p className="mt-5 max-w-md text-lg leading-relaxed tx-muted">{s.desc}</p>
                <ul className="mt-7 space-y-3">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm tx-foreground">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M4 9l3.5 3.5L14 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {b}
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
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl font-semibold tracking-tight sm:text-5xl tx-foreground">
                  {s.value}
                </div>
                <div className="mt-2 text-sm tx-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section id="pricing" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs uppercase tracking-[0.2em] tx-muted">Pricing</span>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl tx-foreground">
              Simple, transparent pricing.
            </h2>
            <p className="mt-5 text-lg tx-muted">
              Start free. Upgrade when you need more. No hidden fees.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {pricing.map((p) => (
              <div
                key={p.name}
                className={`card pricing-card ${p.featured ? "pricing-featured" : ""}`}
              >
                {p.featured && (
                  <span className="badge absolute -top-3 left-1/2 -translate-x-1/2">Most popular</span>
                )}
                <h3 className="text-lg font-semibold tx-foreground">{p.name}</h3>
                <p className="mt-1 text-sm tx-muted">{p.desc}</p>
                <div className="mt-6 flex items-baseline gap-1.5">
                  <span className="text-4xl font-semibold tracking-tight tx-foreground">{p.price}</span>
                  {p.period && <span className="text-sm tx-soft">{p.period}</span>}
                </div>
                <a
                  href="#"
                  className={`mt-6 block text-center py-3 text-sm font-medium ${p.featured ? "btn-primary" : "btn-outline"}`}
                >
                  {p.cta}
                </a>
                <ul className="mt-7 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm tx-muted">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="mt-0.5 shrink-0">
                        <path d="M4 9l3.5 3.5L14 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {f}
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
            <span className="text-xs uppercase tracking-[0.2em] tx-muted">Customers</span>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl tx-foreground">
              Loved by data teams.
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="card p-7">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="tx-soft mb-4">
                  <path d="M11 7H6a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h2v3a3 3 0 0 1-3 3M25 7h-5a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h2v3a3 3 0 0 1-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-base leading-relaxed tx-foreground">{t.quote}</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="avatar">{t.initials}</span>
                  <div>
                    <div className="text-sm font-medium tx-foreground">{t.name}</div>
                    <div className="text-xs tx-soft">{t.role}</div>
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
            <span className="text-xs uppercase tracking-[0.2em] tx-muted">FAQ</span>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl tx-foreground">
              Questions, answered.
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
            <span className="text-xs uppercase tracking-[0.2em] tx-muted">Get started</span>
            <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl tx-foreground">
              Ship your first dashboard today.
            </h2>
            <p className="mx-auto mt-6 max-w-md text-lg tx-muted">
              Free 14-day trial. No credit card. Set up in 5 minutes.
            </p>
            <a href="#pricing" className="btn-primary mt-10 inline-flex items-center gap-2 px-8 py-4 text-sm font-medium">
              Start free trial
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
                <span className="text-lg font-semibold tracking-tight tx-foreground">Aurora</span>
              </Link>
              <p className="mt-4 max-w-xs text-sm tx-soft">
                The analytics platform for teams that run on data.
              </p>
              <div className="mt-6 flex gap-3">
                {["X", "in", "GH", "@"].map((s) => (
                  <a key={s} href="#" className="flex h-9 w-9 items-center justify-center rounded-lg border ln-line text-xs tx-muted transition hover:tx-foreground hover:border-[#0a0a0a]">
                    {s}
                  </a>
                ))}
              </div>
            </div>
            {footerLinks.map((col) => (
              <div key={col.h}>
                <div className="text-xs uppercase tracking-wider tx-soft">{col.h}</div>
                <ul className="mt-4 space-y-2.5 text-sm tx-muted">
                  {col.l.map((x) => (
                    <li key={x}>
                      <a href="#" className="link-underline transition hover:tx-foreground">{x}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t ln-line pt-8 text-xs tx-soft sm:flex-row">
            <div>© 2026 Aurora, Inc. All rights reserved.</div>
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
