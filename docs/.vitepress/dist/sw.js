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
    let d = {};
    const r = (s) => i(s, u),
      t = { module: { uri: u }, exports: d, require: r };
    e[u] = Promise.all(l.map((s) => t[s] || r(s))).then((s) => (n(...s), d));
  };
}
define(['./workbox-92f81961'], function (s) {
  'use strict';
  self.addEventListener('message', (s) => {
    s.data && 'SKIP_WAITING' === s.data.type && self.skipWaiting();
  }),
    s.precacheAndRoute(
      [
        { url: 'assets/app.6d3ef162.js', revision: null },
        { url: 'assets/chunks/framework.5bf5a401.js', revision: null },
        { url: 'assets/chunks/index.2cf8e9e8.js', revision: null },
        { url: 'assets/chunks/theme.1a6998e4.js', revision: null },
        { url: 'assets/guide_element_class.md.3647bed5.js', revision: null },
        { url: 'assets/guide_element_class.md.3647bed5.lean.js', revision: null },
        { url: 'assets/guide_element_event.md.04284cf6.js', revision: null },
        { url: 'assets/guide_element_event.md.04284cf6.lean.js', revision: null },
        { url: 'assets/guide_element_fullScreen.md.dc4a0c48.js', revision: null },
        { url: 'assets/guide_element_fullScreen.md.dc4a0c48.lean.js', revision: null },
        { url: 'assets/guide_element_style.md.663c6b44.js', revision: null },
        { url: 'assets/guide_element_style.md.663c6b44.lean.js', revision: null },
        { url: 'assets/guide_function_color.md.c05800e2.js', revision: null },
        { url: 'assets/guide_function_color.md.c05800e2.lean.js', revision: null },
        { url: 'assets/guide_function_debounceThrottle.md.c99a954e.js', revision: null },
        { url: 'assets/guide_function_debounceThrottle.md.c99a954e.lean.js', revision: null },
        { url: 'assets/guide_function_deepEqual.md.7d13b014.js', revision: null },
        { url: 'assets/guide_function_deepEqual.md.7d13b014.lean.js', revision: null },
        { url: 'assets/guide_function_fingerprint.md.c3f70b84.js', revision: null },
        { url: 'assets/guide_function_fingerprint.md.c3f70b84.lean.js', revision: null },
        { url: 'assets/guide_function_mask.md.5c618faf.js', revision: null },
        { url: 'assets/guide_function_mask.md.5c618faf.lean.js', revision: null },
        { url: 'assets/guide_function_money.md.2df31d04.js', revision: null },
        { url: 'assets/guide_function_money.md.2df31d04.lean.js', revision: null },
        { url: 'assets/guide_function_tabCommunicator.md.270a8889.js', revision: null },
        { url: 'assets/guide_function_tabCommunicator.md.270a8889.lean.js', revision: null },
        { url: 'assets/guide_function_uuid.md.ce2bd1a4.js', revision: null },
        { url: 'assets/guide_function_uuid.md.ce2bd1a4.lean.js', revision: null },
        { url: 'assets/guide_started.md.1beffdb2.js', revision: null },
        { url: 'assets/guide_started.md.1beffdb2.lean.js', revision: null },
        { url: 'assets/guide_utils_date.md.4765577a.js', revision: null },
        { url: 'assets/guide_utils_date.md.4765577a.lean.js', revision: null },
        { url: 'assets/guide_utils_file.md.32f51897.js', revision: null },
        { url: 'assets/guide_utils_file.md.32f51897.lean.js', revision: null },
        { url: 'assets/guide_utils_formData.md.f6b1c94e.js', revision: null },
        { url: 'assets/guide_utils_formData.md.f6b1c94e.lean.js', revision: null },
        { url: 'assets/guide_utils_is_regexp.md.eeb9f1c0.js', revision: null },
        { url: 'assets/guide_utils_is_regexp.md.eeb9f1c0.lean.js', revision: null },
        { url: 'assets/guide_utils_is_type.md.7127c2e7.js', revision: null },
        { url: 'assets/guide_utils_is_type.md.7127c2e7.lean.js', revision: null },
        { url: 'assets/guide_utils_object.md.8623d13c.js', revision: null },
        { url: 'assets/guide_utils_object.md.8623d13c.lean.js', revision: null },
        { url: 'assets/guide_utils_string.md.a368d54f.js', revision: null },
        { url: 'assets/guide_utils_string.md.a368d54f.lean.js', revision: null },
        { url: 'assets/guide_window_browser.md.c4e86aa2.js', revision: null },
        { url: 'assets/guide_window_browser.md.c4e86aa2.lean.js', revision: null },
        { url: 'assets/guide_window_cookies.md.63433b1d.js', revision: null },
        { url: 'assets/guide_window_cookies.md.63433b1d.lean.js', revision: null },
        { url: 'assets/guide_window_indexedDB.md.f4d2fc47.js', revision: null },
        { url: 'assets/guide_window_indexedDB.md.f4d2fc47.lean.js', revision: null },
        { url: 'assets/guide_window_storage.md.9b81196d.js', revision: null },
        { url: 'assets/guide_window_storage.md.9b81196d.lean.js', revision: null },
        { url: 'assets/guide_window_url.md.135c0273.js', revision: null },
        { url: 'assets/guide_window_url.md.135c0273.lean.js', revision: null },
        { url: 'assets/index.md.7cf91088.js', revision: null },
        { url: 'assets/index.md.7cf91088.lean.js', revision: null },
        { url: 'assets/style.0d8f31b4.css', revision: null },
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
