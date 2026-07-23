"use client";

import { useLanguage } from "@/context/LanguageContext";

import {
    Calendar,
    Flag,
    GraduationCap,
    Globe,
    Boxes,
    Briefcase,
    Rocket,
    Lock,
    CircleCheckBig,
    Clock3,
} from "lucide-react";

const icons = {
    GraduationCap,
    Globe,
    Boxes,
    Briefcase,
    Flag,
    Rocket,
};

export default function QuestLog() {
    const { t } = useLanguage();

    return (
        <section className="mx-auto max-w-7xl px-6 py-32">
            <div className="mb-20">
                <p className="mb-3 text-sm uppercase tracking-[0.3em] text-violet-400">
                    {t.questLog.section}
                </p>

                <h2 className="text-6xl font-bold text-white">
                    {t.questLog.title}
                </h2>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
                    {t.questLog.description}
                </p>
            </div>

            <div className="relative border-l border-zinc-800 pl-8">
                {t.questLog.items.map((quest) => {
                    const Icon =
                        icons[quest.icon as keyof typeof icons];

                    return (
                        <div
                            key={quest.title}
                            className="relative mb-16 last:mb-0"
                        >
                            <div
                                className={`
                  absolute
                  -left-[49px]
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  ${quest.status === "completed"
                                        ? "border-green-500 bg-green-500/10"
                                        : quest.status === "current"
                                            ? "border-violet-500 bg-violet-500/10"
                                            : "border-zinc-700 bg-zinc-900"
                                    }
                `}
                            >
                                {Icon && (
                                    <Icon
                                        className={`
                      h-5
                      w-5
                      ${quest.status === "completed"
                                                ? "text-green-400"
                                                : quest.status === "current"
                                                    ? "text-violet-400"
                                                    : "text-zinc-500"
                                            }
                    `}
                                    />
                                )}
                            </div>

                            <div
                                className={`
                  rounded-3xl
                  border
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  ${quest.status === "completed"
                                        ? "border-green-500/30 bg-green-500/5 hover:border-green-400"
                                        : quest.status === "current"
                                            ? "border-violet-500/30 bg-violet-500/5 hover:border-violet-400"
                                            : "border-zinc-800 bg-zinc-900/70 hover:border-zinc-700"
                                    }
                `}
                            >
                                <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                                    <div>
                                        <p className="mb-2 flex items-center gap-2 text-sm uppercase tracking-widest text-zinc-500">
                                            <Calendar className="h-4 w-4" />
                                            {quest.year}
                                        </p>

                                        <h3 className="text-3xl font-bold text-white">
                                            {quest.title}
                                        </h3>
                                    </div>

                                    {quest.status === "completed" && (
                                        <span className="flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-400">
                                            <CircleCheckBig className="h-4 w-4" />
                                            {t.questLog.completed}
                                        </span>
                                    )}

                                    {quest.status === "current" && (
                                        <span className="flex items-center gap-2 rounded-full bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-400">
                                            <Clock3 className="h-4 w-4" />
                                            {t.questLog.current}
                                        </span>
                                    )}

                                    {quest.status === "locked" && (
                                        <span className="flex items-center gap-2 rounded-full bg-zinc-800 px-4 py-2 text-sm font-semibold text-zinc-400">
                                            <Lock className="h-4 w-4" />
                                            {t.questLog.locked}
                                        </span>
                                    )}
                                </div>

                                <p className="leading-8 text-zinc-400">
                                    {quest.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}