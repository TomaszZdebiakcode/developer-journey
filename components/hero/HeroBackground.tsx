import BottleField from "./BottleField";
export default function HeroBackground() {
    return (
        <>
            {/* Main Green Glow */}
            <div
                className="
                    absolute
                    right-[-250px]
                    top-1/2
                    h-[900px]
                    w-[900px]
                    -translate-y-1/2
                    rounded-full
                    bg-emerald-500/20
                    blur-[180px]
                "
            />

            {/* Secondary Glow */}
            <div
                className="
                    absolute
                    right-[10%]
                    top-[25%]
                    h-[500px]
                    w-[500px]
                    rounded-full
                    bg-green-300/10
                    blur-[120px]
                "
            />

            
            <BottleField />

            {/* Floating Dust */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute left-[55%] top-[20%] h-2 w-2 rounded-full bg-white blur-sm" />
                <div className="absolute left-[72%] top-[35%] h-1 w-1 rounded-full bg-white blur-sm" />
                <div className="absolute left-[68%] top-[65%] h-2 w-2 rounded-full bg-emerald-300 blur-md" />
                <div className="absolute left-[88%] top-[40%] h-1 w-1 rounded-full bg-white blur-sm" />
                <div className="absolute left-[80%] top-[78%] h-2 w-2 rounded-full bg-green-300 blur-md" />
            </div>
        </>
    );
}