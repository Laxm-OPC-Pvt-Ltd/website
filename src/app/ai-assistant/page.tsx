import AIChat from "@/components/AIChat";
import { canonicalUrl } from "@/lib/metadata";

export const metadata = {
  title: "AI Assistant - Laxm",
  description: "Chat with our AI assistant to learn more about Laxm and our services",
  alternates: {
    canonical: canonicalUrl("/ai-assistant"),
  },
};

export default function AIChatPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-32 pb-20">
      <div className="mx-auto max-w-2xl px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI Assistant
          </h1>
          <p className="text-xl text-gray-300">
            Ask our AI anything about Laxm and our services
          </p>
        </div>

        {/* Chat Component */}
        <div className="h-[600px]">
          <AIChat />
        </div>

        {/* Tips */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">💡 Tips</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Ask about our services</li>
              <li>• Learn about our approach</li>
              <li>• Get information about timelines</li>
              <li>• Ask how to get started</li>
            </ul>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">🎯 Features</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Instant responses 24/7</li>
              <li>• Knowledge from our FAQs</li>
              <li>• Source attribution</li>
              <li>• Context-aware answers</li>
            </ul>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 bg-slate-800 border border-[var(--gold)] rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Ready to work with us?
          </h2>
          <p className="text-gray-300 mb-6">
            Get more information or schedule a consultation with our team.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-[var(--gold)] text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
