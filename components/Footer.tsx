export default function Footer() {
  return (
    <footer className="border-t mt-20 py-8 text-center text-sm text-gray-500">
      <p>
        © {new Date().getFullYear()} Giacomo Demetrio Masone
      </p>
      <a
        href="https://github.com/Degas01"
        target="_blank"
        className="block mt-2 hover:underline"
      >
        GitHub
      </a>
    </footer>
  )
}
