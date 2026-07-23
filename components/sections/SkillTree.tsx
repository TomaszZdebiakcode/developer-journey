"use client";

import { Layers, Cpu, Brain } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function SkillTree() {
    const { t } = useLanguage();

    return (
        <section className="mx-auto max-w-7xl px-6 pt-16 pb-24">
            <div className="mb-12">
                <p className="mb-3 text-sm uppercase tracking-[0.3em] text-violet-400">
                    {t.skillTree.section}
                </p>

                <h2 className="text-5xl font-bold text-white">
                    {t.skillTree.title}
                </h2>
            </div>

            <div className="grid items-stretch gap-8 md:grid-cols-3">
                {/* Card 1 */}
                <div className="h-full rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition-all duration-300 hover:scale-[1.02] hover:border-violet-500/40 hover:bg-zinc-800/40 hover:shadow-xl hover:shadow-violet-500/10">
                    <Layers className="mb-6 h-8 w-8 text-violet-400" />

                    <h3 className="mb-4 text-2xl font-bold text-white">
                        {t.skillTree.cards[0].title}
                    </h3>

                    <p className="leading-8 text-zinc-400">
                        {t.skillTree.cards[0].description}
                    </p>
                </div>

                {/* Card 2 */}
                <div className="h-full rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition-all duration-300 hover:scale-[1.02] hover:border-violet-500/40 hover:bg-zinc-800/40 hover:shadow-xl hover:shadow-violet-500/10">
                    <Cpu className="mb-6 h-8 w-8 text-violet-400" />

                    <h3 className="mb-4 text-2xl font-bold text-white">
                        {t.skillTree.cards[1].title}
                    </h3>

                    <p className="leading-8 text-zinc-400">
                        {t.skillTree.cards[1].description}
                    </p>
                </div>

                {/* Card 3 */}
                <div className="h-full rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition-all duration-300 hover:scale-[1.02] hover:border-violet-500/40 hover:bg-zinc-800/40 hover:shadow-xl hover:shadow-violet-500/10">
                    <Brain className="mb-6 h-8 w-8 text-violet-400" />

                    <h3 className="mb-4 text-2xl font-bold text-white">
                        {t.skillTree.cards[2].title}
                    </h3>

                    <p className="leading-8 text-zinc-400">
                        {t.skillTree.cards[2].description}
                    </p>
                </div>
            </div>
        </section>
    );
}