import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import Card from "@/components/Card";
import HeroBackground from "@/components/HeroBackground";
import RotatingText from "@/components/RotatingText";
import HeroVisual from "@/components/HeroVisual";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden text-white min-h-[90vh] flex items-center">
        <HeroBackground />
        <div className="mx-auto max-w-7xl px-6 py-24 relative z-10">
          <div className="grid lg:grid-cols-[1.4fr_0.8fr] gap-12 items-center">
            <div>
              <div className="relative">
                <p className="text-lg uppercase tracking-widest text-gold mb-4 opacity-80 animate-fade-in-up">
                  Human-Centered Design Meets Cutting-Edge Tech
                </p>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight relative text-white animate-fade-in-up delay-[200ms]">
                  Unlock{" "}
                  <RotatingText
                    words={[
                      "Growth",
                      "Performance",
                      "Expansion",
                      "Excellence",
                      "Scale",
                    ]}
                  />{" "}
                  <br className="hidden md:block" /> with Human-Centered
                  Innovation
                </h1>
                <p className="mt-6 text-xl text-gray-100 animate-fade-in-up delay-[400ms] max-w-2xl">
                  At Laxm, we leverage deep insights into human behavior
                  combined with cutting-edge technology to design strategies and
                  solutions that boost engagement, drive efficiency, and
                  accelerate business growth.
                </p>
                <div className="mt-8 flex gap-4 animate-fade-in-up delay-[600ms]">
                  <CTAButton href="/services">Explore Services</CTAButton>
                  <CTAButton
                    href="/contact"
                    variant="outline"
                    className="border-white text-white hover:border-white"
                  >
                    Contact Us
                  </CTAButton>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-semibold text-gradient-gold">
            Why Laxm
          </h2>
          <div className="mt-8 grid md:grid-cols-3 gap-8">
            <Card variant="glass">
              <p className="font-semibold text-gradient-gold">
                Direction-driven
              </p>
              <p className="mt-2 text-[#4B5563]">
                Clear roadmaps and measurable outcomes from strategy to
                delivery.
              </p>
            </Card>
            <Card variant="glass">
              <p className="font-semibold text-gradient-gold">
                Premium execution
              </p>
              <p className="mt-2 text-[#4B5563]">
                Modern engineering practices and tested patterns for
                reliability.
              </p>
            </Card>
            <Card variant="glass">
              <p className="font-semibold text-gradient-gold">Value-focused</p>
              <p className="mt-2 text-[#4B5563]">
                Impact first: iterate quickly, learn fast, deliver continuously.
              </p>
            </Card>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-semibold text-gradient-gold">
            Latest from our blog
          </h2>
          <p className="mt-2 text-[#C9CDD6]">
            Insights on strategy, technology, and innovation.
          </p>
          <div className="mt-8">
            <Link href="/blog" className="text-[#0B1F33] underline">
              View all posts
            </Link>
          </div>
        </div>
      </section>
      <section className="hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gradient-gold">
                Featured Products
              </h3>
              <ul className="mt-4 grid gap-3">
                <Card variant="glass">
                  Insight AI — Knowledge discovery and summarization.
                </Card>
                <Card variant="glass">
                  Ops Assist — Developer productivity and automation.
                </Card>
                <Card variant="glass">
                  Vision ML — Computer vision templates for rapid prototyping.
                </Card>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gradient-gold">
                Outcomes We Drive
              </h3>
              <ul className="mt-4 grid gap-3">
                <Card variant="glass">
                  Reduced lead time with platform engineering and golden paths.
                </Card>
                <Card variant="glass">
                  Responsible AI with measurable impact and clear safeguards.
                </Card>
                <Card variant="glass">
                  Modernized stacks and cost-efficient cloud operations.
                </Card>
              </ul>
              <div className="mt-6">
                <CTAButton href="/contact">Discuss Your Goals</CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
