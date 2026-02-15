export default function NaoAutonomy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">

      <h1 className="text-4xl font-bold mb-4">
        NAO Robot Autonomous Ball Retrieval System
      </h1>

      <p className="text-lg text-gray-600 mb-10">
        End-to-end perception-to-action pipeline enabling autonomous object
        detection, localisation, and navigation for humanoid robotics.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Context</h2>
        <p className="text-gray-700">
          The objective was to design an autonomous system enabling NAO to
          detect, localise, and retrieve a target object using onboard sensing
          and real-time planning.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">System Architecture</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>OpenCV-based ball detection and segmentation</li>
          <li>SLAM-based localisation</li>
          <li>Global path planning using A*</li>
          <li>Closed-loop motion execution</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Key Engineering Decisions</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Robust color-based segmentation under lighting variation</li>
          <li>Separation of perception and planning layers</li>
          <li>Modular ROS-based implementation</li>
          <li>Iterative testing in controlled environments</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Results</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Reliable object detection and tracking</li>
          <li>Consistent path planning execution</li>
          <li>Successful autonomous retrieval demonstrations</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Technologies</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "ROS",
            "OpenCV",
            "SLAM",
            "A*",
            "Humanoid Robotics",
            "Python",
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
    href="https://github.com/Degas01/nao_robot"
    target="_blank"
    className="inline-block px-6 py-3 border rounded-xl hover:bg-gray-100 transition"
  >
    View Repository on GitHub →
  </a>
</section>
