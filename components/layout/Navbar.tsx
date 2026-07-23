"use client";

import { useState } from "react";
import Link from "next/link";
import { GiHamburger, GiFrenchFries } from "react-icons/gi";

import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "../ui/LanguageSwitcher";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const { t } = useLanguage();

    const links = [
        { key: "about", href: "#about", label: t.navbar.about },
        { key: "skills", href: "#skills", label: t.navbar.skills },
        { key: "projects", href: "#projects", label: t.navbar.projects },
        { key: "contact", href: "#contact", label: t.navbar.contact },
    ];

    return (
        <header className="fixed top-0 left-0 z-50 w-full">
            <div className="mx-auto max-w-7xl px-4">
                <nav className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-6 py-4 backdrop-blur-xl">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-xl font-bold tracking-wide text-white transition hover:text-violet-400"
                    >
                        Tomasz<span className="text-violet-400">.</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-8 md:flex">
                        {links.map((link) => (
                            <a
                                key={link.key}
                                href={link.href}
                                className="text-sm font-medium text-zinc-300 transition hover:text-violet-400"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-4">
                        {/* Language */}
                        <div className="hidden md:block">
                            <LanguageSwitcher />
                        </div>

                        {/* Contact Button */}
                        <a
                            href="#contact"
                            className="hidden rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-500 md:block"
                        >
                            {t.navbar.contact}
                        </a>

                        {/* Mobile Burger */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-3xl transition-transform duration-300 hover:scale-110 md:hidden"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <GiFrenchFries /> : <GiHamburger />}
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="mt-3 rounded-2xl border border-white/10 bg-black/90 backdrop-blur-xl md:hidden">
                        <div className="flex flex-col gap-6 p-6">
                            {links.map((link) => (
                                <a
                                    key={link.key}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-zinc-300 transition hover:text-violet-400"
                                >
                                    {link.label}
                                </a>
                            ))}

                            <LanguageSwitcher />

                            <a
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="rounded-xl bg-violet-600 px-4 py-3 text-center font-semibold text-white transition hover:bg-violet-500"
                            >
                                {t.navbar.contact}
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}