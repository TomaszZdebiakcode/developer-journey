"use client";

import { useLanguage } from "@/context/LanguageContext";

import {
    Trophy,
    Lock,
    CircleCheckBig,
    Clock3,
    Rocket,
    Building2,
    Users,
    Briefcase,
} from "lucide-react";

const icons = {
    Trophy,
    Rocket,
    Building2,
    Users,
    Briefcase,
};

export default function Achievements() {
    const { t } = useLanguage();

    return (
        <section className="mx-auto max-w-7xl px-6 py-32">
            <div className="mb-20">
                <p className="mb-3 text-sm uppercase tracking-[0.3em] text-violet-400">
                    {t.achievements.section}
                </p>

                <h2 className="text-6xl font-bold text-white">
                    {t.achievements.title}
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                    {t.achievements.description}
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {t.achievements.items.map((achievement) => {
                    const Icon =
                        icons[achievement.icon as keyof typeof icons];

                    return (
                        <div
                            key={achievement.title}
                            className={`
                rounded-3xl
                border
                p-8
                transition-all
                duration-300
                hover:-translate-y-1

                ${achievement.status === "unlocked"
                                    ? "border-green-500/30 bg-green-500/5 hover:border-green-400"
                                    : achievement.status === "progress"
                                        ? "border-violet-500/30 bg-violet-500/5 hover:border-violet-400"
                                        : "border-zinc-800 bg-zinc-900/70 hover:border-zinc-700"
                                }
              `}
                        >
                            <div className="mb-6 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    {Icon && (
                                        <Icon className="h-7 w-7 text-violet-400" />
                                    )}

                                    <h3 className="text-2xl font-bold text-white">
                                        {achievement.title}
                                    </h3>
                                </div>

                                {achievement.status === "unlocked" && (
                                    <CircleCheckBig className="h-7 w-7 text-green-400" />
                                )}

                                {achievement.status === "progress" && (
                                    <Clock3 className="h-7 w-7 text-violet-400" />
                                )}

                                {achievement.status === "locked" && (
                                    <Lock className="h-7 w-7 text-zinc-500" />
                                )}
                            </div>

                            <p className="leading-8 text-zinc-400">
                                {achievement.description}
                            </p>

                            <div className="mt-6">
                                {achievement.status === "unlocked" && (
                                    <span className="rounded-full bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-400">
                                        ✓ {t.achievements.unlocked}
                                    </span>
                                )}

                                {achievement.status === "progress" && (
                                    <span className="rounded-full bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-400">
                                        {t.achievements.progress}
                                    </span>
                                )}

                                {achievement.status === "locked" && (
                                    <span className="rounded-full bg-zinc-800 px-4 py-2 text-sm font-semibold text-zinc-400">
                                        {t.achievements.locked}
                                    </span>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}