import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aryaman Awasthi — Full-Stack Developer & Applied AI",
    short_name: "Aryaman Awasthi",
    description:
      "Portfolio of Aryaman Awasthi, a full-stack developer building AI-powered systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#050705",
    theme_color: "#050705",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
