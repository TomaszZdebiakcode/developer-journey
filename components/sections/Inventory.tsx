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

export default function Inventory() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-32">

            <div className="mb-20">

                <p className="mb-3 text-sm uppercase tracking-[0.3em] text-violet-400">
                    Inventory
                </p>

                <h2 className="text-6xl font-bold text-white">
                    Skills I've Unlocked.
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                    Every project unlocked new tools, technologies and ways of thinking.
                    My inventory keeps growing with every boss battle.
                </p>

            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                {/* Frontend */}

                <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 backdrop-blur-sm transition-all duration-300 hover:border-violet-500/40 hover:-translate-y-2">

                    <h3 className="mb-8 text-2xl font-bold text-white">
                        Frontend
                    </h3>

                    <div className="space-y-4">

                        <Skill icon={<Atom className="h-5 w-5 text-violet-400" />} text="React" />
                        <Skill icon={<Layers3 className="h-5 w-5 text-violet-400" />} text="Next.js" />
                        <Skill icon={<Palette className="h-5 w-5 text-violet-400" />} text="Tailwind CSS" />
                        <Skill icon={<MonitorSmartphone className="h-5 w-5 text-violet-400" />} text="Responsive UI" />

                    </div>

                </div>

                {/* Backend */}

                <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 backdrop-blur-sm transition-all duration-300 hover:border-violet-500/40 hover:-translate-y-2">

                    <h3 className="mb-8 text-2xl font-bold text-white">
                        Backend
                    </h3>

                    <div className="space-y-4">

                        <Skill icon={<Code2 className="h-5 w-5 text-violet-400" />} text="Python" />
                        <Skill icon={<Brain className="h-5 w-5 text-violet-400" />} text="Java" />
                        <Skill icon={<Database className="h-5 w-5 text-violet-400" />} text="PostgreSQL" />
                        <Skill icon={<Terminal className="h-5 w-5 text-violet-400" />} text="REST APIs" />

                    </div>

                </div>

                {/* Tools */}

                <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 backdrop-blur-sm transition-all duration-300 hover:border-violet-500/40 hover:-translate-y-2">

                    <h3 className="mb-8 text-2xl font-bold text-white">
                        Tools
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
                        Current Quest
                    </h3>

                    <p className="leading-8 text-zinc-300">
                        Become a Software Engineer,
                        build products,
                        help businesses grow,
                        and launch my own software company.
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
        <div className="flex items-center gap-3 rounded-xl bg-zinc-800/70 px-4 py-3 transition-all duration-300 hover:bg-zinc-700 hover:translate-x-2">

            {icon}

            <span className="text-zinc-200">
                {text}
            </span>

        </div>
    );
}