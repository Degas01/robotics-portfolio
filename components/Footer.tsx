export default function Footer() {
  return (
    <footer className="border-t mt-20 py-8 text-sm text-gray-600">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div>
          © {new Date().getFullYear()} Giacomo Demetrio Masone
        </div>

        <div className="flex gap-6">
          <a href="mailto:your.email@gmail.com" className="hover:underline">
            Email
          </a>

          <a 
            href="https://github.com/Degas01" 
            target="_blank"
            className="hover:underline"
          >
            GitHub
          </a>

          <a 
            href="https://linkedin.com/in/YOUR-LINK" 
            target="_blank"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </footer>
  )
}
