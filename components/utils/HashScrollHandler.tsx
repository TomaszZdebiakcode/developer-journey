"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import {
    smoothScrollTo,
    smoothScrollToSection,
} from "./smoothScroll";

export default function HashScrollHandler() {
    const pathname = usePathname();

    useEffect(() => {
        const hash = window.location.hash;

        if (!hash) return;

        const id = hash.substring(1);

        const timer = setTimeout(() => {
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

        return () => clearTimeout(timer);
    }, [pathname]);

    return null;
}