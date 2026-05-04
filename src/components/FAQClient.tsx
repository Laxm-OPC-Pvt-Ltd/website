"use client";

import { useState, useEffect } from "react";
import { faqs, getCategories } from "@/data/faqs";
import type { FAQ } from "@/data/faqs";
import Card from "@/components/Card";
import CTAButton from "@/components/CTAButton";

interface FAQClientProps {
  jsonLd: string;
}

export default function FAQClient({ jsonLd }: FAQClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredFAQs, setFilteredFAQs] = useState<FAQ[]>(faqs);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [categories, setCategories] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<FAQ[]>([]);

  useEffect(() => {
    setCategories(getCategories());
  }, []);

  useEffect(() => {
    if (searchQuery.trim()) {
      performSearch();
    } else {
      filterByCategory();
    }
  }, [searchQuery, selectedCategory]);

  const performSearch = async () => {
    setIsSearching(true);
    try {
      const response = await fetch(
        `/api/faqs/search?q=${encodeURIComponent(searchQuery)}`
      );
      const data = await response.json();
      if (data.success) {
        setSearchResults(data.results);
        setFilteredFAQs(data.results);
      }
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setIsSearching(false);
    }
  };

  const filterByCategory = () => {
    if (selectedCategory === "All") {
      setFilteredFAQs(faqs);
    } else {
      setFilteredFAQs(faqs.filter((faq) => faq.category === selectedCategory));
    }
    setSearchResults([]);
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <div className="min-h-screen bg-[var(--ivory)]">
        {/* Hero Section */}
        <section className="hero-gradient text-white relative overflow-hidden py-24 min-h-[40vh] flex items-center">
          <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--gold)]/10 rounded-full blur-3xl animate-pulse-glow" />

          <div className="mx-auto max-w-5xl px-6 relative z-10 w-full">
            <Card
              variant="glass-dark"
              className="border-white/10 bg-[var(--navy)]/40 backdrop-blur-xl shadow-2xl animate-fade-in-up"
            >
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
                  Frequently Asked <span className="text-gradient-gold">Questions</span>
                </h1>
                <p className="text-xl text-white/90 leading-relaxed font-medium mb-6 max-w-3xl mx-auto">
                  Get answers about our AI/ML services, OPC structure benefits, and how we help businesses achieve their technology goals.
                </p>
                <div className="h-1 w-20 bg-gradient-to-r from-[var(--gold)] to-transparent rounded-full mx-auto"></div>
              </div>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">

            {/* Search and Filter */}
            <div className="mb-12 space-y-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 rounded-xl bg-white border border-[var(--border)] text-[var(--navy)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--gold)] transition-colors shadow-sm"
                />
                {isSearching && (
                  <div className="absolute right-4 top-4 text-[var(--text-secondary)]">
                    <div className="animate-spin">⚙️</div>
                  </div>
                )}
              </div>

              {/* Category Filter */}
              {!searchQuery && (
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setSelectedCategory("All")}
                    className={`px-6 py-2 rounded-full transition-all ${
                      selectedCategory === "All"
                        ? "bg-[var(--gold)] text-[var(--navy)] font-semibold shadow-lg"
                        : "bg-white border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--gold)]/50"
                    }`}
                  >
                    All
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-6 py-2 rounded-full transition-all ${
                        selectedCategory === category
                          ? "bg-[var(--gold)] text-[var(--navy)] font-semibold shadow-lg"
                          : "bg-white border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--gold)]/50"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Results Count */}
            <div className="text-sm text-[var(--text-secondary)] mb-6">
              Showing {filteredFAQs.length} result{filteredFAQs.length !== 1 ? "s" : ""}
              {searchQuery && ` for "${searchQuery}"`}
            </div>

            {/* FAQs List */}
            <div className="space-y-4 mb-16">
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((faq, index) => (
                  <Card
                    key={faq.id}
                    variant="solid"
                    className="hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-transparent hover:border-[var(--gold)]/20"
                  >
                    <div className="p-8">
                      <button
                        onClick={() =>
                          setExpandedId(expandedId === faq.id ? null : faq.id)
                        }
                        className="w-full text-left group"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-[var(--gold)] font-bold text-lg">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-[var(--navy)] mb-3 leading-tight group-hover:text-[var(--gold)] transition-colors">
                              {faq.question}
                            </h3>
                            {expandedId === faq.id && (
                              <div className="text-[var(--text-secondary)] leading-relaxed animate-fade-in">
                                {faq.answer}
                              </div>
                            )}
                          </div>
                          <div className="text-[var(--gold)] text-xl flex-shrink-0 ml-4">
                            {expandedId === faq.id ? "−" : "+"}
                          </div>
                        </div>
                      </button>
                    </div>
                  </Card>
                ))
              ) : (
                <Card variant="solid" className="text-center py-12">
                  <div className="text-[var(--text-secondary)]">
                    <p className="mb-4">No FAQs found matching your search.</p>
                    <button
                      onClick={() => setSearchQuery("")}
                      className="text-[var(--gold)] hover:underline font-medium"
                    >
                      Clear search
                    </button>
                  </div>
                </Card>
              )}
            </div>

            {/* CTA Section */}
            <Card variant="solid" className="bg-gradient-to-r from-[var(--navy)] to-[var(--navy-light)] text-white border-0">
              <div className="p-10 text-center">
                <h2 className="text-3xl font-bold mb-4">
                  Still Have <span className="text-[var(--gold)]">Questions?</span>
                </h2>
                <p className="text-white/80 mb-8 text-lg max-w-2xl mx-auto">
                  Ready to discuss your AI/ML project? Let's talk about how we can help you achieve your technology goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <CTAButton href="/contact" variant="primary" className="text-center justify-center">
                    Get Started
                  </CTAButton>
                  <CTAButton href="/about" variant="outline" className="text-center justify-center border-white text-white hover:bg-white hover:text-[var(--navy)]">
                    Learn More About Us
                  </CTAButton>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}
