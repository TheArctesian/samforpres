

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.CmtaI3sS.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.B1j-SI0n.js"];
export const stylesheets = ["_app/immutable/assets/0.C4ih5_HT.css","_app/immutable/assets/app.BjdVK2cB.css"];
export const fonts = ["_app/immutable/assets/AldotheApache.DWxvqsmt.ttf"];
