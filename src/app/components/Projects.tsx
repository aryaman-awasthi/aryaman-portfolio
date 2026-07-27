import { projects } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const spans = [
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-7",
];

export default function Projects() {
  return (
    <section id="work">
      <SectionHeading index="04" title="SELECTED PROJECTS" cmd="ls ./projects" />

      <div className="grid gap-3.5 md:grid-cols-12">
        {projects.map((project, i) => (
          <a
            key={project.name}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`block border border-line bg-panel px-7 py-[26px] transition-colors hover:border-acc hover:bg-panel2 ${spans[i] ?? ""}`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs text-acc">
                [{String(i + 1).padStart(2, "0")}]{" "}
                <span className="text-faint">{project.type.toLowerCase()}</span>
              </span>
              <span className="text-[15px] text-acc">↗</span>
            </div>
            <h3 className="mt-3.5 text-[21px] font-bold text-ink">
              {project.name}
            </h3>
            <p className="mt-2.5 text-[13px] text-muted">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-line2 px-[9px] py-[3px] text-[11px] text-dim"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
