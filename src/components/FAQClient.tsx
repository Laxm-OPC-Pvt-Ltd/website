"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs, getCategories } from "@/data/faqs";
import type { FAQ } from "@/data/faqs";
import CTAButton from "@/components/CTAButton";

interface FAQClientProps {
  jsonLd: string;
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <motion.svg
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.22 }}
      width="18"
      height="18"
      viewBox="0 0 20 20"
      fill="none"
      className="flex-shrink-0 text-[var(--gold)]"
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

function SearchIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      className="text-[var(--gold)]/50"
    >
      <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="m21 21-4.35-4.35"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Spinner() {
  return (
    <svg
      className="animate-spin text-[var(--gold)]"
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: FAQ;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.04, 0.3) }}
      className={`rounded-xl border transition-colors duration-200 overflow-hidden ${
        isOpen
          ? "border-[var(--gold)]/35 bg-white/[0.06]"
          : "border-white/[0.08] bg-white/[0.03] hover:border-white/[0.15]"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full text-left px-6 py-5 flex items-center gap-4 group"
      >
        <span className="text-xs font-mono text-[var(--gold)]/40 w-6 flex-shrink-0 select-none tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          className={`flex-1 text-[0.9375rem] font-medium leading-snug transition-colors ${
            isOpen ? "text-white" : "text-white/75 group-hover:text-white"
          }`}
        >
          {faq.question}
        </span>
        <ChevronIcon open={isOpen} />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pl-16 text-sm text-white/60 leading-relaxed border-t border-white/[0.07] pt-4">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQClient({ jsonLd }: FAQClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredFAQs, setFilteredFAQs] = useState<FAQ[]>(faqs);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [categories, setCategories] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setCategories(getCategories());
  }, []);

  const filterByCategory = useCallback((cat: string) => {
    if (cat === "All") {
      setFilteredFAQs(faqs);
    } else {
      setFilteredFAQs(faqs.filter((faq) => faq.category === cat));
    }
  }, []);

  useEffect(() => {
    if (!searchQuery.trim()) {
      filterByCategory(selectedCategory);
      return;
    }

    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(async () => {
      setIsSearching(true);
      try {
        const response = await fetch(
          `/api/faqs/search?q=${encodeURIComponent(searchQuery.trim())}`
        );
        const data = await response.json();
        if (data.success) setFilteredFAQs(data.results);
      } catch {
        // fallback to local filter if the API is unavailable
        const q = searchQuery.toLowerCase();
        setFilteredFAQs(
          faqs.filter(
            (f) =>
              f.question.toLowerCase().includes(q) ||
              f.answer.toLowerCase().includes(q)
          )
        );
      } finally {
        setIsSearching(false);
      }
    }, 300);

    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, [searchQuery, selectedCategory, filterByCategory]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setSearchQuery("");
    filterByCategory(cat);
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />

      <div className="min-h-screen bg-[var(--navy)]">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden pt-28 pb-16 hero-gradient">
          <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />
          <div className="absolute -top-40 left-1/3 w-[640px] h-[640px] bg-[var(--gold)]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="mx-auto max-w-3xl px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--gold)]/30 bg-[var(--gold)]/10 text-[var(--gold)] text-sm font-medium tracking-wide mb-6">
                Support Center
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight leading-tight">
                Frequently Asked{" "}
                <span className="text-gradient-gold">Questions</span>
              </h1>
              <p className="text-base text-white/60 max-w-xl mx-auto leading-relaxed">
                Everything you need to know about our AI/ML services, engagement
                model, and how we deliver results.
              </p>
            </motion.div>

            {/* Search bar */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-9 relative max-w-lg mx-auto"
            >
              <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                {isSearching ? <Spinner /> : <SearchIcon />}
              </div>
              <input
                type="text"
                placeholder="Search questions…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-10 py-3.5 rounded-xl bg-white/[0.06] border border-white/[0.10] text-white placeholder-white/25 focus:outline-none focus:border-[var(--gold)]/50 focus:bg-white/[0.09] transition-all text-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/25 hover:text-white/60 transition-colors text-xl leading-none"
                  aria-label="Clear search"
                >
                  &times;
                </button>
              )}
            </motion.div>

            {/* Category filter */}
            {!searchQuery && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.25 }}
                className="mt-5 flex flex-wrap gap-2 justify-center"
              >
                {["All", ...categories].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === cat
                        ? "bg-[var(--gold)] text-[var(--navy)] shadow-lg shadow-[var(--gold)]/20"
                        : "bg-white/[0.06] border border-white/[0.10] text-white/50 hover:border-[var(--gold)]/40 hover:text-white/80"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </motion.div>
            )}
          </div>
        </section>

        {/* ── FAQ Accordion ── */}
        <section className="py-14 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs text-white/30 mb-7 tracking-wide">
              {filteredFAQs.length} result{filteredFAQs.length !== 1 ? "s" : ""}
              {searchQuery && (
                <>
                  {" "}for &ldquo;{searchQuery}&rdquo;
                </>
              )}
            </p>

            <AnimatePresence mode="wait">
              {filteredFAQs.length > 0 ? (
                <motion.div
                  key="results"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-2.5"
                >
                  {filteredFAQs.map((faq, index) => (
                    <FAQItem
                      key={faq.id}
                      faq={faq}
                      index={index}
                      isOpen={expandedId === faq.id}
                      onToggle={() =>
                        setExpandedId(expandedId === faq.id ? null : faq.id)
                      }
                    />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-20"
                >
                  <p className="text-white/30 mb-4 text-sm">
                    No results for &ldquo;{searchQuery}&rdquo;
                  </p>
                  <button
                    onClick={() => setSearchQuery("")}
                    className="text-[var(--gold)] hover:underline text-sm"
                  >
                    Clear search
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ── CTA ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-16 rounded-2xl border border-[var(--gold)]/20 bg-gradient-to-br from-white/[0.04] to-[var(--gold)]/[0.05] p-10 text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Still have{" "}
                <span className="text-gradient-gold">questions?</span>
              </h2>
              <p className="text-white/50 mb-8 text-sm max-w-md mx-auto leading-relaxed">
                Ready to discuss your AI/ML project? Let&apos;s talk about how
                we can help you achieve your technology goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton href="/contact" variant="primary">
                  Get in Touch
                </CTAButton>
                <CTAButton
                  href="/about"
                  variant="outline"
                  className="text-white border-white/25 hover:bg-white/10"
                >
                  About Us
                </CTAButton>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}