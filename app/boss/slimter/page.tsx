import {
    Flag,
    Target,
    Swords,
    Trophy,
    Globe,
    Palette,
    Code2,
    Accessibility,
} from "lucide-react";


export default function SlimterBoss() {
    return (
        <main className="min-h-screen bg-zinc-950 px-6 py-24 text-white">

            <div className="mx-auto max-w-6xl">

                <p className="mb-4 uppercase tracking-[0.3em] text-violet-400">
                    Boss Battle #02
                </p>

                <h1 className="text-6xl font-bold">
                    Slimter
                </h1>

                <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
                    Building a health-focused website designed to educate users
                    about obesity, treatment methods and healthier lifestyles.
                </p>

                <div className="mt-16 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

                    <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold">
                        <Flag className="h-7 w-7 text-violet-400" />
                        Mission
                    </h2>

                    <p className="leading-8 text-zinc-400">
                        Create a clean and accessible website using WordPress
                        that helps users compare obesity treatment methods
                        and understand complex medical information.
                    </p>

                </div>

                <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

                    <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold">
                        <Target className="h-7 w-7 text-violet-400" />
                        Challenges
                    </h2>

                    <ul className="space-y-3 text-zinc-400">
                        <li>✔ WordPress customization</li>
                        <li>✔ Responsive layouts</li>
                        <li>✔ Navigation & UX</li>
                        <li>✔ Medical content organization</li>
                    </ul>

                </div>

                <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

                    <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold">
                        <Trophy className="h-7 w-7 text-yellow-400" />
                        Rewards Unlocked
                    </h2>

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

            </div>

        </main>
    );
}