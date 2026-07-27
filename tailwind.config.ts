import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        md: "860px", // design's mobile collapse point
      },
      colors: {
        bg: "#050705", // page background
        panel: "#0a0f0a", // card background
        panel2: "#0c120c", // chip bg / card hover bg
        line: "#223022", // card border
        line2: "#2c3d2c", // chip & button border
        line3: "#2a3f2a", // badge border
        row: "#1a241a", // row divider
        dash: "#243024", // dashed section rule
        "line-hover": "#3a523a", // card hover border
        ink: "#e8f4e8", // headings
        soft: "#dce8dc", // fact values
        body: "#b6c7b6", // base body text
        fg2: "#cfe0cf", // secondary button text
        muted: "#9db09d", // paragraph text
        dim: "#8ba08b", // nav links / tags
        faint: "#5f715f", // labels & comments
        acc: "var(--acc)",
        "acc-dim": "var(--acc-dim)",
        "acc-hi": "#eafcea", // link/button hover text
      },
      fontFamily: {
        mono: [
          "var(--font-jetbrains-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
      },
      animation: {
        blink: "blink 1.1s steps(1) infinite",
        "pulse-dot": "pulse-dot 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
