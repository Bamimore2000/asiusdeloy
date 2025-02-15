import { NextResponse } from "next/server";

const siteUrl = "https://www.asiusdeloyltd.co.uk";

export async function GET() {
    const pages = [
        "",
        "about",
        "cleaning",
        "construction",
        "contact",
        "oil-services",
        "technology",
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
            .map(
                (page) => `
        <url>
          <loc>${siteUrl}/${page}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <priority>${page === "" ? "1.0" : "0.8"}</priority>
        </url>
      `
            )
            .join("")}
    </urlset>`;

    return new NextResponse(sitemap, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
}
