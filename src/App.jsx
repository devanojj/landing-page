import reactLogo from './assets/react.svg'

export default function App() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-content">
          <img src={reactLogo} alt="React logo" />
          <h1>Devano Jose</h1>
          <p>Welcome to my profile.</p>
        </div>
      </section>

      <section className="features">
        <div className="grid">
          <a
            className="item"
            href="https://github.com/devanojj/NASA-Space-Project"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>NASA Space Project</h2>
            <p>View on GitHub</p>
          </a>

          <a
            className="item"
            href="https://github.com/devanojj/EmailAPI"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>EmailAPI</h2>
            <p>View on GitHub</p>
          </a>

          <a
            className="item"
            href="https://github.com/devanojj/Python1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Python1</h2>
            <p>View on GitHub</p>
          </a>
        </div>
      </section>
    </main>
  )
}
