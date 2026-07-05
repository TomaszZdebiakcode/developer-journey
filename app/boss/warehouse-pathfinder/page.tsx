export default function WarehouseBoss() {
    return (
        <main className="min-h-screen bg-zinc-950 px-6 py-24 text-white">

            <div className="mx-auto max-w-6xl">

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

                <div className="mt-16 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

                    <h2 className="mb-6 text-3xl font-bold">
                        🎯 Mission
                    </h2>

                    <p className="leading-8 text-zinc-400">
                        Implement efficient pathfinding algorithms capable of
                        navigating warehouse robots while comparing search
                        strategies visually.
                    </p>

                </div>

                <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

                    <h2 className="mb-6 text-3xl font-bold">
                        ⚔ Challenges
                    </h2>

                    <ul className="space-y-3 text-zinc-400">
                        <li>✔ Implement A*</li>
                        <li>✔ Implement BFS</li>
                        <li>✔ Python visualization</li>
                        <li>✔ Unit testing</li>
                    </ul>

                </div>

                <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

                    <h2 className="mb-6 text-3xl font-bold">
                        🏆 Rewards Unlocked
                    </h2>

                    <div className="flex flex-wrap gap-3">

                        <span className="rounded-full bg-zinc-800 px-4 py-2">
                            🐍 Python
                        </span>

                        <span className="rounded-full bg-zinc-800 px-4 py-2">
                            🧠 A*
                        </span>

                        <span className="rounded-full bg-zinc-800 px-4 py-2">
                            📊 BFS
                        </span>

                        <span className="rounded-full bg-zinc-800 px-4 py-2">
                            ✅ Testing
                        </span>

                    </div>

                </div>

            </div>

        </main>
    );
}