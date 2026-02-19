export const metadata = {
  title: "Engineering Philosophy | Giacomo Masone",
  description: "Systems thinking and engineering philosophy."
};

export default function PhilosophyPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20 space-y-12">
      <h1 className="text-4xl font-bold">Systems Thinking & Engineering Philosophy</h1>

      <p className="text-lg text-gray-600 leading-relaxed">
        I approach robotics as a system-level discipline. Performance gains do not come
        from isolated optimisation, but from carefully managing interfaces between
        mechanics, control, perception and computation.
      </p>

      <p className="text-lg text-gray-600 leading-relaxed">
        My focus is on building architectures that are modular, scalable and robust —
        systems where mechanical design decisions and learning-based control strategies
        are developed cohesively rather than independently.
      </p>

      <blockquote className="border-l-4 border-gray-300 pl-6 italic text-gray-500">
        "Robust autonomy emerges from disciplined system integration."
      </blockquote>
    </main>
  );
}
