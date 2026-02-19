export const metadata = {
  title: "Contact | Giacomo Demetrio Masone",
  description: "Get in touch."
};

export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 space-y-10">
      <h1 className="text-4xl font-bold">Contact</h1>

      <div className="space-y-4 text-lg text-gray-700">
        <p>
          Email:{" "}
          <a
            href="mailto:giacomodemetrio@gmail.com"
            className="underline hover:text-black"
          >
            giacomodemetrio@gmail.com
          </a>
        </p>

        <p>
          GitHub:{" "}
          <a
            href="https://github.com/Degas01"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-black"
          >
            github.com/Degas01
          </a>
        </p>

        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/giacomo-demetrio-masone-6350431b8"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-black"
          >
            View Profile
          </a>
        </p>

        <p>Location: Coventry, United Kingdom</p>
      </div>
    </main>
  );
}
