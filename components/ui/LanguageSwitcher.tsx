"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    const [open, setOpen] = useState(false);

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                ref.current &&
                !ref.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () =>
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
    }, []);

    const languages = [
        {
            code: "pl",
            flag: "🇵🇱",
            label: "Polski",
        },
        {
            code: "en",
            flag: "🇬🇧",
            label: "English",
        },
        {
            code: "de",
            flag: "🇩🇪",
            label: "Deutsch",
        },
    ] as const;

    const current = languages.find(
        (l) => l.code === language
    );

    return (
        <div
            ref={ref}
            className="relative"
        >
            <button
                onClick={() => setOpen(!open)}
                className="
          flex
          items-center
          gap-2
          rounded-xl
          border
          border-white/10
          bg-zinc-900/70
          px-4
          py-2
          text-sm
          text-white
          transition
          hover:border-violet-500
        "
            >
                <Globe size={16} />

                <span>
                    {current?.flag} {current?.label}
                </span>

                <ChevronDown
                    size={16}
                    className={`transition ${open ? "rotate-180" : ""
                        }`}
                />
            </button>

            {open && (
                <div
                    className="
            absolute
            right-0
            mt-2
            w-44
            overflow-hidden
            rounded-xl
            border
            border-white/10
            bg-zinc-900
            shadow-2xl
            shadow-black/40
          "
                >
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => {
                                setLanguage(lang.code);

                                setOpen(false);
                            }}
                            className={`
                flex
                w-full
                items-center
                gap-3
                px-4
                py-3
                text-left
                transition

                ${language === lang.code
                                    ? "bg-violet-600 text-white"
                                    : "text-zinc-300 hover:bg-zinc-800"
                                }
              `}
                        >
                            <span className="text-lg">
                                {lang.flag}
                            </span>

                            {lang.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}