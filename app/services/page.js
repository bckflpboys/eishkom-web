import Link from 'next/link';
import { services } from '../../lib/data';

export const metadata = { title: 'Services' };

export default function Services() {
  return (
    <>
      <div className="hero">
        <div className="wrap">
          <span className="mono">Services</span>
          <h1>However you build, we can help.</h1>
          <p>Use the models as they are, put them inside your app, or fine-tune one for your own data.</p>
          <div className="row"><Link className="btn" href="/contact">Start a project</Link></div>
        </div>
      </div>
      <section>
        <div className="wrap">
          <div className="grid">
            {services.map(([h, p], i) => (
              <div className="card" key={h}>
                <span className="mono">0{i + 1}</span>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <h2>Not sure which tier fits?</h2>
          <p>Tell us what you are building and we will point you to the right model.</p>
          <Link className="btn" href="/contact">Talk to us</Link>
        </div>
      </section>
    </>
  );
}
