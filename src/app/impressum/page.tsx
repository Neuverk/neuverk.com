export default function ImpressumPage() {
  return (
    <div className="container inner-page">
      <div className="section-head">
        <span className="section-kicker">Legal</span>
        <h1>Impressum</h1>
        <p>Legal notice and website information</p>
      </div>

      <div className="card">
        <p><strong>Website operator:</strong> Neuverk</p>
        <p><strong>Status:</strong> Research and development phase</p>
        <p><strong>Contact:</strong> hello@neuverk.com</p>
        <p><strong>Location:</strong> Munich, Bavaria, Germany</p>

        <br />

        <p>
          This website is currently operated as a pre-launch brand and research
          platform. No commercial sales or legally binding product offerings are
          currently provided through this website.
        </p>

        <br />

        <p>
          Product information shown on this website is intended for information,
          concept presentation, and product preview purposes only.
        </p>
      </div>
    </div>
  );
}