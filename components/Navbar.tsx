import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b">
      <span className="font-semibold">GDM</span>
      <div className="flex gap-6">
        <Link href="/projects">Projects</Link>
        <Link href="/research">Research</Link>
        <Link href="/philosophy">Philosophy</Link>
        <Link href="/cv">CV</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}
