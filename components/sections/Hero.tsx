"use client";

import DeveloperCard from "@/components/shared/DeveloperCard";
import { useState } from "react";
import Image from "next/image";
import { Swords, ArrowRight } from "lucide-react";

export default function Hero() {
    const [adventureStarted, setAdventureStarted] = useState(false);

    const startAdventure = () => {
        setAdventureStarted(true);

        document
            .getElementById("mission")
            ?.scrollIntoView({
                behavior: "smooth",
            });
    };

    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden text-center">

            {/* Background <Image
                src=""
                alt=""
                fill
                priority
                className="absolute inset-0 object-cover"
            />*/}


            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70" />

            <p className="relative z-10 mb-6 flex items-center justify-center gap-3 text-zinc-400">
                <span>👋 Hi, I'm Tomasz</span>

                <span className="flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-sm text-green-400">
                    <span className="h-2 w-2 rounded-full bg-green-400"></span>
                    Available for opportunities
                </span>
            </p>

            <h1 className="relative z-10 mb-6 text-6xl font-extrabold text-white">
                Building my
                <span className="text-violet-400"> Developer Journey.</span>
            </h1>

            <p className="relative z-10 max-w-2xl text-lg text-zinc-400">
                Turning ideas into products.
            </p>

            <p className="relative z-10 max-w-2xl text-lg text-zinc-400">
                One quest at a time.
            </p>

            <button
                onClick={startAdventure}
                className="
                    relative
                    z-10
                    mt-6
                    group
                    h-14
                    w-64
                    rounded-xl
                    bg-violet-500
                    font-semibold
                    text-white
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
                        gap-2
                        transition-opacity
                        duration-300
                        group-hover:opacity-0
                    "
                >
                    <Swords className="h-5 w-5" />
                    Continue Adventure
                </span>

                <span
                    className="
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-center
                        gap-2
                        opacity-0
                        transition-opacity
                        duration-300
                        group-hover:opacity-100
                    "
                >
                    <ArrowRight className="h-5 w-5" />
                    View Boss Battles
                </span>
            </button>

            <a
                href="#projects"
                className="relative z-10 mt-4 text-sm text-zinc-500 transition-all hover:text-zinc-300"
            >
                Read My Story →
            </a>

            <div className="relative z-10">
                <DeveloperCard started={adventureStarted} />
            </div>

        </section>
    );
}