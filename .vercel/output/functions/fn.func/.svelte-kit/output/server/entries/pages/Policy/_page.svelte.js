import { c as create_ssr_component } from "../../../chunks/ssr.js";
/* empty css                  */
const css = {
  code: "h1.svelte-1qq5afr{font-size:6vw;color:var(--pri);text-align:center}p.svelte-1qq5afr{font-size:3vw;margin:1rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return ` <div class="container m-auto my-3" data-svelte-h="svelte-1y1gedh"><div id="asuc" class="container m-auto my-3"><h1 class=" svelte-1qq5afr">ASUC Reform</h1> <hr class="h-px mx-8 bg-black border-0 dark:bg-gray-700"> <hr class="h-px mx-8 bg-black border-0 dark:bg-gray-700"> <asuc></asuc> <p class="svelte-1qq5afr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, placeat.</p></div> <div id="campus" class="container m-auto my-3"><h1 class=" svelte-1qq5afr">Campus Improvement</h1> <hr class="h-px mx-8 bg-black border-0 dark:bg-gray-700"> <hr class="h-px mx-8 bg-black border-0 dark:bg-gray-700"> <p class="svelte-1qq5afr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, placeat.</p></div> <div id="mental" class="container m-auto my-3"><h1 class=" svelte-1qq5afr">Mental Health</h1> <hr class="h-px mx-8 bg-black border-0 dark:bg-gray-700"> <hr class="h-px mx-8 bg-black border-0 dark:bg-gray-700"> <p class="svelte-1qq5afr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, placeat.</p></div> <div id="housing" class="container m-auto my-3"><h1 class=" svelte-1qq5afr">Housing</h1> <hr class="h-px mx-8 bg-black border-0 dark:bg-gray-700"> <hr class="h-px mx-8 bg-black border-0 dark:bg-gray-700"> <p class="svelte-1qq5afr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, placeat.</p></div> </div>`;
});
export {
  Page as default
};
