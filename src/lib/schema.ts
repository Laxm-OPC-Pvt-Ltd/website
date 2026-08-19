import { BASE_URL } from "@/lib/metadata";
import type { Post } from "@/data/posts";
import type { NewsArticle } from "@/data/news";

export const ORG_ID = `${BASE_URL}/#organization`;
export const WEBSITE_ID = `${BASE_URL}/#website`;
export const BLOG_ID = `${BASE_URL}/blog#blog`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: "Laxm OPC Private Limited",
    alternateName: ["Laxm", "Lakshyam"],
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      "@id": `${BASE_URL}/#logo`,
      url: `${BASE_URL}/laxm_logo.png`,
      width: 512,
      height: 512,
    },
    description:
      "Laxm partners with founders, SMEs, and business owners to build MVPs, AI products, and workflow automation systems. Technology advisory and hands-on execution under one roof.",
    sameAs: [
      "https://www.linkedin.com/company/thelaxm/",
      "https://rameshwaramancha.com",
    ],
    founder: {
      "@type": "Person",
      name: "Ram Amancha",
      url: "https://rameshwaramancha.com",
      jobTitle: "Founder",
      sameAs: ["https://www.linkedin.com/in/ram-amancha/"],
    },
    knowsAbout: [
      "MVP Development",
      "Fractional CTO",
      "AI Product Development",
      "Workflow Automation",
      "Healthcare Technology",
      "Technical Advisory",
      "Product Modernization",
      "Architecture Consulting",
      "Business Strategy",
      "IT Consulting",
      "Digital Transformation",
      "Startup Advisory",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "WeWork Rajapushpa Summit, Nanakramguda, Financial District",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500032",
      addressCountry: "IN",
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: "Laxm",
    url: BASE_URL,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function blogListingSchema(posts: Post[]) {
  const blogPostItems = posts.slice(0, 20).map((post) => ({
    "@type": "BlogPosting",
    "@id": `${BASE_URL}/blog/${post.slug}#blogposting`,
    headline: post.title,
    url: `${BASE_URL}/blog/${post.slug}`,
    datePublished: post.date,
    author: {
      "@type": post.author.includes("Ram") ? "Person" : "Organization",
      name: post.author,
      ...(post.author.includes("Ram")
        ? { url: "https://rameshwaramancha.com" }
        : { "@id": ORG_ID }),
    },
    keywords: post.tags?.join(", "),
  }));

  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": BLOG_ID,
    name: "Laxm Insights",
    description:
      "Expert perspectives on AI/ML, GEO, digital transformation, healthcare technology, and operational excellence.",
    url: `${BASE_URL}/blog`,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-US",
    blogPost: blogPostItems,
  };
}

export function blogPostingSchema(post: Post) {
  const postUrl = `${BASE_URL}/blog/${post.slug}`;
  const authorIsPerson = post.author.includes("Ram") || post.author !== "Laxm";

  return {
    "@context": "https://schema.org",
    "@type": ["Article", "BlogPosting"],
    "@id": `${postUrl}#blogposting`,
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    url: postUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    inLanguage: "en-US",
    articleSection: post.category,
    timeRequired: `PT${post.readingTime}M`,
    keywords: post.tags?.join(", "),
    wordCount: approximateWordCount(post.contentHtml),
    author: {
      "@type": authorIsPerson ? "Person" : "Organization",
      name: post.author,
      ...(authorIsPerson
        ? {
            url: "https://rameshwaramancha.com",
            sameAs: ["https://www.linkedin.com/in/ram-amancha/"],
          }
        : { "@id": ORG_ID, url: BASE_URL }),
    },
    creator: { "@id": authorIsPerson ? undefined : ORG_ID },
    publisher: {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "Laxm OPC Private Limited",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/laxm_logo.png`,
      },
    },
    image: post.image
      ? {
          "@type": "ImageObject",
          url: post.image.startsWith("http")
            ? post.image
            : `${BASE_URL}${post.image}`,
        }
      : {
          "@type": "ImageObject",
          url: `${BASE_URL}/laxm_logo.png`,
        },
    isPartOf: {
      "@type": "Blog",
      "@id": BLOG_ID,
      name: "Laxm Insights",
      url: `${BASE_URL}/blog`,
    },
    citation: post.references?.map((ref) => ({
      "@type": "CreativeWork",
      name: ref.label,
      url: ref.url,
      datePublished: ref.date,
    })),
    mentions: post.tags?.map((tag) => ({
      "@type": "Thing",
      name: tag,
    })),
  };
}

export function newsArticleSchema(article: NewsArticle) {
  const url = article.url.startsWith("http")
    ? article.url
    : `${BASE_URL}${article.url}`;
  const author = article.author || "Laxm OPC Private Limited";
  const authorIsPerson =
    article.author &&
    article.author !== "Laxm" &&
    !article.author.includes("Laxm");
  const bodySource = article.contentHtml ?? article.description;
  const wordCount = approximateWordCount(bodySource);

  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "@id": `${url}#newsarticle`,
    headline: article.title,
    description: article.description,
    articleBody: bodySource,
    datePublished: article.publishDate,
    dateModified: article.publishDate,
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    inLanguage: "en-US",
    keywords: article.tags?.join(", "),
    articleSection: article.category,
    wordCount: wordCount > 0 ? wordCount : undefined,
    author: authorIsPerson
      ? {
          "@type": "Person",
          name: author,
        }
      : {
          "@type": "Organization",
          "@id": ORG_ID,
          name: author,
          url: BASE_URL,
        },
    publisher: {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "Laxm OPC Private Limited",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/laxm_logo.png`,
      },
    },
    image: article.image
      ? {
          "@type": "ImageObject",
          url: article.image.startsWith("http")
            ? article.image
            : `${BASE_URL}${article.image}`,
        }
      : {
          "@type": "ImageObject",
          url: `${BASE_URL}/laxm_logo.png`,
        },
    citation: article.references?.map((ref) => ({
      "@type": "CreativeWork",
      name: ref.label,
      url: ref.url,
      datePublished: ref.date,
    })),
    mentions: article.tags?.map((tag) => ({
      "@type": "Thing",
      name: tag,
    })),
  };
}

export function newsListingSchema(articles: NewsArticle[]) {
  return {
    "@context": "https://schema.org",
    "@type": ["ItemList", "NewsMediaList"],
    name: "Laxm News",
    description: "Latest news, announcements, and updates from Laxm.",
    numberOfItems: articles.length,
    itemListElement: articles.map((article, index) => {
      const url = article.url.startsWith("http")
        ? article.url
        : `${BASE_URL}${article.url}`;
      return {
        "@type": "ListItem",
        position: index + 1,
        url,
        item: {
          "@type": "NewsArticle",
          headline: article.title,
          description: article.description,
          datePublished: article.publishDate,
          url,
        },
      };
    }),
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

function approximateWordCount(html: string) {
  const text = html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return text.length ? text.split(" ").length : 0;
}
