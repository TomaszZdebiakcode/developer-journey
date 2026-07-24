"use client";

import { Flag, Target, Sprout, Compass } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function MissionStatus() {
  const { t } = useLanguage();

  return (
    <section
      id="mission"
      className="
        mx-auto
        w-full
        max-w-md
        scroll-mt-24
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900/70
        p-5
        shadow-2xl
        backdrop-blur-sm
        transition-all
        duration-300
        hover:border-violet-500/40

        sm:p-6
        md:p-8

        lg:sticky
        lg:top-28
        lg:max-w-none
        lg:p-10
      "
    >
      <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold text-white sm:text-3xl">
        <Flag className="h-6 w-6 shrink-0 text-violet-400 sm:h-7 sm:w-7" />

        <span className="break-words">
          {t.missionStatus.title}
        </span>
      </h2>

      <div className="space-y-5">
        {/* Current Objective */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/50 p-5 transition-all duration-300 hover:border-white/20 hover:scale-[1.02]">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-zinc-400 sm:text-sm">
            <Target className="h-4 w-4 shrink-0" />

            <span className="break-words">
              {t.missionStatus.currentObjective}
            </span>
          </p>

          <p className="mt-3 break-words text-lg font-semibold leading-7 text-white sm:text-xl">
            {t.missionStatus.currentObjectiveValue}
          </p>
        </div>

        {/* Side Quest */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/50 p-5 transition-all duration-300 hover:border-green-500/40 hover:scale-[1.02]">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-green-400 sm:text-sm">
            <Sprout className="h-4 w-4 shrink-0" />

            <span className="break-words">
              {t.missionStatus.sideQuest}
            </span>
          </p>

          <p className="mt-3 break-words text-lg leading-7 text-zinc-200 sm:text-xl">
            {t.missionStatus.sideQuestValue}
          </p>
        </div>

        {/* Next Expansion */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/50 p-5 transition-all duration-300 hover:border-violet-500/40 hover:scale-[1.02]">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-violet-400 sm:text-sm">
            <Compass className="h-4 w-4 shrink-0" />

            <span className="break-words">
              {t.missionStatus.nextExpansion}
            </span>
          </p>

          <p className="mt-3 break-words text-lg leading-7 text-zinc-200 sm:text-xl">
            {t.missionStatus.nextExpansionValue}
          </p>
        </div>
      </div>
    </section>
  );
}