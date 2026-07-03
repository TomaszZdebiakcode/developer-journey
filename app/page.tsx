import Hero from "@/components/sections/Hero";
import MissionStatus from "@/components/sections/MissionStatus";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <Hero />
      <MissionStatus />
    </main>
  );
}