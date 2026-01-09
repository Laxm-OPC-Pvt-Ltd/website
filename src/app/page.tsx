import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import Card from "@/components/Card";
import HeroBackground from "@/components/HeroBackground";
import RotatingText from "@/components/RotatingText";
import HeroVisual from "@/components/HeroVisual";
import { posts } from "@/data/posts";

export default function Home() {
  const latestPosts = posts.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white min-h-screen flex items-center pt-20">
        <HeroBackground />
        <div className="mx-auto max-w-7xl px-6 relative z-10 w-full">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
            <div className="max-w-3xl">
              <div className="relative">
                <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-wide text-[var(--gold)] mb-8 animate-fade-in-up backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-[var(--gold)] animate-pulse"></span>
                  Human-Centered Design Meets Cutting-Edge Tech
                </p>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8 animate-fade-in-up delay-[200ms]">
                  Unlock{" "}
                  <span className="text-gradient-gold inline-block font-extrabold">
                    <RotatingText
                      words={[
                        "Growth",
                        "Performance",
                        "Expansion",
                        "Excellence",
                        "Scale",
                      ]}
                    />
                  </span>{" "}
                  <br className="hidden md:block" /> with Human-Centered
                  Innovation
                </h1>
                <p className="text-xl text-white/90 animate-fade-in-up delay-[400ms] leading-relaxed mb-10 max-w-2xl font-medium">
                  At Laxm, we leverage deep insights into human behavior
                  combined with cutting-edge technology to design strategies and
                  solutions that boost engagement, drive efficiency, and
                  accelerate business growth.
                </p>
                <div className="flex flex-wrap gap-4 animate-fade-in-up delay-[600ms]">
                  <CTAButton href="/services">Explore Services</CTAButton>
                  <CTAButton
                    href="/contact"
                    variant="outline"
                    className="text-white border-white/30 hover:bg-white/10 hover:border-white"
                  >
                    Contact Us
                  </CTAButton>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block animate-float">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Why Laxm - Bento Grid - Clean White & Navy */}
      <section className="py-24 bg-[var(--ivory)] relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent"></div>
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-6">
              Why Partner with Laxm?
            </h2>
            <p className="text-[var(--text-secondary)] text-lg font-medium leading-relaxed">
              We bridge the gap between abstract strategy and concrete
              execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-2 bg-white border border-[var(--border)] p-10 hover:border-[var(--gold)]/50 transition-colors shadow-sm hover:shadow-lg">
              <div className="h-14 w-14 rounded-2xl bg-[var(--navy)] flex items-center justify-center mb-6 shadow-md shadow-[var(--navy)]/20">
                <svg
                  className="w-7 h-7 text-[var(--gold)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[var(--navy)] mb-4">
                Direction-driven
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed text-lg">
                We don't just build; we guide. Our approach starts with a clear
                roadmap that aligns technical execution with business strategy,
                ensuring every sprint moves you closer to your North Star.
              </p>
            </Card>

            <Card className="bg-[var(--navy)] p-10 relative overflow-hidden group shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="h-14 w-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 backdrop-blur-sm">
                  <svg
                    className="w-7 h-7 text-[var(--gold)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Modern Execution</h3>
                <p className=" leading-relaxed font-medium">
                  Modern engineering practices, robust architecture, and tested
                  patterns for reliability that scales.
                </p>
              </div>
            </Card>

            <Card className="bg-white border border-[var(--border)] p-10 shadow-sm hover:shadow-lg transition-all">
              <div className="h-14 w-14 rounded-2xl bg-[var(--navy)] flex items-center justify-center mb-6 shadow-md shadow-[var(--navy)]/20">
                <svg
                  className="w-7 h-7 text-[var(--gold)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[var(--navy)] mb-4">
                Value-focused
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed font-medium">
                Impact first. We iterate quickly, learn fast, and deliver
                continuously to maximize ROI.
              </p>
            </Card>

            <Card className="md:col-span-2 bg-gradient-to-br from-white to-[var(--ivory)] border border-[var(--border)] p-10 shadow-sm">
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[var(--navy)] mb-4">
                    Innovation at Scale
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed mb-8 text-lg">
                    Leveraging AI/ML and Cloud Native technologies to build
                    systems that are not just modern today, but adaptable for
                    tomorrow.
                  </p>
                  <CTAButton
                    href="/services"
                    variant="outline"
                    className="text-[var(--navy)] border-[var(--navy)] hover:bg-[var(--navy)] hover:text-white font-bold"
                  >
                    Our Expertise
                  </CTAButton>
                </div>
                <div className="w-full md:w-1/3 aspect-square rounded-full bg-gradient-to-tr from-[var(--gold)]/20 to-[var(--navy)]/5 animate-pulse blur-xl"></div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products - Deep Navy */}
      <section className="py-24 bg-[var(--navy)] relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-10"></div>
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                Products built for{" "}
                <span className="text-gradient-gold">Impact</span>
              </h2>
              <p className="text-white/80 text-lg mb-10 leading-relaxed font-medium">
                Our suite of tools accelerates development, enhances
                decision-making, and brings the power of AI to your fingertips.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 group">
                  <div className="mt-1 w-8 h-8 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/30 flex items-center justify-center text-[var(--gold)] text-sm font-bold group-hover:bg-[var(--gold)] group-hover:text-[var(--navy)] transition-colors">
                    1
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg group-hover:text-[var(--gold)] transition-colors">
                      Insight AI
                    </h4>
                    <p className="text-white/60 text-sm mt-1">
                      Knowledge discovery and summarization engine.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="mt-1 w-8 h-8 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/30 flex items-center justify-center text-[var(--gold)] text-sm font-bold group-hover:bg-[var(--gold)] group-hover:text-[var(--navy)] transition-colors">
                    2
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg group-hover:text-[var(--gold)] transition-colors">
                      Ops Assist
                    </h4>
                    <p className="text-white/60 text-sm mt-1">
                      Developer productivity and automation toolkit.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="mt-1 w-8 h-8 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/30 flex items-center justify-center text-[var(--gold)] text-sm font-bold group-hover:bg-[var(--gold)] group-hover:text-[var(--navy)] transition-colors">
                    3
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg group-hover:text-[var(--gold)] transition-colors">
                      Vision ML
                    </h4>
                    <p className="text-white/60 text-sm mt-1">
                      Computer vision templates for rapid prototyping.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="mt-12">
                <CTAButton href="/products">View All Products</CTAButton>
              </div>
            </div>
            <div className="grid gap-5">
              <Card
                variant="glass-dark"
                className="transform translate-y-8 backdrop-blur-xl border-white/5 bg-white/5 hover:bg-white/10 transition-all"
              >
                <h3 className="text-xl font-bold text-[var(--gold)] mb-2">
                  Outcomes We Drive
                </h3>
                <p className="text-base text-white/90">
                  Reduced lead time with platform engineering and golden paths.
                </p>
              </Card>
              <Card
                variant="glass-dark"
                className="transform -translate-x-4 backdrop-blur-xl border-white/5 bg-white/5 hover:bg-white/10 transition-all"
              >
                <h3 className="text-xl font-bold text-[var(--gold)] mb-2">
                  Responsible AI
                </h3>
                <p className="text-base text-white/90">
                  Measurable impact with clear safeguards and ethical
                  guidelines.
                </p>
              </Card>
              <Card
                variant="glass-dark"
                className="transform translate-x-4 translate-y-4 backdrop-blur-xl border-white/5 bg-white/5 hover:bg-white/10 transition-all"
              >
                <h3 className="text-xl font-bold text-[var(--gold)] mb-2">
                  Modern Stacks
                </h3>
                <p className="text-base text-white/90">
                  Cost-efficient cloud operations and scalable architectures.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-[var(--gold)] font-bold uppercase tracking-widest text-xs mb-3">
                Latest Insights
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-[var(--navy)]">
                From our Blog
              </h2>
            </div>
            <Link
              href="/blog"
              className="group flex items-center gap-2 text-[var(--navy)] font-bold hover:text-[var(--gold-dark)] transition-colors hidden md:flex"
            >
              View all posts
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-[var(--navy)]/10 transition-all duration-300 border border-[var(--border)]"
              >
                <div className="h-52 bg-[var(--navy)] relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy-light)] to-[var(--navy)] opacity-90"></div>
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--gold)_0%,_transparent_70%)]"></div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-[var(--navy)] shadow-lg">
                    {post.date}
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col relative bg-white">
                  <h3 className="text-xl font-bold text-[var(--navy)] mb-4 group-hover:text-[var(--gold-dark)] transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 line-clamp-3 flex-1 font-medium">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[var(--gold-dark)] hover:text-[var(--navy)] transition-colors mt-auto uppercase tracking-wide"
                  >
                    Read Article
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 md:hidden text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[var(--navy)] font-bold hover:text-[var(--gold)] transition-colors"
            >
              View all posts
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA - Ivory Background */}
      <section className="py-24 bg-[var(--ivory)] border-t border-[var(--border)]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--navy)] mb-6">
            Ready to transform your vision?
          </h2>
          <p className="text-xl text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto font-medium">
            Let's build something extraordinary together. From strategy to
            execution, we are your partners in growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact">Start a Conversation</CTAButton>
            <CTAButton
              href="/services"
              variant="outline"
              className="border-[var(--navy)] text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white font-bold"
            >
              View Services
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
