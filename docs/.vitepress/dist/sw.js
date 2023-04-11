if (!self.define) {
  let s,
    e = {};
  const i = (i, l) => (
    (i = new URL(i + '.js', l).href),
    e[i] ||
      new Promise((e) => {
        if ('document' in self) {
          const s = document.createElement('script');
          (s.src = i), (s.onload = e), document.head.appendChild(s);
        } else (s = i), importScripts(i), e();
      }).then(() => {
        let s = e[i];
        if (!s) throw new Error(`Module ${i} didn’t register its module`);
        return s;
      })
  );
  self.define = (l, n) => {
    const u = s || ('document' in self ? document.currentScript.src : '') || location.href;
    if (e[u]) return;
    let r = {};
    const t = (s) => i(s, u),
      d = { module: { uri: u }, exports: r, require: t };
    e[u] = Promise.all(l.map((s) => d[s] || t(s))).then((s) => (n(...s), r));
  };
}
define(['./workbox-340a5dce'], function (s) {
  'use strict';
  self.addEventListener('message', (s) => {
    s.data && 'SKIP_WAITING' === s.data.type && self.skipWaiting();
  }),
    s.precacheAndRoute(
      [
        { url: 'assets/app.5368908a.js', revision: null },
        { url: 'assets/chunks/VPAlgoliaSearchBox.a769aa46.js', revision: null },
        { url: 'assets/guide_element_class.md.79e1507c.js', revision: null },
        { url: 'assets/guide_element_class.md.79e1507c.lean.js', revision: null },
        { url: 'assets/guide_function_color.md.7f9cfbbe.js', revision: null },
        { url: 'assets/guide_function_color.md.7f9cfbbe.lean.js', revision: null },
        { url: 'assets/guide_function_mask.md.1853db3e.js', revision: null },
        { url: 'assets/guide_function_mask.md.1853db3e.lean.js', revision: null },
        { url: 'assets/guide_function_money.md.60400263.js', revision: null },
        { url: 'assets/guide_function_money.md.60400263.lean.js', revision: null },
        { url: 'assets/guide_function_uuid.md.8c8cfa6c.js', revision: null },
        { url: 'assets/guide_function_uuid.md.8c8cfa6c.lean.js', revision: null },
        { url: 'assets/guide_started.md.69e403e9.js', revision: null },
        { url: 'assets/guide_started.md.69e403e9.lean.js', revision: null },
        { url: 'assets/guide_utils_file.md.1fee0884.js', revision: null },
        { url: 'assets/guide_utils_file.md.1fee0884.lean.js', revision: null },
        { url: 'assets/guide_utils_formData.md.3bb47872.js', revision: null },
        { url: 'assets/guide_utils_formData.md.3bb47872.lean.js', revision: null },
        { url: 'assets/guide_utils_is_regexp.md.e960e388.js', revision: null },
        { url: 'assets/guide_utils_is_regexp.md.e960e388.lean.js', revision: null },
        { url: 'assets/guide_utils_is_type.md.98fe7233.js', revision: null },
        { url: 'assets/guide_utils_is_type.md.98fe7233.lean.js', revision: null },
        { url: 'assets/guide_utils_string.md.dbbf690b.js', revision: null },
        { url: 'assets/guide_utils_string.md.dbbf690b.lean.js', revision: null },
        { url: 'assets/guide_window_storage.md.2cefb709.js', revision: null },
        { url: 'assets/guide_window_storage.md.2cefb709.lean.js', revision: null },
        { url: 'assets/index.md.e185b2ec.js', revision: null },
        { url: 'assets/index.md.e185b2ec.lean.js', revision: null },
        { url: 'assets/style.e667eb0a.css', revision: null },
        { url: 'registerSW.js', revision: 'a908ecbfd41489342c748035ff8cfc8e' },
        { url: 'pwa/android-chrome-192x192.png', revision: 'a5bff5ef047458deca74d03df602cf86' },
        { url: 'pwa/android-chrome-512x512.png', revision: 'be16de3784f921baf2b9421c723d7aad' },
        { url: 'manifest.webmanifest', revision: '75248cd47560ca45a4e8345a699af4c1' },
      ],
      {},
    ),
    s.cleanupOutdatedCaches(),
    s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL('index.html')));
});
