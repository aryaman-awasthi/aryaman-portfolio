"use client";

import { useEffect, useRef, useState } from "react";

// 15×20 pixel map, drawn upside-down (feet at top, head at bottom).
const PIXELS = [
  ".......R.......",
  "......RRR......",
  ".....RR.RR.....",
  "....BB...BB....",
  "...BB.....BB...",
  "...B.......B...",
  "...BB.....BB...",
  "....BB...BB....",
  ".....BB.BB.....",
  "......BBB......",
  ".....BBBBB.....",
  ".....RRRRR.....",
  "....RRRKRRR....",
  "...RRRRRRRRR...",
  "..RR..RRR..RR..",
  "..R..RRRRR..R..",
  "..R.RRRRRRR.R..",
  ".RR.RWWRWWR.RR.",
  "....RWWRWWR....",
  "....RRRRRRR....",
];

const COLORS: Record<string, string> = {
  R: "#c9342c",
  B: "#2e4a9e",
  W: "#eef4ee",
  K: "#101410",
};

const MIN_X = 8;
const MAX_X = 92;
const MIN_JUMP = 28;
const NEAR_PX = 170;
const FLIGHT_MS = 900;
const TILT_DEG = 14;
const WEB_RANGE = 80;

function pickTarget(from: number) {
  let next = from;
  while (Math.abs(next - from) < MIN_JUMP) {
    next = MIN_X + Math.random() * (MAX_X - MIN_X);
  }
  return next;
}

// Shortest allowed web: his body (and padded hit area) must clear the sticky
// navbar so he never swallows clicks on the nav links while sitting above it.
function webFloor() {
  const bar = document.querySelector("[data-topbar]");
  return bar ? Math.ceil(bar.getBoundingClientRect().bottom) + 16 : 80;
}

function pickWeb() {
  return webFloor() + Math.round(Math.random() * WEB_RANGE);
}

export default function SpiderMan() {
  const [x, setX] = useState(50);
  const [web, setWeb] = useState(0);
  const [bubble, setBubble] = useState(false);
  const hitRef = useRef<HTMLDivElement>(null);
  const swingRef = useRef<HTMLDivElement>(null);
  const excitedRef = useRef(false);
  const flyingRef = useRef(false);
  const dirRef = useRef(1);
  const flightTimer = useRef<ReturnType<typeof setTimeout>>();
  const bubbleTimer = useRef<ReturnType<typeof setTimeout>>();

  // The pendulum runs on a rAF phase accumulator instead of CSS keyframes:
  // swapping keyframe classes restarts the animation at 0% (a visible snap),
  // and this lets amplitude, speed, and the flight tilt blend continuously.
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;
    let phase = 0;
    let amp = 4;
    let period = 3.4;
    let angle = 0;
    let last = 0;

    const step = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      const ease = 1 - Math.exp(-dt / 0.35);
      amp += ((excitedRef.current ? 17 : 4) - amp) * ease;
      period += ((excitedRef.current ? 1.1 : 3.4) - period) * ease;
      phase += ((2 * Math.PI) / period) * dt;
      // rotate(+θ) with a top origin swings the hanging body left, so the
      // "lean into travel" tilt needs the opposite sign of dir.
      const target = flyingRef.current
        ? -dirRef.current * TILT_DEG
        : amp * Math.sin(phase);
      angle += (target - angle) * (1 - Math.exp(-dt / 0.12));
      if (swingRef.current) {
        swingRef.current.style.transform = `rotate(${angle.toFixed(2)}deg)`;
      }
      raf = requestAnimationFrame(step);
    };

    const start = () => {
      if (raf) return;
      last = performance.now();
      raf = requestAnimationFrame(step);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
      if (swingRef.current) swingRef.current.style.transform = "";
    };

    const onMotionPref = () => (reduced.matches ? stop() : start());
    onMotionPref();
    reduced.addEventListener("change", onMotionPref);

    // SSR renders him tucked at the top; drop him to hanging depth on mount
    // (the thread's height transition turns this into a descend-in entrance).
    setWeb(pickWeb());

    const onMove = (e: MouseEvent) => {
      const el = hitRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const d = Math.hypot(
        e.clientX - (r.left + r.width / 2),
        e.clientY - (r.top + r.height / 2)
      );
      excitedRef.current = d < NEAR_PX;
    };
    window.addEventListener("mousemove", onMove);

    return () => {
      stop();
      reduced.removeEventListener("change", onMotionPref);
      window.removeEventListener("mousemove", onMove);
      clearTimeout(flightTimer.current);
      clearTimeout(bubbleTimer.current);
    };
  }, []);

  const handleClick = () => {
    if (flyingRef.current) return;
    const next = pickTarget(x);
    dirRef.current = next > x ? 1 : -1;
    flyingRef.current = true;
    setX(next);
    setWeb(pickWeb());
    setBubble(true);
    clearTimeout(flightTimer.current);
    clearTimeout(bubbleTimer.current);
    flightTimer.current = setTimeout(() => {
      flyingRef.current = false;
      // Touch devices get no mousemove to refresh this after he lands far away.
      excitedRef.current = false;
    }, FLIGHT_MS);
    bubbleTimer.current = setTimeout(() => setBubble(false), FLIGHT_MS + 400);
  };

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 z-[70] -translate-x-1/2 transition-[left] duration-[900ms] ease-[cubic-bezier(0.45,0.05,0.25,1)] motion-reduce:transition-none"
      style={{ left: `${x}%` }}
    >
      <div ref={swingRef} className="origin-top">
        <div
          className="mx-auto w-0 border-l border-dashed border-ink/40 transition-[height] duration-[900ms] ease-[cubic-bezier(0.45,0.05,0.25,1)] motion-reduce:transition-none"
          style={{ height: web }}
        />
        <div
          ref={hitRef}
          onClick={handleClick}
          className="pointer-events-auto -m-3 cursor-pointer p-3"
        >
          <svg
            width={66}
            height={88}
            viewBox="0 0 15 20"
            shapeRendering="crispEdges"
            className="block select-none"
          >
            {PIXELS.flatMap((row, py) =>
              row.split("").map((ch, px) =>
                ch === "." ? null : (
                  <rect
                    key={`${px}-${py}`}
                    x={px}
                    y={py}
                    width={1}
                    height={1}
                    fill={COLORS[ch]}
                  />
                )
              )
            )}
          </svg>
        </div>
      </div>
      {bubble && (
        <div
          className={`absolute whitespace-nowrap border border-line2 bg-panel px-2 py-0.5 text-[11px] text-acc ${
            x > 75 ? "right-[54px]" : "left-[54px]"
          }`}
          style={{ top: web + 24 }}
        >
          {"> thwip!"}
        </div>
      )}
    </div>
  );
}
