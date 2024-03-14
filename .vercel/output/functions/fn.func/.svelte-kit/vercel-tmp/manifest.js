export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.jpg"]),
	mimeTypes: {".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.B9xqWLUb.js","app":"_app/immutable/entry/app.wf3wprJx.js","imports":["_app/immutable/entry/start.B9xqWLUb.js","_app/immutable/chunks/entry.D__dKHtD.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.wf3wprJx.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.B1j-SI0n.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/About",
				pattern: /^\/About\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/Endorsements",
				pattern: /^\/Endorsements\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/Policy",
				pattern: /^\/Policy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/Team",
				pattern: /^\/Team\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
