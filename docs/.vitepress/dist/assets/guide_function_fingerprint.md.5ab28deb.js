import {
  d as B,
  r as m,
  k as v,
  o as g,
  g as k,
  b as d,
  t as b,
  _ as T,
  a as N,
  e as f,
  w as A,
  u as h,
  f as w,
  h as I,
} from './app.0659b4d4.js';
function E(n, t) {
  (n = [n[0] >>> 16, n[0] & 65535, n[1] >>> 16, n[1] & 65535]),
    (t = [t[0] >>> 16, t[0] & 65535, t[1] >>> 16, t[1] & 65535]);
  const s = [0, 0, 0, 0];
  return (
    (s[3] += n[3] + t[3]),
    (s[2] += s[3] >>> 16),
    (s[3] &= 65535),
    (s[2] += n[2] + t[2]),
    (s[1] += s[2] >>> 16),
    (s[2] &= 65535),
    (s[1] += n[1] + t[1]),
    (s[0] += s[1] >>> 16),
    (s[1] &= 65535),
    (s[0] += n[0] + t[0]),
    (s[0] &= 65535),
    [(s[0] << 16) | s[1], (s[2] << 16) | s[3]]
  );
}
function C(n, t) {
  (n = [n[0] >>> 16, n[0] & 65535, n[1] >>> 16, n[1] & 65535]),
    (t = [t[0] >>> 16, t[0] & 65535, t[1] >>> 16, t[1] & 65535]);
  const s = [0, 0, 0, 0];
  return (
    (s[3] += n[3] * t[3]),
    (s[2] += s[3] >>> 16),
    (s[3] &= 65535),
    (s[2] += n[2] * t[3]),
    (s[1] += s[2] >>> 16),
    (s[2] &= 65535),
    (s[2] += n[3] * t[2]),
    (s[1] += s[2] >>> 16),
    (s[2] &= 65535),
    (s[1] += n[1] * t[3]),
    (s[0] += s[1] >>> 16),
    (s[1] &= 65535),
    (s[1] += n[2] * t[2]),
    (s[0] += s[1] >>> 16),
    (s[1] &= 65535),
    (s[1] += n[3] * t[1]),
    (s[0] += s[1] >>> 16),
    (s[1] &= 65535),
    (s[0] += n[0] * t[3] + n[1] * t[2] + n[2] * t[1] + n[3] * t[0]),
    (s[0] &= 65535),
    [(s[0] << 16) | s[1], (s[2] << 16) | s[3]]
  );
}
function u(n, t) {
  return (
    (t %= 64),
    t === 32
      ? [n[1], n[0]]
      : t < 32
      ? [(n[0] << t) | (n[1] >>> (32 - t)), (n[1] << t) | (n[0] >>> (32 - t))]
      : ((t -= 32), [(n[1] << t) | (n[0] >>> (32 - t)), (n[0] << t) | (n[1] >>> (32 - t))])
  );
}
function l(n, t) {
  return (t %= 64), t === 0 ? n : t < 32 ? [(n[0] << t) | (n[1] >>> (32 - t)), n[1] << t] : [n[1] << (t - 32), 0];
}
function c(n, t) {
  return [n[0] ^ t[0], n[1] ^ t[1]];
}
function _(n) {
  return (
    (n = c(n, [0, n[0] >>> 1])),
    (n = C(n, [4283543511, 3981806797])),
    (n = c(n, [0, n[0] >>> 1])),
    (n = C(n, [3301882366, 444984403])),
    (n = c(n, [0, n[0] >>> 1])),
    n
  );
}
function M(n, t) {
  (n = n || ''), (t = t || 0);
  const s = n.length % 16,
    i = n.length - s;
  let a = [0, t],
    o = [0, t],
    e = [0, 0],
    r = [0, 0];
  const D = [2277735313, 289559509],
    F = [1291169091, 658871167];
  let p;
  for (p = 0; p < i; p = p + 16)
    (e = [
      (n.charCodeAt(p + 4) & 255) |
        ((n.charCodeAt(p + 5) & 255) << 8) |
        ((n.charCodeAt(p + 6) & 255) << 16) |
        ((n.charCodeAt(p + 7) & 255) << 24),
      (n.charCodeAt(p) & 255) |
        ((n.charCodeAt(p + 1) & 255) << 8) |
        ((n.charCodeAt(p + 2) & 255) << 16) |
        ((n.charCodeAt(p + 3) & 255) << 24),
    ]),
      (r = [
        (n.charCodeAt(p + 12) & 255) |
          ((n.charCodeAt(p + 13) & 255) << 8) |
          ((n.charCodeAt(p + 14) & 255) << 16) |
          ((n.charCodeAt(p + 15) & 255) << 24),
        (n.charCodeAt(p + 8) & 255) |
          ((n.charCodeAt(p + 9) & 255) << 8) |
          ((n.charCodeAt(p + 10) & 255) << 16) |
          ((n.charCodeAt(p + 11) & 255) << 24),
      ]),
      (e = C(e, D)),
      (e = u(e, 31)),
      (e = C(e, F)),
      (a = c(a, e)),
      (a = u(a, 27)),
      (a = E(a, o)),
      (a = E(C(a, [0, 5]), [0, 1390208809])),
      (r = C(r, F)),
      (r = u(r, 33)),
      (r = C(r, D)),
      (o = c(o, r)),
      (o = u(o, 31)),
      (o = E(o, a)),
      (o = E(C(o, [0, 5]), [0, 944331445]));
  switch (((e = [0, 0]), (r = [0, 0]), s)) {
    case 15:
      r = c(r, l([0, n.charCodeAt(p + 14)], 48));
    case 14:
      r = c(r, l([0, n.charCodeAt(p + 13)], 40));
    case 13:
      r = c(r, l([0, n.charCodeAt(p + 12)], 32));
    case 12:
      r = c(r, l([0, n.charCodeAt(p + 11)], 24));
    case 11:
      r = c(r, l([0, n.charCodeAt(p + 10)], 16));
    case 10:
      r = c(r, l([0, n.charCodeAt(p + 9)], 8));
    case 9:
      (r = c(r, [0, n.charCodeAt(p + 8)])), (r = C(r, F)), (r = u(r, 33)), (r = C(r, D)), (o = c(o, r));
    case 8:
      e = c(e, l([0, n.charCodeAt(p + 7)], 56));
    case 7:
      e = c(e, l([0, n.charCodeAt(p + 6)], 48));
    case 6:
      e = c(e, l([0, n.charCodeAt(p + 5)], 40));
    case 5:
      e = c(e, l([0, n.charCodeAt(p + 4)], 32));
    case 4:
      e = c(e, l([0, n.charCodeAt(p + 3)], 24));
    case 3:
      e = c(e, l([0, n.charCodeAt(p + 2)], 16));
    case 2:
      e = c(e, l([0, n.charCodeAt(p + 1)], 8));
    case 1:
      (e = c(e, [0, n.charCodeAt(p)])), (e = C(e, D)), (e = u(e, 31)), (e = C(e, F)), (a = c(a, e));
  }
  return (
    (a = c(a, [0, n.length])),
    (o = c(o, [0, n.length])),
    (a = E(a, o)),
    (o = E(o, a)),
    (a = _(a)),
    (o = _(o)),
    (a = E(a, o)),
    (o = E(o, a)),
    ('00000000' + (a[0] >>> 0).toString(16)).slice(-8) +
      ('00000000' + (a[1] >>> 0).toString(16)).slice(-8) +
      ('00000000' + (o[0] >>> 0).toString(16)).slice(-8) +
      ('00000000' + (o[1] >>> 0).toString(16)).slice(-8)
  );
}
function x() {
  return navigator.userAgent;
}
function O() {
  return navigator.deviceMemory;
}
function j() {
  return navigator.languages;
}
function P() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}
function R() {
  return navigator.hardwareConcurrency;
}
function $() {
  const n = navigator.plugins;
  if (!n) return;
  const t = [];
  for (let s = 0; s < n.length; ++s) {
    const i = n[s];
    if (!i) continue;
    const a = [];
    for (let o = 0; o < i.length; ++o) {
      const e = i[o];
      a.push({ type: e.type, suffixes: e.suffixes });
    }
    t.push({ name: i.name, description: i.description, mimeTypes: a });
  }
  return t;
}
const G = { userAgent: x, deviceMemory: O, languages: j, timezone: P, hardwareConcurrency: R, plugins: $ },
  V = G;
