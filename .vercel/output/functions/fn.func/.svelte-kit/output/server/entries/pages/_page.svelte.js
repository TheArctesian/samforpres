import { c as create_ssr_component, d as add_attribute } from "../../chunks/ssr.js";
/* empty css               */
const sam = "/_app/immutable/assets/sam_hero.Bj7DtiIo.png";
const css = {
  code: ".container.svelte-kl4i9g{display:flex;flex-direction:row;justify-content:center;align-items:center;height:90vh}.image-container.svelte-kl4i9g,.text-container.svelte-kl4i9g{flex:1;display:flex;justify-content:center;align-items:center;flex-direction:column;padding:1rem}img.svelte-kl4i9g{max-width:100%;height:auto}h1.svelte-kl4i9g{font-size:8rem}h3.svelte-kl4i9g{font-size:4rem}p.svelte-kl4i9g{font-size:1rem}@media(max-width: 768px){.container.svelte-kl4i9g{flex-direction:column;height:auto}.image-container.svelte-kl4i9g,.text-container.svelte-kl4i9g{width:90%}h1.svelte-kl4i9g{font-size:4rem}h3.svelte-kl4i9g{font-size:2.5rem}p.svelte-kl4i9g{font-size:1.25rem}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="container svelte-kl4i9g" data-svelte-h="svelte-h7wda4"><div class="image-container svelte-kl4i9g"><img${add_attribute("src", sam, 0)} alt="Sam Grotenstein" class="svelte-kl4i9g"></div> <div class="text-container my-3 svelte-kl4i9g"><h1 class="text-center text-9xl text-[var(--pri)] svelte-kl4i9g">Sam Grotenstein</h1> <h3 class="text-center text-5xl text-[var(--sec)] svelte-kl4i9g">Sam for ASUC President</h3> <p class="text-center text-l my-3 svelte-kl4i9g">Current systems block student-led initiatives; this must change. My campaign is committed to
			empowering student voices and driving progressive action. We&#39;re not just hoping for change,
			we&#39;re enacting it. Change is on the horizon, and with your support, it&#39;s inevitable.</p></div> </div>`;
});
export {
  Page as default
};
