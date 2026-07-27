import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mt-3.5 flex flex-wrap items-center justify-between gap-4 border border-line bg-panel px-5 py-3.5">
      <span className="text-xs text-faint">
        <span className="text-acc">AA</span> © 2026 {profile.name}
      </span>
      <span className="text-xs text-faint">
        process exited with code <span className="text-acc">0</span>
      </span>
    </footer>
  );
}
