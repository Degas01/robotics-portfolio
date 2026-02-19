import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Giacomo Masone | Robotics Engineer",
  description:
    "Robotics and Autonomous Systems Engineer specializing in legged locomotion, reinforcement learning, control systems, and mechanical design.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow max-w-5xl mx-auto px-6 py-12 w-full">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
