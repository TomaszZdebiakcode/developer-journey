"use client";

import { FaLinkedin } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import HeroButton from "./HeroButton";
import { smoothScrollToSection } from "@/components/utils/smoothScroll";

export default function HeroContent() {
    const { t } = useLanguage();
    return (
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-20 pb-20">
            <div className="max-w-xl">

                {/* Eyebrow */}
                <div className="flex flex-col items-start">
                    <span className="text-xs font-semibold uppercase tracking-[0.45em] text-violet-400">
                        {t.hero.eyebrow}
                    </span>
                </div>

                {/* Title */}
                <h1 className="mt-6 text-6xl font-black leading-[0.82] tracking-tight lg:text-7xl">
                    <span className="block text-white">
                        {t.hero.titleLine1}
                    </span>

                    <span className="block text-white">
                        {t.hero.titleLine2}
                    </span>
                </h1>

                {/* Description */}
                <p className="mt-8 max-w-md text-xl leading-relaxed text-zinc-400">
                    {t.hero.description1}{" "}
                    <span className="font-semibold text-white">
                        {t.hero.descriptionHighlight1}
                    </span>{" "}
                    {t.hero.description2}
                    <br />
                    <span className="font-semibold text-white">
                        {t.hero.descriptionHighlight2}
                    </span>
                </p>

                {/* CTA */}
                <div className="mt-12">
                    <HeroButton href="https://linkedin.com/in/TWOJ-LINK">
                        {t.hero.button}
                    </HeroButton>
                </div>

                <button
                    onClick={() =>
                        smoothScrollToSection("mission", 128, 1100)
                    }
                    className="mt-6 text-sm text-zinc-500 transition hover:text-zinc-300"
                >
                    {t.hero.story} →
                </button>
            </div>
        </div>
    );
}