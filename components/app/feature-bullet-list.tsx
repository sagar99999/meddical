type FeatureBulletListProps = {
  items: string;
  className?: string;
};

export default function FeatureBulletList({ items, className = "" }: FeatureBulletListProps) {

  const hightilghts = items.split(",")
  if (!hightilghts) return null

  return (
    <ul className={`grid tracking-wider text-lg grid-cols-2 gap-4 list-none ${className}`.trim()}>
      {hightilghts.map((highlight) => (
        <li
          key={highlight}
          className="relative capitalize pl-8 before:content-[''] before:w-4 before:h-4 before:bg-brand before:rounded-full before:absolute before:left-0 before:top-1.5"
        >
          {highlight.trim()}
        </li>
      ))}
    </ul>
  );
}
