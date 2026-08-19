export type NewsArticle = {
  id: string;
  title: string;
  description: string;
  content?: string;
  readingTime: string;
  publishDate: string;
  url: string;
  references?: string[];
  tags?: string[];
  author?: string;
  featured?: boolean;
  image?: string;
  category?: string;
};

export const newsArticles: NewsArticle[] = [
  {
    id: "laxm-partners-healthcare-ai-launch-2026",
    title:
      "Laxm partners with mid-market healthcare groups to deploy AI-powered workflow automation across clinical back-office operations",
    description:
      "Laxm announces a strategic delivery partnership focused on reducing clinician administrative burden through intelligent workflow automation, AI-assisted documentation, and EHR integration blueprints for mid-sized healthcare providers in South India.",
    content:
      "Hyderabad, Telangana — August 19, 2026 — Laxm OPC Private Limited today announced a focused delivery partnership with mid-market healthcare provider groups to accelerate AI-enabled back-office and clinical workflow modernization. The engagements combine Laxm's deep healthcare technology advisory with its in-house AI product stack to tackle administrative burnout, prior authorization friction, and clinical documentation overhead. Participating groups are expected to reduce non-clinical task time by an estimated 18-25% within the first two quarters after go-live, with early pilots focused on prior authorization automation, patient onboarding digitization, voice-to-text documentation assistance, and anomaly detection in billing and claims workflows. Laxm's delivery methodology anchors each engagement around measurable ROI milestones, interoperability guardrails, and compliance-first design aligned to HIPAA and HITECH requirements. The company's healthcare roadmap also extends into patient experience, virtual care enablement, and analytics-led population health use cases for 2026 and 2027.",
    readingTime: "3 min read",
    publishDate: "2026-08-19",
    url: "https://www.thelaxm.com/news/laxm-partners-healthcare-ai-launch-2026",
    tags: [
      "Healthcare AI",
      "Workflow Automation",
      "HIPAA",
      "Clinical Documentation",
      "Prior Authorization",
    ],
    author: "Laxm OPC Private Limited",
    featured: true,
    category: "Press Release",
  },
  {
    id: "llmkosha-geo-ai-search-platform-update-2026",
    title:
      "LLMKosha advances Generative Engine Optimization (GEO) capabilities with demand-signal monitoring and AI citation tracking for enterprise brands",
    description:
      "The LLMKosha platform update adds AI citation share-of-model reporting, semantic benchmarking, and actionable GEO task workflows so brands can measure and improve how often AI systems recommend them.",
    content:
      "August 15, 2026 — LLMKosha, Laxm's flagship Generative Engine Optimization platform, has rolled out a significant mid-year update focused on three pillars: AI citation monitoring, semantic demand-signal detection, and recommendation-led task automation. The new citation tracking module helps marketing and SEO teams quantify how often a brand appears inside AI-generated responses across multiple assistants. Combined with rank tracking, competitor analysis, and domain scanning, the release gives operators a single dashboard for both traditional search performance and 'share of model' visibility. Demand-signal modules now surface rising semantic question clusters and topic velocity patterns, while the task automation layer translates GEO findings into prioritized workstreams such as schema enrichment opportunities, content refreshes, and structured data fixes. LLMKosha continues to support enterprise marketing, SEO, and product teams with a platform-first approach to discoverability in the AI era.",
    readingTime: "4 min read",
    publishDate: "2026-08-15",
    url: "https://llmkosha.com/blog/geo-citation-tracking-2026",
    references: ["https://llmkosha.com"],
    tags: [
      "GEO",
      "AI Search",
      "Generative Engine Optimization",
      "LLMKosha",
      "Citation Tracking",
    ],
    author: "Laxm OPC Private Limited",
    featured: true,
    category: "Product",
  },
  {
    id: "smart-ai-alarm-android-ios-launch-2026",
    title:
      "Smart AI Alarm launches globally on Android and iOS with cognitive wake challenges, streak tracking, and multilingual AI morning briefings",
    description:
      "Smart AI Alarm, Laxm's consumer wellness app, ships a synchronized global release across Google Play and the App Store with AI-powered challenge modes and personalized wake routines in 14 languages.",
    content:
      "August 10, 2026 — Smart AI Alarm is now available globally for Android and iOS, bringing together cognitive wake challenges, gamified streaks, personalized wake scores, and AI-driven morning briefings. Designed to break the mindless snooze cycle, the app encourages waking through a layered sequence that can blend math puzzles, memory and logic exercises, and AI chat-based challenges with voice and music sequencing. Release highlights include personalized wake scoring, success streak tracking, missed-alarm recovery flows, secure cloud sync, platform-specific notification reliability engineering, and 14-language localization spanning English, Hindi, Spanish, and additional regional and global markets. The Android build is available on Google Play, and the iOS build is live on the App Store, with roadmap items that include health integrations, adaptive routines, and team-based accountability features in subsequent updates.",
    readingTime: "3 min read",
    publishDate: "2026-08-10",
    url: "https://www.thelaxm.com/products",
    references: [
      "https://play.google.com/store/apps/details?id=com.laxm.smartaialarm&pcampaignid=web_share",
      "https://apps.apple.com/us/app/smart-ai-alarm/id6770541551",
    ],
    tags: [
      "Consumer AI",
      "Smart AI Alarm",
      "Mobile App",
      "Android",
      "iOS",
      "Wellness Tech",
    ],
    author: "Laxm OPC Private Limited",
    featured: false,
    category: "Launch",
  },
  {
    id: "na-diary-private-journaling-app-announcement-2026",
    title:
      "NA DIARY announced as Laxm's privacy-first journaling and habit tracking platform with local-first encryption and sentiment-aware reflection prompts",
    description:
      "NA DIARY enters early access with a focus on personal privacy, structured habit tracking, emotion-aware prompts, and secure on-device storage options for sensitive reflections.",
    content:
      "August 05, 2026 — Laxm announced NA DIARY, a privacy-first journaling and habit tracking product designed to help users build reflective routines while keeping their personal content protected. NA DIARY is being positioned as a tool for users who want the cognitive benefits of consistent journaling without trading ownership of their most sensitive thoughts. The early access release includes daily guided prompts, customizable habit check-ins, sentiment-aware reflection cues, streak mechanics, and export options that keep users in control of their data. Product design emphasizes local-first storage options and strong encryption defaults, with optional cloud sync for users who want secure cross-device continuity. Laxm plans to extend NA DIARY with wellness integrations, AI-assisted summarization (operating with strong privacy boundaries), and coaching-style reflection frameworks as the product moves toward general availability.",
    readingTime: "3 min read",
    publishDate: "2026-08-05",
    url: "https://www.thelaxm.com/products",
    tags: [
      "NA DIARY",
      "Journaling",
      "Habit Tracking",
      "Privacy",
      "Wellness",
      "Product Announcement",
    ],
    author: "Laxm OPC Private Limited",
    featured: false,
    category: "Product",
  },
  {
    id: "fractional-cto-startup-advisory-hyderabad-2026",
    title:
      "Laxm expands fractional CTO and startup advisory reach for early-stage product teams building AI-enabled MVPs in Hyderabad and global remote markets",
    description:
      "Laxm expands its founder-facing advisory practice to include structured fractional CTO engagements with architecture guardrails, roadmap sprints, and AI-integration readiness reviews.",
    content:
      "July 28, 2026 — Laxm has expanded its fractional CTO and startup advisory practice to support a growing pipeline of early-stage teams building AI-enabled MVPs. The engagement model is optimized for founders and SMEs who need senior technical strategy without the cost and delay of a full-time executive hire. Typical engagements include architecture blueprints, MVP scope design, AI integration readiness reviews, build-vs-buy guidance, compliance and security guardrails, and hiring frameworks for scaling teams. The company continues to operate from Hyderabad while serving global clients in remote and hybrid delivery models, with a focus on measurable milestones, runway-aware planning, and founder-friendly execution cadence. Recent advisory cohorts have spanned SaaS, AI tooling, regulated healthcare workflows, and automation-intensive operations.",
    readingTime: "2 min read",
    publishDate: "2026-07-28",
    url: "https://www.thelaxm.com/services",
    tags: [
      "Fractional CTO",
      "MVP Development",
      "Startup Advisory",
      "AI Products",
      "Hyderabad",
    ],
    author: "Laxm OPC Private Limited",
    featured: false,
    category: "Company",
  },
  {
    id: "insight-ai-knowledge-discovery-beta-2026",
    title:
      "Insight AI enters limited beta for enterprise knowledge discovery, document summarization, and NLP-driven trend analysis",
    description:
      "Insight AI beta opens for design partners to evaluate advanced NLP pipelines that transform large document corpora into structured insights, trend signals, and executive-ready summaries.",
    content:
      "July 15, 2026 — Insight AI, Laxm's advanced knowledge discovery engine, is now available in limited beta for design partners and enterprise evaluation cohorts. The platform targets teams that need to synthesize high volumes of unstructured content—including RFPs, research documents, policy updates, market intelligence, and operational reports—into actionable insights. Beta capabilities include document summarization, multi-document comparison, sentiment and trend forecasting, entity extraction, and executive-ready briefing generation. Insight AI sits alongside Laxm's broader AI product line and is being offered initially through guided beta engagements with structured success metrics and close feedback loops. Organizations interested in an evaluation can request a demo through Laxm's product pages.",
    readingTime: "3 min read",
    publishDate: "2026-07-15",
    url: "https://www.thelaxm.com/contact",
    tags: [
      "Insight AI",
      "NLP",
      "Knowledge Discovery",
      "Document Summarization",
      "Beta",
    ],
    author: "Laxm OPC Private Limited",
    featured: false,
    category: "Product",
  },
  {
    id: "geo-eat-llm-citations-thought-leadership-2026",
    title:
      "Laxm publishes expanded editorial series on E-E-A-T, semantic content architecture, and LLM citation best practices for AI-native discoverability",
    description:
      "A multi-part thought-leadership series from Laxm details how brands can strengthen AI retrievability through E-E-A-T signals, modular content structure, and LLM-friendly structured data.",
    content:
      "July 01, 2026 — Laxm published the latest installments in its ongoing editorial series about AI-native discoverability, covering the practical intersection of E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness), semantic content architecture, and LLM citation readiness. The series is designed to help marketing, content, and SEO teams understand why some brands are consistently surfaced inside AI-generated answers while others remain invisible, even with strong traditional search performance. Topics covered include modular content chunking best practices, direct-answer formatting, the role of structured data and schema.org markup in LLMs, the importance of author and publisher identity, and how real-world case studies and first-person experience signals translate into better AI retrievability. The series is published on the Laxm Insights blog and is accompanied by practical checklists teams can apply immediately.",
    readingTime: "4 min read",
    publishDate: "2026-07-01",
    url: "https://www.thelaxm.com/blog",
    tags: [
      "GEO",
      "E-E-A-T",
      "LLM Citations",
      "Content Strategy",
      "Thought Leadership",
    ],
    author: "Laxm OPC Private Limited",
    featured: false,
    category: "Editorial",
  },
];
