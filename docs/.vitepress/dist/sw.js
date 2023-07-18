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
    let d = {};
    const r = (e) => i(e, u),
      t = { module: { uri: u }, exports: d, require: r };
    s[u] = Promise.all(l.map((e) => t[e] || r(e))).then((e) => (n(...e), d));
  };
}
define(['./workbox-340a5dce'], function (e) {
  'use strict';
  self.addEventListener('message', (e) => {
    e.data && 'SKIP_WAITING' === e.data.type && self.skipWaiting();
  }),
    e.precacheAndRoute(
      [
        { url: 'assets/app.0659b4d4.js', revision: null },
        { url: 'assets/guide_element_class.md.5201a5d9.js', revision: null },
        { url: 'assets/guide_element_class.md.5201a5d9.lean.js', revision: null },
        { url: 'assets/guide_element_event.md.b631926e.js', revision: null },
        { url: 'assets/guide_element_event.md.b631926e.lean.js', revision: null },
        { url: 'assets/guide_element_fullScreen.md.d0e9dea9.js', revision: null },
        { url: 'assets/guide_element_fullScreen.md.d0e9dea9.lean.js', revision: null },
        { url: 'assets/guide_element_style.md.8c24ff07.js', revision: null },
        { url: 'assets/guide_element_style.md.8c24ff07.lean.js', revision: null },
        { url: 'assets/guide_function_color.md.8c9f0900.js', revision: null },
        { url: 'assets/guide_function_color.md.8c9f0900.lean.js', revision: null },
        { url: 'assets/guide_function_debounceThrottle.md.eec2fbbe.js', revision: null },
        { url: 'assets/guide_function_debounceThrottle.md.eec2fbbe.lean.js', revision: null },
        { url: 'assets/guide_function_deepEqual.md.9933953f.js', revision: null },
        { url: 'assets/guide_function_deepEqual.md.9933953f.lean.js', revision: null },
        { url: 'assets/guide_function_fingerprint.md.5ab28deb.js', revision: null },
        { url: 'assets/guide_function_fingerprint.md.5ab28deb.lean.js', revision: null },
        { url: 'assets/guide_function_mask.md.8e0b7f5d.js', revision: null },
        { url: 'assets/guide_function_mask.md.8e0b7f5d.lean.js', revision: null },
        { url: 'assets/guide_function_money.md.185b02a1.js', revision: null },
        { url: 'assets/guide_function_money.md.185b02a1.lean.js', revision: null },
        { url: 'assets/guide_function_tabCommunicator.md.a4bb32c1.js', revision: null },
        { url: 'assets/guide_function_tabCommunicator.md.a4bb32c1.lean.js', revision: null },
        { url: 'assets/guide_function_uuid.md.1d92bfc0.js', revision: null },
        { url: 'assets/guide_function_uuid.md.1d92bfc0.lean.js', revision: null },
        { url: 'assets/guide_started.md.6e620a88.js', revision: null },
        { url: 'assets/guide_started.md.6e620a88.lean.js', revision: null },
        { url: 'assets/guide_utils_date.md.4eaabde0.js', revision: null },
        { url: 'assets/guide_utils_date.md.4eaabde0.lean.js', revision: null },
        { url: 'assets/guide_utils_file.md.8d7f558e.js', revision: null },
        { url: 'assets/guide_utils_file.md.8d7f558e.lean.js', revision: null },
        { url: 'assets/guide_utils_formData.md.3cc2a635.js', revision: null },
        { url: 'assets/guide_utils_formData.md.3cc2a635.lean.js', revision: null },
        { url: 'assets/guide_utils_is_regexp.md.80e8296b.js', revision: null },
        { url: 'assets/guide_utils_is_regexp.md.80e8296b.lean.js', revision: null },
        { url: 'assets/guide_utils_is_type.md.22e8c619.js', revision: null },
        { url: 'assets/guide_utils_is_type.md.22e8c619.lean.js', revision: null },
        { url: 'assets/guide_utils_object.md.eea65c28.js', revision: null },
        { url: 'assets/guide_utils_object.md.eea65c28.lean.js', revision: null },
        { url: 'assets/guide_utils_string.md.10a2cdc7.js', revision: null },
        { url: 'assets/guide_utils_string.md.10a2cdc7.lean.js', revision: null },
        { url: 'assets/guide_window_browser.md.1f4f6c45.js', revision: null },
        { url: 'assets/guide_window_browser.md.1f4f6c45.lean.js', revision: null },
        { url: 'assets/guide_window_cookies.md.795f9d02.js', revision: null },
        { url: 'assets/guide_window_cookies.md.795f9d02.lean.js', revision: null },
        { url: 'assets/guide_window_indexedDB.md.cc46d3d3.js', revision: null },
        { url: 'assets/guide_window_indexedDB.md.cc46d3d3.lean.js', revision: null },
        { url: 'assets/guide_window_storage.md.338e6015.js', revision: null },
        { url: 'assets/guide_window_storage.md.338e6015.lean.js', revision: null },
        { url: 'assets/guide_window_url.md.ba263417.js', revision: null },
        { url: 'assets/guide_window_url.md.ba263417.lean.js', revision: null },
        { url: 'assets/index.md.9359a4d8.js', revision: null },
        { url: 'assets/index.md.9359a4d8.lean.js', revision: null },
        { url: 'assets/style.500d73c9.css', revision: null },
        { url: 'registerSW.js', revision: 'a908ecbfd41489342c748035ff8cfc8e' },
        { url: 'pwa/android-chrome-192x192.png', revision: 'a5bff5ef047458deca74d03df602cf86' },
        { url: 'pwa/android-chrome-512x512.png', revision: 'be16de3784f921baf2b9421c723d7aad' },
        { url: 'manifest.webmanifest', revision: '75248cd47560ca45a4e8345a699af4c1' },
      ],
      {},
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL('index.html')));
});
