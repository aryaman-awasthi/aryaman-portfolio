import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section className="mt-3.5 grid gap-3.5 md:grid-cols-12">
      {/* $ whoami box */}
      <div className="flex flex-col border border-line bg-panel px-5 py-[26px] md:col-span-8 md:px-9 md:pb-[34px] md:pt-[38px]">
        <div className="text-[13px] text-faint">
          <span className="text-acc">$</span> whoami
        </div>
        <h1 className="mt-[18px] text-[42px] font-extrabold leading-[1.02] tracking-[-1px] text-ink md:text-[74px] md:tracking-[-3px]">
          ARYAMAN
          <br />
          AWASTHI
          <span
            aria-hidden="true"
            className="ml-1.5 inline-block h-[30px] w-4 animate-blink bg-acc align-baseline md:ml-2.5 md:h-14 md:w-[30px]"
          />
        </h1>
        <div className="mt-5 text-[15px] text-acc">
          &gt; full-stack developer · applied AI
        </div>
        <p className="mt-3.5 max-w-[560px] text-sm leading-[1.6] text-muted">
          I build full-stack applications and the AI systems that make them
          intelligent. Java &amp; Spring Boot on the back end, Angular &amp;
          React on the front, and RAG, embeddings, and multi-agent workflows in
          between — currently building all three at TCS.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-acc bg-acc px-5 py-3 text-[13px] font-bold text-bg transition-colors hover:border-acc-hi hover:bg-acc-hi hover:text-bg"
          >
            [ ./resume.pdf ↓ ]
          </a>
          <a
            href="#work"
            className="border border-line2 px-5 py-3 text-[13px] text-fg2 transition-colors hover:border-acc hover:text-acc"
          >
            [ view work → ]
          </a>
        </div>
      </div>

      {/* Right column: status / location / now / education */}
      <div className="grid grid-rows-[auto_1fr_1fr_1fr] gap-3.5 md:col-span-4">
        <div className="border border-line bg-panel px-5 py-[18px]">
          <div className="text-[10px] uppercase tracking-[2px] text-faint">
            status
          </div>
          {profile.openToWork ? (
            <div className="mt-2 flex items-center gap-2 text-[13px] font-bold text-acc">
              <span className="inline-block h-2 w-2 animate-pulse-dot rounded-full bg-acc" />
              OPEN TO OPPORTUNITIES
            </div>
          ) : (
            <div className="mt-2 text-[13px] font-bold text-muted">
              HEADS-DOWN @ TCS
            </div>
          )}
        </div>
        <div className="border border-line bg-panel px-5 py-[18px]">
          <div className="text-[10px] uppercase tracking-[2px] text-faint">
            location
          </div>
          <div className="mt-2 text-[13px] text-soft">
            {profile.location} <span className="text-faint">· IST</span>
          </div>
        </div>
        <div className="border border-line bg-panel px-5 py-[18px]">
          <div className="text-[10px] uppercase tracking-[2px] text-faint">
            now
          </div>
          <div className="mt-2 text-[13px] text-soft">
            {profile.role} <span className="text-acc">@ TCS</span>
          </div>
        </div>
        <div className="border border-line bg-panel px-5 py-[18px]">
          <div className="text-[10px] uppercase tracking-[2px] text-faint">
            education
          </div>
          <div className="mt-2 text-[13px] text-soft">
            B.Tech EEE — VIT Vellore <span className="text-faint">&apos;25</span>
          </div>
        </div>
      </div>
    </section>
  );
}
