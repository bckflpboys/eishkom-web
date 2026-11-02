import Link from 'next/link';

export default function NotFound() {
  return (
    <section>
      <div className="wrap narrow">
        <span className="mono">404</span>
        <h1>Page not found</h1>
        <p>That page does not exist. Try the homepage or the docs.</p>
        <div className="row">
          <Link className="btn" href="/">Back home</Link>
          <Link className="btn alt" href="/docs">Read the docs</Link>
        </div>
      </div>
    </section>
  );
}
