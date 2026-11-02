import Mark from './Mark';
export default function TierCard({ t }) {
  return (
    <div className="card dark">
      <Mark tier={t.n} size={72} />
      <p className="mono" style={{ color: '#FFC400', margin: '20px 0 6px' }}>{t.tier}</p>
      <h3 style={{ fontSize: 40, margin: 0 }}>{t.name}</h3>
      <p>{t.blurb}</p>
      <p className="mono">Named for {t.origin}</p>
    </div>
  );
}
