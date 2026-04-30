import { persona } from "@/lib/persona"

export default function manifest() {
  return {
    name: persona.fa.name,
    short_name: persona.fa.shortName,
    description: persona.fa.shortBio,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#7c5cff",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  }
}
