import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_MAHaMCPA.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_DFcc20HE.mjs';
/* empty css                                     */
import { r as renderEntry, g as getCollection } from '../../chunks/_astro_content_tpm6o0No.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { post } = Astro2.props;
  const { Content } = await renderEntry(post);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-white py-8 sm:py-12 lg:py-16"> <div class="mx-auto max-w-4xl px-6 lg:px-8 flex flex-col justify-center items-center"> <div> <img class="h-120 w-200 rounded-xl mb-8" src="/src/assets/images/collectetri.jpg" alt=""> <div class="mx-auto max-w-2xl lg:mx-0"> <h2 class="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl"> ${post.data.title} </h2> <p class="text-md font-semibold tracking-tight text-pretty text-gray-500 mt-2"> ${post.data.date} · ${post.data.author} </p> </div> <article class="mt-6 prose prose-lg max-w-none"> ${renderComponent($$result2, "Content", Content, {})} </article> </div> </div> </div> ` })}`;
}, "D:/Code/astro/blog-icei/src/pages/blog/[slug].astro", void 0);

const $$file = "D:/Code/astro/blog-icei/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
