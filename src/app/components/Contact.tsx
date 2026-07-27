import { profile } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact">
      <SectionHeading index="05" title="CONTACT" cmd="ping aryaman" />
      <div className="border border-line bg-panel px-[18px] py-[30px] text-center md:px-10 md:py-11">
        <div className="text-[13px] text-faint">
          <span className="text-acc">$</span> mail --to
        </div>
        <a
          href={`mailto:${profile.email}`}
          className="mt-3.5 inline-block break-all text-[17px] font-bold text-ink transition-colors hover:text-acc md:break-normal md:text-[30px] md:tracking-[-1px]"
        >
          {profile.email}
        </a>
        <p className="mx-auto mt-3.5 max-w-[520px] text-[13px] text-muted">
          Open to new opportunities and interesting problems — full-stack work,
          applied AI, or anything in between.
        </p>
        <div className="mt-[26px] flex flex-wrap justify-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-line2 px-[18px] py-2.5 text-[13px] text-fg2 transition-colors hover:border-acc hover:text-acc"
          >
            [ github ↗ ]
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-line2 px-[18px] py-2.5 text-[13px] text-fg2 transition-colors hover:border-acc hover:text-acc"
          >
            [ linkedin ↗ ]
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-line2 px-[18px] py-2.5 text-[13px] text-fg2 transition-colors hover:border-acc hover:text-acc"
          >
            [ resume ↓ ]
          </a>
        </div>
      </div>
    </section>
  );
}
