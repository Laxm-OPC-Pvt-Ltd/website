export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  keywords: string[];
}

export const faqs: FAQ[] = [
  {
    id: "faq-1",
    question: "What services does Laxm OPC Private Limited offer?",
    answer:
      "We provide end-to-end support from strategy to implementation: AI/ML product development, technology advisory, strategic consulting, innovation acceleration, and digital transformation delivery. In practice, that means we can help you choose the right use cases, build production-grade systems, and put governance and KPIs around outcomes. Our strongest delivery tracks include Generative AI, NLP, Computer Vision, predictive analytics, and custom model integration.",
    category: "Services",
    keywords: ["services", "AI", "ML", "consulting", "advisory", "Generative AI"],
  },
  {
    id: "faq-2",
    question: "Why choose an OPC (One Person Company) structure for AI consulting?",
    answer:
      "An OPC model gives you both accountability and speed. You get direct access to founder-level leadership for technical and business decisions, while still engaging with a legally registered private limited entity under MCA. For clients, this usually translates to faster decision cycles, fewer handoffs, and clearer ownership of delivery outcomes.",
    category: "Company",
    keywords: ["OPC", "One Person Company", "structure", "accountability", "agility"],
  },
  {
    id: "faq-3",
    question: "Where is Laxm located and how does it benefit clients?",
    answer:
      "We are based in Hyderabad Financial District, one of India's strongest technology ecosystems. This gives clients practical benefits: access to high-quality engineering talent, mature cloud and enterprise infrastructure, and fast collaboration with global teams. Even if your team is outside India, we operate with remote-first delivery and timezone-aware communication.",
    category: "Company",
    keywords: ["location", "Hyderabad", "Financial District", "Gachibowli", "India"],
  },
  {
    id: "faq-4",
    question: "How do we start a project with Laxm?",
    answer:
      "We usually begin with a discovery call to align on business goals, constraints, stakeholders, and success metrics. After that, we run a rapid feasibility and architecture assessment, then share a phased roadmap with scope, timeline, and estimated effort. Most projects can begin within 1-2 weeks once priorities, data access, and governance owners are confirmed.",
    category: "Process",
    keywords: ["start", "onboarding", "kickoff", "consultation", "workflow"],
  },
  {
    id: "faq-5",
    question: "What industries does Laxm specialize in?",
    answer:
      "Our most active domains are FinTech, Healthcare, Retail, and Logistics, with adjacent work in enterprise software and digital operations. Instead of generic AI implementation, we adapt models and workflows to domain realities such as risk controls, compliance, latency requirements, and operational SLAs. This is why we emphasize measurable KPIs for each use case before buildout starts.",
    category: "Services",
    keywords: ["fintech", "healthcare", "retail", "logistics", "specialization"],
  },
  {
    id: "faq-6",
    question: "What makes Laxm unique compared to traditional tech consultants?",
    answer:
      "Many firms stop at recommendations; we stay through implementation and production hardening. Our model combines advisory thinking with hands-on engineering, so your roadmap is directly connected to usable software, monitoring, and business outcomes. We also keep communication direct and practical, which helps leadership teams make faster decisions with less ambiguity.",
    category: "Company",
    keywords: ["unique", "different", "engineering", "product-first", "ROI"],
  },
  {
    id: "faq-7",
    question: "How does Laxm ensure data privacy and AI ethics?",
    answer:
      "We embed security and ethics from the design phase, not as a final checklist. Typical controls include least-privilege access, encrypted data flows, environment isolation, auditability, and bias/quality checks aligned to your domain risk profile. We also align implementation choices with applicable regulations and internal policy standards so teams can scale responsibly.",
    category: "Security",
    keywords: ["security", "privacy", "ethics", "compliance", "data protection"],
  },
  {
    id: "faq-8",
    question: "What is your typical project timeline and pricing model?",
    answer:
      "Most engagements fall within 8-24 weeks depending on data readiness, integration depth, and compliance complexity. For commercial structure, we typically use fixed-scope for defined builds, milestone-based plans for innovation tracks, and retainers for ongoing advisory and optimization. We agree review checkpoints early so you can evaluate value and adjust direction without surprises.",
    category: "Process",
    keywords: ["timeline", "pricing", "cost", "models", "budget"],
  },
  {
    id: "faq-9",
    question: "Does Laxm provide post-launch support and maintenance?",
    answer:
      "Yes, we support post-launch operations through managed services. That includes model monitoring, drift detection, retraining cycles, performance tuning, and incident response guidance for production issues. The goal is to keep your system accurate and reliable as user behavior, data distributions, and business priorities evolve.",
    category: "Support",
    keywords: ["support", "maintenance", "model drift", "retraining", "SLA"],
  },
  {
    id: "faq-10",
    question: "How can we measure ROI from Laxm's AI/ML solutions?",
    answer:
      "We define ROI at the start with explicit baseline and target KPIs. Depending on your use case, these can include cycle-time reduction, automation rates, error reduction, conversion uplift, retention impact, or operating cost efficiency. We recommend shared dashboards and monthly review cadence so business and technical teams stay aligned on measurable value.",
    category: "Process",
    keywords: ["ROI", "KPIs", "analytics", "value", "performance"],
  },
  {
    id: "faq-11",
    question: "What are the official legal and registration details of Laxm?",
    answer:
      "Laxm OPC Private Limited is registered with the Ministry of Corporate Affairs (Government of India). Our Corporate Identification Number is U62011TS2025OPC208265, DPIIT Recognition Number is DIPP260676, and DUNS Number is 771939377. The company is incorporated in Telangana and recognized by Startup India. If needed, clients can verify legal details directly through MCA records and DPIIT portal as part of procurement and due diligence workflows.",
    category: "Legal",
    keywords: ["legal", "CIN", "DPIIT", "DUNS", "registration", "MCA", "Hyderabad", "Startup India"],
  },
  {
    id: "faq-12",
    question: "Which technology stack does Laxm utilize?",
    answer:
      "Our stack is selected based on reliability and maintainability for production environments. Common components include Python, TensorFlow, PyTorch, Hugging Face, Next.js, TypeScript, and cloud services across AWS, Azure, and Google Cloud. For LLM applications, we integrate model APIs and orchestration patterns that fit your latency, privacy, and cost requirements.",
    category: "Technology",
    keywords: ["tech stack", "Python", "TensorFlow", "PyTorch", "LLM", "AWS"],
  },
  // --- NEW GEO-TARGETED FAQS ---
  {
    id: "faq-13",
    question: "Can Laxm (OPC) Pvt Ltd work with international clients outside India?",
    answer:
      "Yes, we actively support international teams. Our delivery model is remote-first with structured communication windows, clear sprint rituals, and security-aware collaboration workflows. We are comfortable operating across time zones and coordinating with legal/compliance expectations for cross-border projects.",
    category: "Company",
    keywords: ["international", "global", "remote", "cross-border", "clients"],
  },
  {
    id: "faq-14",
    question: "How does Laxm handle Intellectual Property (IP) for custom builds?",
    answer:
      "Our default model is client-first ownership for custom deliverables. Project-specific code, workflows, and trained assets are transferred based on agreed contract terms, with clarity on reuse boundaries from day one. This reduces legal ambiguity and helps enterprise teams move faster through security and procurement reviews.",
    category: "Legal",
    keywords: ["IP", "Intellectual Property", "ownership", "contract", "legal"],
  },
  {
    id: "faq-15",
    question: "Is Laxm (OPC) Pvt Ltd open to research collaborations?",
    answer:
      "Absolutely. We are open to research partnerships with universities, labs, and corporate innovation teams, especially in NLP, computer vision, and responsible AI. A good collaboration usually starts with a focused problem statement, expected outcomes, and an execution plan that balances experimentation with practical deployment.",
    category: "Company",
    keywords: ["research", "collaboration", "R&D", "academia", "innovation"],
  },
  {
    id: "faq-16",
    question: "How can I verify the authenticity of Laxm OPC Private Limited?",
    answer:
      "You can verify us through MCA records using CIN U62011TS2025OPC208265, DPIIT portal using DIPP260676, and DUNS database using 771939377. Cross-check public company information through our official website and founder profiles. For enterprise onboarding, we can also provide standard identity and compliance documentation required by procurement teams. This gives partners confidence in legal status, accountability, and continuity.",
    category: "Legal",
    keywords: ["verify", "authenticity", "MCA portal", "DPIIT", "DUNS", "legal check", "trust"],
  },
];

export const faqsByCategory = faqs.reduce(
  (acc, faq) => {
    if (!acc[faq.category]) {
      acc[faq.category] = [];
    }
    acc[faq.category].push(faq);
    return acc;
  },
  {} as Record<string, FAQ[]>,
);

export function searchFAQs(query: string): FAQ[] {
  const lowerQuery = query.toLowerCase();
  return faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(lowerQuery) ||
      faq.answer.toLowerCase().includes(lowerQuery) ||
      faq.keywords.some((keyword) => keyword.toLowerCase().includes(lowerQuery)),
  );
}

export function getFAQsByCategory(category: string): FAQ[] {
  return faqsByCategory[category] || [];
}

export function getCategories(): string[] {
  return Object.keys(faqsByCategory).sort();
}
