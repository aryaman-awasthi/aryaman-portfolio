import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-content px-6 py-24 sm:px-8 sm:py-32">
      <SectionHeading index="04" eyebrow="Work" title="Selected projects" />

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={(i % 2) * 0.08}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-2xl border border-line bg-elevated/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-elevated"
            >
              <div className="mb-5 flex items-start justify-between">
                <span className="font-mono text-xs text-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-dim transition-all duration-300 group-hover:border-accent group-hover:text-accent">
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.9}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </div>

              <h3 className="font-display text-xl font-semibold text-ink">
                {project.name}
              </h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-wider text-accent">
                {project.type}
              </p>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-dim">
                {project.description}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li key={tag} className="chip">
                    {tag}
                  </li>
                ))}
              </ul>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
