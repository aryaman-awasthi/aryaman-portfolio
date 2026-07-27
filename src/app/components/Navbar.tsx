import { profile, navLinks } from "@/lib/data";

export default function Navbar() {
  return (
    <div
      data-topbar=""
      className="sticky top-4 z-[60] flex flex-wrap items-center gap-2.5 border border-line bg-[rgba(8,12,8,0.92)] px-3.5 py-2.5 backdrop-blur-[6px] md:gap-4 md:px-[18px] md:py-3"
    >
      <div className="flex items-center gap-[7px]" aria-hidden="true">
        <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
      </div>
      <span className="hidden text-xs text-faint md:inline">
        <span className="text-acc">aryaman@awasthi</span>:~$ ./portfolio
      </span>
      <div className="flex-1" />
      {profile.openToWork && (
        <span className="inline-flex items-center gap-[7px] border border-line3 bg-acc-dim px-2.5 py-1 text-[10px] uppercase tracking-[1.5px] text-acc">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-acc animate-pulse-dot" />
          open to work
        </span>
      )}
      <nav className="flex gap-3.5 text-xs">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-dim transition-colors hover:text-acc-hi"
          >
            [{link.label}]
          </a>
        ))}
      </nav>
    </div>
  );
}
