import Link from "next/link"

type Props = {
  title: string
  description: string
  repoUrl: string
  demoUrl?: string
}

export default function GitHubProjectCard({
  title,
  description,
  repoUrl,
  demoUrl,
}: Props) {
  return (
    <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>

      <div className="flex gap-6 text-sm font-medium">
        <Link
          href={repoUrl}
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          View Source Code →
        </Link>

        {demoUrl && (
          <Link
            href={demoUrl}
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Watch Demo →
          </Link>
        )}
      </div>
    </div>
  )
}
