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
        <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
            <div className="mb-16 lg:mb-20">
                <p className="mb-3 text-sm uppercase tracking-[0.3em] text-violet-400">
                    {t.achievements.section}
                </p>

                <h2 className="max-w-4xl break-words text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                    {t.achievements.title}
                </h2>

                <p className="mt-6 max-w-2xl break-words text-base leading-8 text-zinc-400 sm:text-lg">
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
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                md:p-8

                ${achievement.status === "unlocked"
                                    ? "border-green-500/30 bg-green-500/5 hover:border-green-400"
                                    : achievement.status === "progress"
                                        ? "border-violet-500/30 bg-violet-500/5 hover:border-violet-400"
                                        : "border-zinc-800 bg-zinc-900/70 hover:border-zinc-700"
                                }
              `}
                        >
                            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                <div className="flex items-start gap-3">
                                    {Icon && (
                                        <Icon className="mt-1 h-6 w-6 shrink-0 text-violet-400 sm:h-7 sm:w-7" />
                                    )}

                                    <h3 className="break-words text-2xl font-bold leading-tight text-white">
                                        {achievement.title}
                                    </h3>
                                </div>

                                {achievement.status === "unlocked" && (
                                    <CircleCheckBig className="h-6 w-6 shrink-0 text-green-400 sm:h-7 sm:w-7" />
                                )}

                                {achievement.status === "progress" && (
                                    <Clock3 className="h-6 w-6 shrink-0 text-violet-400 sm:h-7 sm:w-7" />
                                )}

                                {achievement.status === "locked" && (
                                    <Lock className="h-6 w-6 shrink-0 text-zinc-500 sm:h-7 sm:w-7" />
                                )}
                            </div>

                            <p className="break-words text-base leading-8 text-zinc-400 sm:text-lg">
                                {achievement.description}
                            </p>

                            <div className="mt-6">
                                {achievement.status === "unlocked" && (
                                    <span className="inline-flex w-fit rounded-full bg-green-500/10 px-4 py-2 text-xs font-semibold text-green-400 sm:text-sm">
                                        ✓ {t.achievements.unlocked}
                                    </span>
                                )}

                                {achievement.status === "progress" && (
                                    <span className="inline-flex w-fit rounded-full bg-violet-500/10 px-4 py-2 text-xs font-semibold text-violet-400 sm:text-sm">
                                        {t.achievements.progress}
                                    </span>
                                )}

                                {achievement.status === "locked" && (
                                    <span className="inline-flex w-fit rounded-full bg-zinc-800 px-4 py-2 text-xs font-semibold text-zinc-400 sm:text-sm">
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