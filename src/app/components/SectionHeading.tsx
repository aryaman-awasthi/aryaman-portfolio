export default function SectionHeading({
  index,
  title,
  cmd,
}: {
  index: string;
  title: string;
  cmd: string;
}) {
  return (
    <div className="mb-3.5 mt-11 flex items-center gap-3">
      <span className="text-xs text-acc">[{index}]</span>
      <span className="text-xs font-bold tracking-[3px] text-ink">{title}</span>
      <span aria-hidden="true" className="flex-1 border-t border-dashed border-dash" />
      <span className="text-[11px] text-faint">$ {cmd}</span>
    </div>
  );
}
