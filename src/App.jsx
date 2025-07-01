import reactLogo from './assets/react.svg'

export default function App() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-content">
          <img src={reactLogo} alt="React logo" />
          <h1>Build Fast with React &amp; Vite</h1>
          <p>Kickstart your project with modern tooling and custom styling.</p>
          <a href="#" className="btn">Get Started</a>
        </div>
      </section>

      <section className="features">
        <div className="grid">
          <div className="item">
            <img src={reactLogo} alt="Build" />
            <h2>Modern Build</h2>
            <p>Powered by Vite for instant reloads and optimized builds.</p>
          </div>
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
        </div>
      </section>
    </main>
  )
}
