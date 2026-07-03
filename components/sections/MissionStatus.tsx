export default function MissionStatus() {
  return (
    <section className="w-full max-w-2xl rounded-3xl border border-zinc-800 bg-zinc-900 p-10 shadow-xl">
      <h2 className="mb-8 text-3xl font-bold text-white">
        🎯 Mission Status
      </h2>

      <div className="space-y-3 text-zinc-600 hover:scale-[1.01]">
        <p>
          <span className="font-semibold text-white">
            Current Objective
          </span>
          <br />
          Become a Software Engineer.
        </p>

        <p>
          <span className="font-semibold text-green-800">
            🌿 Side Quest
          </span>
          <br />
          Help people create beautiful gardens.
        </p>

        <p>
          <span className="font-semibold text-violet-400">
            🚀 Next Expansion
          </span>
          <br />
          Build products that make life easier.
        </p>
      </div>
    </section>
  );
}