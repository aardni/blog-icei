import { g as getCollection } from '../../chunks/_astro_content_tpm6o0No.mjs';
export { renderers } from '../../renderers.mjs';

const GET = async ({ url }) => {
  const query = url.searchParams.get("q")?.toLowerCase() || "";
  if (!query) {
    return new Response(JSON.stringify({ results: [] }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  }
  const posts = await getCollection("blog");
  const results = posts.filter((post) => {
    const title = post.data.title.toLowerCase();
    const description = post.data.description.toLowerCase();
    const tags = post.data.tags?.join(" ").toLowerCase() || "";
    const category = post.data.category?.toLowerCase() || "";
    return title.includes(query) || description.includes(query) || tags.includes(query) || category.includes(query);
  }).map((post) => ({
    slug: post.slug,
    title: post.data.title,
    description: post.data.description,
    date: post.data.date,
    category: post.data.category,
    author: post.data.author
  }));
  return new Response(JSON.stringify({ results }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
