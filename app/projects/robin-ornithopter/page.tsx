export default function RobinOrnithopter() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">

      <h1 className="text-4xl font-bold mb-4">
        R.O.B.I.N. – Bio-Inspired Ornithopter
      </h1>

      <p className="text-lg text-gray-600 mb-10">
        Multidisciplinary development of a flapping-wing UAV integrating CFD-driven
        aerodynamic optimisation, mechanical design, and embedded control.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Context</h2>
        <p className="text-gray-700">
          The project aimed to design a bio-inspired ornithopter capable of
          controlled flapping-wing flight, requiring aerodynamic modelling,
          structural validation, and embedded actuation control.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">System Architecture</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Parametric CAD wing and transmission design</li>
          <li>CFD-based aerodynamic performance evaluation</li>
          <li>Structural stress analysis for flapping loads</li>
          <li>Embedded microcontroller-based actuation system</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Key Engineering Decisions</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Wing geometry optimisation through simulation</li>
          <li>Lightweight material selection for manufacturability</li>
          <li>Mechanical linkage design for efficient motion transfer</li>
          <li>System-level integration of aero-structural constraints</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Results</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Validated aerodynamic lift characteristics</li>
          <li>Stable mechanical transmission system</li>
          <li>Integrated hardware-software prototype demonstration</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Technologies</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "SolidWorks",
            "ANSYS",
            "CFD",
            "Arduino",
            "Embedded Systems",
            "Aerospace Design",
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
    href="https://github.com/Degas01/bio-inspired_ornithopter"
    target="_blank"
    className="inline-block px-6 py-3 border rounded-xl hover:bg-gray-100 transition"
  >
    View Repository on GitHub →
  </a>
</section>