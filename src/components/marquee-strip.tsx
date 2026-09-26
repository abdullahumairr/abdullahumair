"use client";

import { useLang } from "@/lib/lang-context";

export default function MarqueeStrip() {
  const { t } = useLang();
  const items = t.marqueeItems;

  return (
    <div className="relative z-10 mt-8 border-y border-border-light py-4 dark:border-border-dark sm:mt-12">
      <div className="overflow-hidden">
        <div className="marquee-track animate-marquee">
          {[...items, ...items, ...items, ...items].map((item, i) => (
            <span
              key={i}
              className="mx-4 inline-flex items-center text-sm font-semibold uppercase tracking-widest text-muted-light dark:text-muted-dark sm:text-base"
            >
              {item}
              <span className="ml-8 text-ink-light/40 dark:text-ink-dark/40">
                •
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
