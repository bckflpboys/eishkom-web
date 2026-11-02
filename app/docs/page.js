import Link from 'next/link';
import { tiers } from '../../lib/data';

export const metadata = { title: 'Docs' };

const nav = [
  ['overview', 'Overview'],
  ['quickstart', 'Quickstart'],
  ['models', 'Models'],
  ['on-device', 'On-device'],
  ['support', 'Support'],
];

export default function Docs() {
  return (
    <>
      <div className="hero">
        <div className="wrap">
          <span className="mono">Docs</span>
          <h1>Build with Stage.</h1>
          <p>Call the hosted API or ship a model inside your own app. Start with Gariep, move up when you need more.</p>
        </div>
      </div>
      <section>
        <div className="wrap docs">
          <aside>
            <p className="mono">On this page</p>
            <nav aria-label="Docs">{nav.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
          </aside>
          <div className="narrow">
            <h2 id="overview" style={{ marginTop: 0 }}>Overview</h2>
            <p>Eishkom Stage 1 is a family of small language models built for South African learners, languages and devices. There are three tiers: Gariep (low), Kendal (mid) and Koeberg (high).</p>
            <p>Use the hosted API when you have a connection. Use an on-device build when you do not.</p>

            <h2 id="quickstart">Quickstart</h2>
            <p>Grab an API key from the contact page, then send your first request.</p>
            <pre><code>{`curl https://api.eishkom.ai/v1/chat/completions \\
  -H "Authorization: Bearer $EISHKOM_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "stage-1-gariep",
    "messages": [{ "role": "user", "content": "Sawubona" }]
  }'`}</code></pre>
            <p>The response is JSON with a single <code>choices</code> array, the same shape you already know from other chat APIs.</p>

            <h2 id="models">Models</h2>
            <div className="scroll">
              <table>
                <thead><tr><th>Model ID</th><th>Tier</th><th>Named for</th></tr></thead>
                <tbody>
                  {tiers.map(t => <tr key={t.id}><td><code>{t.id}</code></td><td>{t.tier}</td><td>{t.origin}</td></tr>)}
                </tbody>
              </table>
            </div>

            <h2 id="on-device">On-device</h2>
            <p>Gariep is small enough to run offline on everyday phones and PCs. Kendal and Koeberg need more memory but still fit on modern hardware.</p>
            <div className="note">On-device builds are in private preview. <Link href="/contact">Contact us</Link> to join.</div>

            <h2 id="support">Support</h2>
            <p>Questions, bugs or a use case we have not thought of? <Link href="/contact">Talk to us</Link>.</p>
          </div>
        </div>
      </section>
    </>
  );
}
