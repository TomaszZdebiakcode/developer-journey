"use client";

import {
    Atom,
    Layers3,
    Palette,
    MonitorSmartphone,
    Code2,
    Brain,
    Database,
    GitBranch,
    GitFork,
    PenTool,
    Globe,
    Terminal,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

export default function Inventory() {
    const { t } = useLanguage();

    return (
        <section className="mx-auto max-w-7xl px-6 py-32">
            <div className="mb-20">
                <p className="mb-3 text-sm uppercase tracking-[0.3em] text-violet-400">
                    {t.inventory.section}
                </p>

                <h2 className="text-6xl font-bold text-white">
                    {t.inventory.title}
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                    {t.inventory.description}
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                {/* Frontend */}

                <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40">
                    <h3 className="mb-8 text-2xl font-bold text-white">
                        {t.inventory.frontend}
                    </h3>

                    <div className="space-y-4">
                        <Skill icon={<Atom className="h-5 w-5 text-violet-400" />} text="React" />

                        <Skill icon={<Layers3 className="h-5 w-5 text-violet-400" />} text="Next.js" />

                        <Skill icon={<Palette className="h-5 w-5 text-violet-400" />} text="Tailwind CSS" />

                        <Skill icon={<MonitorSmartphone className="h-5 w-5 text-violet-400" />} text="Responsive UI" />
                    </div>
                </div>

                {/* Backend */}

                <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40">
                    <h3 className="mb-8 text-2xl font-bold text-white">
                        {t.inventory.backend}
                    </h3>

                    <div className="space-y-4">
                        <Skill icon={<Code2 className="h-5 w-5 text-violet-400" />} text="Python" />

                        <Skill icon={<Brain className="h-5 w-5 text-violet-400" />} text="Java" />

                        <Skill icon={<Database className="h-5 w-5 text-violet-400" />} text="PostgreSQL" />

                        <Skill icon={<Terminal className="h-5 w-5 text-violet-400" />} text="REST APIs" />
                    </div>
                </div>

                {/* Tools */}

                <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40">
                    <h3 className="mb-8 text-2xl font-bold text-white">
                        {t.inventory.tools}
                    </h3>

                    <div className="space-y-4">
                        <Skill icon={<GitBranch className="h-5 w-5 text-violet-400" />} text="Git" />

                        <Skill icon={<GitFork className="h-5 w-5 text-violet-400" />} text="GitHub" />

                        <Skill icon={<PenTool className="h-5 w-5 text-violet-400" />} text="Figma" />

                        <Skill icon={<Globe className="h-5 w-5 text-violet-400" />} text="WordPress" />
                    </div>
                </div>

                {/* Current Quest */}

                <div className="rounded-3xl border border-violet-500/30 bg-violet-500/10 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2">
                    <h3 className="mb-8 text-2xl font-bold text-white">
                        {t.inventory.currentQuest}
                    </h3>

                    <p className="leading-8 text-zinc-300">
                        {t.inventory.currentQuestDescription}
                    </p>
                </div>
            </div>
        </section>
    );
}

function Skill({
    icon,
    text,
}: {
    icon: React.ReactNode;
    text: string;
}) {
    return (
        <div className="flex items-center gap-3 rounded-xl bg-zinc-800/70 px-4 py-3 transition-all duration-300 hover:translate-x-2 hover:bg-zinc-700">
            {icon}

            <span className="text-zinc-200">{text}</span>
        </div>
    );
}