function L() {
  const n = document.createElement('canvas'),
    t = n.getContext('2d');
  return (
    (n.width = 200),
    (n.height = 60),
    t &&
      ((t.fillStyle = 'rgba(100, 100, 100, 0.5)'),
      t.fillRect(0, 0, 200, 60),
      (t.font = '18pt Arial'),
      (t.fillStyle = 'rgb(50, 50, 50)'),
      t.fillText(x(), 0, 0),
      (t.strokeStyle = 'rgb(120, 120, 120)'),
      (t.lineWidth = 2),
      t.beginPath(),
      t.moveTo(10, 40),
      t.lineTo(190, 40),
      t.stroke()),
    n.toDataURL()
  );
}
function W() {
  const n = document.createElement('canvas'),
    t = n.getContext('webgl') || n.getContext('experimental-webgl');
  let s = '',
    i = '',
    a = '';
  if (t) {
    const e = t.getExtension('WEBGL_debug_renderer_info');
    if (e) {
      (s = t.getParameter(e.UNMASKED_RENDERER_WEBGL)), (i = t.getParameter(e.UNMASKED_VENDOR_WEBGL));
      const r = t.getSupportedExtensions();
      r && (a = r.join(';'));
    }
  }
  return { renderer: s, vendor: i, extensions: a };
}
const z = { canvas: L, webGl: W },
  H = z;
