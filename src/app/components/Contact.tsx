import { Mail, Github, Linkedin, Download, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-content px-6 py-24 sm:px-8 sm:py-32">
      <SectionHeading index="05" eyebrow="Contact" title="Let's build something" />

      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:items-center md:gap-16">
        <Reveal>
          <div>
            <p className="max-w-md text-base leading-relaxed text-dim">
              I'm open to new opportunities and interesting problems -
              full-stack work, applied AI, or anything in between. The fastest
              way to reach me is email.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="group mt-8 inline-flex items-center gap-3 font-display text-xl font-medium text-ink transition-colors hover:text-accent break-all sm:text-2xl md:text-3xl"
            >
              {profile.email}
              <ArrowUpRight
                size={24}
                strokeWidth={1.75}
                className="text-faint transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
              />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col gap-3">
            <a
              href={profile.resume}
              download
              className="flex items-center justify-between rounded-xl border border-line bg-elevated/40 px-5 py-4 transition-all duration-200 hover:border-accent hover:bg-elevated"
            >
              <span className="flex items-center gap-3 text-sm font-medium text-ink">
                <Download size={18} strokeWidth={1.75} className="text-accent" />
                Download Resume
              </span>
              <span className="font-mono text-xs text-faint">PDF</span>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl border border-line bg-elevated/40 px-5 py-4 transition-all duration-200 hover:border-accent hover:bg-elevated"
            >
              <span className="flex items-center gap-3 text-sm font-medium text-ink">
                <Github size={18} strokeWidth={1.75} className="text-accent" />
                GitHub
              </span>
              <ArrowUpRight size={16} className="text-faint" />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl border border-line bg-elevated/40 px-5 py-4 transition-all duration-200 hover:border-accent hover:bg-elevated"
            >
              <span className="flex items-center gap-3 text-sm font-medium text-ink">
                <Linkedin size={18} strokeWidth={1.75} className="text-accent" />
                LinkedIn
              </span>
              <ArrowUpRight size={16} className="text-faint" />
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="flex items-center justify-between rounded-xl border border-line bg-elevated/40 px-5 py-4 transition-all duration-200 hover:border-accent hover:bg-elevated"
            >
              <span className="flex items-center gap-3 text-sm font-medium text-ink">
                <Mail size={18} strokeWidth={1.75} className="text-accent" />
                Email
              </span>
              <ArrowUpRight size={16} className="text-faint" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
