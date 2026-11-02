export const tiers = [
  { n: 1, name: 'Gariep', tier: 'Low tier', blurb: 'Small and quick. Built for low-end phones.', origin: 'Gariep Dam', id: 'stage-1-gariep' },
  { n: 2, name: 'Kendal', tier: 'Mid tier', blurb: 'Balanced. The everyday workhorse.', origin: 'Kendal Power Station', id: 'stage-1-kendal' },
  { n: 3, name: 'Koeberg', tier: 'High tier', blurb: 'Largest and most capable. The flagship.', origin: 'Koeberg Power Station', id: 'stage-1-koeberg' },
];
export const pillars = [
  ['Built for here', 'South African curriculum and context first. English and Afrikaans to start, more local languages to follow.'],
  ['Runs on what you have', 'Small enough for everyday phones and PCs, offline. A cloud API when you need more power.'],
  ['Stages, not versions', 'Each Stage ships as Gariep, Kendal and Koeberg: low, mid and high tier.'],
];
export const releases = [
  { v: 'Stage 1', date: '[RELEASE DATE]', status: 'In development', items: ['Gariep, Kendal and Koeberg tiers', 'Offline use on phones and PCs', 'Cloud API', 'English and Afrikaans'] },
];
export const services = [
  ['Model API', 'Call Stage models from your app through a hosted API. Pay for what you use.'],
  ['On-device deployment', 'Ship Gariep, Kendal or Koeberg inside your own app so it works offline.'],
  ['Custom fine-tuning', 'Adapt a Stage model to your curriculum, language or domain data.'],
];
