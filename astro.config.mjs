import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import htmlMinifier from "astro-html-minifier";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://honbra.com",
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    robotsTxt(),
    htmlMinifier({
      html: {
        doNotMinifyDoctype: true,
        ensureSpecCompliantUnquotedAttributeValues: true,
        keepClosingTags: true,
        keepComments: true,
        keepHtmlAndHeadOpeningTags: true,
        keepSpacesBetweenAttributes: true,
        minifyCss: true,
        minifyJs: true,
        removeBangs: false,
        removeProcessingInstructions: false,
      },
    }),
  ],
});
