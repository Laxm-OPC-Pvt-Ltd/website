"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

// ── Validation helpers ─────────────────────────────────────────
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const FREE_DOMAINS = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "icloud.com", "protonmail.com"];

interface ContactErrors {
  name: string;
  email: string;
  company: string;
}

interface ContactTouched {
  name: boolean;
  email: boolean;
  company: boolean;
}

function validateName(v: string): string {
  if (!v.trim()) return "Full name is required.";
  if (v.trim().length < 2) return "Name must be at least 2 characters.";
  if (v.trim().length > 80) return "Name must be under 80 characters.";
  if (!/^[\p{L}\s'.,-]+$/u.test(v.trim())) return "Name contains invalid characters.";
  return "";
}

function validateEmail(v: string): string {
  if (!v.trim()) return "Work email is required.";
  if (!EMAIL_RE.test(v.trim())) return "Please enter a valid email address.";
  const domain = v.trim().split("@")[1]?.toLowerCase();
  if (domain && FREE_DOMAINS.includes(domain))
    return "Please use your work email address.";
  return "";
}

function validateCompany(v: string): string {
  if (!v.trim()) return "Company name is required.";
  if (v.trim().length < 2) return "Company name must be at least 2 characters.";
  if (v.trim().length > 100) return "Company name must be under 100 characters.";
  return "";
}

function validateAll(contact: { name: string; email: string; company: string }): ContactErrors {
  return {
    name: validateName(contact.name),
    email: validateEmail(contact.email),
    company: validateCompany(contact.company),
  };
}

interface ProjectData {
  service: string;
  industry: string;
  timeline: string;
  budget: string;
  contact: {
    name: string;
    email: string;
    company: string;
  };
}

const services = [
  { id: "ai-ml", name: "AI/ML Product Development", icon: "🤖", description: "Custom AI solutions and machine learning models" },
  { id: "advisory", name: "Technology Advisory", icon: "💡", description: "Strategic technology consulting and roadmap planning" },
  { id: "consulting", name: "Strategic Consulting", icon: "📊", description: "Business transformation and digital strategy" },
  { id: "innovation", name: "Innovation Acceleration", icon: "🚀", description: "Rapid prototyping and innovation workshops" }
];

const industries = [
  { id: "fintech", name: "Financial Technology", icon: "💰" },
  { id: "healthcare", name: "Healthcare", icon: "🏥" },
  { id: "retail", name: "Retail & E-commerce", icon: "🛒" },
  { id: "manufacturing", name: "Manufacturing", icon: "🏭" },
  { id: "logistics", name: "Logistics", icon: "📦" },
  { id: "other", name: "Other", icon: "🔧" }
];

const timelines = [
  { id: "urgent", name: "Urgent (1-4 weeks)", multiplier: 1.5 },
  { id: "standard", name: "Standard (8-12 weeks)", multiplier: 1.0 },
  { id: "flexible", name: "Flexible (16-24 weeks)", multiplier: 0.8 }
];

const budgets = [
  { id: "startup", name: "$25K - $50K", range: [25000, 50000] },
  { id: "business", name: "$50K - $100K", range: [50000, 100000] },
  { id: "enterprise", name: "$100K - $250K", range: [100000, 250000] },
  { id: "custom", name: "Custom Quote", range: [0, 0] }
];

export function ProjectConfigurator() {
  const [step, setStep] = useState(1);
  const [projectData, setProjectData] = useState<ProjectData>({
    service: "",
    industry: "",
    timeline: "",
    budget: "",
    contact: { name: "", email: "", company: "" }
  });
  const [contactErrors, setContactErrors] = useState<ContactErrors>({ name: "", email: "", company: "" });
  const [contactTouched, setContactTouched] = useState<ContactTouched>({ name: false, email: false, company: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const totalSteps = 5;

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const updateProjectData = (field: string, value: any) => {
    setProjectData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const updateContactData = (field: keyof typeof projectData.contact, value: string) => {
    const updated = { ...projectData.contact, [field]: value };
    setProjectData(prev => ({ ...prev, contact: updated }));
    // Live-validate once the field has been touched
    if (contactTouched[field]) {
      const validators = { name: validateName, email: validateEmail, company: validateCompany };
      setContactErrors(prev => ({ ...prev, [field]: validators[field](value) }));
    }
  };

  const handleContactBlur = (field: keyof ContactTouched) => {
    setContactTouched(prev => ({ ...prev, [field]: true }));
    const validators = { name: validateName, email: validateEmail, company: validateCompany };
    setContactErrors(prev => ({ ...prev, [field]: validators[field](projectData.contact[field]) }));
  };

  const handleSubmit = async () => {
    // Mark all fields touched and run full validation before submitting
    setContactTouched({ name: true, email: true, company: true });
    const errors = validateAll(projectData.contact);
    setContactErrors(errors);
    if (errors.name || errors.email || errors.company) return;

    setIsSubmitting(true);
    setSubmitError("");
    try {
      // Resolve human-readable labels so Zoho MultiLine is readable in CRM
      const serviceLabel = services.find(s => s.id === projectData.service)?.name ?? projectData.service;
      const industryLabel = industries.find(i => i.id === projectData.industry)?.name ?? projectData.industry;
      const timelineLabel = timelines.find(t => t.id === projectData.timeline)?.name ?? projectData.timeline;
      const budgetLabel = budgets.find(b => b.id === projectData.budget)?.name ?? projectData.budget;

      const response = await fetch("/api/project-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...projectData,
          service: serviceLabel,
          industry: industryLabel,
          timeline: timelineLabel,
          budget: budgetLabel,
        }),
      });

      if (response.ok) {
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "conversion", {
            event_category: "project_configurator",
            event_label: "completed",
            value: 1,
          });
        }
        setStep(totalSteps + 1);
      } else {
        const data = await response.json().catch(() => ({}));
        setSubmitError(
          (data as any).error ?? "Something went wrong. Please try again or email us directly."
        );
      }
    } catch {
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const progress = (step / totalSteps) * 100;
  const stepLabels = ["Service", "Industry", "Timeline", "Budget", "Contact"];

  // ── Shared card style helpers ────────────────────────────────
  const cardBase = "relative w-full rounded-2xl border text-left transition-all duration-300 cursor-pointer focus:outline-none";
  const cardSelected = "border-[var(--gold)]/55 shadow-[0_0_24px_rgba(212,175,55,0.10)]";
  const cardDefault = "border-white/8 hover:border-white/18 hover:bg-white/4";

  return (
    <section
      id="configurator"
      className="relative py-0"
      style={{ background: "var(--navy)" }}
    >
      {/* ── Section header ──────────────────────────────────── */}
      <div className="relative pt-20 pb-0 text-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(212,175,55,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-2xl mx-auto px-6">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-5"
            style={{
              background: "rgba(212,175,55,0.07)",
              borderColor: "rgba(212,175,55,0.22)",
            }}
          >
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--gold)]">
              Project Brief
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
            Configure Your{" "}
            <span className="text-gradient-gold">Project</span>
          </h2>
          <p className="text-base leading-relaxed mb-12" style={{ color: "rgba(255,255,255,0.45)" }}>
            Five questions. A tailored proposal in your inbox within 24 hours.
          </p>
        </div>
      </div>

      {/* ── Wizard card ─────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-24">
        <div
          className="rounded-3xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 24px 80px rgba(0,0,0,0.5)",
          }}
        >
          {/* ── Inline step indicator ───────────────────────── */}
          {step <= totalSteps && (
            <div
              className="px-8 pt-8 pb-6"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
              {/* Progress bar */}
              <div
                className="h-0.5 rounded-full overflow-hidden mb-5"
                style={{ background: "rgba(255,255,255,0.07)" }}
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: "linear-gradient(to right, var(--gold), var(--gold-dark))",
                  }}
                  initial={{ width: `${((step - 1) / totalSteps) * 100}%` }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </div>

              {/* Step dots + labels */}
              <div className="flex items-center justify-between">
                {stepLabels.map((label, i) => {
                  const s = i + 1;
                  const isDone = s < step;
                  const isCurrent = s === step;
                  return (
                    <div key={label} className="flex flex-col items-center gap-1.5 flex-1">
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300"
                        style={
                          isDone
                            ? { background: "var(--gold)", color: "var(--navy)" }
                            : isCurrent
                              ? {
                                background: "rgba(212,175,55,0.12)",
                                border: "2px solid var(--gold)",
                                color: "var(--gold)",
                              }
                              : {
                                background: "rgba(255,255,255,0.05)",
                                border: "1px solid rgba(255,255,255,0.12)",
                                color: "rgba(255,255,255,0.25)",
                              }
                        }
                      >
                        {isDone ? "✓" : s}
                      </div>
                      <span
                        className="hidden sm:block text-[10px] tracking-wide uppercase"
                        style={{ color: isCurrent ? "var(--gold)" : isDone ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.2)" }}
                      >
                        {label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ── Step content ────────────────────────────────── */}
          <div className="p-6 sm:p-8">
            <AnimatePresence mode="wait">

              {/* Step 1 — Service */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.28 }}
                  className="space-y-5"
                >
                  <div className="mb-7">
                    <h3 className="text-2xl font-bold text-white">What service do you need?</h3>
                    <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.38)" }}>
                      Select the area where Laxm can make the most impact for you.
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {services.map((service) => {
                      const selected = projectData.service === service.id;
                      return (
                        <motion.button
                          key={service.id}
                          className={cn(cardBase, "p-5", selected ? cardSelected : cardDefault)}
                          style={selected ? { background: "rgba(212,175,55,0.07)" } : { background: "rgba(255,255,255,0.02)" }}
                          whileHover={{ scale: 1.015 }}
                          whileTap={{ scale: 0.985 }}
                          onClick={() => updateProjectData("service", service.id)}
                        >
                          {selected && (
                            <span
                              className="absolute top-3.5 right-3.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
                              style={{ background: "var(--gold)", color: "var(--navy)" }}
                            >
                              ✓
                            </span>
                          )}
                          <div className="text-3xl mb-3">{service.icon}</div>
                          <h4 className="text-sm font-bold text-white mb-1">{service.name}</h4>
                          <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                            {service.description}
                          </p>
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* Step 2 — Industry */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.28 }}
                  className="space-y-5"
                >
                  <div className="mb-7">
                    <h3 className="text-2xl font-bold text-white">What industry are you in?</h3>
                    <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.38)" }}>
                      Helps us match you with the right domain expertise.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {industries.map((industry) => {
                      const selected = projectData.industry === industry.id;
                      return (
                        <motion.button
                          key={industry.id}
                          className={cn(cardBase, "p-4 text-center", selected ? cardSelected : cardDefault)}
                          style={selected ? { background: "rgba(212,175,55,0.07)" } : { background: "rgba(255,255,255,0.02)" }}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => updateProjectData("industry", industry.id)}
                        >
                          {selected && (
                            <span
                              className="absolute top-2.5 right-2.5 w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold"
                              style={{ background: "var(--gold)", color: "var(--navy)" }}
                            >
                              ✓
                            </span>
                          )}
                          <div className="text-2xl mb-2">{industry.icon}</div>
                          <div
                            className="text-xs font-semibold"
                            style={{ color: selected ? "var(--gold)" : "rgba(255,255,255,0.75)" }}
                          >
                            {industry.name}
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* Step 3 — Timeline */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.28 }}
                  className="space-y-4"
                >
                  <div className="mb-7">
                    <h3 className="text-2xl font-bold text-white">What&apos;s your timeline?</h3>
                    <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.38)" }}>
                      We adapt our team and approach to match your urgency.
                    </p>
                  </div>
                  {timelines.map((timeline) => {
                    const selected = projectData.timeline === timeline.id;
                    return (
                      <motion.button
                        key={timeline.id}
                        className={cn(cardBase, "p-5", selected ? cardSelected : cardDefault)}
                        style={selected ? { background: "rgba(212,175,55,0.07)" } : { background: "rgba(255,255,255,0.02)" }}
                        whileHover={{ scale: 1.01, x: 4 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={() => updateProjectData("timeline", timeline.id)}
                      >
                        {selected && (
                          <span
                            className="absolute top-4 right-4 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
                            style={{ background: "var(--gold)", color: "var(--navy)" }}
                          >
                            ✓
                          </span>
                        )}
                        <div className="flex items-center justify-between pr-8">
                          <div>
                            <h4
                              className="text-sm font-bold mb-0.5"
                              style={{ color: selected ? "var(--gold)" : "white" }}
                            >
                              {timeline.name}
                            </h4>
                            {timeline.id === "urgent" && (
                              <p className="text-xs" style={{ color: "rgba(255,255,255,0.38)" }}>
                                Priority resourcing · expedited review
                              </p>
                            )}
                            {timeline.id === "flexible" && (
                              <p className="text-xs" style={{ color: "rgba(255,255,255,0.38)" }}>
                                Best value · thorough discovery phase
                              </p>
                            )}
                          </div>
                          <span className="text-xl flex-shrink-0">
                            {timeline.id === "urgent" ? "⚡" : timeline.id === "standard" ? "📅" : "🔄"}
                          </span>
                        </div>
                      </motion.button>
                    );
                  })}
                </motion.div>
              )}

              {/* Step 4 — Budget */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.28 }}
                  className="space-y-5"
                >
                  <div className="mb-7">
                    <h3 className="text-2xl font-bold text-white">What&apos;s your investment range?</h3>
                    <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.38)" }}>
                      Helps us scope the right solution — flexible payment options available.
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {budgets.map((budget) => {
                      const selected = projectData.budget === budget.id;
                      const isPopular = budget.id === "business";
                      return (
                        <motion.button
                          key={budget.id}
                          className={cn(cardBase, "p-5", selected ? cardSelected : cardDefault)}
                          style={selected ? { background: "rgba(212,175,55,0.07)" } : { background: "rgba(255,255,255,0.02)" }}
                          whileHover={{ scale: 1.015 }}
                          whileTap={{ scale: 0.985 }}
                          onClick={() => updateProjectData("budget", budget.id)}
                        >
                          {isPopular && !selected && (
                            <span
                              className="absolute top-3 right-3 text-[9px] font-bold px-2 py-0.5 rounded-full tracking-wide uppercase"
                              style={{
                                background: "rgba(212,175,55,0.15)",
                                color: "var(--gold)",
                                border: "1px solid rgba(212,175,55,0.3)",
                              }}
                            >
                              Popular
                            </span>
                          )}
                          {selected && (
                            <span
                              className="absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
                              style={{ background: "var(--gold)", color: "var(--navy)" }}
                            >
                              ✓
                            </span>
                          )}
                          <h4
                            className="text-base font-bold mb-1"
                            style={{ color: selected ? "var(--gold)" : "white" }}
                          >
                            {budget.name}
                          </h4>
                          <p className="text-xs" style={{ color: "rgba(255,255,255,0.38)" }}>
                            {budget.id === "custom"
                              ? "Let's discuss scope and build the right package."
                              : "Flexible milestone-based payment plans available."}
                          </p>
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* Step 5 — Contact */}
              {step === 5 && (
                <motion.div
                  key="step5"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.28 }}
                  className="space-y-5"
                >
                  <div className="mb-7">
                    <h3 className="text-2xl font-bold text-white">Your contact details</h3>
                    <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.38)" }}>
                      We&apos;ll use this to send you a tailored proposal. No spam, ever.
                    </p>
                  </div>

                  <div className="space-y-5">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold tracking-wide uppercase" style={{ color: "rgba(255,255,255,0.55)" }}>
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        autoComplete="name"
                        placeholder="Jane Smith"
                        value={projectData.contact.name}
                        onChange={(e) => updateContactData("name", e.target.value)}
                        onBlur={() => handleContactBlur("name")}
                        className={cn(
                          "w-full px-4 py-3 rounded-xl text-white text-sm transition-all duration-200 focus:outline-none focus:ring-1",
                          "placeholder:text-white/20",
                          contactTouched.name && contactErrors.name
                            ? "bg-red-500/5 border border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                            : contactTouched.name && !contactErrors.name
                              ? "bg-green-500/5 border border-green-500/40 focus:border-green-500 focus:ring-green-500/15"
                              : "border focus:border-[var(--gold)] focus:ring-[var(--gold)]/15"
                        )}
                        style={
                          !(contactTouched.name)
                            ? { background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.10)" }
                            : undefined
                        }
                      />
                      <AnimatePresence>
                        {contactTouched.name && contactErrors.name && (
                          <motion.p key="ne" initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.18 }} className="text-xs text-red-400 flex items-center gap-1.5">
                            <span>⚠</span> {contactErrors.name}
                          </motion.p>
                        )}
                        {contactTouched.name && !contactErrors.name && projectData.contact.name && (
                          <motion.p key="nok" initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.18 }} className="text-xs text-green-400 flex items-center gap-1.5">
                            <span>✓</span> Looks good
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Work Email */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold tracking-wide uppercase" style={{ color: "rgba(255,255,255,0.55)" }}>
                        Work Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        autoComplete="work email"
                        placeholder="jane@yourcompany.com"
                        value={projectData.contact.email}
                        onChange={(e) => updateContactData("email", e.target.value)}
                        onBlur={() => handleContactBlur("email")}
                        className={cn(
                          "w-full px-4 py-3 rounded-xl text-white text-sm transition-all duration-200 focus:outline-none focus:ring-1",
                          "placeholder:text-white/20",
                          contactTouched.email && contactErrors.email
                            ? "bg-red-500/5 border border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                            : contactTouched.email && !contactErrors.email
                              ? "bg-green-500/5 border border-green-500/40 focus:border-green-500 focus:ring-green-500/15"
                              : "border focus:border-[var(--gold)] focus:ring-[var(--gold)]/15"
                        )}
                        style={
                          !(contactTouched.email)
                            ? { background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.10)" }
                            : undefined
                        }
                      />
                      <AnimatePresence>
                        {contactTouched.email && contactErrors.email && (
                          <motion.p key="ee" initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.18 }} className="text-xs text-red-400 flex items-center gap-1.5">
                            <span>⚠</span> {contactErrors.email}
                          </motion.p>
                        )}
                        {contactTouched.email && !contactErrors.email && projectData.contact.email && (
                          <motion.p key="eok" initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.18 }} className="text-xs text-green-400 flex items-center gap-1.5">
                            <span>✓</span> Valid work email
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Company */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold tracking-wide uppercase" style={{ color: "rgba(255,255,255,0.55)" }}>
                        Company <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        autoComplete="organization"
                        placeholder="Acme Corp"
                        value={projectData.contact.company}
                        onChange={(e) => updateContactData("company", e.target.value)}
                        onBlur={() => handleContactBlur("company")}
                        className={cn(
                          "w-full px-4 py-3 rounded-xl text-white text-sm transition-all duration-200 focus:outline-none focus:ring-1",
                          "placeholder:text-white/20",
                          contactTouched.company && contactErrors.company
                            ? "bg-red-500/5 border border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                            : contactTouched.company && !contactErrors.company
                              ? "bg-green-500/5 border border-green-500/40 focus:border-green-500 focus:ring-green-500/15"
                              : "border focus:border-[var(--gold)] focus:ring-[var(--gold)]/15"
                        )}
                        style={
                          !(contactTouched.company)
                            ? { background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.10)" }
                            : undefined
                        }
                      />
                      <AnimatePresence>
                        {contactTouched.company && contactErrors.company && (
                          <motion.p key="ce" initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.18 }} className="text-xs text-red-400 flex items-center gap-1.5">
                            <span>⚠</span> {contactErrors.company}
                          </motion.p>
                        )}
                        {contactTouched.company && !contactErrors.company && projectData.contact.company && (
                          <motion.p key="cok" initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.18 }} className="text-xs text-green-400 flex items-center gap-1.5">
                            <span>✓</span> Looks good
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Global submit error */}
                  <AnimatePresence>
                    {submitError && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        className="p-4 rounded-xl text-sm text-red-400"
                        style={{
                          background: "rgba(239,68,68,0.08)",
                          border: "1px solid rgba(239,68,68,0.25)",
                        }}
                      >
                        {submitError}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}

              {/* Step 6 — Success */}
              {step === 6 && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="py-8 flex flex-col items-center text-center"
                >
                  {/* Animated rings */}
                  <div className="relative w-24 h-24 mb-8">
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{ border: "1px solid rgba(212,175,55,0.3)" }}
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1.6, opacity: 0 }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut", delay: 0.2 }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{ border: "1px solid rgba(212,175,55,0.2)" }}
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 2.0, opacity: 0 }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut", delay: 0.6 }}
                    />
                    <div
                      className="relative z-10 w-24 h-24 rounded-full flex items-center justify-center text-3xl"
                      style={{
                        background: "linear-gradient(135deg, rgba(212,175,55,0.2), rgba(180,83,9,0.15))",
                        border: "1px solid rgba(212,175,55,0.4)",
                      }}
                    >
                      ✓
                    </div>
                  </div>

                  <h3 className="text-3xl font-extrabold text-white mb-3">You&apos;re In Good Hands</h3>
                  <p className="text-base mb-8 max-w-sm" style={{ color: "rgba(255,255,255,0.50)" }}>
                    Your project brief has been received. Expect a personalised proposal from our team within 24 hours.
                  </p>

                  {/* Next steps */}
                  <div
                    className="w-full max-w-sm rounded-2xl p-6 text-left"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "rgba(255,255,255,0.35)" }}>
                      What Happens Next
                    </p>
                    <div className="space-y-4">
                      {[
                        "Our expert reviews your brief in detail",
                        "Personalised proposal lands in your inbox",
                        "30-min discovery call to align on vision",
                      ].map((text, i) => (
                        <div key={text} className="flex items-start gap-3">
                          <div
                            className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                            style={{
                              background: "linear-gradient(135deg, var(--gold), var(--gold-dark))",
                              color: "var(--navy)",
                            }}
                          >
                            {i + 1}
                          </div>
                          <span className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>

            {/* ── Navigation ────────────────────────────────── */}
            {step <= totalSteps && (
              <div
                className="flex justify-between items-center mt-8 pt-6"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
              >
                <button
                  onClick={prevStep}
                  disabled={step === 1}
                  className={cn(
                    "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
                    step === 1
                      ? "invisible"
                      : "hover:bg-white/6 active:scale-95"
                  )}
                  style={{ color: "rgba(255,255,255,0.45)", background: "transparent" }}
                >
                  ← Back
                </button>

                {step < totalSteps ? (
                  <button
                    onClick={nextStep}
                    disabled={
                      (step === 1 && !projectData.service) ||
                      (step === 2 && !projectData.industry) ||
                      (step === 3 && !projectData.timeline) ||
                      (step === 4 && !projectData.budget)
                    }
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-bold transition-all duration-300 hover:scale-105 active:scale-100 disabled:opacity-35 disabled:cursor-not-allowed disabled:hover:scale-100 overflow-hidden relative"
                    style={{
                      background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)",
                      color: "var(--navy)",
                      boxShadow: "0 0 20px rgba(212,175,55,0.2)",
                    }}
                  >
                    Continue
                    <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={
                      isSubmitting ||
                      !projectData.contact.name ||
                      !projectData.contact.email ||
                      !projectData.contact.company ||
                      !!(contactTouched.name && contactErrors.name) ||
                      !!(contactTouched.email && contactErrors.email) ||
                      !!(contactTouched.company && contactErrors.company)
                    }
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-bold transition-all duration-300 hover:scale-105 active:scale-100 disabled:opacity-35 disabled:cursor-not-allowed disabled:hover:scale-100"
                    style={{
                      background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)",
                      color: "var(--navy)",
                      boxShadow: "0 0 20px rgba(212,175,55,0.2)",
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-[var(--navy)] border-t-transparent rounded-full animate-spin" />
                        Submitting…
                      </>
                    ) : (
                      <>Submit Project →</>
                    )}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
