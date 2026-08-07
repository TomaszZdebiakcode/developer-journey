"use client";

export default function HeroNoise() {
    return (
        <div
            className="
                absolute
                inset-0
                opacity-[0.02]
                mix-blend-soft-light
                bg-[radial-gradient(#ffffff_1px,transparent_1px)]
                [background-size:18px_18px]
            "
        />
    );
}