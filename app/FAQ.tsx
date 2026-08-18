"use client";

import { useState, useRef, useEffect } from "react";

const FAQS = [
  {
    q: "How does Aurora handle data sources?",
    a: "Connect any source in minutes — PostgreSQL, MySQL, Kafka, S3, Snowflake, or any REST API. Aurora auto-detects schemas and starts streaming within seconds. No agents, no ETL pipelines to maintain.",
  },
  {
    q: "What's the difference between Pro and Enterprise?",
    a: "Pro includes unlimited dashboards, AI insights, and 90-day retention for teams up to 25 users. Enterprise adds SSO/SAML, audit logs, dedicated infrastructure, on-prem deployment options, and a dedicated success manager.",
  },
  {
    q: "Is my data secure?",
    a: "All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Aurora is SOC 2 Type II certified and GDPR compliant. We never store your raw data — only aggregated metrics and metadata.",
  },
  {
    q: "Can I export my dashboards or embed them?",
    a: "Yes. Every dashboard can be shared via public link, embedded as an iframe, or exported as PDF/CSV. Pro and Enterprise plans support white-label embedding with custom domains.",
  },
  {
    q: "How does the AI anomaly detection work?",
    a: "Aurora trains baseline models on your historical data and continuously evaluates new metrics in real time. When a metric deviates beyond a learned threshold, you get an alert with context — not just a number, but an explanation of what changed and why.",
  },
  {
    q: "Do you offer a free trial?",
    a: "The Starter plan is free forever — no credit card required. Pro plans come with a 14-day free trial with full access to all features, including AI insights and unlimited dashboards.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    answerRefs.current.forEach((el, i) => {
      if (!el) return;
      if (open === i) {
        el.style.maxHeight = el.scrollHeight + "px";
        el.style.opacity = "1";
        el.style.paddingBottom = "1.25rem";
      } else {
        el.style.maxHeight = "0px";
        el.style.opacity = "0";
        el.style.paddingBottom = "0";
      }
    });
  }, [open]);

  return (
    <div className="mx-auto max-w-3xl">
      {FAQS.map((item, i) => (
        <div key={i} className="faq-item">
          <button
            type="button"
            className="faq-question"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span>{item.q}</span>
            <svg
              className={`faq-icon ${open === i ? "faq-icon-open" : ""}`}
              width="20" height="20" viewBox="0 0 20 20" fill="none"
            >
              <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
          <div
            ref={(el) => { answerRefs.current[i] = el; }}
            className="faq-answer"
            style={{ maxHeight: open === i ? "500px" : "0px" }}
          >
            <p className="text-sm leading-relaxed tx-muted pb-5 pr-8">
              {item.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
