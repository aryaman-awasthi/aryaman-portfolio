import { experience, involvement } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  const job = experience[0];

  return (
    <section id="experience">
      <SectionHeading index="03" title="EXPERIENCE" cmd="git log --experience" />
      <div className="grid gap-3.5 md:grid-cols-12">
        <div className="border border-line bg-panel px-[30px] py-7 md:col-span-7">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-ink">{job.role}</h3>
              <div className="mt-1 text-[13px] text-acc">{job.company}</div>
            </div>
            <span className="whitespace-nowrap border border-line2 px-2.5 py-1 text-[11px] text-dim">
              {job.period} · {job.location}
            </span>
          </div>
          <div className="mt-[22px] flex flex-col gap-3">
            {job.points.map((point) => (
              <div key={point} className="flex gap-3">
                <span className="shrink-0 text-acc">&gt;</span>
                <span className="text-[13px] text-muted">{point}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-rows-2 gap-3.5 md:col-span-5">
          {involvement.map((item) => (
            <div key={item.org} className="border border-line bg-panel px-6 py-[22px]">
              <div className="flex justify-between gap-3">
                <div className="text-sm font-bold text-ink">{item.org}</div>
                <span className="whitespace-nowrap text-[11px] text-faint">
                  {item.period}
                </span>
              </div>
              <div className="mt-[3px] text-xs text-acc">{item.role}</div>
              <p className="mt-2.5 text-[12.5px] text-muted">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
