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
        { url: 'assets/app.34b59631.js', revision: null },
        { url: 'assets/chunks/VPAlgoliaSearchBox.763fa406.js', revision: null },
        { url: 'assets/guide_element_class.md.be6ee9fd.js', revision: null },
        { url: 'assets/guide_element_class.md.be6ee9fd.lean.js', revision: null },
        { url: 'assets/guide_element_event.md.b46f8640.js', revision: null },
        { url: 'assets/guide_element_event.md.b46f8640.lean.js', revision: null },
        { url: 'assets/guide_function_color.md.51ab4d4f.js', revision: null },
        { url: 'assets/guide_function_color.md.51ab4d4f.lean.js', revision: null },
        { url: 'assets/guide_function_debounceThrottle.md.d864d6cd.js', revision: null },
        { url: 'assets/guide_function_debounceThrottle.md.d864d6cd.lean.js', revision: null },
        { url: 'assets/guide_function_mask.md.960f7114.js', revision: null },
        { url: 'assets/guide_function_mask.md.960f7114.lean.js', revision: null },
        { url: 'assets/guide_function_money.md.a3f7dfc5.js', revision: null },
        { url: 'assets/guide_function_money.md.a3f7dfc5.lean.js', revision: null },
        { url: 'assets/guide_function_uuid.md.5170ae3c.js', revision: null },
        { url: 'assets/guide_function_uuid.md.5170ae3c.lean.js', revision: null },
        { url: 'assets/guide_started.md.f0148be8.js', revision: null },
        { url: 'assets/guide_started.md.f0148be8.lean.js', revision: null },
        { url: 'assets/guide_utils_date.md.a60aa5d9.js', revision: null },
        { url: 'assets/guide_utils_date.md.a60aa5d9.lean.js', revision: null },
        { url: 'assets/guide_utils_file.md.6bec6238.js', revision: null },
        { url: 'assets/guide_utils_file.md.6bec6238.lean.js', revision: null },
        { url: 'assets/guide_utils_formData.md.654835b9.js', revision: null },
        { url: 'assets/guide_utils_formData.md.654835b9.lean.js', revision: null },
        { url: 'assets/guide_utils_is_regexp.md.e5a61dfa.js', revision: null },
        { url: 'assets/guide_utils_is_regexp.md.e5a61dfa.lean.js', revision: null },
        { url: 'assets/guide_utils_is_type.md.421a4310.js', revision: null },
        { url: 'assets/guide_utils_is_type.md.421a4310.lean.js', revision: null },
        { url: 'assets/guide_utils_string.md.4330fa19.js', revision: null },
        { url: 'assets/guide_utils_string.md.4330fa19.lean.js', revision: null },
        { url: 'assets/guide_window_storage.md.182437de.js', revision: null },
        { url: 'assets/guide_window_storage.md.182437de.lean.js', revision: null },
        { url: 'assets/guide_window_url.md.4c10b450.js', revision: null },
        { url: 'assets/guide_window_url.md.4c10b450.lean.js', revision: null },
        { url: 'assets/index.md.94262e31.js', revision: null },
        { url: 'assets/index.md.94262e31.lean.js', revision: null },
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
