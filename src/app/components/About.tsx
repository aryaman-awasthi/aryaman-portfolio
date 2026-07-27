import { facts } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about">
      <SectionHeading index="01" title="ABOUT" cmd="cat about.md" />

      <div className="grid gap-3.5 md:grid-cols-12">
        <div className="border border-line bg-panel px-8 py-[30px] md:col-span-8">
          <h2 className="mb-[18px] text-2xl font-bold leading-[1.6] tracking-[-0.5px] text-ink">
            From circuits to transformers
          </h2>
          <p className="mb-3.5 text-[13.5px] text-muted">
            I started in electrical and electronics engineering at VIT Vellore
            and kept gravitating toward the software side — the part where an
            idea becomes something people actually use. Today I work as a
            full-stack developer, comfortable moving between a Spring Boot
            service, an Angular interface, and the model layer that sits behind
            both.
          </p>
          <p className="mb-3.5 text-[13.5px] text-muted">
            At TCS I build AI-powered enterprise tooling: retrieval-augmented
            generation over real business data, semantic search, vector
            embeddings, and multi-agent workflows with LangChain and LangGraph.
            I like problems that span the whole stack, where the database
            schema, the API contract, and the prompt all have to agree for the
            thing to work.
          </p>
          <p className="text-[13.5px] text-muted">
            Earlier, as a Senior Core Member at CodeChef–VIT, I ran technical
            sessions on Git and Flutter that reached 150+ live participants and
            900+ recorded viewers — teaching turned out to be the fastest way to
            learn things properly myself.
          </p>
        </div>

        <div className="flex flex-col justify-center border border-line bg-panel px-5 py-2.5 md:col-span-4">
          {facts.map((fact, i) => (
            <div
              key={fact.label}
              className={`flex justify-between gap-3 py-[13px] ${
                i < facts.length - 1 ? "border-b border-row" : ""
              }`}
            >
              <span className="text-[11px] uppercase tracking-[1px] text-faint">
                {fact.label}
              </span>
              <span className="text-right text-xs text-soft">{fact.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
