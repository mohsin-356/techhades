"use client";

import { useId, useMemo, useState } from "react";
import { ServiceFaqGroup } from "@/data/serviceFaqs";
import { cn } from "@/lib/utils";

function normalizeText(value: string) {
  return value.toLowerCase().replace(/\s+/g, " ").trim();
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function Highlight({ text, query }: { text: string; query: string }) {
  const q = query.trim();
  if (!q) return <>{text}</>;

  const safe = escapeRegExp(q);
  const parts = text.split(new RegExp(`(${safe})`, "ig"));

  return (
    <>
      {parts.map((part, idx) => {
        const isMatch = part.toLowerCase() === q.toLowerCase();
        return isMatch ? (
          <mark
            key={idx}
            className="rounded bg-[#6467FF]/20 px-1 text-inherit"
          >
            {part}
          </mark>
        ) : (
          <span key={idx}>{part}</span>
        );
      })}
    </>
  );
}

export default function FaqAccordion({
  groups,
  searchable = true,
  oneAtATime = true,
  showCta = true,
  className,
}: {
  groups: ServiceFaqGroup[];
  searchable?: boolean;
  oneAtATime?: boolean;
  showCta?: boolean;
  className?: string;
}) {
  const baseId = useId();
  const [query, setQuery] = useState("");
  const [openKey, setOpenKey] = useState<string | null>(null);

  const normalizedQuery = useMemo(() => normalizeText(query), [query]);

  const visibleGroups = useMemo(() => {
    if (!normalizedQuery) return groups;
    return groups
      .map((g) => {
        const items = g.items.filter((item) => {
          const haystack = normalizeText(`${item.question} ${item.answer}`);
          return haystack.includes(normalizedQuery);
        });
        return { ...g, items };
      })
      .filter((g) => g.items.length > 0);
  }, [groups, normalizedQuery]);

  return (
    <section
      aria-label="Frequently asked questions"
      className={cn("py-16 sm:py-20", className)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-foreground/70 max-w-3xl mx-auto">
            Quick answers to help you make confident decisions — from timelines and
            cost to security, scalability, and ongoing support.
          </p>
        </div>

        {searchable && (
          <div className="max-w-2xl mx-auto mb-10">
            <label htmlFor={`${baseId}-faq-search`} className="sr-only">
              Search FAQs
            </label>
            <input
              id={`${baseId}-faq-search`}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions (e.g., cost, timeline, SEO, security)"
              className="w-full rounded-2xl border border-[rgba(100,103,255,0.25)] bg-[#0B1526] px-4 py-3 text-white placeholder:text-white/50 shadow-[0_0_20px_rgba(100,103,255,0.10)] focus:outline-none focus:ring-2 focus:ring-[#6467FF]"
            />
          </div>
        )}

        <div className="space-y-12">
          {visibleGroups.map((group) => (
            <article key={group.slug} className="space-y-4">
              <header>
                <h2 className="text-2xl sm:text-3xl font-semibold">
                  {group.heading}
                </h2>
                {group.intro && (
                  <p className="mt-2 text-foreground/70 max-w-4xl">
                    {group.intro}
                  </p>
                )}
              </header>

              <div className="space-y-3">
                {group.items.map((item, idx) => {
                  const itemKey = `${group.slug}:${idx}`;
                  const isOpen = oneAtATime ? openKey === itemKey : undefined;
                  const detailsId = `${baseId}-${group.slug}-${idx}`;

                  return (
                    <details
                      key={itemKey}
                      open={oneAtATime ? isOpen : undefined}
                      onToggle={(e) => {
                        if (!oneAtATime) return;
                        const nextOpen = (e.target as HTMLDetailsElement).open;
                        setOpenKey(nextOpen ? itemKey : null);
                      }}
                      className="group rounded-2xl border border-[rgba(100,103,255,0.25)] bg-[#0B1526] shadow-[0_0_20px_rgba(100,103,255,0.10)] overflow-hidden"
                    >
                      <summary
                        aria-controls={`${detailsId}-panel`}
                        className="list-none cursor-pointer select-none px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4"
                      >
                        <h3 className="text-base sm:text-lg font-semibold text-white leading-snug">
                          <Highlight text={item.question} query={query} />
                        </h3>
                        <span
                          aria-hidden="true"
                          className="shrink-0 flex items-center justify-center w-9 h-9 rounded-full border border-white/10 bg-white/5 text-white transition-transform duration-300 group-open:rotate-45"
                        >
                          +
                        </span>
                      </summary>

                      <div
                        id={`${detailsId}-panel`}
                        className="px-5 pb-5 sm:px-6 sm:pb-6"
                      >
                        <div className="h-px bg-gradient-to-r from-transparent via-[#6467FF]/40 to-transparent mb-4" />
                        <div className="text-white/80 leading-relaxed whitespace-pre-line">
                          <Highlight text={item.answer} query={query} />
                        </div>
                      </div>
                    </details>
                  );
                })}
              </div>
            </article>
          ))}

          {visibleGroups.length === 0 && (
            <div className="text-center text-foreground/70">
              No results found. Try searching for timeline, cost, SEO, or security.
            </div>
          )}
        </div>

        {showCta && (
          <div className="mt-14 sm:mt-16 rounded-3xl border border-[rgba(100,103,255,0.25)] bg-gradient-to-br from-[#050714] via-[#0B1526] to-[#050714] p-8 sm:p-10 text-center shadow-[0_0_30px_rgba(67,178,249,0.12)]">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Still have questions?
            </h3>
            <p className="mt-3 text-white/70 max-w-2xl mx-auto">
              Tell us what you’re building, and we’ll recommend the fastest and
              most cost-effective path. Contact us for a free quote.
            </p>
            <a
              href="/contact"
              className="inline-flex mt-6 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#6467FF] to-[#43B2F9] px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(100,103,255,0.25)] hover:shadow-[0_14px_35px_rgba(67,178,249,0.25)] hover:brightness-110 hover:scale-[1.03] active:scale-[0.98] transition"
            >
              Let’s discuss your project
            </a>
          </div>
        )}
      </div>

      <style jsx>{`
        details > summary::-webkit-details-marker {
          display: none;
        }

        details[open] > div {
          animation: faq-open 220ms ease-out;
        }

        @keyframes faq-open {
          from {
            opacity: 0;
            transform: translateY(-6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
