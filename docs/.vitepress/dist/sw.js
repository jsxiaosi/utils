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
        { url: 'assets/app.3b8da645.js', revision: null },
        { url: 'assets/chunks/VPAlgoliaSearchBox.3ab788f0.js', revision: null },
        { url: 'assets/guide_element_class.md.c0e9ac32.js', revision: null },
        { url: 'assets/guide_element_class.md.c0e9ac32.lean.js', revision: null },
        { url: 'assets/guide_element_event.md.442be75e.js', revision: null },
        { url: 'assets/guide_element_event.md.442be75e.lean.js', revision: null },
        { url: 'assets/guide_function_color.md.46417a3b.js', revision: null },
        { url: 'assets/guide_function_color.md.46417a3b.lean.js', revision: null },
        { url: 'assets/guide_function_debounceThrottle.md.893eebe9.js', revision: null },
        { url: 'assets/guide_function_debounceThrottle.md.893eebe9.lean.js', revision: null },
        { url: 'assets/guide_function_deepEqual.md.755aaf32.js', revision: null },
        { url: 'assets/guide_function_deepEqual.md.755aaf32.lean.js', revision: null },
        { url: 'assets/guide_function_fingerprint.md.40ae216d.js', revision: null },
        { url: 'assets/guide_function_fingerprint.md.40ae216d.lean.js', revision: null },
        { url: 'assets/guide_function_mask.md.912fca06.js', revision: null },
        { url: 'assets/guide_function_mask.md.912fca06.lean.js', revision: null },
        { url: 'assets/guide_function_money.md.af103ff2.js', revision: null },
        { url: 'assets/guide_function_money.md.af103ff2.lean.js', revision: null },
        { url: 'assets/guide_function_tabCommunicator.md.9a4b8320.js', revision: null },
        { url: 'assets/guide_function_tabCommunicator.md.9a4b8320.lean.js', revision: null },
        { url: 'assets/guide_function_uuid.md.d3b248f5.js', revision: null },
        { url: 'assets/guide_function_uuid.md.d3b248f5.lean.js', revision: null },
        { url: 'assets/guide_started.md.b35b27d5.js', revision: null },
        { url: 'assets/guide_started.md.b35b27d5.lean.js', revision: null },
        { url: 'assets/guide_utils_date.md.18f0999c.js', revision: null },
        { url: 'assets/guide_utils_date.md.18f0999c.lean.js', revision: null },
        { url: 'assets/guide_utils_file.md.413e0241.js', revision: null },
        { url: 'assets/guide_utils_file.md.413e0241.lean.js', revision: null },
        { url: 'assets/guide_utils_formData.md.4d5baa2b.js', revision: null },
        { url: 'assets/guide_utils_formData.md.4d5baa2b.lean.js', revision: null },
        { url: 'assets/guide_utils_is_regexp.md.390b9417.js', revision: null },
        { url: 'assets/guide_utils_is_regexp.md.390b9417.lean.js', revision: null },
        { url: 'assets/guide_utils_is_type.md.721bab4e.js', revision: null },
        { url: 'assets/guide_utils_is_type.md.721bab4e.lean.js', revision: null },
        { url: 'assets/guide_utils_object.md.3b571953.js', revision: null },
        { url: 'assets/guide_utils_object.md.3b571953.lean.js', revision: null },
        { url: 'assets/guide_utils_string.md.9ad0e11b.js', revision: null },
        { url: 'assets/guide_utils_string.md.9ad0e11b.lean.js', revision: null },
        { url: 'assets/guide_window_browser.md.9c4a1585.js', revision: null },
        { url: 'assets/guide_window_browser.md.9c4a1585.lean.js', revision: null },
        { url: 'assets/guide_window_indexedDB.md.d2f30804.js', revision: null },
        { url: 'assets/guide_window_indexedDB.md.d2f30804.lean.js', revision: null },
        { url: 'assets/guide_window_storage.md.80fae664.js', revision: null },
        { url: 'assets/guide_window_storage.md.80fae664.lean.js', revision: null },
        { url: 'assets/guide_window_url.md.6b812763.js', revision: null },
        { url: 'assets/guide_window_url.md.6b812763.lean.js', revision: null },
        { url: 'assets/index.md.72736f14.js', revision: null },
        { url: 'assets/index.md.72736f14.lean.js', revision: null },
        { url: 'assets/style.500d73c9.css', revision: null },
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
