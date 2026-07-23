const en = {
    navbar: {
        about: "About",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
    },

    hero: {
        greeting: "Hi, I'm Tomasz",
        available: "Available for opportunities",

        titleStart: "Building my",
        titleHighlight: "Developer Journey.",

        subtitle: "Turning ideas into products.",
        description: "One quest at a time.",

        button: "Continue Adventure",
        buttonHover: "View Boss Battles",

        story: "Read My Story",
    },

    about: {
        section: "About",

        title: "Why I Create.",

        paragraph1:
            "I don't want to build a career around doing the minimum.",

        paragraph2:
            "I want something bigger than a traditional job. I want to build products, create systems and solve problems that improve people's lives.",

        paragraph3:
            "Developer Journey is where I document that process. Every project, every challenge and every quest moves me one step closer to becoming the engineer I want to be.",
    },

    missionStatus: {
        title: "Mission Status",

        currentObjective: "Current Objective",
        currentObjectiveValue: "Become a Software Engineer.",

        sideQuest: "Side Quest",
        sideQuestValue: "Help people create beautiful gardens.",

        nextExpansion: "Next Expansion",
        nextExpansionValue: "Build products that make life easier.",
    },

    skillTree: {
        section: "Values",

        title: "How I Think.",

        cards: [
            {
                title: "Build Products",

                description:
                    "I enjoy turning ideas into products that solve real problems and create value.",
            },

            {
                title: "Think in Systems",

                description:
                    "I prefer building scalable systems instead of repeatedly solving the same problems.",
            },

            {
                title: "Keep Growing",

                description:
                    "Every project is another opportunity to learn, improve and become a better engineer.",
            },
        ],
    },

    bossBattles: {
        section: "Boss Battles",

        title: "Every Boss Defeated.",

        description:
            "Every project pushed me beyond my comfort zone. Every boss battle unlocked new skills that made me a better engineer.",

        projects: [
            {
                boss: "Boss #01",
                status: "Defeated",

                name: "Developer Journey",

                description:
                    "A portfolio documenting my journey from Game Software Engineering student to Software Engineer while building real-world products.",

                difficulty: 5,

                image: "/images/developer-journey.webp",

                rewardsTitle: "Rewards Unlocked",

                battleButton: "Enter Battle",

                hoverButton: "Ready?",

                sourceButton: "Source Code",

                href: "/boss/developer-journey",

                github: "#",

                skills: [
                    {
                        icon: "react",
                        label: "React",
                    },

                    {
                        icon: "next",
                        label: "Next.js",
                    },

                    {
                        icon: "tailwind",
                        label: "Tailwind CSS",
                    },

                    {
                        icon: "responsive",
                        label: "Responsive UI",
                    },
                ],
            },

            {
                boss: "Boss #02",

                status: "Defeated",

                name: "Slimter",

                description:
                    "A WordPress website focused on obesity education, helping users compare treatment methods through an accessible and responsive experience.",

                difficulty: 4,

                image: "/images/slimter.webp",

                imagePosition: "object-[40%_center]",

                rewardsTitle: "Rewards Unlocked",

                battleButton: "Enter Battle",

                hoverButton: "Ready?",

                sourceButton: "Source Code",

                href: "/boss/slimter",

                github: "#",

                skills: [
                    {
                        icon: "wordpress",
                        label: "WordPress",
                    },

                    {
                        icon: "javascript",
                        label: "JavaScript",
                    },

                    {
                        icon: "css",
                        label: "CSS",
                    },

                    {
                        icon: "accessibility",
                        label: "Accessibility",
                    },
                ],
            },

            {
                boss: "Boss #03",

                status: "Defeated",

                name: "Warehouse Pathfinder",

                description:
                    "A Python project implementing A* and BFS algorithms to visualize intelligent warehouse robot navigation.",

                difficulty: 3,

                image: "/images/warehouse.webp",

                imagePosition: "object-[33%_center]",

                rewardsTitle: "Rewards Unlocked",

                battleButton: "Enter Battle",

                hoverButton: "Ready?",

                sourceButton: "Source Code",

                href: "/boss/warehouse-pathfinder",

                github: "#",

                skills: [
                    {
                        icon: "python",
                        label: "Python",
                    },

                    {
                        icon: "astar",
                        label: "A* Algorithm",
                    },

                    {
                        icon: "bfs",
                        label: "BFS",
                    },

                    {
                        icon: "testing",
                        label: "Unit Testing",
                    },
                ],
            },
        ],
    },

    inventory: {
        section: "Inventory",

        title: "Skills I've Unlocked.",

        description:
            "Every project unlocked new tools, technologies and ways of thinking. My inventory keeps growing with every boss battle.",

        frontend: "Frontend",

        backend: "Backend",

        tools: "Tools",

        currentQuest: "Current Quest",

        currentQuestDescription:
            "Become a Software Engineer, build products, help businesses grow, and launch my own software company.",
    },

    achievements: {
        section: "Achievements",

        title: "Quest Progress.",

        description:
            "Every project, every challenge and every lesson moves me one step closer to my ultimate goal.",

        unlocked: "Unlocked",

        progress: "Current Quest",

        locked: "Locked",

        items: [
            {
                title: "First React Application",

                description:
                    "Built my first real React project.",

                status: "unlocked",

                icon: "Trophy",
            },

            {
                title: "First WordPress Website",

                description:
                    "Designed and launched Slimter.",

                status: "unlocked",

                icon: "Trophy",
            },

            {
                title: "Next.js Portfolio",

                description:
                    "Created my Developer Journey portfolio.",

                status: "unlocked",

                icon: "Trophy",
            },

            {
                title: "First Client Website",

                description:
                    "Build and deliver my first website for a paying client.",

                status: "unlocked",

                icon: "Briefcase",
            },

            {
                title: "First Software Engineering Job",

                description:
                    "Land my first Software Engineering role.",

                status: "progress",

                icon: "Briefcase",
            },

            {
                title: "Launch First SaaS",

                description:
                    "Build and release my own software product.",

                status: "locked",

                icon: "Rocket",
            },

            {
                title: "Build My Own Company",

                description:
                    "Create a software company and help businesses grow.",

                status: "locked",

                icon: "Building2",
            },

            {
                title: "100 Happy Clients",

                description:
                    "Deliver value to over 100 satisfied clients.",

                status: "locked",

                icon: "Users",
            },
        ],
    },

    questLog: {
        section: "Quest Log",

        title: "My Journey So Far.",

        description:
            "Every project represents another quest completed. Every challenge unlocked new skills and brought me one step closer to becoming the engineer I want to be.",

        completed: "Completed",

        current: "Current Quest",

        locked: "Locked",

        items: [
            {
                year: "2023",

                title: "Started Game Software Engineering",

                description:
                    "Began my journey studying software engineering with a focus on game development and programming fundamentals.",

                status: "completed",

                icon: "GraduationCap",
            },

            {
                year: "2026",

                title: "Built Slimter",

                description:
                    "Created a WordPress website focused on obesity education and healthier lifestyles while improving UX and responsive design skills.",

                status: "completed",

                icon: "Globe",
            },

            {
                year: "2026",

                title: "Warehouse Pathfinder",

                description:
                    "Implemented A* and BFS pathfinding algorithms with Python visualization and testing.",

                status: "completed",

                icon: "Boxes",
            },

            {
                year: "2026",

                title: "Developer Journey",

                description:
                    "Built a gamified portfolio with React, Next.js and Tailwind CSS to showcase projects and skills.",

                status: "completed",

                icon: "Rocket",
            },

            {
                year: "NOW",

                title: "First Client Website",

                description:
                    "Working towards delivering my first commercial website for a paying client.",

                status: "completed",

                icon: "Briefcase",
            },

            {
                year: "NEXT",

                title: "First Software Engineering Job",

                description:
                    "Join a professional software engineering team and continue growing as a developer.",

                status: "current",

                icon: "Flag",
            },

            {
                year: "FUTURE",

                title: "Launch My Software Company",

                description:
                    "Build products, systems and a software business helping companies grow.",

                status: "locked",

                icon: "Rocket",
            },
        ],
    },

    contact: {
        section: "Final Boss",

        titleStart: "Let's Build",

        titleMiddle: "Something",

        titleEnd: "Great.",

        description:
            "I'm currently looking for Software Engineering opportunities, freelance projects and collaborations. If you have an idea, a challenge or just want to connect, let's start the next quest together.",

        emailButton: "Send Email",
    },
};

export default en;