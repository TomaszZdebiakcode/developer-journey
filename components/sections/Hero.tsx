"use client";

import { useState } from "react";
import { ArrowRight, Swords } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";
import DeveloperCard from "@/components/shared/DeveloperCard";

export default function Hero() {
    const [adventureStarted, setAdventureStarted] = useState(false);

    const { t } = useLanguage();

    const startAdventure = () => {
        setAdventureStarted(true);

        const section = document.getElementById("mission");

        if (!section) return;

        const offset = 128; // wysokość navbara + trochę odstępu

        const y =
            section.getBoundingClientRect().top +
            window.pageYOffset -
            offset;

        window.scrollTo({
            top: y,
            behavior: "smooth",
        });
    };

    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70" />

            {/* Greeting */}
            <div className="relative z-10 mb-8 flex flex-col items-center gap-4 sm:flex-row">
                <span className="text-sm text-zinc-400 sm:text-base">
                    👋 {t.hero.greeting}
                </span>

                <span className="flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-xs text-green-400 sm:text-sm">
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                    {t.hero.available}
                </span>
            </div>

            {/* Title */}
            <h1 className="relative z-10 mb-6 max-w-5xl text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                {t.hero.titleStart}{" "}
                <span className="text-violet-400">
                    {t.hero.titleHighlight}
                </span>
            </h1>

            {/* Subtitle */}
            <p className="relative z-10 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
                {t.hero.subtitle}
            </p>

            <p className="relative z-10 mt-3 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
                {t.hero.description}
            </p>

            {/* CTA */}
            <button
                onClick={startAdventure}
                className="
          group
          relative
          z-10
          mt-8
          h-14
          w-full
          max-w-xs
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
          sm:w-64
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
                    {t.hero.button}
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
                    {t.hero.buttonHover}
                </span>
            </button>

            {/* Story */}
            <a
                href="#projects"
                className="relative z-10 mt-6 text-sm text-zinc-500 transition-colors hover:text-zinc-300"
            >
                {t.hero.story} →
            </a>

            {/* Developer Card */}
            <div className="relative z-10 mt-12 w-full max-w-md px-2 sm:max-w-none sm:px-0">
                <DeveloperCard started={adventureStarted} />
            </div>
        </section>
    );
}