"use client";

import { useLanguage } from "@/context/LanguageContext";
import BossCard from "./BossCard";

export default function BossBattles() {
    const { t } = useLanguage();

    return (
        <section className="mx-auto max-w-7xl px-6 py-32">
            <div className="mb-20">
                <p className="mb-3 text-sm uppercase tracking-[0.3em] text-violet-400">
                    {t.bossBattles.section}
                </p>

                <h2 className="text-6xl font-bold text-white">
                    {t.bossBattles.title}
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                    {t.bossBattles.description}
                </p>
            </div>

            <div className="space-y-12">
                {t.bossBattles.projects.map((project) => (
                    <BossCard
                        key={project.name}
                        project={project}
                    />
                ))}
            </div>
        </section>
    );
}