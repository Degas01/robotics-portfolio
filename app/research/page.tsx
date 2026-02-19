export const metadata = {
  title: "Research | Giacomo Masone",
  description: "Research interests in adaptive locomotion, reinforcement learning and autonomous systems."
};

export default function ResearchPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20 space-y-12">
      <h1 className="text-4xl font-bold">Research & Technical Direction</h1>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Adaptive Locomotion</h2>
        <p className="text-gray-600 leading-relaxed">
          Developing terrain-aware locomotion strategies that combine classical control with
          reinforcement learning for robust legged mobility.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Hybrid Control & Learning</h2>
        <p className="text-gray-600 leading-relaxed">
          Integrating model-based control with policy-gradient methods to achieve stable,
          efficient and scalable robotic behaviour.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Simulation-to-Real Transfer</h2>
        <p className="text-gray-600 leading-relaxed">
          Domain randomization, physics simulation, and system-level validation for reliable
          deployment of autonomous systems.
        </p>
      </section>
    </main>
  );
}
