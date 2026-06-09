import Reveal from "./Reveal";

export default function SectionHeading({
  index,
  eyebrow,
  title,
}: {
  index: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <Reveal>
      <div className="mb-12 flex items-end justify-between gap-6 border-b border-line pb-6">
        <div>
          <p className="eyebrow mb-3">{eyebrow}</p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {title}
          </h2>
        </div>
        <span className="hidden font-mono text-sm text-faint sm:block">
          {index}
        </span>
      </div>
    </Reveal>
  );
}
