export default function ProductsPage() {
  return (
    <div className="container inner-page">
      <div className="section-head section-head-wide">
        <span className="section-kicker">Products</span>
        <h1>Focused platforms for real-world progress</h1>
        <p>
          Neuverk brings ideas into dedicated products built to improve the way
          teams work, operate, and move forward. Each platform serves a specific
          purpose while sharing the same direction: practical innovation with a
          human focus.
        </p>
      </div>

      <div className="products-showcase">
        <article className="product-hero-card">
          <div className="product-hero-top">
            <span className="tag">Vaultdoc</span>
            <span className="status-badge status-live">Live</span>
          </div>

          <h2>Documentation and compliance workflow support</h2>
          <p>
            Vaultdoc helps create structured policies, SOPs, runbooks, and
            audit-oriented documentation with a more guided and professional
            workflow.
          </p>

          <ul className="product-points">
            <li>Compliance-focused document workflows</li>
            <li>Structured support for policies and SOPs</li>
            <li>Built for clarity, consistency, and audit readiness</li>
          </ul>

          <div className="product-actions">
            <a
              className="btn btn-primary"
              href="https://vaultdoc.neuverk.com"
              target="_blank"
              rel="noreferrer"
            >
              Open Vaultdoc
            </a>
          </div>
        </article>

        <article className="product-hero-card">
          <div className="product-hero-top">
            <span className="tag">Orbit</span>
            <span className="status-badge status-dev">In Development</span>
          </div>

          <h2>Operational intelligence and workflow innovation</h2>
          <p>
            Orbit is designed around smarter IT operations, workflow support,
            and structured automation thinking that helps systems and teams work
            with better flow.
          </p>

          <ul className="product-points">
            <li>Operational thinking for modern IT environments</li>
            <li>Automation support with human oversight</li>
            <li>Built to improve execution, speed, and structure</li>
          </ul>

          <div className="product-actions">
            <button className="btn btn-primary" disabled>
            Coming Soon
            </button>
          </div>
        </article>
      </div>

      <section className="products-lower-section">
        <div className="section-head">
          <span className="section-kicker">Next</span>
          <h2>Innovation in motion</h2>
          <p>
            Neuverk is built as a long-term foundation for future platforms,
            evolving systems, and new layers of practical innovation.
          </p>
        </div>

        <div className="grid three-grid">
          <article className="card">
            <span className="status-badge status-next">Future</span>
            <h3>More focused platforms</h3>
            <p>
              New ideas can grow into dedicated products when they reach the
              level of real practical value.
            </p>
          </article>

          <article className="card">
            <span className="status-badge status-next">Direction</span>
            <h3>Shared product philosophy</h3>
            <p>
              Every product under Neuverk should save time, improve clarity, and
              help people work more confidently.
            </p>
          </article>

          <article className="card">
            <span className="status-badge status-next">Long Term</span>
            <h3>Built to expand</h3>
            <p>
              Neuverk is not limited to one idea. It is a growing ecosystem of
              products shaped by continuous innovation.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}