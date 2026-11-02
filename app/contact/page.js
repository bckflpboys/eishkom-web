import ContactForm from '../../components/ContactForm';

export const metadata = { title: 'Contact' };

export default function Contact() {
  return (
    <>
      <div className="hero">
        <div className="wrap">
          <span className="mono">Contact</span>
          <h1>Talk to us.</h1>
          <p>Questions about the models, pricing or deployment? Send a message and we will get back to you.</p>
        </div>
      </div>
      <section>
        <div className="wrap">
          <div className="grid">
            <ContactForm />
            <div className="card">
              <span className="mono">Direct</span>
              <h3 style={{ marginTop: 8 }}>Other ways to reach us</h3>
              <p>Prefer email? We read everything.</p>
              <p className="mono">hello@eishkom.ai</p>
              <p>Based in South Africa. We usually reply within two working days.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
