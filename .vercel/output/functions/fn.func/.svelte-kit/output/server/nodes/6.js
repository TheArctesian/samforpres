

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Team/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.BvahSLW_.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.B1j-SI0n.js"];
export const stylesheets = ["_app/immutable/assets/app.BjdVK2cB.css"];
export const fonts = ["_app/immutable/assets/AldotheApache.DWxvqsmt.ttf"];
