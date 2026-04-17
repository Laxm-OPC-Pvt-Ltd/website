"use client";

import { useState, useEffect } from "react";
import { faqs, getCategories } from "@/data/faqs";
import type { FAQ } from "@/data/faqs";

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("General");
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
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-32 pb-20">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300">
            Find answers to common questions about Laxm and our services
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-gray-400 focus:outline-none focus:border-[var(--gold)] transition-colors"
            />
            {isSearching && (
              <div className="absolute right-4 top-3 text-gray-400">
                <div className="animate-spin">⚙️</div>
              </div>
            )}
          </div>
        </div>

        {/* Category Filter */}
        {!searchQuery && (
          <div className="mb-8 flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-4 py-2 rounded-full transition-all ${
                selectedCategory === "All"
                  ? "bg-[var(--gold)] text-black font-semibold"
                  : "bg-slate-800 text-gray-200 hover:bg-slate-700"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-all ${
                  selectedCategory === category
                    ? "bg-[var(--gold)] text-black font-semibold"
                    : "bg-slate-800 text-gray-200 hover:bg-slate-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Results Count */}
        <div className="text-sm text-gray-400 mb-4">
          Showing {filteredFAQs.length} result{filteredFAQs.length !== 1 ? "s" : ""}
          {searchQuery && ` for "${searchQuery}"`}
        </div>

        {/* FAQs List */}
        <div className="space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq) => (
              <div
                key={faq.id}
                className="border border-slate-700 rounded-lg overflow-hidden hover:border-[var(--gold)] transition-colors"
              >
                <button
                  onClick={() =>
                    setExpandedId(expandedId === faq.id ? null : faq.id)
                  }
                  className="w-full px-6 py-4 text-left bg-slate-800 hover:bg-slate-700 transition-colors flex items-center justify-between"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <span className="text-[var(--gold)] text-xl flex-shrink-0">
                    {expandedId === faq.id ? "−" : "+"}
                  </span>
                </button>
                {expandedId === faq.id && (
                  <div className="px-6 py-4 bg-slate-900 text-gray-300 border-t border-slate-700">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-gray-400">
              <p>No FAQs found matching your search.</p>
              <button
                onClick={() => setSearchQuery("")}
                className="text-[var(--gold)] hover:underline mt-2"
              >
                Clear search
              </button>
            </div>
          )}
        </div>

        {/* AI Assistant CTA */}
        <div className="mt-16 bg-slate-800 border border-[var(--gold)] rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Didn't find your answer?
          </h2>
          <p className="text-gray-300 mb-6">
            Our AI assistant is ready to help. Ask any question about Laxm and our services.
          </p>
          <button className="px-8 py-3 bg-[var(--gold)] text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors">
            Chat with AI Assistant
          </button>
        </div>
      </div>
    </div>
  );
}
