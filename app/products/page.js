import Link from 'next/link';
import { tiers } from '../../lib/data';
import TierCard from '../../components/TierCard';

export const metadata = { title: 'Products' };

export default function Products() {
  return (
    <>
      <div className="hero">
        <div className="wrap">
          <span className="mono">Products</span>
          <h1>Three tiers. One family.</h1>
          <p>Every Stage ships as Gariep, Kendal and Koeberg, so you can pick the smallest model that does the job.</p>
          <div className="row"><Link className="btn" href="/contact">Talk to us</Link><Link className="btn alt" href="/docs">Read the docs</Link></div>
        </div>
      </div>
      <section>
        <div className="wrap">
          <div className="grid">{tiers.map(t => <TierCard key={t.name} t={t} />)}</div>
        </div>
      </section>
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2>At a glance</h2>
          <div className="scroll">
            <table>
              <thead><tr><th>Tier</th><th>Model ID</th><th>Named for</th><th>Best for</th></tr></thead>
              <tbody>
                {tiers.map(t => (
                  <tr key={t.name}><td>{t.tier}</td><td><code>{t.id}</code></td><td>{t.origin}</td><td>{t.blurb}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
