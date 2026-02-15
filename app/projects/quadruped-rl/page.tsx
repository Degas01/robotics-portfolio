export default function QuadrupedRL() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">

      <h1 className="text-4xl font-bold mb-4">
        Quadruped Gait Control using Reinforcement Learning
      </h1>

      <p className="text-lg text-gray-600 mb-10">
        Comparative implementation of TD3, DDPG, and modified DDPG for stable,
        energy-efficient quadruped locomotion in MATLAB/Simscape.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Context</h2>
        <p className="text-gray-700">
          Designing stable quadruped gaits in continuous control environments
          requires balancing convergence speed, stability, and energy efficiency.
          The project focused on evaluating deep RL methods in a physics-accurate
          simulation framework.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">System Architecture</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Simscape Multibody quadruped with 12 actuated joints</li>
          <li>Continuous torque control policy</li>
          <li>Actor–Critic reinforcement learning framework</li>
          <li>Replay buffer and policy noise integration</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Key Engineering Decisions</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Comparison of TD3 vs DDPG stability characteristics</li>
          <li>Reward shaping for velocity, stability, and torque penalties</li>
          <li>Twin Q-network implementation to reduce overestimation bias</li>
          <li>Structured experimental evaluation across multiple runs</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Results</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>TD3 achieved faster convergence than DDPG</li>
          <li>Higher final reward and improved gait stability</li>
          <li>Reduced oscillatory behaviour in learned policies</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Technologies</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "MATLAB",
            "Simulink",
            "Simscape Multibody",
            "TD3",
            "DDPG",
            "Continuous Control",
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
    href="https://github.com/Degas01/quadruped-gait-rl"
    target="_blank"
    className="inline-block px-6 py-3 border rounded-xl hover:bg-gray-100 transition"
  >
    View Repository on GitHub →
  </a>
</section>