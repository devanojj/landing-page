export default function App() {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="flex-1 flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white text-gray-900 px-8">
        <div className="max-w-3xl text-center">
          <h1 className="text-5xl font-bold mb-4">Build Fast with React &amp; Vite</h1>
          <p className="mb-8 text-lg">Kickstart your project with modern tooling and TailwindCSS styling.</p>
          <a
            href="#"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-500"
          >
            Get Started
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto grid gap-8 sm:grid-cols-2 px-6">
          <div className="p-6 rounded-lg border text-center">
            <h2 className="font-semibold mb-2">Modern Build</h2>
            <p>Powered by Vite for instant reloads and optimized builds.</p>
          </div>
          <div className="p-6 rounded-lg border text-center">
            <h2 className="font-semibold mb-2">Reusable Components</h2>
            <p>Create modular components using React and Tailwind.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
