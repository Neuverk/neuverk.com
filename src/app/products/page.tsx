export default function ProductsPage() {
  return (
    <div className="container inner-page">
      <div className="section-head">
        <span className="section-kicker">Products</span>
        <h1>What we are building</h1>
        <p>
          Neuverk brings ideas into focused platforms designed for real-world
          progress.
        </p>
      </div>

      <div className="grid three-grid">
        <a
          className="card product-link-card"
          href="https://vaultdoc.neuverk.com"
          target="_blank"
          rel="noreferrer"
        >
          <span className="tag">Vaultdoc</span>
          <h3>Documentation and compliance workflow support</h3>
          <p>
            Structured support for policies, SOPs, runbooks, and audit-oriented
            documentation workflows.
          </p>
          <span className="link-arrow">Open Vaultdoc →</span>
        </a>

        <a
          className="card product-link-card"
          href="https://orbit.neuverk.com"
          target="_blank"
          rel="noreferrer"
        >
          <span className="tag">Orbit</span>
          <h3>Operational intelligence and workflow innovation</h3>
          <p>
            System-focused thinking for smarter IT operations, automation
            support, and stronger execution flow.
          </p>
          <span className="link-arrow">Open Orbit →</span>
        </a>

        <div className="card">
          <span className="tag">Next</span>
          <h3>The next layer of innovation is always in motion</h3>
          <p>
            Neuverk is built as a long-term platform for evolving ideas, future
            systems, and meaningful progress.
          </p>
        </div>
      </div>
    </div>
  );
}