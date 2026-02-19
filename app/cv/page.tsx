export default function CV() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-6">Curriculum Vitae</h1>

      <p className="text-gray-600 mb-6">
        Robotics & Autonomous Systems Engineer — 
        MSc Robotics | BEng Mechanical Engineering
      </p>

      <p className="text-sm text-gray-500 mb-8">
        I hold the right to work in the United Kingdom without sponsorship.
      </p>

      <div className="border rounded-lg overflow-hidden shadow">
        <iframe
          src="/cv/Giacomo_Masone_CV_2026.pdf"
          width="100%"
          height="800px"
          className="w-full"
        />
      </div>

      <div className="mt-6">
        <a
          href="/cv/Giacomo_Masone_CV_2026.pdf"
          download
          className="text-blue-600 hover:underline"
        >
          Download CV →
        </a>
      </div>
    </main>
  )
}
