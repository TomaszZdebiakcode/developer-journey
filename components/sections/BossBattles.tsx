import {
    ExternalLink,
    Code2,
    Trophy,
    Star,
    Globe,
    Palette,
    Accessibility,
    Atom,
    Layers3,
    MonitorSmartphone,
    Brain,
    GitBranch,
    TestTubeDiagonal,


} from "lucide-react";

export default function BossBattles() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-32">

            <div className="mb-20">

                <p className="mb-3 text-sm uppercase tracking-[0.3em] text-violet-400">
                    Boss Battles
                </p>

                <h2 className="text-6xl font-bold text-white">
                    Every Boss Defeated.
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                    Every project pushed me beyond my comfort zone.
                    Every boss battle unlocked new skills that made me a better engineer.
                </p>

            </div>

            <div className="space-y-12">

                {/* ========================= */}

                <div className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/40 hover:bg-zinc-800/40 hover:shadow-2xl hover:shadow-violet-500/10">

                    <div className="grid lg:grid-cols-2">

                        {/* Screenshot */}

                        <div className="overflow-hidden">

                            <img
                                src="/projects/developer-journey.png"
                                alt="Developer Journey"
                                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                            />

                        </div>

                        {/* Content */}

                        <div className="flex flex-col justify-center p-10">

                            <div className="mb-6 flex items-center justify-between">

                                <span className="rounded-full bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-400">
                                    ⚔ Boss #01
                                </span>

                                <span className="rounded-full bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-400">
                                    ✔ Defeated
                                </span>

                            </div>

                            <h3 className="text-4xl font-bold text-white">
                                Developer Journey
                            </h3>

                            <p className="mt-6 text-lg leading-8 text-zinc-400">
                                A portfolio documenting my journey from Game Software Engineering
                                student to Software Engineer while building real-world products.
                            </p>

                            {/* Difficulty */}

                            <div className="mt-8">

                                <p className="mb-3 text-sm uppercase tracking-widest text-zinc-500">
                                    Difficulty
                                </p>

                                <div className="flex gap-1">

                                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                    

                                </div>

                            </div>

                            {/* Rewards */}

                            <div className="mt-10">

                                <div className="mb-4 flex items-center gap-2">

                                    <Trophy className="h-5 w-5 text-yellow-400" />

                                    <h4 className="font-semibold text-white">
                                        Rewards Unlocked
                                    </h4>

                                </div>

                                <div className="flex flex-wrap gap-3">

                                    <span className="flex items-center gap-2 rounded-full bg-zinc-800 px-4 py-2 text-sm text-zinc-300 transition-all duration-300 hover:bg-zinc-700 hover:scale-105">
                                        <Atom className="h-4 w-4 text-violet-400" />
                                        React
                                    </span>

                                    <span className="flex items-center gap-2 rounded-full bg-zinc-800 px-4 py-2 text-sm text-zinc-300 transition-all duration-300 hover:bg-zinc-700 hover:scale-105">
                                        <Layers3 className="h-4 w-4 text-violet-400" />
                                        Next.js
                                    </span>

                                    <span className="flex items-center gap-2 rounded-full bg-zinc-800 px-4 py-2 text-sm text-zinc-300 transition-all duration-300 hover:bg-zinc-700 hover:scale-105">
                                        <Palette className="h-4 w-4 text-violet-400" />
                                        Tailwind CSS
                                    </span>

                                    <span className="flex items-center gap-2 rounded-full bg-zinc-800 px-4 py-2 text-sm text-zinc-300 transition-all duration-300 hover:bg-zinc-700 hover:scale-105">
                                        <MonitorSmartphone className="h-4 w-4 text-violet-400" />
                                        Responsive UI
                                    </span>

                                </div>

                            </div>

                            {/* Buttons */}

                            <div className="mt-10 flex flex-wrap gap-4">

                                <a
                                    href="/boss/developer-journey"
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
                                    {/* Default */}
                                    <span
                                        className="
                                        absolute
                                        flex
                                        items-center
                                        gap-2
                                        transition-all
                                        duration-300
                                        group-hover:translate-y-6
                                        group-hover:opacity-0
                                        "
                                    >
                                        ⚔ Enter Battle
                                    </span>

                                    {/* Hover */}
                                    <span
                                        className="
      absolute
      flex
      items-center
      gap-2
      translate-y-6
      opacity-0
      transition-all
      duration-300
      group-hover:translate-y-0
      group-hover:opacity-100
    "
                                    >
                                        ▶ Ready?
                                    </span>
                                </a>

                                <a
                                    href="#"
                                    className="flex items-center gap-2 rounded-xl border border-zinc-700 px-6 py-3 text-white transition hover:border-violet-400"
                                >
                                    <Code2 size={18} />

                                    Source Code

                                </a>

                            </div>

                        </div>

                    </div>

                </div>
                <div className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/40 hover:bg-zinc-800/40 hover:shadow-2xl hover:shadow-violet-500/10">

                    <div className="grid lg:grid-cols-2">

                        <div className="overflow-hidden">

                            <img
                                src="/projects/slimter.png"
                                alt="Slimter"
                                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                            />

                        </div>

                        <div className="flex flex-col justify-center p-10">

                            <div className="mb-6 flex items-center justify-between">

                                <span className="rounded-full bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-400">
                                    ⚔ Boss #02
                                </span>

                                <span className="rounded-full bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-400">
                                    ✔ Defeated
                                </span>

                            </div>

                            <h3 className="text-4xl font-bold text-white">
                                Slimter
                            </h3>

                            <p className="mt-6 text-lg leading-8 text-zinc-400">
                                A WordPress website focused on obesity education, helping users compare treatment methods through an accessible and responsive experience.
                            </p>

                            <div className="mt-8">

                                <p className="mb-3 text-sm uppercase tracking-widest text-zinc-500">
                                    Difficulty
                                </p>

                                <div className="flex gap-1">

                                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                    <Star className="h-5 w-5 text-zinc-600" />

                                </div>

                            </div>

                            <div className="mt-10">

                                <div className="mb-4 flex items-center gap-2">

                                    <Trophy className="h-5 w-5 text-yellow-400" />

                                    <h4 className="font-semibold text-white">
                                        Rewards Unlocked
                                    </h4>

                                </div>

                                <div className="flex flex-wrap gap-3">

                                    <span className="flex items-center gap-2 rounded-full bg-zinc-800 px-4 py-2 transition-all duration-300 hover:bg-zinc-700 hover:scale-105">
                                        <Globe className="h-4 w-4 text-violet-400" />
                                        WordPress
                                    </span>

                                    <span className="flex items-center gap-2 rounded-full bg-zinc-800 px-4 py-2 transition-all duration-300 hover:bg-zinc-700 hover:scale-105">
                                        <Code2 className="h-4 w-4 text-violet-400" />
                                        JavaScript
                                    </span>

                                    <span className="flex items-center gap-2 rounded-full bg-zinc-800 px-4 py-2 transition-all duration-300 hover:bg-zinc-700 hover:scale-105">
                                        <Palette className="h-4 w-4 text-violet-400" />
                                        CSS
                                    </span>

                                    <span className="flex items-center gap-2 rounded-full bg-zinc-800 px-4 py-2 transition-all duration-300 hover:bg-zinc-700 hover:scale-105">
                                        <Accessibility className="h-4 w-4 text-violet-400" />
                                        Accessibility
                                    </span>

                                </div>

                            </div>

                            <div className="mt-10 flex flex-wrap gap-4">

                                <a
                                    href="/boss/slimter"
                                    className="group relative inline-flex h-14 w-64 items-center justify-center overflow-hidden rounded-xl bg-violet-500 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-violet-400 hover:shadow-2xl hover:shadow-violet-500/20"
                                >

                                    <span className="absolute flex items-center gap-2 transition-all duration-300 group-hover:translate-y-6 group-hover:opacity-0">
                                        ⚔ Enter Battle
                                    </span>

                                    <span className="absolute flex translate-y-6 items-center gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                        ▶ Ready?
                                    </span>

                                </a>

                                <a
                                    href="#"
                                    className="flex items-center gap-2 rounded-xl border border-zinc-700 px-6 py-3 text-white transition hover:border-violet-400"
                                >
                                    <Code2 size={18} />
                                    Source Code
                                </a>

                            </div>

                        </div>

                    </div>

                </div>
                <div className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/40 hover:bg-zinc-800/40 hover:shadow-2xl hover:shadow-violet-500/10">

                    <div className="grid lg:grid-cols-2">

                        <div className="overflow-hidden">

                            <img
                                src="/projects/warehouse.png"
                                alt="Warehouse Pathfinder"
                                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                            />

                        </div>

                        <div className="flex flex-col justify-center p-10">

                            <div className="mb-6 flex items-center justify-between">

                                <span className="rounded-full bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-400">
                                    ⚔ Boss #03
                                </span>

                                <span className="rounded-full bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-400">
                                    ✔ Defeated
                                </span>

                            </div>

                            <h3 className="text-4xl font-bold text-white">
                                Warehouse Pathfinder
                            </h3>

                            <p className="mt-6 text-lg leading-8 text-zinc-400">
                                A Python project implementing A* and BFS algorithms to visualize intelligent warehouse robot navigation.
                            </p>

                            <div className="mt-8">

                                <p className="mb-3 text-sm uppercase tracking-widest text-zinc-500">
                                    Difficulty
                                </p>

                                <div className="flex gap-1">

                                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                    <Star className="h-5 w-5 text-zinc-600" />
                                    <Star className="h-5 w-5 text-zinc-600" />

                                </div>

                            </div>

                            <div className="mt-10">

                                <div className="mb-4 flex items-center gap-2">

                                    <Trophy className="h-5 w-5 text-yellow-400" />

                                    <h4 className="font-semibold text-white">
                                        Rewards Unlocked
                                    </h4>

                                </div>

                                <div className="flex flex-wrap gap-3">

                                    <span className="flex items-center gap-2 rounded-full bg-zinc-800 px-4 py-2 text-sm text-zinc-300 transition-all duration-300 hover:bg-zinc-700 hover:scale-105">
                                        <Code2 className="h-4 w-4 text-violet-400" />
                                        Python
                                    </span>

                                    <span className="flex items-center gap-2 rounded-full bg-zinc-800 px-4 py-2 text-sm text-zinc-300 transition-all duration-300 hover:bg-zinc-700 hover:scale-105">
                                        <Brain className="h-4 w-4 text-violet-400" />
                                        A* Algorithm
                                    </span>

                                    <span className="flex items-center gap-2 rounded-full bg-zinc-800 px-4 py-2 text-sm text-zinc-300 transition-all duration-300 hover:bg-zinc-700 hover:scale-105">
                                        <GitBranch className="h-4 w-4 text-violet-400" />
                                        BFS
                                    </span>

                                    <span className="flex items-center gap-2 rounded-full bg-zinc-800 px-4 py-2 text-sm text-zinc-300 transition-all duration-300 hover:bg-zinc-700 hover:scale-105">
                                        <TestTubeDiagonal className="h-4 w-4 text-violet-400" />
                                        Unit Testing
                                    </span>

                                </div>

                            </div>

                            <div className="mt-10 flex flex-wrap gap-4">

                                <a
                                    href="/boss/warehouse-pathfinder"
                                    className="group relative inline-flex h-14 w-64 items-center justify-center overflow-hidden rounded-xl bg-violet-500 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-violet-400 hover:shadow-2xl hover:shadow-violet-500/20"
                                >

                                    <span className="absolute flex items-center gap-2 transition-all duration-300 group-hover:translate-y-6 group-hover:opacity-0">
                                        ⚔ Enter Battle
                                    </span>

                                    <span className="absolute flex translate-y-6 items-center gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                        ▶ Ready?
                                    </span>

                                </a>

                                <a
                                    href="#"
                                    className="flex items-center gap-2 rounded-xl border border-zinc-700 px-6 py-3 text-white transition hover:border-violet-400"
                                >
                                    <Code2 size={18} />
                                    Source Code
                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}