"use client";

import { FaLinkedin } from "react-icons/fa";

type HeroButtonProps = {
    href: string;
    children: React.ReactNode;
};

export default function HeroButton({
    href,
    children,
}: HeroButtonProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="
                inline-flex
                items-center
                justify-center
                rounded-xl
                bg-violet-500
                px-10
                py-3
                text-sm
                font-bold
                uppercase
                tracking-[0.12em]
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-violet-400
                hover:shadow-xl
                hover:shadow-violet-500/20
            "
        >
            <FaLinkedin className="mr-2 h-4 w-4" />

            {children}
        </a>
    );
}