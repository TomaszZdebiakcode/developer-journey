"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function useHero() {
    const pathname = usePathname();

    const [adventureStarted, setAdventureStarted] =
        useState(false);

    useEffect(() => {
        // scroll animation
    }, []);

    useEffect(() => {
        // hash navigation
    }, [pathname]);

    return {
        pathname,
        adventureStarted,
        setAdventureStarted,
    };
}