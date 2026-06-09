import { experience, involvement } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-content px-6 py-24 sm:px-8 sm:py-32"
    >
      <SectionHeading index="03" eyebrow="Experience" title="Where I've worked" />

      <div className="space-y-12">
        {experience.map((job) => (
          <Reveal key={job.company}>
            <div className="relative border-l border-line pl-6 sm:pl-8">
              <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-bg" />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h3 className="font-display text-xl font-semibold text-ink">
                  {job.role}{" "}
                  <span className="text-dim">· {job.company}</span>
                </h3>
                <span className="font-mono text-xs text-faint">
                  {job.period}
                </span>
              </div>
              <p className="mt-0.5 font-mono text-xs text-faint">
                {job.location}
              </p>
              <ul className="mt-4 space-y-2.5">
                {job.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm leading-relaxed text-dim"
                  >
                    <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-16 border-t border-line pt-8">
          <p className="eyebrow mb-6">Leadership &amp; community</p>
          <div className="grid gap-6 sm:grid-cols-2">
            {involvement.map((item) => (
              <div
                key={item.org}
                className="rounded-xl border border-line bg-elevated/40 p-5"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h4 className="font-medium text-ink">{item.org}</h4>
                  <span className="font-mono text-xs text-faint">
                    {item.period}
                  </span>
                </div>
                <p className="mt-0.5 text-sm text-accent">{item.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-dim">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
