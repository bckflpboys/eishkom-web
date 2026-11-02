export async function POST(req) {
  const b = await req.json();
  if (!b.email || !b.message) return Response.json({ error: 'Missing fields' }, { status: 400 });
  // TODO: send with Resend/Postmark, e.g. await resend.emails.send({...})
  console.log('contact', b);
  return Response.json({ ok: true });
}
