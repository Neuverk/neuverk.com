import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neuverk",
  description:
    "Neuverk explores intelligent systems, modern workflows, and future-ready ideas that help people save time, grow with confidence, and work more professionally.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container header-inner">
            <Link href="/" className="brand">
              <span className="brand-mark" />
              <span>NEUVERK</span>
            </Link>

            <nav className="nav">
              <Link href="/about">About</Link>
              <Link href="/products">Products</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/impressum">Impressum</Link>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="container footer-inner">
            <div>
              <div className="brand footer-brand">
                <span className="brand-mark" />
                <span>NEUVERK</span>
              </div>
              <p className="footer-tagline">Innovation that never stands still</p>
            </div>

            <div className="footer-links">
              <Link href="/about">About</Link>
              <Link href="/products">Products</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/impressum">Impressum</Link>
              <Link href="/cookie-policy">Cookie Policy</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}