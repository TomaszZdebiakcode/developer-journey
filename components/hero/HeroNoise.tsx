export default function HeroNoise() {
    return (
        <div
            className="absolute inset-0 opacity-[0.03] mix-blend-soft-light"
            style={{
                backgroundImage: "url('/noise.png')",
            }}
        />
    );
}