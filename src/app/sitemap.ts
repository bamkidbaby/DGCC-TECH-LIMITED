import type { MetadataRoute } from "next";
import { services } from "@/lib/services";

const baseUrl = "https://dgcctechltd.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date();
  return [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/academy",
    "/contact",
    ...services.map(({ slug }) => `/services/${slug}`),
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: updated,
  }));
}
