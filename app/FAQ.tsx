"use client";

import { useState, useRef, useEffect } from "react";
import { useI18n } from "@/lib/i18n/I18nContext";

const FAQ_COUNT = 6; // q1..q6 defined in i18n

export default function FAQ() {
  const { t } = useI18n();
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
      {Array.from({ length: FAQ_COUNT }).map((_, i) => {
        const qi = i + 1;
        return (
          <div key={qi} className="faq-item">
            <button
              type="button"
              className="faq-question"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span>{t(`home.faq.q${qi}.q`)}</span>
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
                {t(`home.faq.q${qi}.a`)}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
