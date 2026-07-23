"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function About() {
    const { t } = useLanguage();

    return (
        <section className="w-full">
            <div className="space-y-12">
                <div>
                    <p className="mb-3 text-sm uppercase tracking-[0.3em] text-violet-400">
                        {t.about.section}
                    </p>

                    <h2 className="text-6xl font-bold text-white">
                        {t.about.title}
                    </h2>
                </div>

                <div className="max-w-2xl space-y-8 text-lg leading-9 text-zinc-400">
                    <p>{t.about.paragraph1}</p>

                    <p>{t.about.paragraph2}</p>

                    <p>{t.about.paragraph3}</p>
                </div>
            </div>
        </section>
    );
}