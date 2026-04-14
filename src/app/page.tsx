import Link from "next/link";

export default function HomePage() {
  return (
    <div className="page">
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Human-centered innovation</span>
            <h1>Innovation that never stands still</h1>
            <p className="lead">
              Neuverk explores intelligent systems, modern workflows, and
              future-ready ideas that help people save time, grow with
              confidence, and work more professionally.
            </p>
            <p className="support">
              Technology should not replace people. It should support them,
              strengthen them, and help them move forward.
            </p>

            <div className="actions">
              <Link href="/about" className="btn btn-primary">
                Discover Neuverk
              </Link>
              <Link href="/products" className="btn btn-secondary">
                View Products
              </Link>
            </div>
          </div>

          <div className="info-card">
            <h3>What defines Neuverk</h3>
            <ul>
              <li>Ideas that improve the way people work</li>
              <li>Systems designed to save time and reduce friction</li>
              <li>Innovation that builds confidence, clarity, and flow</li>
              <li>A long-term vision shaped around practical progress</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">About Neuverk</span>
            <h2>Built around people, progress, and possibility</h2>
            <p>
              At Neuverk, we believe innovation should make work clearer,
              faster, and more confident. We focus on ideas and systems that
              reduce friction, improve professional flow, and help people do
              more meaningful work with better structure and support.
            </p>
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">What drives Neuverk</span>
            <h2>Practical innovation with a human purpose</h2>
          </div>

          <div className="grid three-grid">
            <article className="card">
              <h3>Save time</h3>
              <p>
                Reduce repetitive work and create space for higher-value
                thinking and better execution.
              </p>
            </article>

            <article className="card">
              <h3>Build confidence</h3>
              <p>
                Help people make decisions with more clarity, support, and
                consistency in daily work.
              </p>
            </article>

            <article className="card">
              <h3>Improve professionalism</h3>
              <p>
                Bring structure, quality, and reliability into workflows that
                need to perform at a higher level.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="products-preview">
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Products</span>
            <h2>What we are building</h2>
            <p>
              Neuverk brings ideas into focused platforms designed for real-world
              progress.
            </p>
          </div>

          <div className="grid three-grid">
            <article className="card">
              <span className="tag">Vaultdoc</span>
              <h3>Documentation and compliance workflow support</h3>
              <p>
                Structured support for policies, SOPs, runbooks, and audit-oriented
                documentation workflows.
              </p>
            </article>

            <article className="card">
              <span className="tag">Orbit</span>
              <h3>Operational intelligence and workflow innovation</h3>
              <p>
                System-focused thinking for smarter IT operations, automation
                support, and stronger execution flow.
              </p>
            </article>

            <article className="card">
              <span className="tag">Next</span>
              <h3>The next layer of innovation is always in motion</h3>
              <p>
                Neuverk is built as a long-term platform for evolving ideas,
                future systems, and meaningful progress.
              </p>
            </article>
          </div>

          <div className="center-actions">
            <Link href="/products" className="btn btn-primary">
              Explore Products
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="notice-box">
            <p>
              Neuverk is currently in a research and development phase.
              Information on this website is provided for brand, vision, and
              product preview purposes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}