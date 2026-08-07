"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import DeveloperCard from "@/components/shared/DeveloperCard";
import HeroBackground from "@/components/hero/HeroBackground";
import HeroContent from "@/components/hero/HeroContent";

import {
    smoothScrollTo,
    smoothScrollToSection,
} from "@/components/utils/smoothScroll";

export default function Hero() {
    const [adventureStarted, setAdventureStarted] = useState(false);

    const pathname = usePathname();

    useEffect(() => {
        if (adventureStarted) return;

        const activate = () => {
            if (window.scrollY > 50) {
                setAdventureStarted(true);
                window.removeEventListener("scroll", activate);
            }
        };

        window.addEventListener("scroll", activate, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", activate);
        };
    }, [adventureStarted]);

    useEffect(() => {
        const hash = window.location.hash;

        if (!hash) return;

        const id = hash.replace("#", "");

        const timeout = setTimeout(() => {
            if (id) {
                smoothScrollToSection(id, 128, 1100);
            } else {
                smoothScrollTo(0, 1100);
            }

            history.replaceState(
                null,
                "",
                window.location.pathname
            );
        }, 150);

        return () => clearTimeout(timeout);
    }, [pathname]);

    return (
        <section className="relative min-h-screen overflow-hidden">

            {/* Background */}
            <HeroBackground />

            {/* Hero Content */}
            <HeroContent />

            {/* Developer Card */}
            <div className="absolute bottom-8 right-8 z-20 hidden lg:block">
                <DeveloperCard started={adventureStarted} />
            </div>

            <div className="relative z-20 mt-12 px-4 lg:hidden">
                <DeveloperCard started={adventureStarted} />
            </div>

        </section>
    );
}