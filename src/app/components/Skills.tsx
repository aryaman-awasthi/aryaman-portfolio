import { skillGroups } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-content px-6 py-24 sm:px-8 sm:py-32">
      <SectionHeading index="02" eyebrow="Stack" title="Tools I build with" />

      <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.05}>
            <div className="flex flex-col gap-4 border-t border-line pt-5">
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="chip hover:border-accent hover:text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
