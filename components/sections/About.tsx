"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className=" scroll-mt-32 w-full px-6 lg:px-0">
            <div className="space-y-10 sm:space-y-12">
                <div>
                    <p className="mb-3 text-sm uppercase tracking-[0.3em] text-violet-400">
                        {t.about.section}
                    </p>

                    <h2 className="max-w-4xl break-words text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                        {t.about.title}
                    </h2>
                </div>

                <div className="max-w-2xl space-y-6 text-base leading-8 text-zinc-400 sm:space-y-8 sm:text-lg sm:leading-9">
                    <p className="break-words">
                        {t.about.paragraph1}
                    </p>

                    <p className="break-words">
                        {t.about.paragraph2}
                    </p>

                    <p className="break-words">
                        {t.about.paragraph3}
                    </p>
                </div>
            </div>
        </section>
    );
}