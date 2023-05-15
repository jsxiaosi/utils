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
      a = { module: { uri: u }, exports: r, require: d };
    e[u] = Promise.all(l.map((s) => a[s] || d(s))).then((s) => (n(...s), r));
  };
}
define(['./workbox-340a5dce'], function (s) {
  'use strict';
  self.addEventListener('message', (s) => {
    s.data && 'SKIP_WAITING' === s.data.type && self.skipWaiting();
  }),
    s.precacheAndRoute(
      [
        { url: 'assets/app.717403ec.js', revision: null },
        { url: 'assets/chunks/VPAlgoliaSearchBox.bd54bfb3.js', revision: null },
        { url: 'assets/guide_element_class.md.a6edb017.js', revision: null },
        { url: 'assets/guide_element_class.md.a6edb017.lean.js', revision: null },
        { url: 'assets/guide_element_event.md.356f47f9.js', revision: null },
        { url: 'assets/guide_element_event.md.356f47f9.lean.js', revision: null },
        { url: 'assets/guide_function_color.md.655ce5fc.js', revision: null },
        { url: 'assets/guide_function_color.md.655ce5fc.lean.js', revision: null },
        { url: 'assets/guide_function_debounceThrottle.md.2d5dd5b0.js', revision: null },
        { url: 'assets/guide_function_debounceThrottle.md.2d5dd5b0.lean.js', revision: null },
        { url: 'assets/guide_function_deepEqual.md.a6e7253b.js', revision: null },
        { url: 'assets/guide_function_deepEqual.md.a6e7253b.lean.js', revision: null },
        { url: 'assets/guide_function_fingerprint.md.56aa693a.js', revision: null },
        { url: 'assets/guide_function_fingerprint.md.56aa693a.lean.js', revision: null },
        { url: 'assets/guide_function_mask.md.5ea66030.js', revision: null },
        { url: 'assets/guide_function_mask.md.5ea66030.lean.js', revision: null },
        { url: 'assets/guide_function_money.md.ae15e012.js', revision: null },
        { url: 'assets/guide_function_money.md.ae15e012.lean.js', revision: null },
        { url: 'assets/guide_function_uuid.md.9c5dca10.js', revision: null },
        { url: 'assets/guide_function_uuid.md.9c5dca10.lean.js', revision: null },
        { url: 'assets/guide_started.md.847929e9.js', revision: null },
        { url: 'assets/guide_started.md.847929e9.lean.js', revision: null },
        { url: 'assets/guide_utils_date.md.e71ad87c.js', revision: null },
        { url: 'assets/guide_utils_date.md.e71ad87c.lean.js', revision: null },
        { url: 'assets/guide_utils_file.md.e6089b97.js', revision: null },
        { url: 'assets/guide_utils_file.md.e6089b97.lean.js', revision: null },
        { url: 'assets/guide_utils_formData.md.1553e9a7.js', revision: null },
        { url: 'assets/guide_utils_formData.md.1553e9a7.lean.js', revision: null },
        { url: 'assets/guide_utils_is_regexp.md.3d56954a.js', revision: null },
        { url: 'assets/guide_utils_is_regexp.md.3d56954a.lean.js', revision: null },
        { url: 'assets/guide_utils_is_type.md.fee0e0c5.js', revision: null },
        { url: 'assets/guide_utils_is_type.md.fee0e0c5.lean.js', revision: null },
        { url: 'assets/guide_utils_object.md.6c6d9637.js', revision: null },
        { url: 'assets/guide_utils_object.md.6c6d9637.lean.js', revision: null },
        { url: 'assets/guide_utils_string.md.cb8220a9.js', revision: null },
        { url: 'assets/guide_utils_string.md.cb8220a9.lean.js', revision: null },
        { url: 'assets/guide_window_browser.md.968a94fa.js', revision: null },
        { url: 'assets/guide_window_browser.md.968a94fa.lean.js', revision: null },
        { url: 'assets/guide_window_storage.md.a067150e.js', revision: null },
        { url: 'assets/guide_window_storage.md.a067150e.lean.js', revision: null },
        { url: 'assets/guide_window_url.md.2c1309a9.js', revision: null },
        { url: 'assets/guide_window_url.md.2c1309a9.lean.js', revision: null },
        { url: 'assets/index.md.c007d174.js', revision: null },
        { url: 'assets/index.md.c007d174.lean.js', revision: null },
        { url: 'assets/style.6910265b.css', revision: null },
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
