import { NextRequest, NextResponse } from "next/server";

const ZOHO_FORM_URL =
  "https://forms.zohopublic.in/financethe1/form/ContactUs/formperma/PO9Ck7wpjGzHNGOsFtL4vp4VBg5815_q7BBkqrztQzw/htmlRecords/submit";

export async function POST(req: NextRequest) {
  let body: {
    service: string;
    industry: string;
    timeline: string;
    budget: string;
    contact: { name: string; email: string; company: string };
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { service, industry, timeline, budget, contact } = body;

  if (!contact?.name?.trim() || !contact?.email?.trim() || !contact?.company?.trim()) {
    return NextResponse.json({ error: "Missing required contact fields." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(contact.email.trim())) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const nameParts = contact.name.trim().split(/\s+/);
  const firstName = nameParts[0] ?? "";
  const lastName = nameParts.slice(1).join(" ") || firstName;

  const projectSummary = `[PC] ${service} | ${industry} | ${timeline} | ${budget}`;

  const formData = new URLSearchParams();
  formData.append("Name_First", firstName);
  formData.append("Name_Last", lastName);
  formData.append("Email", contact.email.trim());
  formData.append("SingleLine", contact.company.trim());
  formData.append("Website", projectSummary);
  formData.append("TermsConditions", "true");
  formData.append("zf_referrer_name", "project-configurator");
  formData.append("zf_redirect_url", "");
  formData.append("zc_gad", "");

  try {
    const zohoRes = await fetch(ZOHO_FORM_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData.toString(),
      redirect: "manual",
    });

    const isSuccess = zohoRes.status >= 200 && zohoRes.status < 400;

    if (!isSuccess) {
      const responseBody = await zohoRes.text().catch(() => "");
      console.error(
        `[project-inquiry] Zoho responded with ${zohoRes.status}`,
        responseBody.slice(0, 500)
      );
      return NextResponse.json(
        { error: "Submission failed. Please try again or email us directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[project-inquiry] Network error reaching Zoho:", err);
    return NextResponse.json(
      { error: "Network error. Please try again." },
      { status: 503 }
    );
  }
}