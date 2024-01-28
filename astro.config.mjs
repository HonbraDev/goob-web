import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";

// https://darkvisitors.com/
const bannedAgents = [
  "anthropic-ai",
  "Bytespider",
  "CCBot",
  "FacebookBot",
  "Google-Extended",
  "GPTBot",
  "Omgili",
  "Omgilibot",
];

// https://astro.build/config
export default defineConfig({
  site: "https://honbra.com",
  compressHTML: true,
  trailingSlash: "never",
  devToolbar: {
    enabled: false,
  },
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    robotsTxt({
      policy: bannedAgents.map((userAgent) => ({
        userAgent,
        disallow: "/",
      })),
    }),
  ],
});
