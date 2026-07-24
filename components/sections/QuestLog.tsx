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
        <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
            <div className="mb-16 lg:mb-20">
                <p className="mb-3 text-sm uppercase tracking-[0.3em] text-violet-400">
                    {t.questLog.section}
                </p>

                <h2 className="max-w-4xl break-words text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                    {t.questLog.title}
                </h2>

                <p className="mt-6 max-w-3xl break-words text-base leading-8 text-zinc-400 sm:text-lg">
                    {t.questLog.description}
                </p>
            </div>

            <div className="relative border-l border-zinc-800 pl-6 sm:pl-8">
                {t.questLog.items.map((quest) => {
                    const Icon = icons[quest.icon as keyof typeof icons];

                    return (
                        <div
                            key={quest.title}
                            className="relative mb-12 last:mb-0 sm:mb-16"
                        >
                            {/* Timeline Icon */}
                            <div
                                className={`
                  absolute
                  -left-[41px]
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  sm:-left-[49px]
                  sm:h-10
                  sm:w-10

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
                      h-4
                      w-4
                      sm:h-5
                      sm:w-5

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

                            {/* Card */}
                            <div
                                className={`
                  rounded-3xl
                  border
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  md:p-8

                  ${quest.status === "completed"
                                        ? "border-green-500/30 bg-green-500/5 hover:border-green-400"
                                        : quest.status === "current"
                                            ? "border-violet-500/30 bg-violet-500/5 hover:border-violet-400"
                                            : "border-zinc-800 bg-zinc-900/70 hover:border-zinc-700"
                                    }
                `}
                            >
                                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                    <div>
                                        <p className="mb-2 flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 sm:text-sm">
                                            <Calendar className="h-4 w-4 shrink-0" />

                                            {quest.year}
                                        </p>

                                        <h3 className="break-words text-2xl font-bold leading-tight text-white sm:text-3xl">
                                            {quest.title}
                                        </h3>
                                    </div>

                                    {quest.status === "completed" && (
                                        <span className="flex w-fit items-center gap-2 rounded-full bg-green-500/10 px-4 py-2 text-xs font-semibold text-green-400 sm:text-sm">
                                            <CircleCheckBig className="h-4 w-4" />
                                            {t.questLog.completed}
                                        </span>
                                    )}

                                    {quest.status === "current" && (
                                        <span className="flex w-fit items-center gap-2 rounded-full bg-violet-500/10 px-4 py-2 text-xs font-semibold text-violet-400 sm:text-sm">
                                            <Clock3 className="h-4 w-4" />
                                            {t.questLog.current}
                                        </span>
                                    )}

                                    {quest.status === "locked" && (
                                        <span className="flex w-fit items-center gap-2 rounded-full bg-zinc-800 px-4 py-2 text-xs font-semibold text-zinc-400 sm:text-sm">
                                            <Lock className="h-4 w-4" />
                                            {t.questLog.locked}
                                        </span>
                                    )}
                                </div>

                                <p className="break-words text-base leading-8 text-zinc-400 sm:text-lg">
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