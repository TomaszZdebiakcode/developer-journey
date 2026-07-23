const de = {
    navbar: {
        about: "Über mich",
        skills: "Fähigkeiten",
        projects: "Projekte",
        contact: "Kontakt",
    },

    hero: {
        greeting: "Hallo, ich bin Tomasz",

        available: "Offen für neue Möglichkeiten",

        titleStart: "Ich baue meinen",
        titleHighlight: "Weg als Entwickler.",

        subtitle: "Ich verwandle Ideen in Produkte.",

        description: "Eine Quest nach der anderen.",

        button: "Abenteuer fortsetzen",

        buttonHover: "Bosskämpfe ansehen",

        story: "Meine Geschichte",
    },

    about: {
        section: "Über mich",

        title: "Warum ich entwickle.",

        paragraph1:
            "Ich möchte meine Karriere nicht darauf aufbauen, nur das Minimum zu leisten.",

        paragraph2:
            "Ich möchte mehr als einen traditionellen Job. Ich möchte Produkte entwickeln, Systeme schaffen und Probleme lösen, die das Leben der Menschen verbessern.",

        paragraph3:
            "Developer Journey ist der Ort, an dem ich diesen Prozess dokumentiere. Jedes Projekt, jede Herausforderung und jede Quest bringt mich meinem Ziel näher, der Entwickler zu werden, der ich sein möchte.",
    },

    missionStatus: {
        title: "Missionsstatus",

        currentObjective: "Aktuelles Ziel",
        currentObjectiveValue: "Software Engineer werden.",

        sideQuest: "Nebenquest",
        sideQuestValue: "Menschen dabei helfen, schöne Gärten zu gestalten.",

        nextExpansion: "Nächste Erweiterung",
        nextExpansionValue: "Produkte entwickeln, die das Leben einfacher machen.",
    },

    skillTree: {
        section: "Werte",

        title: "Wie ich denke.",

        cards: [
            {
                title: "Produkte entwickeln",

                description:
                    "Ich verwandle Ideen gerne in Produkte, die echte Probleme lösen und Mehrwert schaffen.",
            },

            {
                title: "In Systemen denken",

                description:
                    "Ich bevorzuge skalierbare Systeme, anstatt immer wieder dieselben Probleme zu lösen.",
            },

            {
                title: "Ständig wachsen",

                description:
                    "Jedes Projekt ist eine neue Gelegenheit zu lernen, mich weiterzuentwickeln und ein besserer Entwickler zu werden.",
            },
        ],
    },

    bossBattles: {
        section: "Bosskämpfe",

        title: "Jeder Boss besiegt.",

        description:
            "Jedes Projekt hat mich aus meiner Komfortzone herausgeführt. Jeder Bosskampf hat neue Fähigkeiten freigeschaltet und mich zu einem besseren Entwickler gemacht.",

        projects: [
            {
                boss: "Boss #01",
                status: "Besiegt",

                name: "Developer Journey",

                description:
                    "Ein Portfolio, das meinen Weg vom Game Software Engineering Studenten zum Software Engineer dokumentiert.",

                difficulty: 5,

                image: "/images/developer-journey.webp",

                rewardsTitle: "Erlernte Fähigkeiten",

                battleButton: "Kampf starten",

                hoverButton: "Bereit?",

                sourceButton: "Quellcode",

                href: "/boss/developer-journey",

                github: "#",

                skills: [
                    { icon: "react", label: "React" },
                    { icon: "next", label: "Next.js" },
                    { icon: "tailwind", label: "Tailwind CSS" },
                    { icon: "responsive", label: "Responsive UI" },
                ],
            },

            {
                boss: "Boss #02",
                status: "Besiegt",

                name: "Slimter",

                description:
                    "Eine WordPress-Webseite zum Thema Adipositas, die verschiedene Behandlungsmethoden in einer barrierefreien und responsiven Oberfläche vergleicht.",

                difficulty: 4,

                image: "/images/slimter.webp",

                imagePosition: "object-[40%_center]",

                rewardsTitle: "Erlernte Fähigkeiten",

                battleButton: "Kampf starten",

                hoverButton: "Bereit?",

                sourceButton: "Quellcode",

                href: "/boss/slimter",

                github: "#",

                skills: [
                    { icon: "wordpress", label: "WordPress" },
                    { icon: "javascript", label: "JavaScript" },
                    { icon: "css", label: "CSS" },
                    { icon: "accessibility", label: "Accessibility" },
                ],
            },

            {
                boss: "Boss #03",
                status: "Besiegt",

                name: "Warehouse Pathfinder",

                description:
                    "Ein Python-Projekt mit A*- und BFS-Algorithmen zur Visualisierung intelligenter Lagerroboter-Navigation.",

                difficulty: 3,

                image: "/images/warehouse.webp",

                imagePosition: "object-[33%_center]",

                rewardsTitle: "Erlernte Fähigkeiten",

                battleButton: "Kampf starten",

                hoverButton: "Bereit?",

                sourceButton: "Quellcode",

                href: "/boss/warehouse-pathfinder",

                github: "#",

                skills: [
                    { icon: "python", label: "Python" },
                    { icon: "astar", label: "A* Algorithmus" },
                    { icon: "bfs", label: "BFS" },
                    { icon: "testing", label: "Unit Tests" },
                ],
            },
        ],
    },

    inventory: {
        section: "Inventar",

        title: "Freigeschaltete Fähigkeiten.",

        description:
            "Jedes Projekt hat neue Werkzeuge, Technologien und Denkweisen freigeschaltet. Mein Inventar wächst mit jedem Bosskampf.",

        frontend: "Frontend",

        backend: "Backend",

        tools: "Werkzeuge",

        currentQuest: "Aktuelle Quest",

        currentQuestDescription:
            "Software Engineer werden, Produkte entwickeln, Unternehmen beim Wachstum unterstützen und mein eigenes Softwareunternehmen gründen.",
    },

    achievements: {
        section: "Erfolge",

        title: "Quest-Fortschritt.",

        description:
            "Jedes Projekt, jede Herausforderung und jede Erfahrung bringt mich meinem endgültigen Ziel einen Schritt näher.",

        unlocked: "Freigeschaltet",

        progress: "Aktuelle Quest",

        locked: "Gesperrt",

        items: [
            {
                title: "Erste React-Anwendung",

                description:
                    "Meine erste echte React-Anwendung entwickelt.",

                status: "unlocked",

                icon: "Trophy",
            },

            {
                title: "Erste WordPress-Website",

                description:
                    "Slimter entworfen und veröffentlicht.",

                status: "unlocked",

                icon: "Trophy",
            },

            {
                title: "Next.js Portfolio",

                description:
                    "Mein Developer Journey Portfolio erstellt.",

                status: "unlocked",

                icon: "Trophy",
            },

            {
                title: "Erste Kundenwebsite",

                description:
                    "Meine erste Website für einen zahlenden Kunden entwickelt und ausgeliefert.",

                status: "unlocked",

                icon: "Briefcase",
            },

            {
                title: "Erste Stelle als Software Engineer",

                description:
                    "Meine erste Position als Software Engineer erhalten.",

                status: "progress",

                icon: "Briefcase",
            },

            {
                title: "Erstes SaaS veröffentlichen",

                description:
                    "Mein eigenes Softwareprodukt entwickeln und veröffentlichen.",

                status: "locked",

                icon: "Rocket",
            },

            {
                title: "Eigenes Unternehmen gründen",

                description:
                    "Ein Softwareunternehmen gründen und Unternehmen beim Wachstum unterstützen.",

                status: "locked",

                icon: "Building2",
            },

            {
                title: "100 zufriedene Kunden",

                description:
                    "Mehr als 100 zufriedenen Kunden einen Mehrwert bieten.",

                status: "locked",

                icon: "Users",
            },
        ],
    },

    questLog: {
        section: "Questlog",

        title: "Mein bisheriger Weg.",

        description:
            "Jedes Projekt ist eine weitere abgeschlossene Quest. Jede Herausforderung hat neue Fähigkeiten freigeschaltet und mich meinem Ziel, der Entwickler zu werden, der ich sein möchte, einen Schritt näher gebracht.",

        completed: "Abgeschlossen",

        current: "Aktuelle Quest",

        locked: "Gesperrt",

        items: [
            {
                year: "2023",

                title: "Studium Game Software Engineering begonnen",

                description:
                    "Mein Studium der Softwareentwicklung mit Schwerpunkt Spieleentwicklung und Programmiergrundlagen begonnen.",

                status: "completed",

                icon: "GraduationCap",
            },

            {
                year: "2026",

                title: "Slimter entwickelt",

                description:
                    "Eine WordPress-Website zum Thema Adipositas und gesunder Lebensstil erstellt und dabei meine UX- und Responsive-Design-Kenntnisse erweitert.",

                status: "completed",

                icon: "Globe",
            },

            {
                year: "2026",

                title: "Warehouse Pathfinder",

                description:
                    "A*- und BFS-Pfadfindungsalgorithmen mit Python-Visualisierung und Tests implementiert.",

                status: "completed",

                icon: "Boxes",
            },

            {
                year: "2026",

                title: "Developer Journey",

                description:
                    "Ein gamifiziertes Portfolio mit React, Next.js und Tailwind CSS erstellt, um meine Projekte und Fähigkeiten zu präsentieren.",

                status: "completed",

                icon: "Rocket",
            },

            {
                year: "JETZT",

                title: "Erste Kundenwebsite",

                description:
                    "Arbeit an meiner ersten kommerziellen Website für einen zahlenden Kunden.",

                status: "completed",

                icon: "Briefcase",
            },

            {
                year: "ALS NÄCHSTES",

                title: "Erste Stelle als Software Engineer",

                description:
                    "Einem professionellen Softwareentwicklungsteam beitreten und mich als Entwickler weiterentwickeln.",

                status: "current",

                icon: "Flag",
            },

            {
                year: "ZUKUNFT",

                title: "Mein eigenes Softwareunternehmen gründen",

                description:
                    "Produkte und Systeme entwickeln und ein Softwareunternehmen aufbauen, das Unternehmen beim Wachstum unterstützt.",

                status: "locked",

                icon: "Rocket",
            },
        ],
    },

    contact: {
        section: "Endgegner",

        titleStart: "Lass uns",

        titleMiddle: "etwas",

        titleEnd: "Großartiges erschaffen.",

        description:
            "Ich suche derzeit nach Möglichkeiten als Software Engineer, nach Freelance-Projekten und spannenden Kooperationen. Wenn du eine Idee, eine Herausforderung oder einfach Lust auf einen Austausch hast, lass uns die nächste Quest gemeinsam beginnen.",

        emailButton: "E-Mail senden",
    },
};

export default de;