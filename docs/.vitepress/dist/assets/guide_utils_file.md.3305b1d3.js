import {
  k as o2,
  d as T,
  a as m,
  o as _,
  g as v,
  e as y,
  w as b,
  f,
  r as W,
  _ as H,
  u as x,
  b as g,
  h as j,
} from './app.c381dac2.js';
var G = {},
  e2 = {
    get exports() {
      return G;
    },
    set exports(u) {
      G = u;
    },
  },
  M = {},
  p2 = {
    get exports() {
      return M;
    },
    set exports(u) {
      M = u;
    },
  };
(function (u, C) {
  (function (i, c) {
    u.exports = c();
  })(o2, function () {
    return (function (i) {
      var c = {};
      function e(a) {
        if (c[a]) return c[a].exports;
        var p = (c[a] = { i: a, l: !1, exports: {} });
        return i[a].call(p.exports, p, p.exports, e), (p.l = !0), p.exports;
      }
      return (
        (e.m = i),
        (e.c = c),
        (e.d = function (a, p, A) {
          e.o(a, p) || Object.defineProperty(a, p, { enumerable: !0, get: A });
        }),
        (e.r = function (a) {
          typeof Symbol < 'u' &&
            Symbol.toStringTag &&
            Object.defineProperty(a, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(a, '__esModule', { value: !0 });
        }),
        (e.t = function (a, p) {
          if ((1 & p && (a = e(a)), 8 & p || (4 & p && typeof a == 'object' && a && a.__esModule))) return a;
          var A = Object.create(null);
          if (
            (e.r(A), Object.defineProperty(A, 'default', { enumerable: !0, value: a }), 2 & p && typeof a != 'string')
          )
            for (var B in a)
              e.d(
                A,
                B,
                function (P) {
                  return a[P];
                }.bind(null, B),
              );
          return A;
        }),
        (e.n = function (a) {
          var p =
            a && a.__esModule
              ? function () {
                  return a.default;
                }
              : function () {
                  return a;
                };
          return e.d(p, 'a', p), p;
        }),
        (e.o = function (a, p) {
          return Object.prototype.hasOwnProperty.call(a, p);
        }),
        (e.p = ''),
        e((e.s = 0))
      );
    })([
      function (i, c, e) {
        var a;
        function p(o) {
          return ['image/png', 'image/jpeg', 'image/gif'].some((n) => n === o);
        }
        e.r(c),
          e.d(c, 'canvastoDataURL', function () {
            return B;
          }),
          e.d(c, 'canvastoFile', function () {
            return P;
          }),
          e.d(c, 'dataURLtoFile', function () {
            return S;
          }),
          e.d(c, 'dataURLtoImage', function () {
            return U;
          }),
          e.d(c, 'downloadFile', function () {
            return X;
          }),
          e.d(c, 'filetoDataURL', function () {
            return O;
          }),
          e.d(c, 'imagetoCanvas', function () {
            return R;
          }),
          e.d(c, 'urltoBlob', function () {
            return Z;
          }),
          e.d(c, 'urltoImage', function () {
            return s2;
          }),
          e.d(c, 'compress', function () {
            return a2;
          }),
          e.d(c, 'compressAccurately', function () {
            return n2;
          }),
          e.d(c, 'EImageType', function () {
            return a;
          }),
          (function (o) {
            (o.PNG = 'image/png'), (o.JPEG = 'image/jpeg'), (o.GIF = 'image/gif');
          })(a || (a = {}));
        var A = function (o, n, t, s) {
          return new (t || (t = Promise))(function (r, D) {
            function d(E) {
              try {
                k(s.next(E));
              } catch (l) {
                D(l);
              }
            }
            function F(E) {
              try {
                k(s.throw(E));
              } catch (l) {
                D(l);
              }
            }
            function k(E) {
              var l;
              E.done
                ? r(E.value)
                : ((l = E.value),
                  l instanceof t
                    ? l
                    : new t(function (h) {
                        h(l);
                      })).then(d, F);
            }
            k((s = s.apply(o, n || [])).next());
          });
        };
        function B(o, n = 0.92, t = a.JPEG) {
          return A(this, void 0, void 0, function* () {
            return p(t) || (t = a.JPEG), o.toDataURL(t, n);
          });
        }
        function P(o, n = 0.92, t = a.JPEG) {
          return new Promise((s) => o.toBlob((r) => s(r), t, n));
        }
        var Q = function (o, n, t, s) {
          return new (t || (t = Promise))(function (r, D) {
            function d(E) {
              try {
                k(s.next(E));
              } catch (l) {
                D(l);
              }
            }
            function F(E) {
              try {
                k(s.throw(E));
              } catch (l) {
                D(l);
              }
            }
            function k(E) {
              var l;
              E.done
                ? r(E.value)
                : ((l = E.value),
                  l instanceof t
                    ? l
                    : new t(function (h) {
                        h(l);
                      })).then(d, F);
            }
            k((s = s.apply(o, n || [])).next());
          });
        };
        function S(o, n) {
          return Q(this, void 0, void 0, function* () {
            const t = o.split(',');
            let s = t[0].match(/:(.*?);/)[1];
            const r = atob(t[1]);
            let D = r.length;
            const d = new Uint8Array(D);
            for (; D--; ) d[D] = r.charCodeAt(D);
            return p(n) && (s = n), new Blob([d], { type: s });
          });
        }
        function U(o) {
          return new Promise((n, t) => {
            const s = new Image();
            (s.onload = () => n(s)),
              (s.onerror = () => t(new Error('dataURLtoImage(): dataURL is illegal'))),
              (s.src = o);
          });
        }
        function X(o, n) {
          const t = document.createElement('a');
          (t.href = window.URL.createObjectURL(o)),
            (t.download = n || Date.now().toString(36)),
            document.body.appendChild(t);
          const s = document.createEvent('MouseEvents');
          s.initEvent('click', !1, !1), t.dispatchEvent(s), document.body.removeChild(t);
        }
        function O(o) {
          return new Promise((n) => {
            const t = new FileReader();
            (t.onloadend = (s) => n(s.target.result)), t.readAsDataURL(o);
          });
        }
        var Y = function (o, n, t, s) {
          return new (t || (t = Promise))(function (r, D) {
            function d(E) {
              try {
                k(s.next(E));
              } catch (l) {
                D(l);
              }
            }
            function F(E) {
              try {
                k(s.throw(E));
              } catch (l) {
                D(l);
              }
            }
            function k(E) {
              var l;
              E.done
                ? r(E.value)
                : ((l = E.value),
                  l instanceof t
                    ? l
                    : new t(function (h) {
                        h(l);
                      })).then(d, F);
            }
            k((s = s.apply(o, n || [])).next());
          });
        };
        function R(o, n = {}) {
          return Y(this, void 0, void 0, function* () {
            const t = Object.assign({}, n),
              s = document.createElement('canvas'),
              r = s.getContext('2d');
            let D, d;
            for (const F in t) Object.prototype.hasOwnProperty.call(t, F) && (t[F] = Number(t[F]));
            if (t.scale) {
              const F = t.scale > 0 && t.scale < 10 ? t.scale : 1;
              (d = o.width * F), (D = o.height * F);
            } else (d = t.width || (t.height * o.width) / o.height || o.width), (D = t.height || (t.width * o.height) / o.width || o.height);
            switch (
              ([5, 6, 7, 8].some((F) => F === t.orientation)
                ? ((s.height = d), (s.width = D))
                : ((s.height = D), (s.width = d)),
              t.orientation)
            ) {
              case 3:
                r.rotate((180 * Math.PI) / 180), r.drawImage(o, -s.width, -s.height, s.width, s.height);
                break;
              case 6:
                r.rotate((90 * Math.PI) / 180), r.drawImage(o, 0, -s.width, s.height, s.width);
                break;
              case 8:
                r.rotate((270 * Math.PI) / 180), r.drawImage(o, -s.height, 0, s.height, s.width);
                break;
              case 2:
                r.translate(s.width, 0), r.scale(-1, 1), r.drawImage(o, 0, 0, s.width, s.height);
                break;
              case 4:
                r.translate(s.width, 0),
                  r.scale(-1, 1),
                  r.rotate((180 * Math.PI) / 180),
                  r.drawImage(o, -s.width, -s.height, s.width, s.height);
                break;
              case 5:
                r.translate(s.width, 0),
                  r.scale(-1, 1),
                  r.rotate((90 * Math.PI) / 180),
                  r.drawImage(o, 0, -s.width, s.height, s.width);
                break;
              case 7:
                r.translate(s.width, 0),
                  r.scale(-1, 1),
                  r.rotate((270 * Math.PI) / 180),
                  r.drawImage(o, -s.height, 0, s.height, s.width);
                break;
              default:
                r.drawImage(o, 0, 0, s.width, s.height);
            }
            return s;
          });
        }
        function Z(o) {
          return fetch(o).then((n) => n.blob());
        }
        function s2(o) {
          return new Promise((n, t) => {
            const s = new Image();
            (s.onload = () => n(s)),
              (s.onerror = () => t(new Error('urltoImage(): Image failed to load, please check the image URL'))),
              (s.src = o);
          });
        }
        var V = function (o, n, t, s) {
          return new (t || (t = Promise))(function (r, D) {
            function d(E) {
              try {
                k(s.next(E));
              } catch (l) {
                D(l);
              }
            }
            function F(E) {
              try {
                k(s.throw(E));
              } catch (l) {
                D(l);
              }
            }
            function k(E) {
              var l;
              E.done
                ? r(E.value)
                : ((l = E.value),
                  l instanceof t
                    ? l
                    : new t(function (h) {
                        h(l);
                      })).then(d, F);
            }
            k((s = s.apply(o, n || [])).next());
          });
        };
        function a2(o, n = {}) {
          return V(this, void 0, void 0, function* () {
            if (!(o instanceof Blob)) throw new Error('compress(): First arg must be a Blob object or a File object.');
            if (
              (typeof n != 'object' && (n = Object.assign({ quality: n })),
              (n.quality = Number(n.quality)),
              Number.isNaN(n.quality))
            )
              return o;
            const t = yield O(o);
            let s = t.split(',')[0].match(/:(.*?);/)[1],
              r = a.JPEG;
            p(n.type) && ((r = n.type), (s = n.type));
            const D = yield U(t),
              d = yield R(D, Object.assign({}, n)),
              F = yield B(d, n.quality, r),
              k = yield S(F, s);
            return k.size > o.size ? o : k;
          });
        }
        function n2(o, n = {}) {
          return V(this, void 0, void 0, function* () {
            if (!(o instanceof Blob))
              throw new Error('compressAccurately(): First arg must be a Blob object or a File object.');
            if (
              (typeof n != 'object' && (n = Object.assign({ size: n })),
              (n.size = Number(n.size)),
              Number.isNaN(n.size) || 1024 * n.size > o.size)
            )
              return o;
            (n.accuracy = Number(n.accuracy)),
              (!n.accuracy || n.accuracy < 0.8 || n.accuracy > 0.99) && (n.accuracy = 0.95);
            const t = n.size * (2 - n.accuracy) * 1024,
              s = 1024 * n.size,
              r = n.size * n.accuracy * 1024,
              D = yield O(o);
            let d = D.split(',')[0].match(/:(.*?);/)[1],
              F = a.JPEG;
            p(n.type) && ((F = n.type), (d = n.type));
            const k = yield U(D),
              E = yield R(k, Object.assign({}, n));
            let l,
              h = 0.5;
            const q = [null, null];
            for (let w = 1; w <= 7; w++) {
              l = yield B(E, h, F);
              const I = 0.75 * l.length;
              if (w === 7) {
                (t < I || r > I) &&
                  (l = [l, ...q]
                    .filter((N) => N)
                    .sort((N, t2) => Math.abs(0.75 * N.length - s) - Math.abs(0.75 * t2.length - s))[0]);
                break;
              }
              if (t < I) (q[1] = l), (h -= Math.pow(0.5, w + 1));
              else {
                if (!(r > I)) break;
                (q[0] = l), (h += Math.pow(0.5, w + 1));
              }
            }
            const $ = yield S(l, d);
            return $.size > o.size ? o : $;
          });
        }
      },
    ]);
  });
})(p2);
(function (u) {
  u.exports = M;
})(e2);
function l2(u) {
  return new Promise(function (C) {
    const i = new FileReader();
    i.readAsDataURL(u),
      (i.onload = function () {
        C(this.result);
      });
  });
}
function c2(u) {
  let C;
  u.split(',')[0].indexOf('base64') >= 0
    ? (C = window.atob(u.split(',')[1]))
    : (C = decodeURIComponent(u.split(',')[1]));
  const i = u.split(',')[0].split(':')[1].split(';')[0],
    c = new Uint8Array(C.length);
  for (let a = 0; a < C.length; a++) c[a] = C.charCodeAt(a);
  return new Blob([c], { type: i });
}
function r2(u) {
  return l2(u);
}
function K(u, C) {
  return new Promise((i, c) => {
    const e = document.createElement('CANVAS'),
      a = e == null ? void 0 : e.getContext('2d'),
      p = new Image();
    (p.crossOrigin = 'Anonymous'),
      (p.onload = function () {
        if (!e || !a) return c();
        (e.height = p.height), (e.width = p.width), a.drawImage(p, 0, 0);
        const A = e.toDataURL(C || 'image/png', 0.7);
        console.log(A), i(A);
      }),
      (p.src = u);
  });
}
function C2(u, C, i) {
  K(u, i).then((c) => {
    z(c2(c), C);
  });
}
function J(u, C, i, c) {
  L(u, i).then(async (e) => {
    z(e, C, c);
  });
}
function L(u, C) {
  return new Promise((i, c) => {
    fetch(u, C).then((e) => {
      e.status === 200 ? i(e.blob()) : c();
    });
  });
}
function z(u, C, i) {
  const c = [u],
    e = new Blob(c, { type: i || 'application/octet-stream' }),
    a = window.URL.createObjectURL(e),
    p = document.createElement('a');
  (p.style.display = 'none'),
    (p.href = a),
    p.setAttribute('download', C),
    typeof p.download > 'u' && p.setAttribute('target', '_blank'),
    document.body.appendChild(p),
    p.click(),
    document.body.removeChild(p),
    window.URL.revokeObjectURL(a);
}
const i2 = { class: 'demos_content' },
  E2 = T({
    __name: 'downloadFile',
    setup(u) {
      const C = () => {
        L('https://supercutexiaosi.top/resource/account_url.png').then((i) => {
          z(i, 'account.png');
        });
      };
      return (i, c) => {
        const e = m('ElButton');
        return _(), v('div', i2, [y(e, { onClick: C }, { default: b(() => [f('保存文件到本地')]), _: 1 })]);
      };
    },
  }),
  u2 = Object.freeze(Object.defineProperty({ __proto__: null, default: E2 }, Symbol.toStringTag, { value: 'Module' })),
  D2 = T({
    __name: 'downloadUrlFile',
    setup(u) {
      const C = () => {
          J('https://supercutexiaosi.top/resource/develop_pdf.pdf', 'develop_pdf.pdf');
        },
        i = () => {
          J('https://supercutexiaosi.top/resource/develop_docx.docx', 'develop_docx.docx');
        };
      return (c, e) => {
        const a = m('ElButton');
        return (
          _(),
          v('div', null, [
            y(a, { onClick: C }, { default: b(() => [f('下载PDF')]), _: 1 }),
            y(a, { onClick: i }, { default: b(() => [f('下载Docx')]), _: 1 }),
          ])
        );
      };
    },
  }),
  F2 = Object.freeze(Object.defineProperty({ __proto__: null, default: D2 }, Symbol.toStringTag, { value: 'Module' })),
  d2 = T({
    __name: 'downloadUrlImage',
    setup(u) {
      const C = () => {
        C2('https://supercutexiaosi.top/resource/account_url.png', 'logo.png');
      };
      return (i, c) => {
        const e = m('ElButton');
        return _(), v('div', null, [y(e, { onClick: C }, { default: b(() => [f('下载图片')]), _: 1 })]);
      };
    },
  }),
  k2 = Object.freeze(Object.defineProperty({ __proto__: null, default: d2 }, Symbol.toStringTag, { value: 'Module' })),
  y2 = { class: 'demos_content' },
  A2 = T({
    __name: 'urlToBase64',
    setup(u) {
      const C = W(),
        i = async () => {
          C.value = await K('https://supercutexiaosi.top/resource/account_url.png');
        };
      return (c, e) => {
        const a = m('ElButton'),
          p = m('ElImage');
        return (
          _(),
          v('div', y2, [
            y(a, { onClick: i }, { default: b(() => [f('url图片转成base64')]), _: 1 }),
            y(p, { class: 'image', src: C.value }, null, 8, ['src']),
          ])
        );
      };
    },
  });
const h2 = H(A2, [['__scopeId', 'data-v-e4925a57']]),
  b2 = Object.freeze(Object.defineProperty({ __proto__: null, default: h2 }, Symbol.toStringTag, { value: 'Module' })),
  g2 = { class: 'demos_content' },
  m2 = T({
    __name: 'urlToBlob',
    setup(u) {
      const C = W(),
        i = () => {
          L('https://supercutexiaosi.top/resource/account_url.png').then((c) => {
            r2(c).then((e) => {
              C.value = e;
            });
          });
        };
      return (c, e) => {
        const a = m('ElButton'),
          p = m('ElImage');
        return (
          _(),
          v('div', g2, [
            y(a, { onClick: i }, { default: b(() => [f('url转Blob')]), _: 1 }),
            y(p, { class: 'image', src: C.value }, null, 8, ['src']),
          ])
        );
      };
    },
  });
const f2 = H(m2, [['__scopeId', 'data-v-d2ac2dc6']]),
  B2 = Object.freeze(Object.defineProperty({ __proto__: null, default: f2 }, Symbol.toStringTag, { value: 'Module' })),
  _2 = g(
    'h1',
    { id: '文件流转换', tabindex: '-1' },
    [f('文件流转换 '), g('a', { class: 'header-anchor', href: '#文件流转换', 'aria-hidden': 'true' }, '#')],
    -1,
  ),
  v2 = g(
    'h2',
    { id: '下载图片', tabindex: '-1' },
    [f('下载图片 '), g('a', { class: 'header-anchor', href: '#下载图片', 'aria-hidden': 'true' }, '#')],
    -1,
  ),
  w2 = g('p', null, 'file/downloadUrlImage', -1),
  x2 = j(
    `<details class="details custom-block"><summary>示例代码</summary><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">downloadImage</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@jsxiaosi/utils</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">downloadImage</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://supercutexiaosi.top/resource/account_url.png</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">logo.png</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div></details><p>参数:</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>url</td><td>图片地址</td><td>string</td><td></td></tr><tr><td>fileName</td><td>保存文件的名称</td><td>string</td><td></td></tr><tr><td>fileType</td><td>保存图片的类型</td><td>string</td><td>image/png</td></tr></tbody></table><h2 id="下载文件" tabindex="-1">下载文件 <a class="header-anchor" href="#下载文件" aria-hidden="true">#</a></h2>`,
    4,
  ),
  T2 = g('p', null, 'file/downloadUrlFile', -1),
  j2 = j(
    `<details class="details custom-block"><summary>示例代码</summary><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">downloadUrlFile</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@jsxiaosi/utils</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">downloadUrlFile</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://supercutexiaosi.top/resource/develop_pdf.pdf</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">develop_pdf.pdf</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div></details><p>参数:</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>url</td><td>下载文件地址</td><td>string</td><td></td></tr><tr><td>fileName</td><td>保存文件的名称</td><td>string</td><td></td></tr><tr><td>requestOption</td><td>发送请求参数</td><td><a href="https://developer.mozilla.org/en-US/docs/Web/API/Request/body" target="_blank" rel="noreferrer">RequestInit</a></td><td></td></tr><tr><td>fileType</td><td>blob中的数组内容的MIME类型</td><td>BlobPropertyBag[&#39;type&#39;]</td><td>application/octet-stream</td></tr></tbody></table><h2 id="url图片转成base64" tabindex="-1">url图片转成base64 <a class="header-anchor" href="#url图片转成base64" aria-hidden="true">#</a></h2>`,
    4,
  ),
  I2 = g('p', null, 'file/urlToBase64', -1),
  P2 = j(
    `<details class="details custom-block"><summary>示例代码</summary><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">urlToBase64</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@jsxiaosi/utils</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> base64 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">urlToBase64</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://supercutexiaosi.top/resource/account_url.png</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div></details><p>参数:</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>url</td><td>图片地址</td><td>string</td><td></td></tr><tr><td>fileType</td><td>图片的类型</td><td>string</td><td>image/png</td></tr></tbody></table><h2 id="url转blob" tabindex="-1">url转Blob <a class="header-anchor" href="#url转blob" aria-hidden="true">#</a></h2>`,
    4,
  ),
  S2 = g('p', null, 'file/urlToBlob', -1),
  U2 = j(
    `<details class="details custom-block"><summary>示例代码</summary><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">urlToBlob</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@jsxiaosi/utils</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> blob </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">urlToBlob</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://supercutexiaosi.top/resource/account_url.png</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div></details><p>参数:</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>url</td><td>图片地址</td><td>string</td><td></td></tr><tr><td>requestOption</td><td>发送请求参数</td><td><a href="https://developer.mozilla.org/en-US/docs/Web/API/Request/body" target="_blank" rel="noreferrer">RequestInit</a></td><td></td></tr></tbody></table><h2 id="保存文件到本地" tabindex="-1">保存文件到本地 <a class="header-anchor" href="#保存文件到本地" aria-hidden="true">#</a></h2>`,
    4,
  ),
  O2 = g('p', null, 'file/downloadFile', -1),
  R2 = j(
    `<details class="details custom-block"><summary>示例代码</summary><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">downloadFile</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@jsxiaosi/utils</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">downloadFile</span><span style="color:#A6ACCD;">(data</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">account.png</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div></details><p>参数:</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>data</td><td>blob对象</td><td>Blob</td><td></td></tr><tr><td>fileName</td><td>保存文件的名称</td><td>string</td><td></td></tr><tr><td>fileType</td><td>blob中的数组内容的MIME类型</td><td>BlobPropertyBag[&#39;type&#39;]</td><td>application/octet-stream</td></tr></tbody></table><h2 id="file转化为base64" tabindex="-1">File转化为Base64 <a class="header-anchor" href="#file转化为base64" aria-hidden="true">#</a></h2><details class="details custom-block"><summary>示例代码</summary><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">fileToBase64</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@jsxiaosi/utils</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fileToBase64</span><span style="color:#A6ACCD;">(file)</span></span>
<span class="line"></span></code></pre></div></details><p>参数:</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>file</td><td>file对象</td><td>File</td><td></td></tr></tbody></table><p>返回类型： <code>Promise&lt;string&gt;</code> 一个base64字符串</p><h2 id="file转化为二进制字符串" tabindex="-1">File转化为二进制字符串 <a class="header-anchor" href="#file转化为二进制字符串" aria-hidden="true">#</a></h2><details class="details custom-block"><summary>示例代码</summary><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">fileToBinaryString</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@jsxiaosi/utils</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fileToBinaryString</span><span style="color:#A6ACCD;">(file)</span></span>
<span class="line"></span></code></pre></div></details><p>参数:</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>file</td><td>file对象</td><td>File</td><td></td></tr></tbody></table><p>返回类型： <code>Promise&lt;string&gt;</code> 一个二进制字符串</p><h2 id="file转化为二进制数组" tabindex="-1">File转化为二进制数组 <a class="header-anchor" href="#file转化为二进制数组" aria-hidden="true">#</a></h2><details class="details custom-block"><summary>示例代码</summary><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">fileToArrayBuffer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@jsxiaosi/utils</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fileToArrayBuffer</span><span style="color:#A6ACCD;">(file)</span></span>
<span class="line"></span></code></pre></div></details><p>参数:</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>file</td><td>file对象</td><td>File</td><td></td></tr></tbody></table><p>返回类型： <code>Promise&lt;ArrayBuffer&gt;</code> 一个二进制数组</p><h2 id="base64转化为blob流" tabindex="-1">Base64转化为Blob流 <a class="header-anchor" href="#base64转化为blob流" aria-hidden="true">#</a></h2><details class="details custom-block"><summary>示例代码</summary><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">base64ToBlob</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@jsxiaosi/utils</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">base64ToBlob</span><span style="color:#A6ACCD;">(base64Data)</span></span>
<span class="line"></span></code></pre></div></details><p>参数:</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>base64Data</td><td>base64字符串</td><td>string</td><td></td></tr></tbody></table><p>返回类型： <code>Blob</code></p><h2 id="base64转化为file" tabindex="-1">Base64转化为File <a class="header-anchor" href="#base64转化为file" aria-hidden="true">#</a></h2><details class="details custom-block"><summary>示例代码</summary><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">base64ToBlob</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@jsxiaosi/utils</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">base64ToBlob</span><span style="color:#A6ACCD;">(base64Data)</span></span>
<span class="line"></span></code></pre></div></details><p>参数:</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>base64Data</td><td>base64字符串</td><td>string</td><td></td></tr></tbody></table><p>返回类型： <code>File</code></p><h2 id="blob流转化为base64" tabindex="-1">Blob流转化为Base64 <a class="header-anchor" href="#blob流转化为base64" aria-hidden="true">#</a></h2><details class="details custom-block"><summary>示例代码</summary><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">blobToBase64</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@jsxiaosi/utils</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">blobToBase64</span><span style="color:#A6ACCD;">(blob)</span></span>
<span class="line"></span></code></pre></div></details><p>参数:</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>blob</td><td>blob对象</td><td>Blob</td><td></td></tr></tbody></table><p>返回类型： <code>Promise&lt;string&gt;</code></p><h2 id="blob流转化为file" tabindex="-1">Blob流转化为File <a class="header-anchor" href="#blob流转化为file" aria-hidden="true">#</a></h2><details class="details custom-block"><summary>示例代码</summary><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">blobToFile</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@jsxiaosi/utils</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">blobToFile</span><span style="color:#A6ACCD;">(blob)</span></span>
<span class="line"></span></code></pre></div></details><p>参数:</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>blob</td><td>blob对象</td><td>Blob</td><td></td></tr></tbody></table><p>返回类型： <code>File</code></p><h2 id="二进制字符串转化为blob" tabindex="-1">二进制字符串转化为Blob <a class="header-anchor" href="#二进制字符串转化为blob" aria-hidden="true">#</a></h2><details class="details custom-block"><summary>示例代码</summary><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">binaryStringToBlob</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@jsxiaosi/utils</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">binaryStringToBlob</span><span style="color:#A6ACCD;">(binaryString)</span></span>
<span class="line"></span></code></pre></div></details><p>参数:</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>binaryString</td><td>二进制字符串</td><td>string</td><td></td></tr></tbody></table><p>返回类型： <code>Blob</code></p><h2 id="二进制数组转化为blob" tabindex="-1">二进制数组转化为Blob <a class="header-anchor" href="#二进制数组转化为blob" aria-hidden="true">#</a></h2><details class="details custom-block"><summary>示例代码</summary><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arrayBufferToBlob</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@jsxiaosi/utils</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">arrayBufferToBlob</span><span style="color:#A6ACCD;">(arrayBuffer)</span></span>
<span class="line"></span></code></pre></div></details><p>参数:</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>arrayBuffer</td><td>二进制数组</td><td>ArrayBuffer</td><td></td></tr></tbody></table><p>返回类型： <code>Blob</code></p>`,
    48,
  ),
  M2 = JSON.parse(
    '{"title":"文件流转换","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"下载图片","slug":"下载图片","link":"#下载图片","children":[]},{"level":2,"title":"下载文件","slug":"下载文件","link":"#下载文件","children":[]},{"level":2,"title":"url图片转成base64","slug":"url图片转成base64","link":"#url图片转成base64","children":[]},{"level":2,"title":"url转Blob","slug":"url转blob","link":"#url转blob","children":[]},{"level":2,"title":"保存文件到本地","slug":"保存文件到本地","link":"#保存文件到本地","children":[]},{"level":2,"title":"File转化为Base64","slug":"file转化为base64","link":"#file转化为base64","children":[]},{"level":2,"title":"File转化为二进制字符串","slug":"file转化为二进制字符串","link":"#file转化为二进制字符串","children":[]},{"level":2,"title":"File转化为二进制数组","slug":"file转化为二进制数组","link":"#file转化为二进制数组","children":[]},{"level":2,"title":"Base64转化为Blob流","slug":"base64转化为blob流","link":"#base64转化为blob流","children":[]},{"level":2,"title":"Base64转化为File","slug":"base64转化为file","link":"#base64转化为file","children":[]},{"level":2,"title":"Blob流转化为Base64","slug":"blob流转化为base64","link":"#blob流转化为base64","children":[]},{"level":2,"title":"Blob流转化为File","slug":"blob流转化为file","link":"#blob流转化为file","children":[]},{"level":2,"title":"二进制字符串转化为Blob","slug":"二进制字符串转化为blob","link":"#二进制字符串转化为blob","children":[]},{"level":2,"title":"二进制数组转化为Blob","slug":"二进制数组转化为blob","link":"#二进制数组转化为blob","children":[]}],"relativePath":"guide/utils/file.md","lastUpdated":1680448147000}',
  ),
  q2 = { name: 'guide/utils/file.md' },
  L2 = Object.assign(q2, {
    setup(u) {
      const C = Object.assign({
          '../../example/file/downloadFile.vue': u2,
          '../../example/file/downloadUrlFile.vue': F2,
          '../../example/file/downloadUrlImage.vue': k2,
          '../../example/file/urlToBase64.vue': b2,
          '../../example/file/urlToBlob.vue': B2,
        }),
        i = '../../example/file/*.vue';
      return (c, e) => {
        const a = m('Demo');
        return (
          _(),
          v('div', null, [
            _2,
            v2,
            y(
              a,
              {
                demos: x(C),
                source:
                  "%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20downloadImage%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%40jsxiaosi%2Futils'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3EdownloadChange%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20function%22%3EdownloadImage%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'https%3A%2F%2Fsupercutexiaosi.top%2Fresource%2Faccount_url.png'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'logo.png'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EElButton%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EdownloadChange%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E4%B8%8B%E8%BD%BD%E5%9B%BE%E7%89%87%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3EElButton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",
                path: i,
                pathName: 'file/downloadUrlImage',
                'raw-source':
                  "%3Cscript%20setup%20lang%3D%22ts%22%3E%0A%20%20import%20%7B%20downloadImage%20%7D%20from%20'%40jsxiaosi%2Futils'%3B%0A%0A%20%20const%20downloadChange%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20downloadImage('https%3A%2F%2Fsupercutexiaosi.top%2Fresource%2Faccount_url.png'%2C%20'logo.png')%3B%0A%20%20%7D%3B%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3CElButton%20%40click%3D%22downloadChange%22%3E%E4%B8%8B%E8%BD%BD%E5%9B%BE%E7%89%87%3C%2FElButton%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A",
                description:
                  '%3Cp%3E%E9%80%9A%E8%BF%87%E5%9B%BE%E7%89%87%E5%9C%B0%E5%9D%80%E4%B8%8B%E8%BD%BD%E5%9B%BE%E7%89%87%3C%2Fp%3E%0A',
              },
              { default: b(() => [w2]), _: 1 },
              8,
              ['demos'],
            ),
            x2,
            y(
              a,
              {
                demos: x(C),
                source:
                  "%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20downloadUrlFile%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%40jsxiaosi%2Futils'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3EdownloadPDF%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20function%22%3EdownloadUrlFile%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'https%3A%2F%2Fsupercutexiaosi.top%2Fresource%2Fdevelop_pdf.pdf'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'develop_pdf.pdf'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3EdownloadDocx%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20function%22%3EdownloadUrlFile%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'https%3A%2F%2Fsupercutexiaosi.top%2Fresource%2Fdevelop_docx.docx'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'develop_docx.docx'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EElButton%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EdownloadPDF%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E4%B8%8B%E8%BD%BDPDF%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3EElButton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EElButton%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EdownloadDocx%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E4%B8%8B%E8%BD%BDDocx%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3EElButton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",
                path: i,
                pathName: 'file/downloadUrlFile',
                'raw-source':
                  "%3Cscript%20setup%20lang%3D%22ts%22%3E%0A%20%20import%20%7B%20downloadUrlFile%20%7D%20from%20'%40jsxiaosi%2Futils'%3B%0A%0A%20%20const%20downloadPDF%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20downloadUrlFile('https%3A%2F%2Fsupercutexiaosi.top%2Fresource%2Fdevelop_pdf.pdf'%2C%20'develop_pdf.pdf')%3B%0A%20%20%7D%3B%0A%0A%20%20const%20downloadDocx%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20downloadUrlFile('https%3A%2F%2Fsupercutexiaosi.top%2Fresource%2Fdevelop_docx.docx'%2C%20'develop_docx.docx')%3B%0A%20%20%7D%3B%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3CElButton%20%40click%3D%22downloadPDF%22%3E%E4%B8%8B%E8%BD%BDPDF%3C%2FElButton%3E%0A%20%20%20%20%3CElButton%20%40click%3D%22downloadDocx%22%3E%E4%B8%8B%E8%BD%BDDocx%3C%2FElButton%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A",
                description:
                  '%3Cp%3E%E9%80%9A%E8%BF%87%E6%96%87%E4%BB%B6%E5%9C%B0%E5%9D%80%E4%B8%8B%E8%BD%BD%E6%96%87%E4%BB%B6%3C%2Fp%3E%0A',
              },
              { default: b(() => [T2]), _: 1 },
              8,
              ['demos'],
            ),
            j2,
            y(
              a,
              {
                demos: x(C),
                source:
                  "%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20ref%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20urlToBase64%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%40jsxiaosi%2Futils'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20urlSrc%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20ref%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3Estring%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3EdataUrlToBase64%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Easync%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20urlSrc%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evalue%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Eawait%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3EurlToBase64%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'https%3A%2F%2Fsupercutexiaosi.top%2Fresource%2Faccount_url.png'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Edemos_content%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EElButton%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EdataUrlToBase64%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3Eurl%E5%9B%BE%E7%89%87%E8%BD%AC%E6%88%90base64%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3EElButton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EElImage%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eimage%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Asrc%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EurlSrc%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3EElImage%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Estyle%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Escss%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Escoped%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20style%22%3E%3Cspan%20class%3D%22token%20language-css%22%3E%0A%20%20%3Cspan%20class%3D%22token%20selector%22%3E.image%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20property%22%3Emargin-left%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%2012px%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",
                path: i,
                pathName: 'file/urlToBase64',
                'raw-source':
                  "%3Cscript%20setup%20lang%3D%22ts%22%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%3B%0A%20%20import%20%7B%20urlToBase64%20%7D%20from%20'%40jsxiaosi%2Futils'%3B%0A%0A%20%20const%20urlSrc%20%3D%20ref%3Cstring%3E()%3B%0A%0A%20%20const%20dataUrlToBase64%20%3D%20async%20()%20%3D%3E%20%7B%0A%20%20%20%20urlSrc.value%20%3D%20await%20urlToBase64('https%3A%2F%2Fsupercutexiaosi.top%2Fresource%2Faccount_url.png')%3B%0A%20%20%7D%3B%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22demos_content%22%3E%0A%20%20%20%20%3CElButton%20%40click%3D%22dataUrlToBase64%22%3Eurl%E5%9B%BE%E7%89%87%E8%BD%AC%E6%88%90base64%3C%2FElButton%3E%0A%20%20%20%20%3CElImage%20class%3D%22image%22%20%3Asrc%3D%22urlSrc%22%3E%3C%2FElImage%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cstyle%20lang%3D%22scss%22%20scoped%3E%0A%20%20.image%20%7B%0A%20%20%20%20margin-left%3A%2012px%3B%0A%20%20%7D%0A%3C%2Fstyle%3E%0A",
                description: '',
              },
              { default: b(() => [I2]), _: 1 },
              8,
              ['demos'],
            ),
            P2,
            y(
              a,
              {
                demos: x(C),
                source:
                  "%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20ref%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20urlToBlob%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20blobToBase64%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%40jsxiaosi%2Futils'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20urlSrc%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20ref%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3Estring%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3EdataUrlToBase64%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20function%22%3EurlToBlob%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'https%3A%2F%2Fsupercutexiaosi.top%2Fresource%2Faccount_url.png'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Ethen%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20parameter%22%3Eblob%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20function%22%3EblobToBase64%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3Eblob%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Ethen%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20parameter%22%3Ebase64%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20urlSrc%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evalue%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20base64%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Edemos_content%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EElButton%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EdataUrlToBase64%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3Eurl%E8%BD%ACBlob%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3EElButton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EElImage%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eimage%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Asrc%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EurlSrc%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3EElImage%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Estyle%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Escss%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Escoped%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20style%22%3E%3Cspan%20class%3D%22token%20language-css%22%3E%0A%20%20%3Cspan%20class%3D%22token%20selector%22%3E.image%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20property%22%3Emargin-left%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%2012px%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",
                path: i,
                pathName: 'file/urlToBlob',
                'raw-source':
                  "%3Cscript%20setup%20lang%3D%22ts%22%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%3B%0A%20%20import%20%7B%20urlToBlob%2C%20blobToBase64%20%7D%20from%20'%40jsxiaosi%2Futils'%3B%0A%0A%20%20const%20urlSrc%20%3D%20ref%3Cstring%3E()%3B%0A%0A%20%20const%20dataUrlToBase64%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20urlToBlob('https%3A%2F%2Fsupercutexiaosi.top%2Fresource%2Faccount_url.png').then((blob)%20%3D%3E%20%7B%0A%20%20%20%20%20%20blobToBase64(blob).then((base64)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20urlSrc.value%20%3D%20base64%3B%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%7D)%3B%0A%20%20%7D%3B%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22demos_content%22%3E%0A%20%20%20%20%3CElButton%20%40click%3D%22dataUrlToBase64%22%3Eurl%E8%BD%ACBlob%3C%2FElButton%3E%0A%20%20%20%20%3CElImage%20class%3D%22image%22%20%3Asrc%3D%22urlSrc%22%3E%3C%2FElImage%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cstyle%20lang%3D%22scss%22%20scoped%3E%0A%20%20.image%20%7B%0A%20%20%20%20margin-left%3A%2012px%3B%0A%20%20%7D%0A%3C%2Fstyle%3E%0A",
                description: '',
              },
              { default: b(() => [S2]), _: 1 },
              8,
              ['demos'],
            ),
            U2,
            y(
              a,
              {
                demos: x(C),
                source:
                  "%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20urlToBlob%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20downloadFile%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%40jsxiaosi%2Futils'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3EdataUrlToBase64%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20function%22%3EurlToBlob%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'https%3A%2F%2Fsupercutexiaosi.top%2Fresource%2Faccount_url.png'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Ethen%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20parameter%22%3Eblob%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20function%22%3EdownloadFile%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3Eblob%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'account.png'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Edemos_content%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EElButton%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EdataUrlToBase64%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E4%BF%9D%E5%AD%98%E6%96%87%E4%BB%B6%E5%88%B0%E6%9C%AC%E5%9C%B0%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3EElButton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",
                path: i,
                pathName: 'file/downloadFile',
                'raw-source':
                  "%3Cscript%20setup%20lang%3D%22ts%22%3E%0A%20%20import%20%7B%20urlToBlob%2C%20downloadFile%20%7D%20from%20'%40jsxiaosi%2Futils'%3B%0A%0A%20%20const%20dataUrlToBase64%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20urlToBlob('https%3A%2F%2Fsupercutexiaosi.top%2Fresource%2Faccount_url.png').then((blob)%20%3D%3E%20%7B%0A%20%20%20%20%20%20downloadFile(blob%2C%20'account.png')%3B%0A%20%20%20%20%7D)%3B%0A%20%20%7D%3B%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22demos_content%22%3E%0A%20%20%20%20%3CElButton%20%40click%3D%22dataUrlToBase64%22%3E%E4%BF%9D%E5%AD%98%E6%96%87%E4%BB%B6%E5%88%B0%E6%9C%AC%E5%9C%B0%3C%2FElButton%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A",
                description: '',
              },
              { default: b(() => [O2]), _: 1 },
              8,
              ['demos'],
            ),
            R2,
          ])
        );
      };
    },
  });
export { M2 as __pageData, L2 as default };
