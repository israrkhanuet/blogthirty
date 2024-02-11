import { readPostsFromMarkdown } from "../lib/posts";

const generateSitemapXml = (posts) => {
  const baseUrl = "https://bestoblog.vercel.app";
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Include static routes
  xml += `
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>2024-02-03</lastmod>
  </url>
  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>2024-02-03</lastmod>
  </url>
  <url>
    <loc>${baseUrl}/categories</loc>
    <lastmod>2024-02-03</lastmod>
  </url>`;

  // Include dynamic routes for posts
  posts.forEach((post) => {
    xml += `
  <url>
    <loc>${baseUrl}/posts/${post.slug}</loc>
    <lastmod>${post.frontmatter.date}</lastmod>
  </url>`;
  });

  xml += `
</urlset>`;
  return xml;
};

export default function SitemapXml({ xml }) {
  return <>{xml}</>;
}

export async function getServerSideProps({ res }) {
  const posts = readPostsFromMarkdown();
  const xml = generateSitemapXml(posts);
  res.setHeader("Content-Type", "application/xml");
  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");
  return {
    props: {
      xml,
    },
  };
}
