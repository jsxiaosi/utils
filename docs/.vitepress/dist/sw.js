if (!self.define) {
  let e,
    s = {};
  const n = (n, r) => (
    (n = new URL(n + '.js', r).href),
    s[n] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = n), (e.onload = s), document.head.appendChild(e);
        } else (e = n), importScripts(n), s();
      }).then(() => {
        let e = s[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (r, i) => {
    const l = e || ('document' in self ? document.currentScript.src : '') || location.href;
    if (s[l]) return;
    let o = {};
    const t = (e) => n(e, l),
      d = { module: { uri: l }, exports: o, require: t };
    s[l] = Promise.all(r.map((e) => d[e] || t(e))).then((e) => (i(...e), o));
  };
}
define(['./workbox-e0782b83'], function (e) {
  'use strict';
  self.addEventListener('message', (e) => {
    e.data && 'SKIP_WAITING' === e.data.type && self.skipWaiting();
  }),
    e.precacheAndRoute(
      [
        { url: 'assets/app.8ecaf5df.js', revision: null },
        { url: 'assets/chunks/local.19cf1fff.js', revision: null },
        { url: 'assets/chunks/VPAlgoliaSearchBox.b164870e.js', revision: null },
        { url: 'assets/components_directive_water-mark.md.94fd0896.js', revision: null },
        { url: 'assets/components_directive_water-mark.md.94fd0896.lean.js', revision: null },
        { url: 'assets/components_hooks_water-mark.md.7d82a346.js', revision: null },
        { url: 'assets/components_hooks_water-mark.md.7d82a346.lean.js', revision: null },
        { url: 'assets/components_utils_file.md.37271b4f.js', revision: null },
        { url: 'assets/components_utils_file.md.37271b4f.lean.js', revision: null },
        { url: 'assets/index.md.64d2fe1d.js', revision: null },
        { url: 'assets/index.md.64d2fe1d.lean.js', revision: null },
        { url: 'assets/style.970da533.css', revision: null },
        { url: 'registerSW.js', revision: '1872c500de691dce40960bb85481de07' },
        { url: 'pwa/android-chrome-192x192.png', revision: 'a5bff5ef047458deca74d03df602cf86' },
        { url: 'pwa/android-chrome-512x512.png', revision: 'be16de3784f921baf2b9421c723d7aad' },
        { url: 'manifest.webmanifest', revision: 'db48fea8942d9271266804983a45576f' },
      ],
      {},
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL('index.html')));
});
