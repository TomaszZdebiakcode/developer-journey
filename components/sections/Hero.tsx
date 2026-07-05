export default function Hero() {
    return (
        <section className="flex min-h-screen flex-col items-center justify-center text-center">
            <p className="mb-6 flex items-center justify-center gap-3 text-zinc-400">
                <span>👋 Hi, I'm Tomasz</span>

                <span className="flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-sm text-green-400">
                    <span className="h-2 w-2 rounded-full rounded-full bg-green-400"></span>
                    Available for opportunities
                </span>
            </p>

            <h1 className="mb-6 text-6xl font-extrabold text-white">
                Building my
                <span className="text-violet-400"> Developer Journey.</span>
            </h1>

            <p className="max-w-2xl text-lg text-zinc-400">
                Turning ideas into products.
            </p>
            <p className="max-w-2xl text-lg text-zinc-400">
                One quest at a time.
            </p>
            <button
                className="
                mt-6
                group
                relative
                w-64
                h-14
                rounded-xl
                bg-violet-500
                text-white
                font-semibold
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-2xl
                hover:shadow-violet-500/20
            "
            >
                <span
                    className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                transition-opacity
                duration-300
                group-hover:opacity-0
                "
                >
                    🌌 Continue Adventure
                </span>

                <span
                    className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                opacity-0
                transition-opacity
                duration-300
                group-hover:opacity-100
                "
                >
                    🚀 View Projects
                </span>
            </button>
            <a
                href="#projects"
                className="mt-4 text-sm text-zinc-500 transition-all hover:text-zinc-300"
            >
                Read My Story →
            </a>
        </section>
    );
}