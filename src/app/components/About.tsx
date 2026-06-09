import { facts } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-content px-6 py-24 sm:px-8 sm:py-32">
      <SectionHeading index="01" eyebrow="About" title="From circuits to transformers" />

      <div className="grid gap-12 md:grid-cols-[1.5fr_1fr] md:gap-16">
        <Reveal>
          <div className="space-y-5 text-base leading-relaxed text-dim">
            <p>
              I started in electrical and electronics engineering at VIT
              Vellore and kept gravitating toward the software side - the part
              where an idea becomes something people actually use. Today I work
              as a full-stack developer, comfortable moving between a Spring
              Boot service, an Angular interface, and the model layer that sits
              behind both.
            </p>
            <p>
              At TCS I build AI-powered enterprise tooling: retrieval-augmented
              generation over real business data, semantic search, vector
              embeddings, and multi-agent workflows with LangChain and
              LangGraph. I like problems that span the whole stack, where the
              database schema, the API contract, and the prompt all have to
              agree for the thing to work.
            </p>
            <p>
              Earlier, as a Senior Core Member at CodeChef–VIT, I ran technical
              sessions on Git and Flutter that reached 150+ live participants
              and 900+ recorded viewers - teaching turned out to be the fastest
              way to learn things properly myself.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="divide-y divide-line rounded-xl border border-line bg-elevated/40">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="flex items-baseline justify-between gap-4 px-5 py-4"
              >
                <dt className="font-mono text-xs uppercase tracking-wider text-faint">
                  {fact.label}
                </dt>
                <dd className="text-right text-sm font-medium text-ink">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
