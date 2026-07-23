"use client";

import { Flag, Target, Sprout, Compass } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function MissionStatus() {
  const { t } = useLanguage();

  return (
    <section
      id="mission"
      className="
        scroll-mt-24
        w-full
        max-w-md
        lg:max-w-none
        mx-auto
        lg:sticky
        lg:top-28
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900/70
        p-6
        md:p-8
        lg:p-10
        shadow-2xl
        backdrop-blur-sm
        transition-all
        duration-300
        hover:border-violet-500/40
      "
    >
      <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold text-white">
        <Flag className="h-7 w-7 text-violet-400" />
        {t.missionStatus.title}
      </h2>

      <div className="space-y-5">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/50 p-5 transition-all duration-300 hover:scale-[1.02] hover:border-white/20">
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-zinc-400">
            <Target className="h-4 w-4" />
            {t.missionStatus.currentObjective}
          </p>

          <p className="mt-2 text-xl font-semibold text-white">
            {t.missionStatus.currentObjectiveValue}
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/50 p-5 transition-all duration-300 hover:scale-[1.02] hover:border-green-500/40">
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-green-400">
            <Sprout className="h-4 w-4" />
            {t.missionStatus.sideQuest}
          </p>

          <p className="mt-2 text-xl text-zinc-200">
            {t.missionStatus.sideQuestValue}
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/50 p-5 transition-all duration-300 hover:scale-[1.02] hover:border-violet-500/40">
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-violet-400">
            <Compass className="h-4 w-4" />
            {t.missionStatus.nextExpansion}
          </p>

          <p className="mt-2 text-xl text-zinc-200">
            {t.missionStatus.nextExpansionValue}
          </p>
        </div>
      </div>
    </section>
  );
}