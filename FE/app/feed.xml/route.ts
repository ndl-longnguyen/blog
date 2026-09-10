import { BLOG_POSTS } from "@/lib/blog-data"
import { SITE_URL } from "@/config/site"

export async function GET() {
  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Nguyen Dai Long – Engineering Blog</title>
    <link>${SITE_URL}/blog</link>
    <description>Technical deep-dives into backend scalability, PostgreSQL optimization, Redis caching, Docker, GCP Cloud Run, and real-time WebSockets by Nguyen Dai Long.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    ${BLOG_POSTS.map((post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${SITE_URL}/blog/${post.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description><![CDATA[${post.excerpt}]]></description>
      <category><![CDATA[${post.category}]]></category>
      <author><![CDATA[ndl.long.nguyendai@gmail.com (Nguyen Dai Long)]]></author>
    </item>`).join("")}
  </channel>
</rss>`

  return new Response(rssXml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=86400, stale-while-revalidate=3600",
    },
  })
}
