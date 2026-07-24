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

const frontend = [
    { icon: Atom, text: "React" },
    { icon: Layers3, text: "Next.js" },
    { icon: Palette, text: "Tailwind CSS" },
    { icon: MonitorSmartphone, text: "Responsive UI" },
];

const backend = [
    { icon: Code2, text: "Python" },
    { icon: Brain, text: "Java" },
    { icon: Database, text: "PostgreSQL" },
    { icon: Terminal, text: "REST APIs" },
];

const tools = [
    { icon: GitBranch, text: "Git" },
    { icon: GitFork, text: "GitHub" },
    { icon: PenTool, text: "Figma" },
    { icon: Globe, text: "WordPress" },
];

export default function Inventory() {
    const { t } = useLanguage();

    return (
        <section id="inventory" className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
            <div className="mb-16 lg:mb-20">
                <p className="mb-3 text-sm uppercase tracking-[0.3em] text-violet-400">
                    {t.inventory.section}
                </p>

                <h2 className="max-w-4xl break-words text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                    {t.inventory.title}
                </h2>

                <p className="mt-6 max-w-2xl break-words text-base leading-8 text-zinc-400 sm:text-lg">
                    {t.inventory.description}
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 lg:gap-8">
                <Category title={t.inventory.frontend} skills={frontend} />

                <Category title={t.inventory.backend} skills={backend} />

                <Category title={t.inventory.tools} skills={tools} />

                <div className="rounded-3xl border border-violet-500/30 bg-violet-500/10 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 md:p-8">
                    <h3 className="mb-6 break-words text-2xl font-bold leading-tight text-white">
                        {t.inventory.currentQuest}
                    </h3>

                    <p className="break-words text-base leading-8 text-zinc-300 sm:text-lg">
                        {t.inventory.currentQuestDescription}
                    </p>
                </div>
            </div>
        </section>
    );
}

function Category({
    title,
    skills,
}: {
    title: string;
    skills: {
        icon: React.ElementType;
        text: string;
    }[];
}) {
    return (
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 md:p-8">
            <h3 className="mb-6 break-words text-2xl font-bold leading-tight text-white">
                {title}
            </h3>

            <div className="space-y-4">
                {skills.map((skill) => {
                    const Icon = skill.icon;

                    return (
                        <Skill
                            key={skill.text}
                            icon={<Icon className="h-5 w-5 text-violet-400" />}
                            text={skill.text}
                        />
                    );
                })}
            </div>
        </div>
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
            <div className="shrink-0">{icon}</div>

            <span className="break-words text-sm text-zinc-200 sm:text-base">
                {text}
            </span>
        </div>
    );
}