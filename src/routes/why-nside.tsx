import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Heart, Sparkles, Users, Zap } from "lucide-react";
import { Divider, GlassCard, PageShell, Reveal, SectionLabel } from "../components/ui-kit";

export const Route = createFileRoute("/why-nside")({
    head: () => ({
        meta: [
            { title: "Why I Choose N-SIDE — Gustavo Pasqua" },
            { name: "description", content: "Personal reasons for joining N-SIDE: company strength, life sciences impact, and team culture." },
            { property: "og:title", content: "Why I Choose N-SIDE" },
            { property: "og:description", content: "A strong company, meaningful impact, and a team to grow with." },
        ],
    }),
    component: WhyNSidePage,
});

function WhyNSidePage() {
    return (
        <PageShell>
            {/* Hero */}
            <section className="pt-10 md:pt-20">
                <Reveal><SectionLabel>Why I Choose N-SIDE</SectionLabel></Reveal>
                <Reveal delay={0.1}>
                    <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] text-balance">
                        A company that <span className="grad-text">aligns with my values</span> and fuels my growth.
                    </h1>
                </Reveal>
                <Reveal delay={0.2}>
                    <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
                        N-SIDE isn't just a job opportunity — it's a place where my passion for technology,
                        commitment to helping people, and desire for continuous learning can thrive.
                    </p>
                </Reveal>
            </section>

            <Divider />

            {/* N-SIDE's Strength in Belgium */}
            <section>
                <Reveal><SectionLabel>A Strong Company in Belgium</SectionLabel></Reveal>
                <Reveal delay={0.1}>
                    <h2 className="mt-4 font-display text-4xl md:text-5xl">Leading the tech ecosystem.</h2>
                </Reveal>
                <Reveal delay={0.15}>
                    <p className="mt-4 max-w-2xl text-muted-foreground">
                        N-SIDE stands out as a powerhouse in Belgium's tech landscape. Known for innovation
                        in life sciences and supply chain optimization, the company has built a reputation
                        for excellence that immediately caught my attention. In a country like Belgium,
                        where tech hubs are vibrant, N-SIDE's focus on cutting-edge solutions and its
                        track record of success make it a beacon for engineers like me seeking meaningful work.
                    </p>
                </Reveal>
                <Reveal delay={0.25}>
                    <GlassCard>
                        <Zap className="size-5 text-[var(--emerald)]" />
                        <h3 className="mt-4 font-display text-2xl">What kept my attention</h3>
                        <p className="mt-2 text-muted-foreground">
                            It's not just the accolades; it's the company's commitment to pushing boundaries
                            in critical areas like healthcare and logistics. This aligns perfectly with my
                            engineering mindset — solving real-world problems at scale.
                        </p>
                    </GlassCard>
                </Reveal>
            </section>

            <Divider />

            {/* Life Sciences and Personal Connection */}
            <section>
                <Reveal><SectionLabel>Life Sciences Impact</SectionLabel></Reveal>
                <Reveal delay={0.1}>
                    <h2 className="mt-4 font-display text-4xl md:text-5xl text-balance">
                        Technology that improves lives — and my personal story.
                    </h2>
                </Reveal>
                <Reveal delay={0.15}>
                    <p className="mt-4 max-w-2xl text-muted-foreground">
                        N-SIDE's life sciences solutions are designed to make people's lives better,
                        and this resonates deeply with me. I come from a family where healthcare is central
                        — all of my four siblings are either working as doctors or studying medicine.
                        I'm the only one who chose technology, driven by a desire to prevent suffering
                        through innovation rather than direct care.
                    </p>
                </Reveal>
                <div className="mt-12 grid md:grid-cols-2 gap-6">
                    <Reveal>
                        <GlassCard>
                            <Heart className="size-5 text-[var(--sky)]" />
                            <h3 className="mt-4 font-display text-2xl">My family's path</h3>
                            <p className="mt-2 text-muted-foreground">
                                Watching my siblings dedicate their lives to medicine inspired me to find
                                my own way to contribute. Technology became my tool for impact — building
                                systems that support healthcare without the emotional toll of direct patient care.
                            </p>
                        </GlassCard>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <GlassCard>
                            <Sparkles className="size-5 text-[var(--emerald)]" />
                            <h3 className="mt-4 font-display text-2xl">Lighthouse: A game-changer</h3>
                            <p className="mt-2 text-muted-foreground">
                                Solutions like Lighthouse, N-SIDE's clinical trial supply chain optimization
                                platform, exemplify this. As described on N-SIDE's website, it's a true
                                game-changer for clinical supply chains, streamlining processes that save
                                time and resources in life-saving research.
                            </p>
                        </GlassCard>
                    </Reveal>
                </div>
            </section>

            <Divider />

            {/* N-SIDE's Offer and Team */}
            <section>
                <Reveal><SectionLabel>Growth and Team Culture</SectionLabel></Reveal>
                <Reveal delay={0.1}>
                    <h2 className="mt-4 font-display text-4xl md:text-5xl">A place to grow and learn.</h2>
                </Reveal>
                <Reveal delay={0.15}>
                    <p className="mt-4 max-w-2xl text-muted-foreground">
                        N-SIDE's offer emphasizes personal growth and a supportive environment,
                        which is exactly what I'm seeking right now. The promise of a fun, flexible
                        workplace where creativity and initiative are rewarded speaks to my self-improvement
                        mindset. Joining a diverse team of over 200 passionate engineers, computer scientists,
                        and business experts from 30+ nationalities — with 25% holding PhDs — excites me.
                        I want to work alongside people with deep knowledge to elevate my own skills.
                    </p>
                </Reveal>
                <div className="mt-12 grid md:grid-cols-2 gap-6">
                    <Reveal>
                        <GlassCard>
                            <Users className="size-5 text-[var(--sky)]" />
                            <h3 className="mt-4 font-display text-2xl">Diverse and expert team</h3>
                            <p className="mt-2 text-muted-foreground">
                                The international makeup and high level of expertise mean constant learning
                                opportunities. Being surrounded by PhD holders and global perspectives will
                                challenge and inspire me to reach new heights.
                            </p>
                        </GlassCard>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <GlassCard>
                            <Sparkles className="size-5 text-[var(--emerald)]" />
                            <h3 className="mt-4 font-display text-2xl">Commitment to you</h3>
                            <p className="mt-2 text-muted-foreground">
                                N-SIDE's hallmark is caring about its people. This culture of growth,
                                freedom, and meaningful impact is what drew me in — it's not just a job,
                                it's a partnership in building a better future.
                            </p>
                        </GlassCard>
                    </Reveal>
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
                        Ready to join N-SIDE and <span className="grad-text">make an impact</span> together.
                    </motion.h2>
                </Reveal>
                <Reveal delay={0.15}>
                    <p className="mt-8 max-w-2xl mx-auto text-muted-foreground">
                        This is more than a career move — it's aligning my values with a company's mission.
                        I'm excited about the possibilities at N-SIDE.
                    </p>
                </Reveal>
            </section>
        </PageShell>
    );
}