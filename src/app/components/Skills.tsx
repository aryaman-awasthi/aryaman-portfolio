import { skillGroups } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const spans = [
  "md:col-span-4",
  "md:col-span-8",
  "md:col-span-5",
  "md:col-span-4",
  "md:col-span-3",
];

export default function Skills() {
  return (
    <section id="stack">
      <SectionHeading index="02" title="STACK" cmd="ls ./tools" />
      <div className="grid gap-3.5 md:grid-cols-12">
        {skillGroups.map((group, i) => (
          <div
            key={group.label}
            className={`border border-line bg-panel px-6 py-[22px] transition-colors hover:border-line-hover ${spans[i] ?? ""}`}
          >
            <div className="mb-3.5 flex justify-between">
              <span className="text-xs font-bold text-acc">
                &gt; {group.label.toLowerCase()}
              </span>
              <span className="text-[11px] text-faint">
                ({group.items.length})
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="border border-line2 bg-panel2 px-[11px] py-1 text-xs leading-[1.6] text-fg2"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
