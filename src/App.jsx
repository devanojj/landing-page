import reactLogo from './assets/react.svg'

export default function App() {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="flex-1 flex flex-col items-center justify-center bg-gradient-to-r from-indigo-50 via-white to-blue-50 text-gray-900 px-8">
        <div className="max-w-3xl text-center space-y-6">
          <img src="/src/assets/react.svg" alt="React logo" className="mx-auto w-24 h-24" />
          <h1 className="text-5xl font-bold">Build Fast with React &amp; Vite</h1>
          <p className="text-lg">Kickstart your project with modern tooling and TailwindCSS styling.</p>
          <a
            href="#"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-500"
          >
            Get Started
          </a>
    <main className="page">
      <section className="hero">
        <div className="hero-content">
          <img src={reactLogo} alt="React logo" />
          <h1>Build Fast with React &amp; Vite</h1>
          <p>Kickstart your project with modern tooling and custom styling.</p>
          <a href="#" className="btn">Get Started</a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto grid gap-8 sm:grid-cols-3 px-6">
          <div className="p-6 rounded-lg border text-center space-y-2">
            <img src="/src/assets/react.svg" alt="Build" className="mx-auto w-10 h-10" />
            <h2 className="font-semibold">Modern Build</h2>
      <section className="features">
        <div className="grid">
          <div className="item">
            <img src={reactLogo} alt="Build" />
            <h2>Modern Build</h2>
            <p>Powered by Vite for instant reloads and optimized builds.</p>
          </div>
          <div className="p-6 rounded-lg border text-center space-y-2">
            <img src="/src/assets/react.svg" alt="Components" className="mx-auto w-10 h-10" />
            <h2 className="font-semibold">Reusable Components</h2>
            <p>Create modular components using React and Tailwind.</p>
          <div className="item">
            <img src={reactLogo} alt="Components" />
            <h2>Reusable Components</h2>
            <p>Create modular components using React.</p>
          </div>
          <div className="item">
            <img src={reactLogo} alt="Styling" />
            <h2>Easy Styling</h2>
            <p>Simple styling with modern CSS.</p>
          </div>
          <div className="p-6 rounded-lg border text-center space-y-2">
            <img src="/src/assets/react.svg" alt="Styling" className="mx-auto w-10 h-10" />
            <h2 className="font-semibold">Tailwind Styling</h2>
            <p>Utility-first classes for rapid custom designs.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
