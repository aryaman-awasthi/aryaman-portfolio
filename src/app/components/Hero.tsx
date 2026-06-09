import { ArrowUpRight, Download, ArrowDown } from "lucide-react";
import { profile } from "@/lib/data";
import VectorField from "./VectorField";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Signature: ambient node-field + soft accent glow */}
      <div className="field-mask absolute inset-0" aria-hidden="true">
        <VectorField />
      </div>
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[38%] h-[420px] w-[620px] max-w-[90vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.07] blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-content px-6 sm:px-8">
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-line bg-elevated/60 px-3.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
            <span className="font-mono text-xs tracking-wide text-dim">
              Open to new opportunities
            </span>
          </div>

          <p className="eyebrow mb-5">Full-stack developer - applied AI</p>

          <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight text-ink sm:text-6xl md:text-7xl">
            {profile.name}
          </h1>

          <p className="mt-6 max-w-2xl font-display text-xl font-medium leading-snug text-ink/90 sm:text-2xl">
            I build full-stack applications and the{" "}
            <span className="text-accent">AI systems</span> that make them
            intelligent.
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-dim">
            Java and Spring Boot on the back end, Angular and React on the
            front, and a growing stack of RAG, embeddings, and multi-agent
            workflows in between - currently building all three at TCS.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href={profile.resume} download className="btn-primary">
              <Download size={16} strokeWidth={1.9} />
              Download résumé
            </a>
            <a href="#work" className="btn-ghost">
              View work
              <ArrowUpRight size={16} strokeWidth={1.9} />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs text-faint">
            <span>{profile.location}</span>
            <span className="text-line-strong">/</span>
            <span>B.Tech - VIT Vellore</span>
            <span className="text-line-strong">/</span>
            <span>{profile.githubHandle}</span>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-xs text-faint transition-colors hover:text-dim sm:flex"
      >
        <span>scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  );
}
