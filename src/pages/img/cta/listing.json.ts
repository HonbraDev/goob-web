import type { APIContext, EndpointOutput } from "astro";

import { readdir } from "fs/promises";
import path from "path";

interface CtaImageListing {
	base: string;
	images: string[];
}

const IMAGE_DIR = "img/cta";

// type APIRoute = (context: APIContext) => EndpointOutput | Response | Promise<EndpointOutput | Response>
export async function get({ site }: APIContext): Promise<EndpointOutput> {
	let origin = "";

	try {
		origin = site!.origin;
	} catch (e) {
		throw new Error("Site in Astro config is undefined wtf??");
	}

	const images = await readdir(
		path.resolve(process.cwd(), `public/${IMAGE_DIR}`)
	);

	let listing: CtaImageListing = {
		base: `${origin}/${IMAGE_DIR}/`,
		images,
	};

	return {
		body: JSON.stringify(listing),
	};
}
