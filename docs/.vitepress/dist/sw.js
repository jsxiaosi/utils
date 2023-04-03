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
    const a = (s) => i(s, u),
      t = { module: { uri: u }, exports: r, require: a };
    e[u] = Promise.all(l.map((s) => t[s] || a(s))).then((s) => (n(...s), r));
  };
}
define(['./workbox-340a5dce'], function (s) {
  'use strict';
  self.addEventListener('message', (s) => {
    s.data && 'SKIP_WAITING' === s.data.type && self.skipWaiting();
  }),
    s.precacheAndRoute(
      [
        { url: 'assets/app.c898d5db.js', revision: null },
        { url: 'assets/chunks/VPAlgoliaSearchBox.11a8d956.js', revision: null },
        { url: 'assets/guide_element_class.md.9aa85a3b.js', revision: null },
        { url: 'assets/guide_element_class.md.9aa85a3b.lean.js', revision: null },
        { url: 'assets/guide_function_color.md.6a9dcac6.js', revision: null },
        { url: 'assets/guide_function_color.md.6a9dcac6.lean.js', revision: null },
        { url: 'assets/guide_function_money.md.e48e3bc9.js', revision: null },
        { url: 'assets/guide_function_money.md.e48e3bc9.lean.js', revision: null },
        { url: 'assets/guide_started.md.049a5852.js', revision: null },
        { url: 'assets/guide_started.md.049a5852.lean.js', revision: null },
        { url: 'assets/guide_utils_file.md.c797ccfc.js', revision: null },
        { url: 'assets/guide_utils_file.md.c797ccfc.lean.js', revision: null },
        { url: 'assets/guide_utils_formData.md.eabb47de.js', revision: null },
        { url: 'assets/guide_utils_formData.md.eabb47de.lean.js', revision: null },
        { url: 'assets/guide_utils_is_regexp.md.a39e63b5.js', revision: null },
        { url: 'assets/guide_utils_is_regexp.md.a39e63b5.lean.js', revision: null },
        { url: 'assets/guide_utils_is_type.md.6e2ad839.js', revision: null },
        { url: 'assets/guide_utils_is_type.md.6e2ad839.lean.js', revision: null },
        { url: 'assets/guide_utils_string.md.9a678502.js', revision: null },
        { url: 'assets/guide_utils_string.md.9a678502.lean.js', revision: null },
        { url: 'assets/guide_window_storage.md.73146166.js', revision: null },
        { url: 'assets/guide_window_storage.md.73146166.lean.js', revision: null },
        { url: 'assets/index.md.1780c7ff.js', revision: null },
        { url: 'assets/index.md.1780c7ff.lean.js', revision: null },
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
