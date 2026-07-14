"use client";

import Image from "next/image";

type DeveloperCardProps = {
    started: boolean;
};

export default function DeveloperCard({
    started,
}: DeveloperCardProps) {
    return (
        <div
            className={`
    fixed
    z-50

    bottom-4
    left-4
    right-4

    xl:left-auto
    xl:right-8
    xl:bottom-8

    transition-all
    duration-700
    ease-out

    ${started
                    ? "translate-y-0 opacity-100"
                    : "translate-y-40 opacity-0 pointer-events-none"
                }
`}
        >
            <div
                className="
                 w-full
        xl:w-auto
                    overflow-hidden
                    rounded-2xl
                    border
                    border-zinc-800
                    bg-zinc-900/85
                    backdrop-blur-xl
                    shadow-2xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:scale-[1.02]
                    hover:border-violet-500/40
                    hover:shadow-violet-500/20
                "
            >
                <div className="flex items-center gap-4 px-5 py-4">

                    <Image
                        src="/images/profile.webp"
                        alt="Tomasz Zdebiak"
                        width={56}
                        height={56}
                        className="h-14 w-14 rounded-xl object-cover object-[center_5%]"
                    />

                    <div>

                        <h3 className="font-bold text-white">
                            Tomasz Zdebiak
                        </h3>

                        <p className="text-sm text-zinc-400">
                            Game Software Engineering
                        </p>

                        <div className="mt-2 flex items-center gap-6">

                            <div className="flex items-center gap-2">

                                <span className="h-2 w-2 rounded-full bg-green-400" />

                                <span className="text-xs font-medium text-green-400">
                                    Open to Work
                                </span>

                            </div>

                            <span className="text-sm font-bold text-green-400">
                                ✚ 100 HP
                            </span>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}