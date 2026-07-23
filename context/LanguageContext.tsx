"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";

import en from "../messages/en";
import pl from "../messages/pl";
import de from "../messages/de";

type Language = "en" | "pl" | "de";

const dictionaries = {
    en,
    pl,
    de,
};

export type Dictionary = typeof en;

type LanguageContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Dictionary;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [language, setLanguage] = useState<Language>("en");

    useEffect(() => {
        const saved = localStorage.getItem("language") as Language | null;

        if (saved) {
            setLanguage(saved);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("language", language);
    }, [language]);

    return (
        <LanguageContext.Provider
            value={{
                language,
                setLanguage,
                t: dictionaries[language],
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error("useLanguage must be used inside LanguageProvider");
    }

    return context;
}