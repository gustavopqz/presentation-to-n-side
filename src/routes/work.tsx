import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Cpu, Database, GitBranch, Layers, Network, ShieldCheck, Sprout, Target, Users, Workflow } from "lucide-react";
import { Divider, GlassCard, PageShell, Reveal, SectionLabel } from "../components/ui-kit";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Building Real-World Solutions — Gustavo Pasqua" },
      { name: "description", content: "Career, engineering mindset and projects with real impact." },
      { property: "og:title", content: "Building Real-World Solutions" },
      { property: "og:description", content: "Backend, full-stack, integrations and architecture." },
    ],
  }),
  component: WorkPage,
});

const projects = [
  {
    tag: "Enterprise Integration",
    title: "Integration HUB",
    body: "A central system to integrate different ERPs, fintechs and B2B E-Commerce platforms and optimize operational efficiency. Replaced fragile point-to-point flows with a maintainable, observable layer.",
    metrics: [["ERPs", "70+"], ["Latency", "−60%"], ["Uptime", "99.9%"]],
  },
  {
    tag: "Social Impact",
    title: "NGO Animal Protection Platform",
    body: "A web application built during college for an animal protection NGO. Designed for usability first — volunteers, donors and adopters all needed it to feel effortless.",
    metrics: [["Users", "Volunteers + public"], ["Focus", "Accessibility"], ["Outcome", "Active in production"]],
  },
  {
    tag: "Healthcare",
    title: "Hospital Management System",
    body: "Currently being built for my brother, a hospital director. Solving real operational problems — scheduling, organization, healthcare processes — with people who use it every day giving feedback.",
    metrics: [["Stage", "In development"], ["Users", "Clinical staff"], ["Goal", "Operational clarity"]],
  },
];

const principles = [
  { icon: Target, t: "Problem Solving", d: "Start from the problem, not the technology." },
  { icon: Layers, t: "Scalability", d: "Design boundaries so today's choices don't become tomorrow's debt." },
  { icon: Users, t: "Communication", d: "The clearest engineer in the room is usually the most useful." },
  { icon: ShieldCheck, t: "Ownership", d: "If I touched it, I care about how it lives in production." },
  { icon: Sprout, t: "Continuous Learning", d: "Curiosity is a daily habit, not a personality trait." },
  { icon: Workflow, t: "Business Understanding", d: "Code is a means; outcomes are the point." },
];

const stack = [
  "Node.js", "TypeScript", "Angular", "Docker",
  "MongoDB", "Oracle SQL", "REST APIs", "Swagger"
];

const career = [
  { period: "2022 — 2023", role: "Full-Stack Software Engineer at Grupo Nobre", focus: "Node.js (Express.js), Angular, MongoDB and SQLServer. Hospitals, schools and colleges systems." },
  { period: "2023 — NOW", role: "Full-Stack Software Engineer at DevIT", focus: "Node.js (NestJS), Angular, Oracle and Delphi. Backend and integrations at scale." },
];

function WorkPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="pt-10 md:pt-20">
        <Reveal><SectionLabel>Building Real-World Solutions</SectionLabel></Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] text-balance">
            Four years of <span className="grad-text">shipping software</span> that businesses actually depend on.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Backend, full-stack, integrations and enterprise systems. I care about the
            architecture as much as the feature, and about the team as much as the code.
          </p>
        </Reveal>
      </section>

      <Divider />

      {/* Career timeline */}
      <section>
        <Reveal><SectionLabel>Career</SectionLabel></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">A practical engineering path.</h2>
        </Reveal>
        <div className="mt-10 grid gap-4">
          {career.map((c, i) => (
            <Reveal key={c.period} delay={i * 0.06}>
              <GlassCard className="grid md:grid-cols-12 gap-4 items-center">
                <div className="md:col-span-3 text-sm text-muted-foreground tracking-widest uppercase">{c.period}</div>
                <div className="md:col-span-4 font-display text-2xl">{c.role}</div>
                <div className="md:col-span-5 text-muted-foreground">{c.focus}</div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      <Divider />

      {/* Projects */}
      <section>
        <Reveal><SectionLabel>Selected projects</SectionLabel></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Built to solve a real problem.</h2>
        </Reveal>
        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="grad-border rounded-2xl h-full">
                <div className="rounded-2xl p-6 bg-card/60 h-full flex flex-col">
                  <div className="text-xs uppercase tracking-widest text-[var(--emerald)]">{p.tag}</div>
                  <h3 className="mt-3 font-display text-2xl">{p.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed flex-1">{p.body}</p>
                  <dl className="mt-6 grid grid-cols-3 gap-2 pt-6 border-t border-border/60">
                    {p.metrics.map(([k, v]) => (
                      <div key={k}>
                        <dt className="text-[10px] uppercase tracking-widest text-muted-foreground">{k}</dt>
                        <dd className="text-sm mt-1">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Divider />

      {/* Principles */}
      <section>
        <Reveal><SectionLabel>Engineering Principles</SectionLabel></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">How I think about building.</h2>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map(({ icon: Icon, t, d }, i) => (
            <Reveal key={t} delay={i * 0.06}>
              <GlassCard>
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-xl bg-secondary grid place-items-center">
                    <Icon className="size-5 text-[var(--emerald)]" />
                  </div>
                  <h3 className="font-display text-xl">{t}</h3>
                </div>
                <p className="mt-4 text-muted-foreground">{d}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      <Divider />

      {/* Stack */}
      <section>
        <Reveal><SectionLabel>Tech Stack</SectionLabel></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">The tools I reach for.</h2>
        </Reveal>
        <div className="mt-12 flex flex-wrap gap-3">
          {stack.map((s, i) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.5 }}
              whileHover={{ y: -3 }}
              className="glass rounded-full px-5 py-2 text-sm hover-lift"
            >
              {s}
            </motion.span>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { icon: Network, t: "Integrations", d: "REST, event-driven, enterprise legacy bridges." },
            { icon: Database, t: "Data", d: "MongoDB, Oracle SQL — pragmatic data modelling." },
            { icon: Cpu, t: "Architecture", d: "Service boundaries, observability, maintainability." },
          ].map(({ icon: Icon, t, d }, i) => (
            <Reveal key={t} delay={i * 0.08}>
              <GlassCard>
                <Icon className="size-5 text-[var(--sky)]" />
                <h3 className="mt-4 font-display text-2xl">{t}</h3>
                <p className="mt-2 text-muted-foreground">{d}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-3 text-sm text-muted-foreground">
          <GitBranch className="size-4 text-[var(--emerald)]" />
          Always shipping behind a clean Git history.
        </div>
      </section>
    </PageShell>
  );
}
