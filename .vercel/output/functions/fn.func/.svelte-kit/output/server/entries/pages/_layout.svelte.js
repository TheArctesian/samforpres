import { c as create_ssr_component } from "../../chunks/ssr.js";
/* empty css               */
const css = {
  code: "body{letter-spacing:0.1em}.a.svelte-5d5cuf.svelte-5d5cuf{font-size:2.5vw}@media(max-width: 1200px){.a.svelte-5d5cuf.svelte-5d5cuf{font-size:3vw}}@media(max-width: 768px){.a.svelte-5d5cuf.svelte-5d5cuf{font-size:4vw}}@media(max-width: 480px){.a.svelte-5d5cuf.svelte-5d5cuf{font-size:5.5vw}}.a.svelte-5d5cuf.svelte-5d5cuf{font-size:clamp(1rem, 5vw, 3rem)}.dropdown-btn.svelte-5d5cuf:focus+.dropdown-content.svelte-5d5cuf,.dropdown-btn.svelte-5d5cuf:hover+.dropdown-content.svelte-5d5cuf,.dropdown-content.svelte-5d5cuf.svelte-5d5cuf:hover{display:block}.dropdown-content.svelte-5d5cuf.svelte-5d5cuf{display:none;position:absolute;background-color:var(--bg);min-width:160px;box-shadow:0px 8px 16px 0px rgba(0, 0, 0, 0.2);z-index:1}.dropdown-content.svelte-5d5cuf a.svelte-5d5cuf{color:black;padding:12px 16px;text-decoration:none;display:block}.dropdown-content.svelte-5d5cuf a.svelte-5d5cuf:hover{background-color:var(--sec)}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<br> <hr class="h-px mx-8 bg-black border-0 dark:bg-gray-700"> <hr class="h-px mx-8 bg-black border-0 dark:bg-gray-700"> <div class="w-full flex justify-center text-center p-1" data-svelte-h="svelte-1qj4cec"><a href="/" class="a bold mx-2 text-4xl transition-colors duration-300 text-[var(--pri)] hover:text-[var(--sec)] svelte-5d5cuf">Sam</a> <div class="dropdown relative mx-2"><button class="a bold text-4xl transition-colors duration-300 hover:text-[var(--sec)] dropdown-btn svelte-5d5cuf">Policy</button> <div class="dropdown-content absolute hidden text-[var(--sec)] pt-1 svelte-5d5cuf"><a href="/Policy#asuc" class="a rounded-t py-2 px-4 block whitespace-no-wrap svelte-5d5cuf">ASUC Reform</a> <a href="/Policy#campus" class="a py-2 px-4 block whitespace-no-wrap svelte-5d5cuf">Campus Improvement</a> <a href="/Policy#mental" class="a py-2 px-4 block whitespace-no-wrap svelte-5d5cuf">Mental Health</a> <a href="/Policy#housing" class="a rounded-b py-2 px-4 block whitespace-no-wrap svelte-5d5cuf">Housing</a></div></div> <a href="/Endorsements" class="a bold mx-2 text-4xl transition-colors duration-300 hover:text-[var(--pri)] svelte-5d5cuf">Endorsements</a> <a href="/Team" class="a bold mx-2 text-4xl transition-colors duration-300 hover:text-[var(--pri)] svelte-5d5cuf">Our Team</a></div> <hr class="h-px mx-8 bg-black border-0 dark:bg-gray-700"> <hr class="h-px mx-8 bg-black border-0 dark:bg-gray-700"> ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
