export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  contentHtml: string;
};

export const posts: Post[] = [
  {
    slug: "strategic-advisory-for-modern-platforms",
    title: "Strategic Advisory for Modern Platforms",
    excerpt:
      "How to align architecture and operating models to accelerate delivery.",
    date: "2025-12-01",
    contentHtml:
      "<p>Platform strategy connects product roadmaps with technical architecture and team workflows. Focus on <strong>clear boundaries</strong>, <strong>golden paths</strong>, and <strong>observability</strong> to scale.</p>",
  },
  {
    slug: "ai-ml-innovation-playbook",
    title: "AI/ML Innovation Playbook",
    excerpt:
      "From discovery to delivery: patterns for building AI/ML products responsibly.",
    date: "2025-12-10",
    contentHtml:
      "<p>Start with data readiness and problem framing. Iterate quickly with small <em>experiments</em>, measure impact, and design for feedback and safety.</p>",
  },
];
