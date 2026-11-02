import './globals.css';
import Link from 'next/link';
import { Space_Grotesk, IBM_Plex_Mono } from 'next/font/google';
import Mark from '../components/Mark';

const sans = Space_Grotesk({ subsets: ['latin'], variable: '--sans' });
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: '500', variable: '--mono' });

export const metadata = {
  title: { default: 'Eishkom: South African AI lab', template: '%s · Eishkom' },
  description: 'Eishkom builds the Stage family of small language models for South African learners, languages and devices.',
};
const nav = [['Products', '/products'], ['Docs', '/docs'], ['Changelog', '/changelog'], ['Services', '/services'], ['Contact', '/contact']];

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <body>
        <header>
          <div className="wrap nav">
            <Link className="brand" href="/"><Mark size={36} />Eishkom</Link>
            <nav className="links" aria-label="Main">{nav.map(([l, h]) => <Link key={h} href={h}>{l}</Link>)}</nav>
          </div>
        </header>
        <main>{children}</main>
        <footer>
          <div className="wrap foot">
            <div><strong>Eishkom</strong><p className="mono">AI Lab · South Africa</p></div>
            <nav className="links" aria-label="Footer">{nav.map(([l, h]) => <Link key={h} href={h}>{l}</Link>)}</nav>
            <p className="mono">© {new Date().getFullYear()} Eishkom</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
