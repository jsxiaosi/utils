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
    const d = (s) => i(s, u),
      t = { module: { uri: u }, exports: r, require: d };
    e[u] = Promise.all(l.map((s) => t[s] || d(s))).then((s) => (n(...s), r));
  };
}
define(['./workbox-340a5dce'], function (s) {
  'use strict';
  self.addEventListener('message', (s) => {
    s.data && 'SKIP_WAITING' === s.data.type && self.skipWaiting();
  }),
    s.precacheAndRoute(
      [
        { url: 'assets/app.913d3036.js', revision: null },
        { url: 'assets/chunks/VPAlgoliaSearchBox.9b5cf4d2.js', revision: null },
        { url: 'assets/guide_element_class.md.ea67027c.js', revision: null },
        { url: 'assets/guide_element_class.md.ea67027c.lean.js', revision: null },
        { url: 'assets/guide_function_color.md.b1b021cc.js', revision: null },
        { url: 'assets/guide_function_color.md.b1b021cc.lean.js', revision: null },
        { url: 'assets/guide_function_debounceThrottle.md.356507e7.js', revision: null },
        { url: 'assets/guide_function_debounceThrottle.md.356507e7.lean.js', revision: null },
        { url: 'assets/guide_function_mask.md.db6186df.js', revision: null },
        { url: 'assets/guide_function_mask.md.db6186df.lean.js', revision: null },
        { url: 'assets/guide_function_money.md.68513e39.js', revision: null },
        { url: 'assets/guide_function_money.md.68513e39.lean.js', revision: null },
        { url: 'assets/guide_function_uuid.md.2b9e153e.js', revision: null },
        { url: 'assets/guide_function_uuid.md.2b9e153e.lean.js', revision: null },
        { url: 'assets/guide_started.md.6f363164.js', revision: null },
        { url: 'assets/guide_started.md.6f363164.lean.js', revision: null },
        { url: 'assets/guide_utils_file.md.55db8630.js', revision: null },
        { url: 'assets/guide_utils_file.md.55db8630.lean.js', revision: null },
        { url: 'assets/guide_utils_formData.md.e82de185.js', revision: null },
        { url: 'assets/guide_utils_formData.md.e82de185.lean.js', revision: null },
        { url: 'assets/guide_utils_is_regexp.md.2588dcb0.js', revision: null },
        { url: 'assets/guide_utils_is_regexp.md.2588dcb0.lean.js', revision: null },
        { url: 'assets/guide_utils_is_type.md.9f0f7a85.js', revision: null },
        { url: 'assets/guide_utils_is_type.md.9f0f7a85.lean.js', revision: null },
        { url: 'assets/guide_utils_string.md.2b8621c1.js', revision: null },
        { url: 'assets/guide_utils_string.md.2b8621c1.lean.js', revision: null },
        { url: 'assets/guide_window_storage.md.a10c3125.js', revision: null },
        { url: 'assets/guide_window_storage.md.a10c3125.lean.js', revision: null },
        { url: 'assets/guide_window_url.md.da825d34.js', revision: null },
        { url: 'assets/guide_window_url.md.da825d34.lean.js', revision: null },
        { url: 'assets/index.md.21243e57.js', revision: null },
        { url: 'assets/index.md.21243e57.lean.js', revision: null },
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
