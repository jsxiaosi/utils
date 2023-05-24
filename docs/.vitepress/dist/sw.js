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
define(['./workbox-340a5dce'], function (s) {
  'use strict';
  self.addEventListener('message', (s) => {
    s.data && 'SKIP_WAITING' === s.data.type && self.skipWaiting();
  }),
    s.precacheAndRoute(
      [
        { url: 'assets/app.77b60f74.js', revision: null },
        { url: 'assets/chunks/VPAlgoliaSearchBox.f56bd78d.js', revision: null },
        { url: 'assets/guide_element_class.md.720b7782.js', revision: null },
        { url: 'assets/guide_element_class.md.720b7782.lean.js', revision: null },
        { url: 'assets/guide_element_event.md.7fd2527d.js', revision: null },
        { url: 'assets/guide_element_event.md.7fd2527d.lean.js', revision: null },
        { url: 'assets/guide_function_color.md.fc85b5fc.js', revision: null },
        { url: 'assets/guide_function_color.md.fc85b5fc.lean.js', revision: null },
        { url: 'assets/guide_function_debounceThrottle.md.c926c418.js', revision: null },
        { url: 'assets/guide_function_debounceThrottle.md.c926c418.lean.js', revision: null },
        { url: 'assets/guide_function_deepEqual.md.b8441af0.js', revision: null },
        { url: 'assets/guide_function_deepEqual.md.b8441af0.lean.js', revision: null },
        { url: 'assets/guide_function_fingerprint.md.d3c22a60.js', revision: null },
        { url: 'assets/guide_function_fingerprint.md.d3c22a60.lean.js', revision: null },
        { url: 'assets/guide_function_mask.md.d0b3b9f9.js', revision: null },
        { url: 'assets/guide_function_mask.md.d0b3b9f9.lean.js', revision: null },
        { url: 'assets/guide_function_money.md.a48a45d7.js', revision: null },
        { url: 'assets/guide_function_money.md.a48a45d7.lean.js', revision: null },
        { url: 'assets/guide_function_tabCommunicator.md.be8b7d06.js', revision: null },
        { url: 'assets/guide_function_tabCommunicator.md.be8b7d06.lean.js', revision: null },
        { url: 'assets/guide_function_uuid.md.192ca777.js', revision: null },
        { url: 'assets/guide_function_uuid.md.192ca777.lean.js', revision: null },
        { url: 'assets/guide_started.md.7c9dacf7.js', revision: null },
        { url: 'assets/guide_started.md.7c9dacf7.lean.js', revision: null },
        { url: 'assets/guide_utils_date.md.9a3db64e.js', revision: null },
        { url: 'assets/guide_utils_date.md.9a3db64e.lean.js', revision: null },
        { url: 'assets/guide_utils_file.md.98f6089f.js', revision: null },
        { url: 'assets/guide_utils_file.md.98f6089f.lean.js', revision: null },
        { url: 'assets/guide_utils_formData.md.dc2d4229.js', revision: null },
        { url: 'assets/guide_utils_formData.md.dc2d4229.lean.js', revision: null },
        { url: 'assets/guide_utils_is_regexp.md.f729a7f3.js', revision: null },
        { url: 'assets/guide_utils_is_regexp.md.f729a7f3.lean.js', revision: null },
        { url: 'assets/guide_utils_is_type.md.508cc331.js', revision: null },
        { url: 'assets/guide_utils_is_type.md.508cc331.lean.js', revision: null },
        { url: 'assets/guide_utils_object.md.ef4a7c0f.js', revision: null },
        { url: 'assets/guide_utils_object.md.ef4a7c0f.lean.js', revision: null },
        { url: 'assets/guide_utils_string.md.1f66c3ea.js', revision: null },
        { url: 'assets/guide_utils_string.md.1f66c3ea.lean.js', revision: null },
        { url: 'assets/guide_window_browser.md.d83e40d7.js', revision: null },
        { url: 'assets/guide_window_browser.md.d83e40d7.lean.js', revision: null },
        { url: 'assets/guide_window_storage.md.3d080add.js', revision: null },
        { url: 'assets/guide_window_storage.md.3d080add.lean.js', revision: null },
        { url: 'assets/guide_window_url.md.91780691.js', revision: null },
        { url: 'assets/guide_window_url.md.91780691.lean.js', revision: null },
        { url: 'assets/index.md.6cdaf481.js', revision: null },
        { url: 'assets/index.md.6cdaf481.lean.js', revision: null },
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
