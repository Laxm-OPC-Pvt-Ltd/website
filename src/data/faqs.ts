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
      "Laxm OPC Private Limited specializes in high-impact AI/ML product development, technology advisory, and innovation acceleration. Our core expertise includes Computer Vision, Natural Language Processing (NLP), Predictive Analytics, and the deployment of Custom Generative AI solutions designed to solve complex business challenges.",
    category: "Services",
    keywords: ["services", "AI", "ML", "consulting", "advisory", "Generative AI"],
  },
  {
    id: "faq-2",
    question: "Why choose an OPC (One Person Company) structure for AI consulting?",
    answer:
      "Our OPC structure offers the ideal balance of corporate legal protection and founder-led agility. Clients benefit from direct access to senior technical leadership and rapid decision-making, ensuring that high-stakes AI projects are executed with personal accountability and without the overhead of larger agencies.",
    category: "Company",
    keywords: ["OPC", "One Person Company", "structure", "accountability", "agility"],
  },
  {
    id: "faq-3",
    question: "Where is Laxm located and how does it benefit clients?",
    answer:
      "We are headquartered in the Financial District of Hyderabad (Gachibowli), India's premier technology hub. This location places us at the center of the AI/ML ecosystem, allowing us to leverage world-class infrastructure and a network of top-tier technical talent to deliver enterprise-grade solutions globally.",
    category: "Company",
    keywords: ["location", "Hyderabad", "Financial District", "Gachibowli", "India"],
  },
  {
    id: "faq-4",
    question: "How do we start a project with Laxm?",
    answer:
      "Project engagement begins with a strategic consultation to align on goals. We then conduct a rapid feasibility study and propose a phased roadmap. Our streamlined onboarding process typically allows for project kickoff within 7-14 days, ensuring your innovation goals stay on track.",
    category: "Process",
    keywords: ["start", "onboarding", "kickoff", "consultation", "workflow"],
  },
  {
    id: "faq-5",
    question: "What industries does Laxm specialize in?",
    answer:
      "We deliver tailored AI solutions for Fintech, Healthcare, Retail, and Logistics. By applying industry-specific ML models, we help businesses automate decision-making, enhance customer experiences through NLP, and optimize supply chains using predictive analytics.",
    category: "Services",
    keywords: ["fintech", "healthcare", "retail", "logistics", "specialization"],
  },
  {
    id: "faq-6",
    question: "What makes Laxm unique compared to traditional tech consultants?",
    answer:
      "Laxm goes beyond slide decks; we are builders. We combine strategic advisory with hands-on engineering to create functional AI prototypes and production-ready systems. Our 'Product-First' mindset ensures that the technology we build creates measurable ROI, not just technical documentation.",
    category: "Company",
    keywords: ["unique", "different", "engineering", "product-first", "ROI"],
  },
  {
    id: "faq-7",
    question: "How does Laxm ensure data privacy and AI ethics?",
    answer:
      "We prioritize security through SOC2-compliant protocols, end-to-end encryption, and strict data isolation. Furthermore, we adhere to Ethical AI principles, ensuring our models are transparent, unbiased, and compliant with global data protection regulations like GDPR and the Digital Personal Data Protection Act.",
    category: "Security",
    keywords: ["security", "privacy", "ethics", "compliance", "data protection"],
  },
  {
    id: "faq-8",
    question: "What is your typical project timeline and pricing model?",
    answer:
      "Most AI/ML implementations range from 8 to 24 weeks. We offer three transparent pricing tiers: Fixed-Scope (for specific builds), Monthly Retainers (for ongoing advisory), and Milestone-Based (for R&D and innovation labs), ensuring budget predictability for our partners.",
    category: "Process",
    keywords: ["timeline", "pricing", "cost", "models", "budget"],
  },
  {
    id: "faq-9",
    question: "Does Laxm provide post-launch support and maintenance?",
    answer:
      "Yes. We offer Managed AI Services that include model monitoring, drift detection, and periodic retraining. This ensures that your AI systems remain accurate and efficient as real-world data evolves over time.",
    category: "Support",
    keywords: ["support", "maintenance", "model drift", "retraining", "SLA"],
  },
  {
    id: "faq-10",
    question: "How can we measure ROI from Laxm's AI/ML solutions?",
    answer:
      "We define success through concrete KPIs such as reduction in operational costs, percentage increase in automation, or uplift in customer conversion rates. We provide custom analytics dashboards so stakeholders can track the performance of their AI investments in real-time.",
    category: "Process",
    keywords: ["ROI", "KPIs", "analytics", "value", "performance"],
  },
  {
    id: "faq-11",
    question: "What are the official legal and registration details of Laxm?",
    answer:
      "Laxm OPC Private Limited is a legally registered entity under the Ministry of Corporate Affairs (MCA), Government of India. Corporate Identification Number (CIN): U62011TS2025OPC208265. Incorporated in December 2025 with its registered office in Hyderabad, Telangana.",
    category: "Legal",
    keywords: ["legal", "CIN", "registration", "MCA", "Hyderabad"],
  },
  {
    id: "faq-12",
    question: "Which technology stack does Laxm utilize?",
    answer:
      "Our tech stack is built on industry leaders like Python, TensorFlow, PyTorch, and Hugging Face. We leverage cloud-native services from AWS, Azure, and Google Cloud, along with LLM frameworks like LangChain and LlamaIndex for advanced generative AI applications.",
    category: "Technology",
    keywords: ["tech stack", "Python", "TensorFlow", "PyTorch", "LLM", "AWS"],
  },
  // --- NEW GEO-TARGETED FAQS ---
  {
    id: "faq-13",
    question: "Can Laxm (OPC) Pvt Ltd work with international clients outside India?",
    answer:
      "Yes, we operate as a global technology partner. While based in Hyderabad, we serve clients internationally using secure remote collaboration tools and are experienced in navigating cross-border compliance, time-zone management, and international project standards.",
    category: "Company",
    keywords: ["international", "global", "remote", "cross-border", "clients"],
  },
  {
    id: "faq-14",
    question: "How does Laxm handle Intellectual Property (IP) for custom builds?",
    answer:
      "We maintain a 'Client-First' IP policy. All custom code, proprietary algorithms, and trained models developed specifically for your project are owned by you upon completion of the engagement. This is strictly enforced through our standard legal contracts.",
    category: "Legal",
    keywords: ["IP", "Intellectual Property", "ownership", "contract", "legal"],
  },
  {
    id: "faq-15",
    question: "Is Laxm (OPC) Pvt Ltd open to research collaborations?",
    answer:
      "Absolutely. We are passionate about the evolution of AI. We welcome collaborations with academic institutions and corporate R&D departments on projects involving computer vision, NLP, and ethical AI development. Interested parties can contact us via our official email.",
    category: "Company",
    keywords: ["research", "collaboration", "R&D", "academia", "innovation"],
  },
  {
    id: "faq-16",
    question: "How can I verify the authenticity of Laxm OPC Private Limited?",
    answer:
      "You can verify our credentials on the MCA (Ministry of Corporate Affairs) portal using our CIN: U62011TS2025OPC208265. Our physical presence at WeWork Rajapushpa Summit in Hyderabad's Financial District also serves as our primary hub for official correspondence.",
    category: "Legal",
    keywords: ["verify", "authenticity", "MCA portal", "legal check", "trust"],
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
