"use client";

import {
    Trophy,
    Star,
    Code2,
    Atom,
    Layers3,
    Palette,
    Globe,
    Accessibility,
    MonitorSmartphone,
    Brain,
    GitBranch,
    TestTubeDiagonal,
} from "lucide-react";

type Skill = {
    icon: string;
    label: string;
};

type BossProject = {
    boss: string;
    status: string;

    name: string;

    description: string;

    difficulty: number;

    image: string;

    imagePosition?: string;

    rewardsTitle: string;

    skills: Skill[];

    battleButton: string;

    hoverButton: string;

    sourceButton: string;

    href: string;

    github: string;
};

type Props = {
    project: BossProject;
};

const icons = {
    react: Atom,
    next: Layers3,
    tailwind: Palette,
    responsive: MonitorSmartphone,

    wordpress: Globe,
    javascript: Code2,
    css: Palette,
    accessibility: Accessibility,

    python: Code2,
    astar: Brain,
    bfs: GitBranch,
    testing: TestTubeDiagonal,
};

export default function BossCard({ project }: Props) {
    return (
        <div className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/40 hover:bg-zinc-800/40 hover:shadow-2xl hover:shadow-violet-500/10">

            <div className="grid lg:grid-cols-2">

                {/* Image */}

                <div className="overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.name}
                        className={`h-full w-full object-cover transition duration-700 group-hover:scale-105 ${project.imagePosition ?? ""
                            }`}
                    />
                </div>

                {/* Content */}

                <div className="flex flex-col justify-center p-10">

                    <div className="mb-6 flex items-center justify-between">

                        <span className="rounded-full bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-400">
                            ⚔ {project.boss}
                        </span>

                        <span className="rounded-full bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-400">
                            ✔ {project.status}
                        </span>

                    </div>

                    <h3 className="text-4xl font-bold text-white">
                        {project.name}
                    </h3>

                    <p className="mt-6 text-lg leading-8 text-zinc-400">
                        {project.description}
                    </p>

                    {/* Difficulty */}

                    <div className="mt-8">

                        <p className="mb-3 text-sm uppercase tracking-widest text-zinc-500">
                            Difficulty
                        </p>

                        <div className="flex gap-1">

                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                    key={star}
                                    className={`h-5 w-5 ${star <= project.difficulty
                                        ? "fill-yellow-400 text-yellow-400"
                                        : "text-zinc-600"
                                        }`}
                                />
                            ))}

                        </div>

                    </div>

                    {/* Rewards */}

                    <div className="mt-10">

                        <div className="mb-4 flex items-center gap-2">

                            <Trophy className="h-5 w-5 text-yellow-400" />

                            <h4 className="font-semibold text-white">
                                {project.rewardsTitle}
                            </h4>

                        </div>

                        <div className="flex flex-wrap gap-3">

                            {project.skills.map((skill) => {
                                const Icon =
                                    icons[skill.icon as keyof typeof icons];

                                return (
                                    <span
                                        key={skill.label}
                                        className="flex items-center gap-2 rounded-full bg-zinc-800 px-4 py-2 text-sm text-zinc-300 transition-all duration-300 hover:bg-zinc-700 hover:scale-105"
                                    >
                                        {Icon && (
                                            <Icon className="h-4 w-4 text-violet-400" />
                                        )}

                                        {skill.label}
                                    </span>
                                );
                            })}

                        </div>

                    </div>

                    {/* Buttons */}

                    <div className="mt-10 flex flex-wrap gap-4">

                        <a
                            href={project.href}
                            className="
                group
                relative
                inline-flex
                h-14
                w-64
                items-center
                justify-center
                overflow-hidden
                rounded-xl
                bg-violet-500
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-violet-400
                hover:shadow-2xl
                hover:shadow-violet-500/20
              "
                        >

                            <span className="absolute flex items-center gap-2 transition-all duration-300 group-hover:translate-y-6 group-hover:opacity-0">
                                ⚔ {project.battleButton}
                            </span>

                            <span className="absolute flex translate-y-6 items-center gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                ▶ {project.hoverButton}
                            </span>

                        </a>

                        <a
                            href={project.github}
                            className="flex items-center gap-2 rounded-xl border border-zinc-700 px-6 py-3 text-white transition hover:border-violet-400"
                        >
                            <Code2 size={18} />

                            {project.sourceButton}

                        </a>

                    </div>

                </div>

            </div>

        </div>
    );
}