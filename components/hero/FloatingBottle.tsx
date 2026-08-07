import Image from "next/image";

type FloatingBottleProps = {
    src: string;
    className?: string;
};

export default function FloatingBottle({
    src,
    className,
}: FloatingBottleProps) {
    return (
        <Image
            src={src}
            alt=""
            width={220}
            height={220}
            className={className}
            draggable={false}
        />
    );
}