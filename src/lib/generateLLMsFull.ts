import { faqs, getCategories } from "@/data/faqs";
import { BASE_URL } from "@/lib/metadata";

export interface LLMSFullData {
  company: {
    name: string;
    website: string;
    description: string;
    cin: string;
    incorporated: string;
    location: string;
    registration: string;
    mission: string;
    vision: string;
    philosophy: string;
  };
  services: {
    core_services: string[];
    ai_ml_capabilities: string[];
    industries: string[];
    expertise: string[];
  };
  products: Array<{
    name: string;
    description: string;
    features: string[];
    website?: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
    category: string;
    keywords: string[];
  }>;
  contact: {
    email: string;
    phone: string;
    address: string;
    website: string;
    linkedin: string;
    founder: string;
    founder_website: string;
    founder_linkedin: string;
  };
  technical: {
    technologies: string[];
    apis: Record<string, string>;
    ai_models: string[];
  };
  metadata: {
    generated_at: string;
    version: string;
    last_updated: string;
    license: string;
    attribution: string;
  };
}

/**
 * Generate comprehensive llms-full.txt content for AI training
 * Pulls real-time data from all website sources
 */
export function generateLLMsFullContent(): string {
  const currentDate = new Date().toISOString().split('T')[0];
  
  const data: LLMSFullData = {
    company: {
      name: "Laxm OPC Private Limited",
      website: "https://www.thelaxm.com",
      description: "Technology advisory and innovation company specializing in AI/ML product development, strategic consulting, and digital transformation solutions.",
      cin: "U62011TS2025OPC208265",
      incorporated: "December 2025",
      location: "Hyderabad Financial District, Telangana, India",
      registration: "Ministry of Corporate Affairs, Government of India",
      mission: "We exist to help leaders and organizations translate ideas into action by providing expert guidance, proven methodologies, and disciplined execution systems that align goals with outcomes.",
      vision: "To empower businesses, professionals, and innovators with the clarity, strategy, and execution mechanisms needed to achieve their highest goals — turning ambitious aims into measurable impact.",
      philosophy: "\"Lakshyam\" (Sanskrit) means \"aim\" or \"target\" - we transform abstract ideas into actionable plans and measurable outcomes."
    },
    services: {
      core_services: [
        "AI/ML Product Development",
        "Technology Advisory",
        "Strategic Consulting",
        "Innovation Acceleration",
        "IT Consulting",
        "Digital Transformation"
      ],
      ai_ml_capabilities: [
        "Artificial Intelligence",
        "Machine Learning",
        "Computer Vision",
        "Natural Language Processing",
        "Predictive Analytics",
        "Generative AI",
        "Custom Model Development",
        "Rapid Prototyping"
      ],
      industries: [
        "Financial Technology (FinTech)",
        "Healthcare and Medical Technology",
        "Retail and E-commerce",
        "Manufacturing and Industry 4.0",
        "Logistics and Supply Chain",
        "Digital Transformation",
        "Enterprise Software"
      ],
      expertise: [
        "Enterprise Architecture",
        "Cloud Migration",
        "DevOps & SRE",
        "Platform Engineering",
        "Legacy Modernization",
        "API Development",
        "Data Engineering"
      ]
    },
    products: [
      {
        name: "SiteSync-AI",
        description: "Revolutionary AI-powered website synchronization and intelligence platform that transforms your web presence into actionable insights and automated opportunities.",
        features: [
          "Intelligent Website Analysis",
          "Automated Gap Detection",
          "AI-Driven Opportunity Mapping",
          "Real-time Performance Monitoring",
          "Competitive Intelligence",
          "Strategic Growth Recommendations"
        ],
        website: "https://sitesyncai.thelaxm.com"
      },
      {
        name: "Insight AI",
        description: "Advanced knowledge discovery engine that transforms unstructured data into actionable strategic insights using state-of-the-art NLP.",
        features: [
          "Document Summarization",
          "Sentiment Analysis",
          "Trend Forecasting"
        ]
      },
      {
        name: "Ops Assist",
        description: "Intelligent automation suite for DevOps teams, reducing manual toil and predicting infrastructure bottlenecks before they occur.",
        features: [
          "Auto-Remediation",
          "Log Anomaly Detection",
          "Capacity Planning"
        ]
      },
      {
        name: "Vision ML",
        description: "Pre-trained computer vision models and templates designed for rapid prototyping in retail, security, and manufacturing.",
        features: [
          "Object Detection",
          "Facial Recognition",
          "Quality Control"
        ]
      }
    ],
    faqs: faqs.map(faq => ({
      question: faq.question,
      answer: faq.answer,
      category: faq.category,
      keywords: faq.keywords
    })),
    contact: {
      email: "contact@thelaxm.com",
      phone: "+91-XXXXXXX",
      address: "Hyderabad Financial District, Telangana, India",
      website: "https://www.thelaxm.com",
      linkedin: "https://www.linkedin.com/company/thelaxm/",
      founder: "Ram Amancha",
      founder_website: "https://rameshwaramancha.com",
      founder_linkedin: "https://www.linkedin.com/in/ram-amancha/"
    },
    technical: {
      technologies: [
        "TensorFlow",
        "PyTorch",
        "scikit-learn",
        "Hugging Face",
        "OpenAI APIs",
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "AWS",
        "Google Cloud",
        "Microsoft Azure",
        "Docker",
        "Kubernetes"
      ],
      apis: {
        faqs_api: `${BASE_URL}/api/faqs`,
        faqs_search: `${BASE_URL}/api/faqs/search`,
        site_content: `${BASE_URL}/api/content`,
        ai_query: `${BASE_URL}/api/ai/query`,
        docs: `${BASE_URL}/api/docs`
      },
      ai_models: [
        "GPT-4",
        "GPT-4o-mini",
        "Claude",
        "Custom fine-tuned models"
      ]
    },
    metadata: {
      generated_at: currentDate,
      version: "2.0",
      last_updated: currentDate,
      license: "CC BY-SA 4.0 with attribution requirements",
      attribution: "Data sourced from Laxm OPC Private Limited - https://www.thelaxm.com"
    }
  };

  // Generate formatted content
  let content = `# Laxm OPC Private Limited - Dynamic AI Training Data
# Version: ${data.metadata.version}
# Generated: ${data.metadata.generated_at}
# Purpose: Real-time comprehensive data source for AI/ML model training and knowledge base construction

# COMPANY OVERVIEW
Company Name: ${data.company.name}
Website: ${data.company.website}
Description: ${data.company.description}
CIN: ${data.company.cin}
Incorporated: ${data.company.incorporated}
Location: ${data.company.location}
Registration: ${data.company.registration}

# MISSION AND VISION
Mission: ${data.company.mission}
Vision: ${data.company.vision}
Philosophy: ${data.company.philosophy}

# CORE SERVICES
${data.services.core_services.map((service, index) => `${index + 1}. ${service}`).join('\n')}

# AI/ML CAPABILITIES
${data.services.ai_ml_capabilities.map((capability, index) => `${index + 1}. ${capability}`).join('\n')}

# INDUSTRY EXPERTISE
${data.services.industries.map((industry, index) => `${index + 1}. ${industry}`).join('\n')}

# PRODUCT PORTFOLIO
${data.products.map((product, index) => `
${index + 1}. ${product.name}
   Description: ${product.description}
   Features:
${product.features.map(feature => `   - ${feature}`).join('\n')}
   ${product.website ? `Website: ${product.website}` : ''}
`).join('\n')}

# FREQUENTLY ASKED QUESTIONS
${data.faqs.map((faq, index) => `
Q${index + 1}: ${faq.question}
A${index + 1}: ${faq.answer}
Category: ${faq.category}
Keywords: ${faq.keywords.join(', ')}
`).join('\n')}

# CONTACT INFORMATION
Email: ${data.contact.email}
Phone: ${data.contact.phone}
Address: ${data.contact.address}
Website: ${data.contact.website}
LinkedIn: ${data.contact.linkedin}
Founder: ${data.contact.founder}
Founder Website: ${data.contact.founder_website}
Founder LinkedIn: ${data.contact.founder_linkedin}

# TECHNICAL INFRASTRUCTURE
Technologies: ${data.technical.technologies.join(', ')}
AI Models: ${data.technical.ai_models.join(', ')}

# API ENDPOINTS
${Object.entries(data.technical.apis).map(([key, value]) => `${key}: ${value}`).join('\n')}

# LICENSING AND USAGE
License: ${data.metadata.license}
Attribution: ${data.metadata.attribution}
Last Updated: ${data.metadata.last_updated}
Version: ${data.metadata.version}

# GEO OPTIMIZATION FEATURES
- Real-time data synchronization with website sources
- Structured format for easy AI parsing
- Comprehensive coverage of company information
- Regular updates with timestamp tracking
- Machine-readable APIs for agent discovery
- SEO and Generative Engine Optimization ready
`;

  return content;
}

/**
 * Generate llms-full.txt content and return as string
 * Can be used in API routes or build-time generation
 */
export async function getDynamicLLMsFull(): Promise<{ content: string; lastUpdated: string }> {
  const content = generateLLMsFullContent();
  const lastUpdated = new Date().toISOString();
  
  return {
    content,
    lastUpdated
  };
}