function J() {
  const n = window.screen;
  return { width: n.width, height: n.height, colorDepth: n.colorDepth, pixelDepth: n.pixelDepth };
}
function q() {
  try {
    return !!window.sessionStorage;
  } catch {
    return !0;
  }
}
function U() {
  try {
    return !!window.localStorage;
  } catch {
    return !0;
  }
}
function K() {
  const n = document;
  try {
    n.cookie = 'cookietest=1; SameSite=Strict;';
    const t = n.cookie.indexOf('cookietest=') !== -1;
    return (n.cookie = 'cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT'), t;
  } catch {
    return !1;
  }
}
function X() {
  try {
    return !!window.indexedDB;
  } catch {
    return !0;
  }
}
function Z() {
  return new Promise((n) => {
    const t = window.OfflineAudioContext || window.webkitOfflineAudioContext,
      s = new t(1, 5e3, 44100),
      i = s.createOscillator();
    (i.type = 'triangle'), (i.frequency.value = 1e3);
    const a = s.createDynamicsCompressor();
    (a.threshold.value = -50),
      (a.knee.value = 40),
      (a.ratio.value = 12),
      (a.attack.value = 0),
      (a.release.value = 0.2),
      i.connect(a),
      a.connect(s.destination),
      i.start(),
      (s.oncomplete = (o) => {
        const e = o.renderedBuffer.getChannelData(0);
        n(Q(e));
      }),
      s.startRendering();
  });
}
function Q(n) {
  let t = 0;
  for (let s = 0; s < n.length; ++s) t += Math.abs(n[s]);
  return t;
}
const Y = { screen: J, sessionStorage: q, localStorage: U, cookies: K, indexedDB: X, audio: Z },
  n2 = Y,
  y = { ...V, ...H, ...n2 };
async function S() {
  const n = {};
  for (const t in y) {
    const s = t;
    n[s] = await y[s]();
  }
  return n;
}
async function t2(n = {}) {
  return M(s2(await S(), n));
}
function s2(n, t = {}) {
  let s = '';
  for (const i of Object.keys(n).sort()) {
    const a = i;
    if (t[a] || t[a] === void 0) {
      const o = n[a],
        e = JSON.stringify(o);
      s += `${s ? '|' : ''}${a}:${e}`;
    }
  }
  return s;
}
const a2 = { class: 'info' },
  e2 = B({
    __name: 'getAllFingerprintInfo',
    setup(n) {
      const t = m(null);
      return (
        v(async () => {
          t.value = await S();
        }),
        (s, i) => (g(), k('div', a2, [d('pre', null, b(JSON.stringify(t.value, null, 2)) + ' ', 1)]))
      );
    },
  });
