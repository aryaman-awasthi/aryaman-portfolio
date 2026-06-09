import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row sm:px-8">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-line-strong font-mono text-sm font-medium text-ink">
            AA
          </span>
          <span className="font-mono text-xs text-faint">
            © {year} {profile.name}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-dim transition-colors hover:text-accent"
          >
            <Github size={18} strokeWidth={1.75} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-dim transition-colors hover:text-accent"
          >
            <Linkedin size={18} strokeWidth={1.75} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-dim transition-colors hover:text-accent"
          >
            <Mail size={18} strokeWidth={1.75} />
          </a>
        </div>

        {/* <span className="font-mono text-xs text-faint">
          Built with Next.js
        </span> */}
      </div>
    </footer>
  );
}
