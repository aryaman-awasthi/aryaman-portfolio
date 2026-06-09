"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Github, Linkedin, Download, Menu, X } from "lucide-react";
import { profile, navLinks } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="h-px origin-left bg-accent/70"
      />

      <div
        className={`transition-colors duration-300 ${scrolled
            ? "border-b border-line bg-bg/80 backdrop-blur-xl"
            : "border-b border-transparent"
          }`}
      >
        <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4 sm:px-8">
          <a
            href="#top"
            className="group flex items-center gap-2.5"
            aria-label="Back to top"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-md border border-line-strong font-mono text-sm font-medium text-ink transition-colors group-hover:border-accent group-hover:text-accent">
              AA
            </span>
            <span className="hidden font-mono text-sm text-dim transition-colors group-hover:text-ink sm:inline">
              Aryaman Awasthi
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative font-mono text-sm text-dim transition-colors hover:text-ink after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-md text-dim transition-colors hover:bg-elevated hover:text-ink"
            >
              <Github size={18} strokeWidth={1.75} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-md text-dim transition-colors hover:bg-elevated hover:text-ink"
            >
              <Linkedin size={18} strokeWidth={1.75} />
            </a>
            <a
              href={profile.resume}
              download
              className="ml-1 hidden items-center gap-2 rounded-full border border-line-strong px-4 py-2 text-sm font-medium text-ink transition-all duration-200 hover:border-accent hover:text-accent sm:inline-flex"
            >
              <Download size={15} strokeWidth={1.75} />
              Résumé
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="ml-1 flex h-9 w-9 items-center justify-center rounded-md text-ink transition-colors hover:bg-elevated md:hidden"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="border-t border-line bg-bg/95 backdrop-blur-xl md:hidden">
            <div className="mx-auto flex max-w-content flex-col px-6 py-4 sm:px-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line py-3 font-mono text-sm text-dim transition-colors last:border-0 hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={profile.resume}
                download
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-line-strong px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
              >
                <Download size={15} strokeWidth={1.75} />
                Download résumé
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
