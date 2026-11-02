import { releases } from '../../lib/data';

export const metadata = { title: 'Changelog' };

export default function Changelog() {
  return (
    <>
      <div className="hero">
        <div className="wrap">
          <span className="mono">Changelog</span>
          <h1>What shipped.</h1>
          <p>Release notes for the Stage family, from first preview to general availability.</p>
        </div>
      </div>
      <section>
        <div className="wrap narrow">
          {releases.map(r => (
            <div className="card" key={r.v} style={{ marginBottom: 20 }}>
              <span className="mono">{r.date} · {r.status}</span>
              <h2 style={{ margin: '8px 0 16px' }}>{r.v}</h2>
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                {r.items.map(i => <li key={i} style={{ marginBottom: 6 }}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
