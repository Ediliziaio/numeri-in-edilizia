import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Motori di ricerca + crawler AI esplicitamente ammessi (GEO/AEO)
        userAgent: [
          "*",
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-Web",
          "anthropic-ai",
          "PerplexityBot",
          "Perplexity-User",
          "Google-Extended",
          "Applebot-Extended",
          "Bingbot",
        ],
        allow: "/",
        disallow: ["/grazie", "/api/"],
      },
    ],
    sitemap: `${site.domain}/sitemap.xml`,
    host: site.domain,
  };
}
