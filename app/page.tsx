import Hero from "@/components/sections/Hero";
import MissionStatus from "@/components/sections/MissionStatus";
import About from "@/components/sections/About";
import SkillTree from "@/components/sections/SkillTree";
import BossBattles from "@/components/sections/BossBattles";

export default function Home() {
  return (
    <main className="bg-zinc-950 text-white">

      <Hero />

      <section className="mx-auto max-w-7xl px-6 py-32">
        <div className="grid gap-20 lg:grid-cols-2 lg:items-start">

          <MissionStatus />

          <About />

        </div>
      </section>

      <SkillTree />

      <BossBattles />

    </main>
  );
}