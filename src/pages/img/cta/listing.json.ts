import type { APIContext } from "astro";

import { readdir } from "fs/promises";
import path from "path";

interface CtaImageListing {
  base: string;
  images: string[];
}

const IMAGE_DIR = "img/cta";

// type APIRoute = (context: APIContext) => EndpointOutput | Response | Promise<EndpointOutput | Response>
export async function get({ site }: APIContext): Promise<Response> {
  let origin = "";

  try {
    origin = site!.origin;
  } catch (e) {
    throw new Error("Site in Astro config is undefined wtf??");
  }

  const images = await readdir(path.resolve(process.cwd(), `public/img/cat/`));

  let listing: CtaImageListing = {
    base: path.join(origin, "/img/cat/"),
    images,
  };

  return new Response(JSON.stringify(listing));
}
