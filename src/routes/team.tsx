import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Brain, Cloud, Code2, Container, Globe2, Github, Handshake, HeartHandshake,
  Languages, Linkedin, Mail, MessagesSquare, Mountain, Smile, Sparkles, Wrench,
} from "lucide-react";
import { PageShell, SectionLabel, Reveal, GlassCard, Divider } from "../components/ui-kit";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "What I Bring to a Team — Gustavo Pasqua" },
      { name: "description", content: "Strengths, mindset and growth areas — written with honesty and a long-term view." },
      { property: "og:title", content: "What I Bring to a Team" },
      { property: "og:description", content: "Mature, self-aware and growth-oriented." },
    ],
  }),
  component: TeamPage,
});

const strengths = [
  { icon: Code2, t: "Strong technical skills", d: "Confident in the technologies I work with day to day." },
  { icon: Brain, t: "Engineering-oriented thinking", d: "I look for systems, not just code." },
  { icon: Wrench, t: "Architecture & maintainability", d: "I design for the engineer who reads it next." },
  { icon: Sparkles, t: "Self-improvement mindset", d: "Quietly raising my own bar, week after week." },
  { icon: Mountain, t: "Calm under pressure", d: "Tense moments don't push me into noise — they push me into focus." },
  { icon: Smile, t: "Positive in difficult moments", d: "Mood is a tool. I try to bring the right one to the team." },
  { icon: MessagesSquare, t: "Strong communication", d: "I make complex things simple — and simple things clear." },
  { icon: HeartHandshake, t: "Friendly & collaborative", d: "I do my best work next to people I respect." },
  { icon: Handshake, t: "Enjoys talking with people", d: "Stand-ups, pairing, customer calls — it energizes me." },
  { icon: Sparkles, t: "Adaptability & curiosity", d: "New stack, new domain, new country — I lean in." },
];

const growth = [
  {
    icon: Cloud,
    t: "Expanding into AWS & cloud",
    d: "Currently going deeper into cloud environments — services, networking, deployment patterns. It's a focused, ongoing investment.",
  },
  {
    icon: Container,
    t: "From Docker into Kubernetes",
    d: "Comfortable with Docker today; actively growing my experience with orchestration and Kubernetes for production-scale workloads.",
  },
  {
    icon: Wrench,
    t: "Beyond Windows-Server legacy",
    d: "Previous enterprise environments leaned heavily on Windows Server because of legacy Delphi systems. Excited to work in modern cloud-native stacks.",
  },
  {
    icon: Globe2,
    t: "Fully international daily work",
    d: "This would be my first fully international everyday environment — and exactly the kind of context I came to Europe for.",
  },
  {
    icon: Handshake,
    t: "International collaboration",
    d: "I've already worked with international teams through Accenture-related projects, so the rhythm isn't new — only the scale.",
  },
  {
    icon: Languages,
    t: "English in multicultural teams",
    d: "Comfortable communicating in English and motivated to keep refining it inside a multicultural engineering culture.",
  },
];

function TeamPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="pt-10 md:pt-20">
        <Reveal><SectionLabel>What I Bring to a Team</SectionLabel></Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] text-balance">
            Strengths I lean on, and the <span className="grad-text">paths I'm growing into</span>.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            I think of "weaknesses" as the next chapter — areas where I'm investing now,
            so that a year from now they're strengths too.
          </p>
        </Reveal>
      </section>

      <Divider />

      {/* Strengths */}
      <section>
        <Reveal><SectionLabel>Strengths</SectionLabel></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">What I bring on day one.</h2>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {strengths.map(({ icon: Icon, t, d }, i) => (
            <Reveal key={t} delay={i * 0.04}>
              <GlassCard>
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-xl bg-secondary grid place-items-center">
                    <Icon className="size-5 text-[var(--emerald)]" />
                  </div>
                  <h3 className="font-display text-xl leading-tight">{t}</h3>
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{d}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      <Divider />

      {/* Growth */}
      <section>
        <Reveal><SectionLabel>Areas of Growth</SectionLabel></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-balance">
            Growth is a direction, not a gap.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            These are the chapters I'm actively writing — honestly, and with a plan.
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {growth.map(({ icon: Icon, t, d }, i) => (
            <Reveal key={t} delay={i * 0.06}>
              <div className="grad-border rounded-2xl h-full">
                <div className="rounded-2xl p-6 bg-card/60 h-full">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-secondary grid place-items-center">
                      <Icon className="size-5 text-[var(--sky)]" />
                    </div>
                    <h3 className="font-display text-xl">{t}</h3>
                  </div>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Divider />

      {/* Closing */}
      <section className="text-center">
        <Reveal>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl text-balance leading-[1.05]"
          >
            Building technology with{" "}
            <span className="grad-text">purpose, people</span>
            {" "}and continuous growth.
          </motion.h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-8 max-w-2xl mx-auto text-muted-foreground">
            Thank you for taking the time to go beyond the resume.
            I'd love to continue this conversation with the N-SIDE team.
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="https://www.linkedin.com/"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition"
            >
              <Linkedin className="size-4" /> LinkedIn
            </a>
            <a
              href="https://github.com/"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-secondary transition"
            >
              <Github className="size-4" /> GitHub
            </a>
            <a
              href="mailto:gustavo.pasqua@example.com"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-secondary transition"
            >
              <Mail className="size-4" /> Email
            </a>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
