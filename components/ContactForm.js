'use client';
import { useState } from 'react';
export default function ContactForm() {
  const [status, setStatus] = useState('idle');
  async function submit(e) {
    e.preventDefault();
    setStatus('sending');
    const body = Object.fromEntries(new FormData(e.target));
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      setStatus(res.ok ? 'sent' : 'error');
    } catch { setStatus('error'); }
  }
  if (status === 'sent') return <div className="card"><h3>Thanks, we got it.</h3><p>We will get back to you soon.</p></div>;
  return (
    <form className="card form" onSubmit={submit}>
      <label>Name<input name="name" required /></label>
      <label>Email<input name="email" type="email" required /></label>
      <label>Topic
        <select name="topic"><option>General</option><option>Model API</option><option>On-device deployment</option><option>Custom fine-tuning</option><option>Press</option></select>
      </label>
      <label>Message<textarea name="message" rows="6" required /></label>
      <button className="btn" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send message'}</button>
      {status === 'error' && <p role="alert">Something went wrong. Please try again.</p>}
    </form>
  );
}
