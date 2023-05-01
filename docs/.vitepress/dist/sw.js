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
        { url: 'assets/app.e0404b94.js', revision: null },
        { url: 'assets/chunks/VPAlgoliaSearchBox.e65b6a9b.js', revision: null },
        { url: 'assets/guide_element_class.md.7e941d9a.js', revision: null },
        { url: 'assets/guide_element_class.md.7e941d9a.lean.js', revision: null },
        { url: 'assets/guide_element_event.md.63dc5e1a.js', revision: null },
        { url: 'assets/guide_element_event.md.63dc5e1a.lean.js', revision: null },
        { url: 'assets/guide_function_color.md.341cf2f8.js', revision: null },
        { url: 'assets/guide_function_color.md.341cf2f8.lean.js', revision: null },
        { url: 'assets/guide_function_debounceThrottle.md.f0308467.js', revision: null },
        { url: 'assets/guide_function_debounceThrottle.md.f0308467.lean.js', revision: null },
        { url: 'assets/guide_function_deepEqual.md.435a9fb3.js', revision: null },
        { url: 'assets/guide_function_deepEqual.md.435a9fb3.lean.js', revision: null },
        { url: 'assets/guide_function_mask.md.719a1714.js', revision: null },
        { url: 'assets/guide_function_mask.md.719a1714.lean.js', revision: null },
        { url: 'assets/guide_function_money.md.f355425b.js', revision: null },
        { url: 'assets/guide_function_money.md.f355425b.lean.js', revision: null },
        { url: 'assets/guide_function_uuid.md.ec1998e5.js', revision: null },
        { url: 'assets/guide_function_uuid.md.ec1998e5.lean.js', revision: null },
        { url: 'assets/guide_started.md.aa5baf1b.js', revision: null },
        { url: 'assets/guide_started.md.aa5baf1b.lean.js', revision: null },
        { url: 'assets/guide_utils_date.md.bc3ab473.js', revision: null },
        { url: 'assets/guide_utils_date.md.bc3ab473.lean.js', revision: null },
        { url: 'assets/guide_utils_file.md.071fc7ca.js', revision: null },
        { url: 'assets/guide_utils_file.md.071fc7ca.lean.js', revision: null },
        { url: 'assets/guide_utils_formData.md.9c4f75fd.js', revision: null },
        { url: 'assets/guide_utils_formData.md.9c4f75fd.lean.js', revision: null },
        { url: 'assets/guide_utils_is_regexp.md.ea94482d.js', revision: null },
        { url: 'assets/guide_utils_is_regexp.md.ea94482d.lean.js', revision: null },
        { url: 'assets/guide_utils_is_type.md.5ae3c34e.js', revision: null },
        { url: 'assets/guide_utils_is_type.md.5ae3c34e.lean.js', revision: null },
        { url: 'assets/guide_utils_object.md.8325a264.js', revision: null },
        { url: 'assets/guide_utils_object.md.8325a264.lean.js', revision: null },
        { url: 'assets/guide_utils_string.md.53919376.js', revision: null },
        { url: 'assets/guide_utils_string.md.53919376.lean.js', revision: null },
        { url: 'assets/guide_window_browser.md.21ec727e.js', revision: null },
        { url: 'assets/guide_window_browser.md.21ec727e.lean.js', revision: null },
        { url: 'assets/guide_window_storage.md.8982d95f.js', revision: null },
        { url: 'assets/guide_window_storage.md.8982d95f.lean.js', revision: null },
        { url: 'assets/guide_window_url.md.78374c21.js', revision: null },
        { url: 'assets/guide_window_url.md.78374c21.lean.js', revision: null },
        { url: 'assets/index.md.e16de70c.js', revision: null },
        { url: 'assets/index.md.e16de70c.lean.js', revision: null },
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
