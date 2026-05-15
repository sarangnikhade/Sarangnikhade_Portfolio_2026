export default function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y hairline py-6">
      <div className="marquee whitespace-nowrap text-3xl md:text-5xl font-display tracking-tightest">
        {row.map((it, i) => (
          <span key={i} className="flex items-center gap-12">
            <span>{it}</span>
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
