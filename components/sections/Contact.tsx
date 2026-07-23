"use client";

import { ArrowRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
    const { t } = useLanguage();

    return (
        <section className="mx-auto max-w-7xl px-6 py-32">
            <div className="overflow-hidden rounded-3xl border border-violet-500/30 bg-gradient-to-br from-violet-500/10 to-zinc-900 p-12">
                <p className="mb-3 uppercase tracking-[0.3em] text-violet-400">
                    {t.contact.section}
                </p>

                <h2 className="text-5xl font-bold leading-[0.9] tracking-tight text-white sm:text-6xl">
                    {t.contact.titleStart}{" "}
                    <span className="sm:hidden">
                        <br />
                    </span>
                    {t.contact.titleMiddle}
                    <span className="sm:hidden">
                        <br />
                    </span>
                    {t.contact.titleEnd}
                </h2>

                <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
                    {t.contact.description}
                </p>

                <div className="mt-12 flex flex-wrap gap-6">
                    <a
                        href="mailto:TomaszZdebiak@gmail.com"
                        className="group flex items-center gap-3 rounded-2xl bg-violet-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-violet-400 hover:shadow-xl hover:shadow-violet-500/20"
                    >
                        <Mail className="h-5 w-5" />

                        {t.contact.emailButton}

                        <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                    </a>

                    <a
                        href="https://github.com/TomaszZdebiakcode"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 rounded-2xl border border-zinc-700 px-8 py-4 transition-all duration-300 hover:border-violet-400 hover:bg-zinc-900"
                    >
                        <FaGithub className="h-5 w-5" />
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/zdebiaktomasz/?locale=pl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 rounded-2xl border border-zinc-700 px-8 py-4 transition-all duration-300 hover:border-violet-400 hover:bg-zinc-900"
                    >
                        <FaLinkedin className="h-5 w-5" />
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
}