const Y = '#FFC400';
const G = {
  0: <circle cx="26" cy="25" r="5" fill={Y} />,
  1: <g fill="none" stroke={Y} strokeWidth="2.5" strokeLinecap="round"><path d="M16 20q3.5-5 7 0t7 0t7 0" /><path d="M16 29q3.5-5 7 0t7 0t7 0" /></g>,
  2: <path d="M19 35Q24 27 22 16h10Q30 27 35 35Z" fill="none" stroke={Y} strokeWidth="2.5" strokeLinejoin="round" />,
  3: <><circle cx="27" cy="25" r="10" fill="none" stroke={Y} strokeWidth="2.5" /><circle cx="27" cy="25" r="3" fill={Y} /></>,
};
const bars = [[18, 52, 20], [40, 38, 34], [62, 20, 52]];
export default function Mark({ tier = 0, size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 96 96" aria-hidden="true">
      <rect width="96" height="96" rx="22" fill="#0E1116" />
      <rect x="3" y="3" width="90" height="90" rx="19" fill="none" stroke={Y} strokeOpacity=".2" strokeWidth="1.5" />
      {bars.map(([x, y, h], i) => {
        const fill = tier === 0 ? (i < 2 ? '#F3F4F1' : Y) : i < tier ? Y : null;
        return fill
          ? <rect key={i} x={x} y={y} width="16" height={h} rx="4" fill={fill} />
          : <rect key={i} x={x} y={y} width="16" height={h} rx="4" fill="none" stroke="#4A515C" strokeWidth="2" />;
      })}
      <rect x="14" y="79" width="68" height="3" rx="1.5" fill={Y} fillOpacity=".4" />
      {G[tier]}
    </svg>
  );
}
