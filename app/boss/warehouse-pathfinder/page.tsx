import {
    Swords,
    Flag,
    Target,
    Trophy,
    Code2,
    Brain,
    GitBranch,
    TestTubeDiagonal,
} from "lucide-react";

export default function WarehouseBoss() {
    return (
        <main className="min-h-screen bg-zinc-950 px-6 py-24 text-white">
            <div className="mx-auto max-w-6xl">

                {/* Header */}

                <p className="mb-4 uppercase tracking-[0.3em] text-violet-400">
                    Boss Battle #03
                </p>

                <h1 className="text-6xl font-bold">
                    Warehouse Pathfinder
                </h1>

                <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
                    An algorithm visualization project demonstrating how A*
                    and BFS solve real-world pathfinding problems in warehouse
                    environments.
                </p>

                {/* Mission */}

                <div
                    className="
          mt-16
          rounded-3xl
          border
          border-zinc-800
          bg-zinc-900/70
          p-8
          backdrop-blur-sm
          transition-all
          duration-300
          hover:border-violet-500/30
          hover:bg-zinc-900
        "
                >
                    <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold">
                        <Flag className="h-7 w-7 text-violet-400" />
                        Mission
                    </h2>

                    <p className="leading-8 text-zinc-400">
                        Implement efficient pathfinding algorithms capable of
                        navigating warehouse robots while comparing search
                        strategies visually.
                    </p>
                </div>

                {/* Challenges */}

                <div
                    className="
          mt-10
          rounded-3xl
          border
          border-zinc-800
          bg-zinc-900/70
          p-8
          backdrop-blur-sm
          transition-all
          duration-300
          hover:border-violet-500/30
          hover:bg-zinc-900
        "
                >
                    <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold">
                        <Target className="h-7 w-7 text-violet-400" />
                        Challenges
                    </h2>

                    <ul className="space-y-4 text-lg text-zinc-400">
                        <li>Implement A* Algorithm</li>
                        <li>Implement Breadth-First Search</li>
                        <li>Build Python Visualization</li>
                        <li>Write Unit Tests</li>
                    </ul>
                </div>

                {/* Rewards */}

                <div
                    className="
          mt-10
          rounded-3xl
          border
          border-zinc-800
          bg-zinc-900/70
          p-8
          backdrop-blur-sm
          transition-all
          duration-300
          hover:border-violet-500/30
          hover:bg-zinc-900
        "
                >
                    <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold">
                        <Trophy className="h-7 w-7 text-yellow-400" />
                        Rewards Unlocked
                    </h2>

                    <div className="flex flex-wrap gap-3">

                        <span
                            className="
              flex
              items-center
              gap-2
              rounded-full
              bg-zinc-800
              px-4
              py-2
              text-sm
              text-zinc-300
              transition-all
              duration-300
              hover:bg-zinc-700
              hover:scale-105
            "
                        >
                            <Code2 className="h-4 w-4 text-violet-400" />
                            Python
                        </span>

                        <span
                            className="
              flex
              items-center
              gap-2
              rounded-full
              bg-zinc-800
              px-4
              py-2
              text-sm
              text-zinc-300
              transition-all
              duration-300
              hover:bg-zinc-700
              hover:scale-105
            "
                        >
                            <Brain className="h-4 w-4 text-violet-400" />
                            A* Algorithm
                        </span>

                        <span
                            className="
              flex
              items-center
              gap-2
              rounded-full
              bg-zinc-800
              px-4
              py-2
              text-sm
              text-zinc-300
              transition-all
              duration-300
              hover:bg-zinc-700
              hover:scale-105
            "
                        >
                            <GitBranch className="h-4 w-4 text-violet-400" />
                            BFS
                        </span>

                        <span
                            className="
              flex
              items-center
              gap-2
              rounded-full
              bg-zinc-800
              px-4
              py-2
              text-sm
              text-zinc-300
              transition-all
              duration-300
              hover:bg-zinc-700
              hover:scale-105
            "
                        >
                            <TestTubeDiagonal className="h-4 w-4 text-violet-400" />
                            Unit Testing
                        </span>

                    </div>
                </div>

            </div>
        </main>
    );
}