import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_MAHaMCPA.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_DFcc20HE.mjs';
/* empty css                                  */
import { g as getCollection } from '../chunks/_astro_content_tpm6o0No.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("blog");
  posts.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-white py-8 sm:py-12 lg:py-16"> <div class="mx-auto max-w-7xl px-6 lg:px-8"> <div class="mx-auto max-w-2xl lg:mx-0"> <h2 class="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
From the blog
</h2> <p class="mt-2 text-lg/8 text-gray-600">
Learn how to grow your business with our expert advice.
</p> </div> <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-8 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"> ${posts.map((post) => renderTemplate`<a${addAttribute(`/blog/${post.slug}`, "href")} class="group block"> <article class="flex max-w-xl flex-col items-start justify-between"> <img class="h-60 w-full object-cover rounded-xl mb-2" src="/src/assets/images/collectetri.jpg" alt=""> <div class="flex items-center gap-x-4 text-xs"> <time${addAttribute(post.data.date, "datetime")} class="text-gray-500"> ${post.data.date} </time> <span class="rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600"> ${post.data.category || "Blog"} </span> </div> <div class="grow"> <h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600"> ${post.data.title} </h3> <p class="mt-5 line-clamp-3 text-sm/6 text-gray-600"> ${post.data.description} </p> </div> <div class="mt-8 flex items-center gap-x-4"> <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="size-10 rounded-full bg-gray-50"> <div class="text-sm/6"> <p class="font-semibold text-gray-900"> ${post.data.author || "Anonymous"} </p> <p class="text-gray-600">Author</p> </div> </div> </article> </a>`)} </div> </div> </div> ` })}`;
}, "D:/Code/astro/blog-icei/src/pages/index.astro", void 0);

const $$file = "D:/Code/astro/blog-icei/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
