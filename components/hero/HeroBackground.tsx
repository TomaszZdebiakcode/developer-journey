export default function HeroBackground() {
    return (
        <>
            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />

            {/* Green Glow */}
            <div className="absolute right-0 top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[180px]" />

            {/* Noise */}
            {/* BottleField będzie tutaj */}
        </>
    );
}