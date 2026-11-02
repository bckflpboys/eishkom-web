import Link from 'next/link';
import { tiers, pillars } from '../lib/data';
import TierCard from '../components/TierCard';

export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="wrap">
          <span className="mono">Eishkom Stage 1</span>
          <h1>Small models. Big reach.</h1>
          <p>Eishkom is a South African AI lab building the Stage family of language models, made to run on the devices people already own.</p>
          <div className="row"><Link className="btn" href="/products">Explore Stage 1</Link><Link className="btn alt" href="/docs">Read the docs</Link></div>
        </div>
      </div>
      <section><div className="wrap"><h2>Three tiers. One family.</h2><div className="grid">{tiers.map(t => <TierCard key={t.name} t={t} />)}</div></div></section>
      <section style={{ paddingTop: 0 }}><div className="wrap"><h2>What we do</h2>
        <div className="grid">{pillars.map(([h, p], i) => <div className="card" key={h}><span className="mono">0{i + 1}</span><h3>{h}</h3><p>{p}</p></div>)}</div>
      </div></section>
      <section className="band"><div className="wrap"><h2>Building with Eishkom?</h2><p>Tell us what you are making and we will point you to the right tier.</p><Link className="btn" href="/contact">Talk to us</Link></div></section>
    </>
  );
}
