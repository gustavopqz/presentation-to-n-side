import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Plane, Compass, Heart, Sparkles } from "lucide-react";
import { PageShell, SectionLabel, Reveal, GlassCard, Divider } from "../components/ui-kit";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Beyond the Resume — Gustavo Pasqua" },
      { name: "description", content: "The human side behind the engineer. A story of growth, family and a new chapter in Europe." },
      { property: "og:title", content: "Beyond the Resume — Gustavo Pasqua" },
      { property: "og:description", content: "Authentic, mature and inspiring — written for N-SIDE." },
    ],
  }),
  component: BeyondPage,
});

const timeline = [
  { year: "2000", title: "Born in Brazil", text: "Raised with values of family, dedication and gratitude." },
  { year: "2021", title: "First engineering role", text: "Started building software professionally — learning by shipping." },
  { year: "Feb 2026", title: "Arrived in Europe", text: "A long-planned new chapter begins." },
  { year: "Apr 2026", title: "Settled in Leuven", text: "Looking for a team to grow with — both as an engineer and as a person." },
];

function BeyondPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="pt-10 md:pt-20">
        <Reveal>
          <SectionLabel>Beyond the Resume</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-balance">
            Hi, I'm <span className="grad-text">Gustavo Pasqua</span>.
            <br />
            <span className="text-muted-foreground">A Full-Stack Software Engineer building with people in mind.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            I write code with the same care I bring to conversations — looking for impact,
            clarity and the long view. This page is less about a resume and more about
            who I am beyond it.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/work"
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition"
            >
              See my work
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/team"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-secondary transition"
            >
              What I bring to a team
            </Link>
          </div>
        </Reveal>

        {/* Floating stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { k: "25", v: "Years young" },
            { k: "BR → BE", v: "New chapter" },
            { k: "4y+", v: "Engineering" },
            { k: "∞", v: "Curiosity" },
          ].map((s, i) => (
            <Reveal key={s.v} delay={0.05 * i}>
              <GlassCard className="text-center">
                <div className="font-display text-4xl grad-text">{s.k}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.v}</div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      <Divider />

      {/* Story */}
      <section>
        <Reveal><SectionLabel>The story</SectionLabel></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-balance max-w-3xl">
            Growing up in Brazil, my career was always about building security for the people I love.
          </h2>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <Reveal>
            <GlassCard>
              <Heart className="size-5 text-[var(--emerald)]" />
              <h3 className="mt-4 font-display text-2xl">Where I come from</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                I lived my whole life in Brazil. Every career decision I made was tied to
                financial stability — to giving my family education, security and better
                opportunities. That responsibility shaped how I think about discipline and ownership.
              </p>
            </GlassCard>
          </Reveal>
          <Reveal delay={0.1}>
            <GlassCard>
              <Compass className="size-5 text-[var(--sky)]" />
              <h3 className="mt-4 font-display text-2xl">Where I'm going</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                In Europe, I already feel more balance and security. Now I'm looking for a
                workplace with strong culture, collaboration and the room to grow — a place
                where I can build a long-term path, not just a job.
              </p>
            </GlassCard>
          </Reveal>
        </div>
      </section>

      <Divider />

      {/* Timeline */}
      <section>
        <Reveal><SectionLabel>A short timeline</SectionLabel></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">From São Paulo to Leuven.</h2>
        </Reveal>
        <ol className="mt-12 relative border-l border-border/80 ml-3 space-y-10">
          {timeline.map((t, i) => (
            <Reveal key={t.year} delay={i * 0.08}>
              <li className="pl-8 relative">
                <span className="absolute -left-[7px] top-1.5 size-3 rounded-full bg-[var(--emerald)] shadow-[0_0_16px_var(--emerald)]" />
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{t.year}</div>
                <h3 className="mt-1 font-display text-2xl">{t.title}</h3>
                <p className="mt-1 text-muted-foreground max-w-xl">{t.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <Divider />

      {/* Why Europe */}
      <section>
        <Reveal>
          <div className="grad-border rounded-3xl">
            <div className="rounded-3xl p-10 md:p-16 bg-card/40">
              <div className="flex items-center gap-3">
                <Plane className="size-5 text-[var(--sky)]" />
                <SectionLabel>Why Europe Changed My Perspective</SectionLabel>
              </div>
              <h2 className="mt-6 font-display text-4xl md:text-6xl text-balance leading-tight">
                For the first time, I'm choosing growth — <span className="grad-text">not survival</span>.
              </h2>
              <div className="mt-10 grid md:grid-cols-3 gap-6 text-muted-foreground">
                <p>
                  In Brazil, work was a tool to protect my family. It taught me responsibility,
                  resilience and the value of every opportunity.
                </p>
                <p>
                  Europe gave me space to breathe. Suddenly the question wasn't only
                  "will this be stable?" — it became "where can I build the best version of myself?".
                </p>
                <p>
                  I want to be part of a strong international team — one where engineering,
                  culture and human connection move together.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <Divider />

      {/* Values */}
      <section>
        <Reveal><SectionLabel>What drives me</SectionLabel></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">People, communication and continuous improvement.</h2>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            { icon: Heart, t: "Human-first", d: "Technology only matters when it helps people. I lead with empathy." },
            { icon: Sparkles, t: "Always learning", d: "Every project is a chance to get a little sharper than yesterday." },
            { icon: Compass, t: "Long-term thinking", d: "I look for places to root, not just to pass through." },
          ].map(({ icon: Icon, t, d }, i) => (
            <Reveal key={t} delay={i * 0.08}>
              <GlassCard>
                <Icon className="size-5 text-[var(--emerald)]" />
                <h3 className="mt-4 font-display text-2xl">{t}</h3>
                <p className="mt-2 text-muted-foreground">{d}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mt-24 text-center font-display italic text-2xl md:text-3xl text-muted-foreground"
      >
        "The best engineering happens when life and work pull in the same direction."
      </motion.div>
    </PageShell>
  );
}
