import { NextRequest, NextResponse } from "next/server";

// Example content structure that can be fetched by AI engines
const websiteContent = {
  company: {
    name: "Laxm",
    tagline: "Unlock Growth with Human-Centered Innovation",
    description:
      "Laxm is a strategic consultancy that leverages deep insights into human behavior combined with cutting-edge technology to design strategies and solutions that boost engagement, drive efficiency, and accelerate business growth.",
  },
  services: [
    {
      id: "strategic-consulting",
      name: "Strategic Consulting",
      description:
        "Transform your business with data-driven strategies grounded in human insights",
    },
    {
      id: "digital-transformation",
      name: "Digital Transformation",
      description:
        "Modernize your operations with cutting-edge technology and human-centered design",
    },
    {
      id: "product-design",
      name: "Product Design",
      description: "Create products that users love with human-centered design",
    },
    {
      id: "technology-implementation",
      name: "Technology Implementation",
      description:
        "Implement solutions that drive real business value and user satisfaction",
    },
  ],
  pages: [
    {
      slug: "about",
      title: "About Us",
      description: "Learn more about Laxm and our mission",
    },
    {
      slug: "services",
      title: "Our Services",
      description: "Explore the services we offer",
    },
    {
      slug: "blog",
      title: "Blog",
      description: "Stay updated with our latest insights",
    },
    {
      slug: "contact",
      title: "Contact Us",
      description: "Get in touch with our team",
    },
  ],
};

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const type = searchParams.get("type") || "all";

    let data = websiteContent;

    if (type === "company") {
      data = { company: websiteContent.company };
    } else if (type === "services") {
      data = { services: websiteContent.services };
    } else if (type === "pages") {
      data = { pages: websiteContent.pages };
    }

    return NextResponse.json(
      {
        success: true,
        contentType: type,
        data,
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching content:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch content" },
      { status: 500 }
    );
  }
}