const o2 = T(e2, [['__scopeId', 'data-v-0f96ec5f']]),
  p2 = Object.freeze(Object.defineProperty({ __proto__: null, default: o2 }, Symbol.toStringTag, { value: 'Module' })),
  r2 = B({
    __name: 'getFingerprintId',
    setup(n) {
      const t = m('');
      return (
        v(async () => {
          t.value = await t2();
        }),
        (s, i) => (g(), k('div', null, b(t.value), 1))
      );
    },
  }),
  c2 = Object.freeze(Object.defineProperty({ __proto__: null, default: r2 }, Symbol.toStringTag, { value: 'Module' })),
  i2 = d(
    'h1',
    { id: '浏览器指纹', tabindex: '-1' },
    [w('浏览器指纹 '), d('a', { class: 'header-anchor', href: '#浏览器指纹', 'aria-hidden': 'true' }, '#')],
    -1,
  ),
  l2 = d(
    'p',
    null,
    '通过浏览器信息生成指纹ID，这种方式生成出来的指纹唯一性不高，可能达到50%~60%，最好的方式还是通过后端生成，这里同时也提供了获取需要生成指纹ID的浏览器信息',
    -1,
  ),
  C2 = d(
    'h2',
    { id: 'getfingerprintid', tabindex: '-1' },
    [w('getFingerprintId '), d('a', { class: 'header-anchor', href: '#getfingerprintid', 'aria-hidden': 'true' }, '#')],
    -1,
  ),
  E2 = d('p', null, 'fingerprint/getFingerprintId', -1),
  d2 = I(
    `<details class="details custom-block"><summary>示例代码</summary><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">getFingerprintId</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@jsxiaosi/utils</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">getFingerprintId</span><span style="color:#A6ACCD;">(options) </span><span style="color:#676E95;font-style:italic;">// Promise&lt;string&gt;</span></span>
<span class="line"></span></code></pre></div></details><p>参数:</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>options</td><td>控制属性作为浏览器指纹的一部分</td><td>FingerprintOptionFlags</td><td></td></tr></tbody></table><p>FingerprintOptionFlags:</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>userAgent</td><td>使用用户代理数据作为浏览器指纹</td><td>boolean</td></tr><tr><td>deviceMemory</td><td>使用设备内存大小作为浏览器指纹</td><td>boolean</td></tr><tr><td>languages</td><td>使用浏览器语言列表作为浏览器指纹</td><td>boolean</td></tr><tr><td>timezone</td><td>使用设备的时区设置作为浏览器指纹</td><td>boolean</td></tr><tr><td>hardwareConcurrency</td><td>使用设备的核心数量作为浏览器指纹</td><td>boolean</td></tr><tr><td>plugins</td><td>使用浏览器插件信息作为浏览器指纹</td><td>boolean</td></tr><tr><td>canvas</td><td>使用Canvas图形绘制的结果作为浏览器指纹</td><td>boolean</td></tr><tr><td>webGl</td><td>使用图形渲染信息作为浏览器指纹</td><td>boolean</td></tr><tr><td>screen</td><td>使用屏幕尺寸和颜色深度作为浏览器指纹</td><td>boolean</td></tr><tr><td>sessionStorage</td><td>使用sessionStorage可用性作为浏览器指纹</td><td>boolean</td></tr><tr><td>localStorage</td><td>使用localStorage可用性作为浏览器指纹</td><td>boolean</td></tr><tr><td>cookies</td><td>使用cookies可用性作为浏览器指纹</td><td>boolean</td></tr><tr><td>indexedDB</td><td>使用IndexedDB可用性作为浏览器指纹</td><td>boolean</td></tr><tr><td>audio</td><td>使用音频ID作为浏览器指纹</td><td>boolean</td></tr></tbody></table><p>返回类型：<code>Promise&lt;string&gt;</code></p><h2 id="getallfingerprintinfo" tabindex="-1">getAllFingerprintInfo <a class="header-anchor" href="#getallfingerprintinfo" aria-hidden="true">#</a></h2>`,
    7,
  ),
  u2 = d('p', null, 'fingerprint/getAllFingerprintInfo', -1),
  D2 = I(
    `<details class="details custom-block"><summary>示例代码</summary><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">getAllFingerprintInfo</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@jsxiaosi/utils</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">getAllFingerprintInfo</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// Promise&lt;FingerprintInfo&gt;</span></span>
<span class="line"></span></code></pre></div></details><p>返回类型：<code>Promise&lt;FingerprintInfo&gt;</code></p><p>FingerprintInfo:</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>userAgent</td><td>用户代理数据指纹信息</td><td>string</td></tr><tr><td>deviceMemory</td><td>设备内存大小指纹信息</td><td>number</td></tr><tr><td>languages</td><td>浏览器语言列表指纹信息</td><td>string[]</td></tr><tr><td>timezone</td><td>设备的时区设置指纹信息</td><td>string</td></tr><tr><td>hardwareConcurrency</td><td>设备的核心数量指纹信息</td><td>number</td></tr><tr><td>plugins</td><td>浏览器插件信息指纹信息</td><td>PluginData[]</td></tr><tr><td>canvas</td><td>Canvas图形绘制的结果指纹信息</td><td>string</td></tr><tr><td>webGl</td><td>图形渲染信息指纹信息</td><td>WebGl</td></tr><tr><td>screen</td><td>屏幕尺寸和颜色深度指纹信息</td><td>Screen</td></tr><tr><td>sessionStorage</td><td>sessionStorage可用性指纹信息</td><td>boolean</td></tr><tr><td>localStorage</td><td>localStorage可用性指纹信息</td><td>boolean</td></tr><tr><td>cookies</td><td>cookies可用性指纹信息</td><td>boolean</td></tr><tr><td>indexedDB</td><td>IndexedDB可用性指纹信息</td><td>boolean</td></tr><tr><td>audio</td><td>音频ID指纹信息</td><td>number</td></tr></tbody></table>`,
    4,
  ),
  k2 = JSON.parse(
    '{"title":"浏览器指纹","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"getFingerprintId","slug":"getfingerprintid","link":"#getfingerprintid","children":[]},{"level":2,"title":"getAllFingerprintInfo","slug":"getallfingerprintinfo","link":"#getallfingerprintinfo","children":[]}],"relativePath":"guide/function/fingerprint.md","lastUpdated":1684164236000}',
  ),
  F2 = { name: 'guide/function/fingerprint.md' },
  f2 = Object.assign(F2, {
    setup(n) {
      const t = Object.assign({
          '../../example/fingerprint/getAllFingerprintInfo.vue': p2,
          '../../example/fingerprint/getFingerprintId.vue': c2,
        }),
        s = '../../example/fingerprint/*.vue';
      return (i, a) => {
        const o = N('Demo');
        return (
          g(),
          k('div', null, [
            i2,
            l2,
            C2,
            f(
              o,
              {
                demos: h(t),
                source:
                  "%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20getFingerprintId%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%40jsxiaosi%2Futils'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20onMounted%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20ref%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20fingerprintId%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20ref%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3Estring%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E''%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20function%22%3EonMounted%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20keyword%22%3Easync%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20fingerprintId%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evalue%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Eawait%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3EgetFingerprintId%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%7B%7B%20fingerprintId%20%7D%7D%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",
                path: s,
                pathName: 'fingerprint/getFingerprintId',
                'raw-source':
                  "%3Cscript%20setup%20lang%3D%22ts%22%3E%0A%20%20import%20%7B%20getFingerprintId%20%7D%20from%20'%40jsxiaosi%2Futils'%3B%0A%20%20import%20%7B%20onMounted%2C%20ref%20%7D%20from%20'vue'%3B%0A%0A%20%20const%20fingerprintId%20%3D%20ref%3Cstring%3E('')%3B%0A%20%20onMounted(async%20()%20%3D%3E%20%7B%0A%20%20%20%20fingerprintId.value%20%3D%20await%20getFingerprintId()%3B%0A%20%20%7D)%3B%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cdiv%3E%7B%7B%20fingerprintId%20%7D%7D%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A",
                description: '%3Cp%3E%E8%8E%B7%E5%8F%96%E6%B5%8F%E8%A7%88%E5%99%A8%E6%8C%87%E7%BA%B9ID%3C%2Fp%3E%0A',
              },
              { default: A(() => [E2]), _: 1 },
              8,
              ['demos'],
            ),
            d2,
            f(
              o,
              {
                demos: h(t),
                source:
                  "%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20type%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20FingerprintInfo%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%40jsxiaosi%2Futils'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20getAllFingerprintInfo%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%40jsxiaosi%2Futils'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20onMounted%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20ref%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20fingerprintInfo%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20ref%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3EFingerprintInfo%20%3Cspan%20class%3D%22token%20operator%22%3E%7C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Enull%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20keyword%22%3Enull%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20function%22%3EonMounted%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20keyword%22%3Easync%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20fingerprintInfo%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evalue%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Eawait%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3EgetAllFingerprintInfo%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Einfo%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Epre%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%7B%7B%20JSON.stringify(fingerprintInfo%2C%20null%2C%202)%20%7D%7D%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Epre%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Estyle%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Escss%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Escoped%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20style%22%3E%3Cspan%20class%3D%22token%20language-css%22%3E%0A%20%20%3Cspan%20class%3D%22token%20selector%22%3E.info%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20property%22%3Ewidth%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20100%25%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20selector%22%3Epre%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20property%22%3Emax-width%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20100%25%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20property%22%3Ewhite-space%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20pre-wrap%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20property%22%3Eword-break%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20break-all%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",
                path: s,
                pathName: 'fingerprint/getAllFingerprintInfo',
                'raw-source':
                  "%3Cscript%20setup%20lang%3D%22ts%22%3E%0A%20%20import%20type%20%7B%20FingerprintInfo%20%7D%20from%20'%40jsxiaosi%2Futils'%3B%0A%20%20import%20%7B%20getAllFingerprintInfo%20%7D%20from%20'%40jsxiaosi%2Futils'%3B%0A%20%20import%20%7B%20onMounted%2C%20ref%20%7D%20from%20'vue'%3B%0A%0A%20%20const%20fingerprintInfo%20%3D%20ref%3CFingerprintInfo%20%7C%20null%3E(null)%3B%0A%20%20onMounted(async%20()%20%3D%3E%20%7B%0A%20%20%20%20fingerprintInfo.value%20%3D%20await%20getAllFingerprintInfo()%3B%0A%20%20%7D)%3B%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22info%22%3E%0A%20%20%20%20%3Cpre%3E%7B%7B%20JSON.stringify(fingerprintInfo%2C%20null%2C%202)%20%7D%7D%20%3C%2Fpre%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cstyle%20lang%3D%22scss%22%20scoped%3E%0A%20%20.info%20%7B%0A%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20pre%20%7B%0A%20%20%20%20%20%20max-width%3A%20100%25%3B%0A%20%20%20%20%20%20white-space%3A%20pre-wrap%3B%0A%20%20%20%20%20%20word-break%3A%20break-all%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%3C%2Fstyle%3E%0A",
                description:
                  '%3Cp%3E%E8%8E%B7%E5%8F%96%E6%B5%8F%E8%A7%88%E5%99%A8%E6%8C%87%E7%BA%B9%E4%BF%A1%E6%81%AF%3C%2Fp%3E%0A',
              },
              { default: A(() => [u2]), _: 1 },
              8,
              ['demos'],
            ),
            D2,
          ])
        );
      };
    },
  });
export { k2 as __pageData, f2 as default };
