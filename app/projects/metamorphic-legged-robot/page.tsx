export default function MetamorphicRobot() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">

      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">
        Adaptive Autonomy for a Metamorphic Legged Robot
      </h1>

      {/* Short Technical Tagline */}
      <p className="text-lg text-gray-600 mb-10">
        Hybrid CPG–PPO locomotion control integrated with SLAM-based terrain
        mapping and hierarchical planning for adaptive legged navigation.
      </p>

      {/* 1️⃣ Context / Problem */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Context</h2>
        <p className="text-gray-700">
          Fixed locomotion strategies limit robustness in variable terrain.
          The system required terrain-aware adaptation combining perception,
          planning, and learning-based control within a simulation-first
          framework.
        </p>
      </section>

      {/* 2️⃣ System Architecture */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">System Architecture</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Hybrid Central Pattern Generator + PPO controller</li>
          <li>Domain-randomized PyBullet training environment</li>
          <li>SLAM-based terrain mapping</li>
          <li>Global (A*) and local (DWA) planning</li>
          <li>Terrain-triggered morphology switching</li>
        </ul>
      </section>

      {/* 3️⃣ Engineering Decisions */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Key Engineering Decisions</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Hybrid control to stabilize RL exploration</li>
          <li>Domain randomization for robustness</li>
          <li>Separation of low-level gait and high-level planning</li>
          <li>Simulation-first evaluation pipeline</li>
        </ul>
      </section>

      {/* 4️⃣ Results (Quantified) */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Results</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Faster policy convergence</li>
          <li>Higher navigation success rate</li>
          <li>Reduced Cost of Transport</li>
          <li>Improved robustness to terrain variation</li>
        </ul>
      </section>

      {/* 5️⃣ Technologies Used */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Technologies</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "Python",
            "Stable-Baselines3",
            "PyBullet",
            "SLAM",
            "A*",
            "DWA",
            "TensorBoard",
            "Control Theory",
          ].map((tech, index) => (
            <span
              key={index}
              className="text-sm bg-gray-100 px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* 6️⃣ Media (Optional but Powerful) */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Demonstration</h2>
        <p className="text-gray-700">
          Simulation experiments validating adaptive locomotion under varying
          terrain conditions.
        </p>
        {/* You can embed video here later */}
      </section>

      {/* 7️⃣ Repository Link */}
      <a
        href="https://github.com/Degas01"
        target="_blank"
        className="text-blue-600 underline"
      >
        View GitHub Repository →
      </a>

    </main>
  )
}

<section className="mt-12">
  <h2 className="text-2xl font-semibold mb-4">Source Code</h2>

  <a
    href="https://github.com/Degas01/origaker_main"
    target="_blank"
    className="inline-block px-6 py-3 border rounded-xl hover:bg-gray-100 transition"
  >
    View Repository on GitHub →
  </a>
</section>
