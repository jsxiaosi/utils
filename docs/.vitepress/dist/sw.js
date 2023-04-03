if (!self.define) {
  let e,
    s = {};
  const i = (i, l) => (
    (i = new URL(i + '.js', l).href),
    s[i] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = i), (e.onload = s), document.head.appendChild(e);
        } else (e = i), importScripts(i), s();
      }).then(() => {
        let e = s[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
      })
  );
  self.define = (l, n) => {
    const u = e || ('document' in self ? document.currentScript.src : '') || location.href;
    if (s[u]) return;
    let r = {};
    const t = (e) => i(e, u),
      d = { module: { uri: u }, exports: r, require: t };
    s[u] = Promise.all(l.map((e) => d[e] || t(e))).then((e) => (n(...e), r));
  };
}
define(['./workbox-340a5dce'], function (e) {
  'use strict';
  self.addEventListener('message', (e) => {
    e.data && 'SKIP_WAITING' === e.data.type && self.skipWaiting();
  }),
    e.precacheAndRoute(
      [
        { url: 'assets/app.c381dac2.js', revision: null },
        { url: 'assets/chunks/VPAlgoliaSearchBox.bd05fb03.js', revision: null },
        { url: 'assets/guide_element_class.md.3fbc890a.js', revision: null },
        { url: 'assets/guide_element_class.md.3fbc890a.lean.js', revision: null },
        { url: 'assets/guide_function_color.md.ae9e41f4.js', revision: null },
        { url: 'assets/guide_function_color.md.ae9e41f4.lean.js', revision: null },
        { url: 'assets/guide_function_money.md.355e48b0.js', revision: null },
        { url: 'assets/guide_function_money.md.355e48b0.lean.js', revision: null },
        { url: 'assets/guide_started.md.6dd9fc66.js', revision: null },
        { url: 'assets/guide_started.md.6dd9fc66.lean.js', revision: null },
        { url: 'assets/guide_utils_file.md.3305b1d3.js', revision: null },
        { url: 'assets/guide_utils_file.md.3305b1d3.lean.js', revision: null },
        { url: 'assets/guide_utils_formData.md.b29e4420.js', revision: null },
        { url: 'assets/guide_utils_formData.md.b29e4420.lean.js', revision: null },
        { url: 'assets/guide_utils_is_regexp.md.53a6305c.js', revision: null },
        { url: 'assets/guide_utils_is_regexp.md.53a6305c.lean.js', revision: null },
        { url: 'assets/guide_utils_is_type.md.0b909e90.js', revision: null },
        { url: 'assets/guide_utils_is_type.md.0b909e90.lean.js', revision: null },
        { url: 'assets/guide_utils_string.md.9fa77709.js', revision: null },
        { url: 'assets/guide_utils_string.md.9fa77709.lean.js', revision: null },
        { url: 'assets/guide_window_storage.md.5feb86be.js', revision: null },
        { url: 'assets/guide_window_storage.md.5feb86be.lean.js', revision: null },
        { url: 'assets/index.md.598fe96e.js', revision: null },
        { url: 'assets/index.md.598fe96e.lean.js', revision: null },
        { url: 'assets/style.70e69cf7.css', revision: null },
        { url: 'registerSW.js', revision: '1872c500de691dce40960bb85481de07' },
        { url: 'pwa/android-chrome-192x192.png', revision: 'a5bff5ef047458deca74d03df602cf86' },
        { url: 'pwa/android-chrome-512x512.png', revision: 'be16de3784f921baf2b9421c723d7aad' },
        { url: 'manifest.webmanifest', revision: '65150f771247e501bab5530296052e95' },
      ],
      {},
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL('index.html')));
});
