import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async ({ url }) => {
  const query = url.searchParams.get("q")?.toLowerCase() || "";

  if (!query) {
    return new Response(JSON.stringify({ results: [] }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  const posts = await getCollection("blog");

  const results = posts
    .filter((post) => {
      const title = post.data.title.toLowerCase();
      const description = post.data.description.toLowerCase();
      const tags = post.data.tags?.join(" ").toLowerCase() || "";
      const category = post.data.category?.toLowerCase() || "";

      return (
        title.includes(query) ||
        description.includes(query) ||
        tags.includes(query) ||
        category.includes(query)
      );
    })
    .map((post) => ({
      slug: post.slug,
      title: post.data.title,
      description: post.data.description,
      date: post.data.date,
      category: post.data.category,
      author: post.data.author,
    }));

  return new Response(JSON.stringify({ results }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
