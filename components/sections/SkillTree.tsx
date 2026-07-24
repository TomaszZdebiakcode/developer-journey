"use client";

import { Layers, Cpu, Brain } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons = [Layers, Cpu, Brain];

export default function SkillTree() {
    const { t } = useLanguage();

    return (
        <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
            <div className="mb-16">
                <p className="mb-3 text-sm uppercase tracking-[0.3em] text-violet-400">
                    {t.skillTree.section}
                </p>

                <h2 className="max-w-4xl break-words text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                    {t.skillTree.title}
                </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
                {t.skillTree.cards.map((card, index) => {
                    const Icon = icons[index];

                    return (
                        <div
                            key={card.title}
                            className="
                h-full
                rounded-3xl
                border
                border-zinc-800
                bg-zinc-900
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-violet-500/40
                hover:bg-zinc-800/40
                hover:shadow-xl
                hover:shadow-violet-500/10
                md:p-8
              "
                        >
                            <Icon className="mb-6 h-7 w-7 text-violet-400 sm:h-8 sm:w-8" />

                            <h3 className="mb-4 break-words text-2xl font-bold leading-tight text-white">
                                {card.title}
                            </h3>

                            <p className="break-words text-base leading-8 text-zinc-400 sm:text-lg">
                                {card.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}