import GitHubProjectCard from "@/components/GitHubProjectCard"
import Link from "next/link"

<GitHubProjectCard
  title="Metamorphic Legged Robot Autonomy"
  description="Hybrid CPG + PPO controller with SLAM-based terrain adaptation."
  repoUrl="https://github.com/Degas01/origaker_main"
  demoUrl="https://private-user-images.githubusercontent.com/106490356/525023967-51ee76fd-f67b-4e3d-a401-f9eaa724a803.mp4?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzEwNzEwODUsIm5iZiI6MTc3MTA3MDc4NSwicGF0aCI6Ii8xMDY0OTAzNTYvNTI1MDIzOTY3LTUxZWU3NmZkLWY2N2ItNGUzZC1hNDAxLWY5ZWFhNzI0YTgwMy5tcDQ_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwMjE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDIxNFQxMjA2MjVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yNDE4OGFmNDMyYzg4YjRhMzVjMzI3NTI1MDJjZjk4MzFlNGFkZmMyOTQ5MTA0MTUyOTEwODFjM2U4N2Y2YjcwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.gKAWuVrlrfzVfGNY4fqXw-dzQ_x2z6VV5meVgxJR2a4"
/>

const projects = [
  {
    title: "Metamorphic Legged Robot – Adaptive Autonomy",
    description:
      "Hybrid CPG–PPO locomotion control with SLAM-driven terrain adaptation in PyBullet.",
    href: "/projects/metamorphic-legged-robot",
    tags: ["Reinforcement Learning", "ROS", "SLAM", "PyBullet", "Control Theory"],
  },
  {
    title: "Quadruped Gait Control (MATLAB & Simulink)",
    description:
      "Comparative study of TD3, DDPG and mDDPG for stable and energy-efficient locomotion.",
    href: "/projects/quadruped-rl",
    tags: ["MATLAB", "Simulink", "TD3", "Continuous Control"],
  },
  {
    title: "R.O.B.I.N. – Bio-Inspired Ornithopter",
    description:
      "CFD-driven flapping wing UAV integrating mechanical design and embedded control.",
    href: "/projects/robin-ornithopter",
    tags: ["CFD", "CAD", "Arduino", "Aerospace"],
  },
  {
    title: "NAO Autonomous Ball Retrieval",
    description:
      "Full perception-to-action autonomy using OpenCV, SLAM and A* planning.",
    href: "/projects/nao-autonomy",
    tags: ["Computer Vision", "SLAM", "Path Planning", "Humanoid Robotics"],
  },
]

export default function Projects() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-10">Selected Projects</h1>

      <div className="grid gap-8">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.href}
            className="border rounded-xl p-6 hover:shadow-md transition"
          >
            <h2 className="text-2xl font-semibold mb-2">
              {project.title}
            </h2>

            <p className="text-gray-600 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-sm bg-gray-100 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}