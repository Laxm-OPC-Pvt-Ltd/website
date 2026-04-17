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
    question: "What does Laxm do?",
    answer:
      "Laxm is a strategic consultancy that leverages deep insights into human behavior combined with cutting-edge technology to design strategies and solutions that boost engagement, drive efficiency, and accelerate business growth. We specialize in human-centered innovation and digital transformation.",
    category: "General",
    keywords: ["Laxm", "services", "what", "company"],
  },
  {
    id: "faq-2",
    question: "What services does Laxm offer?",
    answer:
      "Laxm offers a comprehensive range of services including strategic consulting, digital transformation, product design, technology implementation, and performance optimization. Each service is tailored to meet the unique needs of your business and is grounded in human-centered design principles.",
    category: "Services",
    keywords: ["services", "offering", "what", "solutions"],
  },
  {
    id: "faq-3",
    question: "How can I get started with Laxm?",
    answer:
      "Getting started is simple! You can explore our services on the Services page or reach out through the Contact page. Our team will work with you to understand your needs, challenges, and goals to create a customized solution that drives real growth.",
    category: "Getting Started",
    keywords: ["start", "contact", "begin", "get started"],
  },
  {
    id: "faq-4",
    question: "What industries does Laxm serve?",
    answer:
      "Laxm works with organizations across various industries. Whether you're in technology, finance, healthcare, retail, or any other sector, our human-centered approach and technology expertise help us deliver solutions that drive meaningful results.",
    category: "Services",
    keywords: ["industry", "sectors", "verticals", "business"],
  },
  {
    id: "faq-5",
    question: "How does Laxm approach human-centered innovation?",
    answer:
      "Human-centered innovation is at the core of everything we do. We start by deeply understanding your users, their needs, pain points, and behaviors. We then combine these insights with cutting-edge technology to design solutions that are not just innovative, but also meaningful and impactful.",
    category: "Methodology",
    keywords: ["approach", "methodology", "human-centered", "innovation"],
  },
  {
    id: "faq-6",
    question: "What is the typical timeline for a project?",
    answer:
      "Project timelines vary depending on scope and complexity. A simple consulting engagement might take a few weeks, while a comprehensive digital transformation could span several months. During your initial consultation, we'll provide a detailed timeline based on your specific needs.",
    category: "Process",
    keywords: ["timeline", "duration", "how long", "schedule"],
  },
  {
    id: "faq-7",
    question: "Do you offer ongoing support after project completion?",
    answer:
      "Yes, absolutely. We believe in building long-term partnerships with our clients. We offer ongoing support, maintenance, and optimization services to ensure your solutions continue to deliver value. Our support plans are flexible and can be customized to your needs.",
    category: "Support",
    keywords: ["support", "maintenance", "after", "ongoing"],
  },
  {
    id: "faq-8",
    question: "How can I contact Laxm?",
    answer:
      "You can reach us through the Contact page on our website, or you can email us directly. We're here to answer any questions and discuss how we can help your business grow.",
    category: "Contact",
    keywords: ["contact", "reach", "email", "phone"],
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
  {} as Record<string, FAQ[]>
);

export function searchFAQs(query: string): FAQ[] {
  const lowerQuery = query.toLowerCase();
  return faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(lowerQuery) ||
      faq.answer.toLowerCase().includes(lowerQuery) ||
      faq.keywords.some((keyword) =>
        keyword.toLowerCase().includes(lowerQuery)
      )
  );
}

export function getFAQsByCategory(category: string): FAQ[] {
  return faqsByCategory[category] || [];
}

export function getCategories(): string[] {
  return Object.keys(faqsByCategory).sort();
}
