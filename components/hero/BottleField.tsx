import Image from "next/image";

export default function BottleField() {
    return (
        <>
            {/* zywiec */}
            <Image
                src="/images/bottles/butelka3_zywiec_zdroj.png"
                alt=""
                width={180}
                height={420}
                className="
                    absolute
                    right-24
                    top-10
                    rotate-12
                    opacity-20
                    blur-[2px]
                    pointer-events-none
                    select-none
                "
            />

            {/* butelka2_saguaro.png */}
            <Image
                src="/images/bottles/butelka2_saguaro.png"
                alt=""
                width={190}
                height={450}
                className="
                    absolute
                    right-72
                    bottom-10
                    -rotate-12
                    opacity-15
                    blur-[1px]
                    pointer-events-none
                    select-none
                "
            />

            {/* butelka1_quellbrunn.png */}
            <Image
                src="/images/bottles/butelka1_quellbrunn.png"
                alt=""
                width={170}
                height={420}
                className="
                    absolute
                    right-[-30px]
                    bottom-28
                    rotate-[18deg]
                    opacity-15
                    blur-[3px]
                    pointer-events-none
                    select-none
                "
            />
        </>
    );
}