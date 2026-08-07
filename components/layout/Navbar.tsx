"use client";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { GiHamburger, GiFrenchFries } from "react-icons/gi";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import {
    smoothScrollTo,
    smoothScrollToSection,
} from "@/components/utils/smoothScroll";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const { t } = useLanguage();
    const pathname = usePathname();
    const router = useRouter();

    const links = [
        { key: "about", href: "#about", label: t.navbar.about },
        { key: "inventory", href: "#inventory", label: t.navbar.inventory },
        { key: "projects", href: "#projects", label: t.navbar.projects },
    ];

    const handleLogoClick = (
        e: React.MouseEvent<HTMLAnchorElement>
    ) => {
        e.preventDefault();

        setIsOpen(false);

        if (pathname === "/") {
            smoothScrollTo(0, 1100);
        } else {
            router.push("/");
        }
    };

    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        section: string
    ) => {
        e.preventDefault();

        setIsOpen(false);

        if (pathname === "/") {
            smoothScrollToSection(section, 128, 1100);
        } else {
            router.push(`/#${section}`);
        }
    };
    return (
        <header className="fixed top-0 left-0 z-50 w-full">
            <div className="mx-auto max-w-7xl px-4">
                <nav
                    className="
                        mt-4
                        flex items-center justify-between

                        lg:grid
                        lg:grid-cols-[420px_1fr_420px]
                        lg:items-center

                        rounded-2xl
                        border border-white/10
                        bg-black/40
                        px-6
                        py-4
                        backdrop-blur-xl
                    "
                >
                    {/* Logo */}
                    <div className="justify-self-start">
                        <Link
                            href="/"
                            onClick={handleLogoClick}
                            className="text-xl font-bold tracking-wide text-white transition hover:text-violet-400"
                        >
                            Tomasz Zdebiak
                            <span className="text-violet-400">.</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden justify-self-center md:flex md:items-center md:gap-8">
                        {links.map((link) => (
                            <a
                                key={link.key}
                                href={link.href}
                                onClick={(e) =>
                                    handleNavClick(
                                        e,
                                        link.href.replace("#", "")
                                    )
                                }
                                className="text-sm font-medium text-zinc-300 transition hover:text-violet-400"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center justify-self-end gap-4">
                        {/* Language */}
                        <div className="hidden md:block">
                            <LanguageSwitcher />
                        </div>

                        {/* Contact */}
                        <a
                            href="#contact"
                            onClick={(e) =>
                                handleNavClick(e, "contact")
                            }
                            className="hidden rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-500 md:block"
                        >
                            {t.navbar.contact}
                        </a>

                        {/* Mobile Burger */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-3xl text-white transition-transform duration-300 hover:scale-110 md:hidden"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <GiFrenchFries />
                            ) : (
                                <GiHamburger />
                            )}
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
                                    onClick={(e) =>
                                        handleNavClick(
                                            e,
                                            link.href.replace("#", "")
                                        )
                                    }
                                    className="text-zinc-300 transition hover:text-violet-400"
                                >
                                    {link.label}
                                </a>
                            ))}

                            <LanguageSwitcher />

                            <a
                                href="#contact"
                                onClick={(e) =>
                                    handleNavClick(e, "contact")
                                }
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