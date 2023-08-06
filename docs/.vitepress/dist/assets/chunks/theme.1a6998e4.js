import {
  u as g,
  v as a,
  b as i,
  z as u,
  a as A,
  L as N,
  X as L,
  _ as m,
  C as b,
  O as p,
  B as f,
  $ as he,
  c as nt,
  i as st,
  P as ot,
  w as fe,
  r as $,
  d as V,
  A as z,
  F as _,
  N as l,
  e as H,
  f as E,
  m as De,
  o as at,
  g as rt,
  q,
  H as lt,
  h as Q,
  j as W,
  k as ee,
  l as me,
  T as it,
  M as R,
  n as B,
  p as x,
  s as ge,
  t as J,
  x as h,
  E as Fe,
  y as U,
  V as oe,
  D as ye,
  G as Oe,
  I as ct,
  R as ut,
  J as Ge,
  K as xe,
  Q as ae,
  S as dt,
  U as _t,
  W as vt,
  Y as pt,
  Z as ht,
} from './framework.5bf5a401.js';
const ft = g({
  __name: 'VPBadge',
  props: { text: {}, type: {} },
  setup(n) {
    return (e, t) => (
      a(),
      i(
        'span',
        { class: A(['VPBadge', e.type ?? 'tip']) },
        [u(e.$slots, 'default', {}, () => [N(L(e.text), 1)], !0)],
        2,
      )
    );
  },
});
const mt = m(ft, [['__scopeId', 'data-v-7d5143cb']]),
  gt = { key: 0, class: 'VPBackdrop' },
  yt = g({
    __name: 'VPBackdrop',
    props: { show: { type: Boolean } },
    setup(n) {
      return (e, t) => (
        a(), b(he, { name: 'fade' }, { default: p(() => [e.show ? (a(), i('div', gt)) : f('', !0)]), _: 1 })
      );
    },
  });
const bt = m(yt, [['__scopeId', 'data-v-b0132229']]),
  w = nt;
function $t(n, e) {
  let t,
    o = !1;
  return () => {
    t && clearTimeout(t),
      o
        ? (t = setTimeout(n, e))
        : (n(),
          (o = !0),
          setTimeout(() => {
            o = !1;
          }, e));
  };
}
function _e(n) {
  return /^\//.test(n) ? n : `/${n}`;
}
function Z(n) {
  if (st(n)) return n.replace(ot, '');
  const { site: e } = w(),
    { pathname: t, search: o, hash: s } = new URL(n, 'http://a.com'),
    r =
      t.endsWith('/') || t.endsWith('.html')
        ? n
        : n.replace(/(?:(^\.+)\/)?.*$/, `$1${t.replace(/(\.md)?$/, e.value.cleanUrls ? '' : '.html')}${o}${s}`);
  return fe(r);
}
function te({ removeCurrent: n = !0, correspondingLink: e = !1 } = {}) {
  const { site: t, localeIndex: o, page: s, theme: r } = w(),
    d = $(() => {
      var c, y;
      return {
        label: (c = t.value.locales[o.value]) == null ? void 0 : c.label,
        link: ((y = t.value.locales[o.value]) == null ? void 0 : y.link) || (o.value === 'root' ? '/' : `/${o.value}/`),
      };
    });
  return {
    localeLinks: $(() =>
      Object.entries(t.value.locales).flatMap(([c, y]) =>
        n && d.value.label === y.label
          ? []
          : {
              text: y.label,
              link: kt(
                y.link || (c === 'root' ? '/' : `/${c}/`),
                r.value.i18nRouting !== !1 && e,
                s.value.relativePath.slice(d.value.link.length - 1),
                !t.value.cleanUrls,
              ),
            },
      ),
    ),
    currentLang: d,
  };
}
function kt(n, e, t, o) {
  return e ? n.replace(/\/$/, '') + _e(t.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, o ? '.html' : '')) : n;
}
const ce = (n) => (H('data-v-0a9c5e82'), (n = n()), E(), n),
  Pt = { class: 'NotFound' },
  Vt = ce(() => _('p', { class: 'code' }, '404', -1)),
  wt = ce(() => _('h1', { class: 'title' }, 'PAGE NOT FOUND', -1)),
  St = ce(() => _('div', { class: 'divider' }, null, -1)),
  Lt = ce(() =>
    _(
      'blockquote',
      { class: 'quote' },
      " But if you don't change your direction, and if you keep looking, you may end up where you are heading. ",
      -1,
    ),
  ),
  Mt = { class: 'action' },
  Tt = ['href'],
  Ct = g({
    __name: 'NotFound',
    setup(n) {
      const { site: e } = w(),
        { localeLinks: t } = te({ removeCurrent: !1 }),
        o = V('/');
      return (
        z(() => {
          var r;
          const s = window.location.pathname.replace(e.value.base, '').replace(/(^.*?\/).*$/, '/$1');
          t.value.length &&
            (o.value =
              ((r = t.value.find(({ link: d }) => d.startsWith(s))) == null ? void 0 : r.link) || t.value[0].link);
        }),
        (s, r) => (
          a(),
          i('div', Pt, [
            Vt,
            wt,
            St,
            Lt,
            _('div', Mt, [
              _('a', { class: 'link', href: l(fe)(o.value), 'aria-label': 'go to home' }, ' Take me home ', 8, Tt),
            ]),
          ])
        )
      );
    },
  });
const Bt = m(Ct, [['__scopeId', 'data-v-0a9c5e82']]);
function be(n) {
  return at() ? (rt(n), !0) : !1;
}
function ne(n) {
  return typeof n == 'function' ? n() : l(n);
}
const $e = typeof window < 'u',
  It = () => {};
function At(n, e, t = {}) {
  const { immediate: o = !0 } = t,
    s = V(!1);
  let r = null;
  function d() {
    r && (clearTimeout(r), (r = null));
  }
  function v() {
    (s.value = !1), d();
  }
  function c(...y) {
    d(),
      (s.value = !0),
      (r = setTimeout(() => {
        (s.value = !1), (r = null), n(...y);
      }, ne(e)));
  }
  return o && ((s.value = !0), $e && c()), be(v), { isPending: De(s), start: c, stop: v };
}
function Nt(n) {
  var e;
  const t = ne(n);
  return (e = t == null ? void 0 : t.$el) != null ? e : t;
}
const ke = $e ? window : void 0,
  xt = $e ? window.navigator : void 0;
function Re(...n) {
  let e, t, o, s;
  if ((typeof n[0] == 'string' || Array.isArray(n[0]) ? (([t, o, s] = n), (e = ke)) : ([e, t, o, s] = n), !e))
    return It;
  Array.isArray(t) || (t = [t]), Array.isArray(o) || (o = [o]);
  const r = [],
    d = () => {
      r.forEach((S) => S()), (r.length = 0);
    },
    v = (S, T, C, k) => (S.addEventListener(T, C, k), () => S.removeEventListener(T, C, k)),
    c = q(
      () => [Nt(e), ne(s)],
      ([S, T]) => {
        d(), S && r.push(...t.flatMap((C) => o.map((k) => v(S, C, k, T))));
      },
      { immediate: !0, flush: 'post' },
    ),
    y = () => {
      c(), d();
    };
  return be(y), y;
}
function Ht() {
  const n = V(!1);
  return (
    lt() &&
      z(() => {
        n.value = !0;
      }),
    n
  );
}
function Ue(n) {
  const e = Ht();
  return $(() => (e.value, !!n()));
}
function ve(n, e = {}) {
  const { window: t = ke } = e,
    o = Ue(() => t && 'matchMedia' in t && typeof t.matchMedia == 'function');
  let s;
  const r = V(!1),
    d = (y) => {
      r.value = y.matches;
    },
    v = () => {
      s && ('removeEventListener' in s ? s.removeEventListener('change', d) : s.removeListener(d));
    },
    c = Q(() => {
      o.value &&
        (v(),
        (s = t.matchMedia(ne(n))),
        'addEventListener' in s ? s.addEventListener('change', d) : s.addListener(d),
        (r.value = s.matches));
    });
  return (
    be(() => {
      c(), v(), (s = void 0);
    }),
    r
  );
}
function Tl(n = {}) {
  const { navigator: e = xt, read: t = !1, source: o, copiedDuring: s = 1500, legacy: r = !1 } = n,
    d = Ue(() => e && 'clipboard' in e),
    v = $(() => d.value || r),
    c = V(''),
    y = V(!1),
    S = At(() => (y.value = !1), s);
  function T() {
    d.value
      ? e.clipboard.readText().then((M) => {
          c.value = M;
        })
      : (c.value = I());
  }
  v.value && t && Re(['copy', 'cut'], T);
  async function C(M = ne(o)) {
    v.value && M != null && (d.value ? await e.clipboard.writeText(M) : k(M), (c.value = M), (y.value = !0), S.start());
  }
  function k(M) {
    const P = document.createElement('textarea');
    (P.value = M ?? ''),
      (P.style.position = 'absolute'),
      (P.style.opacity = '0'),
      document.body.appendChild(P),
      P.select(),
      document.execCommand('copy'),
      P.remove();
  }
  function I() {
    var M, P, F;
    return (F =
      (P = (M = document == null ? void 0 : document.getSelection) == null ? void 0 : M.call(document)) == null
        ? void 0
        : P.toString()) != null
      ? F
      : '';
  }
  return { isSupported: v, text: c, copied: y, copy: C };
}
function je({ window: n = ke } = {}) {
  if (!n) return { x: V(0), y: V(0) };
  const e = V(n.scrollX),
    t = V(n.scrollY);
  return (
    Re(
      n,
      'scroll',
      () => {
        (e.value = n.scrollX), (t.value = n.scrollY);
      },
      { capture: !1, passive: !0 },
    ),
    { x: e, y: t }
  );
}
function qe(n, e) {
  if (Array.isArray(n)) return n;
  if (n == null) return [];
  e = _e(e);
  const t = Object.keys(n)
    .sort((o, s) => s.split('/').length - o.split('/').length)
    .find((o) => e.startsWith(_e(o)));
  return t ? n[t] : [];
}
function Et(n) {
  const e = [];
  let t = 0;
  for (const o in n) {
    const s = n[o];
    if (s.items) {
      t = e.push(s);
      continue;
    }
    e[t] || e.push({ items: [] }), e[t].items.push(s);
  }
  return e;
}
function zt(n) {
  const e = [];
  function t(o) {
    for (const s of o) s.text && s.link && e.push({ text: s.text, link: s.link }), s.items && t(s.items);
  }
  return t(n), e;
}
function pe(n, e) {
  return Array.isArray(e) ? e.some((t) => pe(n, t)) : W(n, e.link) ? !0 : e.items ? pe(n, e.items) : !1;
}
function D() {
  const n = ee(),
    { theme: e, frontmatter: t } = w(),
    o = ve('(min-width: 960px)'),
    s = V(!1),
    r = $(() => {
      const I = e.value.sidebar,
        M = n.data.relativePath;
      return I ? qe(I, M) : [];
    }),
    d = $(() => t.value.sidebar !== !1 && r.value.length > 0 && t.value.layout !== 'home'),
    v = $(() => (c ? (t.value.aside == null ? e.value.aside === 'left' : t.value.aside === 'left') : !1)),
    c = $(() => (t.value.layout === 'home' ? !1 : t.value.aside != null ? !!t.value.aside : e.value.aside !== !1)),
    y = $(() => d.value && o.value),
    S = $(() => (d.value ? Et(r.value) : []));
  function T() {
    s.value = !0;
  }
  function C() {
    s.value = !1;
  }
  function k() {
    s.value ? C() : T();
  }
  return {
    isOpen: s,
    sidebar: r,
    sidebarGroups: S,
    hasSidebar: d,
    hasAside: c,
    leftAside: v,
    isSidebarEnabled: y,
    open: T,
    close: C,
    toggle: k,
  };
}
function Dt(n, e) {
  let t;
  Q(() => {
    t = n.value ? document.activeElement : void 0;
  }),
    z(() => {
      window.addEventListener('keyup', o);
    }),
    me(() => {
      window.removeEventListener('keyup', o);
    });
  function o(s) {
    s.key === 'Escape' && n.value && (e(), t == null || t.focus());
  }
}
function Ft(n) {
  const { page: e } = w(),
    t = V(!1),
    o = $(() => n.value.collapsed != null),
    s = $(() => !!n.value.link),
    r = $(() => W(e.value.relativePath, n.value.link)),
    d = $(() => (r.value ? !0 : n.value.items ? pe(e.value.relativePath, n.value.items) : !1)),
    v = $(() => !!(n.value.items && n.value.items.length));
  Q(() => {
    t.value = !!(o.value && n.value.collapsed);
  }),
    Q(() => {
      (r.value || d.value) && (t.value = !1);
    });
  function c() {
    o.value && (t.value = !t.value);
  }
  return { collapsed: t, collapsible: o, isLink: s, isActiveLink: r, hasActiveLink: d, hasChildren: v, toggle: c };
}
function Ot() {
  const { hasSidebar: n } = D(),
    e = ve('(min-width: 960px)'),
    t = ve('(min-width: 1280px)');
  return { isAsideEnabled: $(() => (!t.value && !e.value ? !1 : n.value ? t.value : e.value)) };
}
const Gt = 71;
function Pe(n) {
  return (
    (typeof n.outline == 'object' && !Array.isArray(n.outline) && n.outline.label) || n.outlineTitle || 'On this page'
  );
}
function Ve(n) {
  const e = [...document.querySelectorAll('.VPDoc h2,h3,h4,h5,h6')]
    .filter((t) => t.id && t.hasChildNodes())
    .map((t) => {
      const o = Number(t.tagName[1]);
      return { title: Rt(t), link: '#' + t.id, level: o };
    });
  return Ut(e, n);
}
function Rt(n) {
  let e = '';
  for (const t of n.childNodes)
    if (t.nodeType === 1) {
      if (t.classList.contains('VPBadge') || t.classList.contains('header-anchor')) continue;
      e += t.textContent;
    } else t.nodeType === 3 && (e += t.textContent);
  return e.trim();
}
function Ut(n, e) {
  if (e === !1) return [];
  const t = (typeof e == 'object' && !Array.isArray(e) ? e.level : e) || 2,
    [o, s] = typeof t == 'number' ? [t, t] : t === 'deep' ? [2, 6] : t;
  n = n.filter((d) => d.level >= o && d.level <= s);
  const r = [];
  e: for (let d = 0; d < n.length; d++) {
    const v = n[d];
    if (d === 0) r.push(v);
    else {
      for (let c = d - 1; c >= 0; c--) {
        const y = n[c];
        if (y.level < v.level) {
          (y.children || (y.children = [])).push(v);
          continue e;
        }
      }
      r.push(v);
    }
  }
  return r;
}
function jt(n, e) {
  const { isAsideEnabled: t } = Ot(),
    o = $t(r, 100);
  let s = null;
  z(() => {
    requestAnimationFrame(r), window.addEventListener('scroll', o);
  }),
    it(() => {
      d(location.hash);
    }),
    me(() => {
      window.removeEventListener('scroll', o);
    });
  function r() {
    if (!t.value) return;
    const v = [].slice.call(n.value.querySelectorAll('.outline-link')),
      c = [].slice
        .call(document.querySelectorAll('.content .header-anchor'))
        .filter((k) => v.some((I) => I.hash === k.hash && k.offsetParent !== null)),
      y = window.scrollY,
      S = window.innerHeight,
      T = document.body.offsetHeight,
      C = Math.abs(y + S - T) < 1;
    if (c.length && C) {
      d(c[c.length - 1].hash);
      return;
    }
    for (let k = 0; k < c.length; k++) {
      const I = c[k],
        M = c[k + 1],
        [P, F] = qt(k, I, M);
      if (P) {
        d(F);
        return;
      }
    }
  }
  function d(v) {
    s && s.classList.remove('active'), v !== null && (s = n.value.querySelector(`a[href="${decodeURIComponent(v)}"]`));
    const c = s;
    c
      ? (c.classList.add('active'), (e.value.style.top = c.offsetTop + 33 + 'px'), (e.value.style.opacity = '1'))
      : ((e.value.style.top = '33px'), (e.value.style.opacity = '0'));
  }
}
function He(n) {
  return n.parentElement.offsetTop - Gt;
}
function qt(n, e, t) {
  const o = window.scrollY;
  return n === 0 && o === 0 ? [!0, null] : o < He(e) ? [!1, null] : !t || o < He(t) ? [!0, e.hash] : [!1, null];
}
const Wt = ['href', 'title'],
  Yt = g({
    __name: 'VPDocOutlineItem',
    props: { headers: {}, root: { type: Boolean } },
    setup(n) {
      function e({ target: t }) {
        const o = t.href.split('#')[1],
          s = document.getElementById(decodeURIComponent(o));
        s == null || s.focus();
      }
      return (t, o) => {
        const s = R('VPDocOutlineItem', !0);
        return (
          a(),
          i(
            'ul',
            { class: A(t.root ? 'root' : 'nested') },
            [
              (a(!0),
              i(
                B,
                null,
                x(
                  t.headers,
                  ({ children: r, link: d, title: v }) => (
                    a(),
                    i('li', null, [
                      _('a', { class: 'outline-link', href: d, onClick: e, title: v }, L(v), 9, Wt),
                      r != null && r.length ? (a(), b(s, { key: 0, headers: r }, null, 8, ['headers'])) : f('', !0),
                    ])
                  ),
                ),
                256,
              )),
            ],
            2,
          )
        );
      };
    },
  });
const we = m(Yt, [['__scopeId', 'data-v-a0b85b14']]),
  Kt = (n) => (H('data-v-d37ae66f'), (n = n()), E(), n),
  Xt = { class: 'content' },
  Qt = { class: 'outline-title' },
  Jt = { 'aria-labelledby': 'doc-outline-aria-label' },
  Zt = Kt(() =>
    _('span', { class: 'visually-hidden', id: 'doc-outline-aria-label' }, ' Table of Contents for current page ', -1),
  ),
  en = g({
    __name: 'VPDocAsideOutline',
    setup(n) {
      const { frontmatter: e, theme: t } = w(),
        o = ge([]);
      J(() => {
        o.value = Ve(e.value.outline ?? t.value.outline);
      });
      const s = V(),
        r = V();
      return (
        jt(s, r),
        (d, v) => (
          a(),
          i(
            'div',
            { class: A(['VPDocAsideOutline', { 'has-outline': o.value.length > 0 }]), ref_key: 'container', ref: s },
            [
              _('div', Xt, [
                _('div', { class: 'outline-marker', ref_key: 'marker', ref: r }, null, 512),
                _('div', Qt, L(l(Pe)(l(t))), 1),
                _('nav', Jt, [Zt, h(we, { headers: o.value, root: !0 }, null, 8, ['headers'])]),
              ]),
            ],
            2,
          )
        )
      );
    },
  });
const tn = m(en, [['__scopeId', 'data-v-d37ae66f']]),
  nn = { class: 'VPDocAsideCarbonAds' },
  sn = g({
    __name: 'VPDocAsideCarbonAds',
    props: { carbonAds: {} },
    setup(n) {
      const e = () => null;
      return (t, o) => (a(), i('div', nn, [h(l(e), { 'carbon-ads': t.carbonAds }, null, 8, ['carbon-ads'])]));
    },
  }),
  on = (n) => (H('data-v-67746c54'), (n = n()), E(), n),
  an = { class: 'VPDocAside' },
  rn = on(() => _('div', { class: 'spacer' }, null, -1)),
  ln = g({
    __name: 'VPDocAside',
    setup(n) {
      const { theme: e } = w();
      return (t, o) => (
        a(),
        i('div', an, [
          u(t.$slots, 'aside-top', {}, void 0, !0),
          u(t.$slots, 'aside-outline-before', {}, void 0, !0),
          h(tn),
          u(t.$slots, 'aside-outline-after', {}, void 0, !0),
          rn,
          u(t.$slots, 'aside-ads-before', {}, void 0, !0),
          l(e).carbonAds ? (a(), b(sn, { key: 0, 'carbon-ads': l(e).carbonAds }, null, 8, ['carbon-ads'])) : f('', !0),
          u(t.$slots, 'aside-ads-after', {}, void 0, !0),
          u(t.$slots, 'aside-bottom', {}, void 0, !0),
        ])
      );
    },
  });
const cn = m(ln, [['__scopeId', 'data-v-67746c54']]);
function un() {
  const { theme: n, page: e } = w();
  return $(() => {
    const { text: t = 'Edit this page', pattern: o = '' } = n.value.editLink || {};
    let s;
    return typeof o == 'function' ? (s = o(e.value)) : (s = o.replace(/:path/g, e.value.filePath)), { url: s, text: t };
  });
}
function dn() {
  const { page: n, theme: e, frontmatter: t } = w();
  return $(() => {
    var c, y, S, T, C, k;
    const o = qe(e.value.sidebar, n.value.relativePath),
      s = zt(o),
      r = s.findIndex((I) => W(n.value.relativePath, I.link)),
      d = (((c = e.value.docFooter) == null ? void 0 : c.prev) === !1 && !t.value.prev) || t.value.prev === !1,
      v = (((y = e.value.docFooter) == null ? void 0 : y.next) === !1 && !t.value.next) || t.value.next === !1;
    return {
      prev: d
        ? void 0
        : {
            text:
              (typeof t.value.prev == 'string'
                ? t.value.prev
                : typeof t.value.prev == 'object'
                ? t.value.prev.text
                : void 0) ?? ((S = s[r - 1]) == null ? void 0 : S.text),
            link:
              (typeof t.value.prev == 'object' ? t.value.prev.link : void 0) ??
              ((T = s[r - 1]) == null ? void 0 : T.link),
          },
      next: v
        ? void 0
        : {
            text:
              (typeof t.value.next == 'string'
                ? t.value.next
                : typeof t.value.next == 'object'
                ? t.value.next.text
                : void 0) ?? ((C = s[r + 1]) == null ? void 0 : C.text),
            link:
              (typeof t.value.next == 'object' ? t.value.next.link : void 0) ??
              ((k = s[r + 1]) == null ? void 0 : k.link),
          },
    };
  });
}
const _n = {},
  vn = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
  pn = _(
    'path',
    {
      d: 'M18,23H4c-1.7,0-3-1.3-3-3V6c0-1.7,1.3-3,3-3h7c0.6,0,1,0.4,1,1s-0.4,1-1,1H4C3.4,5,3,5.4,3,6v14c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-7c0-0.6,0.4-1,1-1s1,0.4,1,1v7C21,21.7,19.7,23,18,23z',
    },
    null,
    -1,
  ),
  hn = _(
    'path',
    {
      d: 'M8,17c-0.3,0-0.5-0.1-0.7-0.3C7,16.5,6.9,16.1,7,15.8l1-4c0-0.2,0.1-0.3,0.3-0.5l9.5-9.5c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.5,9.5c-0.1,0.1-0.3,0.2-0.5,0.3l-4,1C8.2,17,8.1,17,8,17zM9.9,12.5l-0.5,2.1l2.1-0.5l9.3-9.3c0.4-0.4,0.4-1.1,0-1.6c-0.4-0.4-1.2-0.4-1.6,0l0,0L9.9,12.5z M18.5,2.5L18.5,2.5L18.5,2.5z',
    },
    null,
    -1,
  ),
  fn = [pn, hn];
function mn(n, e) {
  return a(), i('svg', vn, fn);
}
const gn = m(_n, [['render', mn]]),
  O = g({
    __name: 'VPLink',
    props: { tag: {}, href: {}, noIcon: { type: Boolean }, target: {}, rel: {} },
    setup(n) {
      const e = n,
        t = $(() => e.tag ?? (e.href ? 'a' : 'span')),
        o = $(() => e.href && Fe.test(e.href));
      return (s, r) => (
        a(),
        b(
          U(t.value),
          {
            class: A(['VPLink', { link: s.href, 'vp-external-link-icon': o.value, 'no-icon': s.noIcon }]),
            href: s.href ? l(Z)(s.href) : void 0,
            target: s.target ?? (o.value ? '_blank' : void 0),
            rel: s.rel ?? (o.value ? 'noreferrer' : void 0),
          },
          { default: p(() => [u(s.$slots, 'default')]), _: 3 },
          8,
          ['class', 'href', 'target', 'rel'],
        )
      );
    },
  }),
  yn = { class: 'VPLastUpdated' },
  bn = ['datetime'],
  $n = g({
    __name: 'VPDocFooterLastUpdated',
    setup(n) {
      const { theme: e, page: t } = w(),
        o = $(() => new Date(t.value.lastUpdated)),
        s = $(() => o.value.toISOString()),
        r = V('');
      return (
        z(() => {
          Q(() => {
            var d;
            r.value = new Intl.DateTimeFormat(
              void 0,
              ((d = e.value.lastUpdated) == null ? void 0 : d.formatOptions) ?? {
                dateStyle: 'short',
                timeStyle: 'short',
              },
            ).format(o.value);
          });
        }),
        (d, v) => {
          var c;
          return (
            a(),
            i('p', yn, [
              N(
                L(((c = l(e).lastUpdated) == null ? void 0 : c.text) || l(e).lastUpdatedText || 'Last updated') + ': ',
                1,
              ),
              _('time', { datetime: s.value }, L(r.value), 9, bn),
            ])
          );
        }
      );
    },
  });
const kn = m($n, [['__scopeId', 'data-v-4d84a473']]),
  Pn = { key: 0, class: 'VPDocFooter' },
  Vn = { key: 0, class: 'edit-info' },
  wn = { key: 0, class: 'edit-link' },
  Sn = { key: 1, class: 'last-updated' },
  Ln = { key: 1, class: 'prev-next' },
  Mn = { class: 'pager' },
  Tn = ['href'],
  Cn = ['innerHTML'],
  Bn = ['innerHTML'],
  In = { class: 'pager' },
  An = ['href'],
  Nn = ['innerHTML'],
  xn = ['innerHTML'],
  Hn = g({
    __name: 'VPDocFooter',
    setup(n) {
      const { theme: e, page: t, frontmatter: o } = w(),
        s = un(),
        r = dn(),
        d = $(() => e.value.editLink && o.value.editLink !== !1),
        v = $(() => t.value.lastUpdated && o.value.lastUpdated !== !1),
        c = $(() => d.value || v.value || r.value.prev || r.value.next);
      return (y, S) => {
        var T, C, k, I, M, P;
        return c.value
          ? (a(),
            i('footer', Pn, [
              u(y.$slots, 'doc-footer-before', {}, void 0, !0),
              d.value || v.value
                ? (a(),
                  i('div', Vn, [
                    d.value
                      ? (a(),
                        i('div', wn, [
                          h(
                            O,
                            { class: 'edit-link-button', href: l(s).url, 'no-icon': !0 },
                            {
                              default: p(() => [
                                h(gn, { class: 'edit-link-icon', 'aria-label': 'edit icon' }),
                                N(' ' + L(l(s).text), 1),
                              ]),
                              _: 1,
                            },
                            8,
                            ['href'],
                          ),
                        ]))
                      : f('', !0),
                    v.value ? (a(), i('div', Sn, [h(kn)])) : f('', !0),
                  ]))
                : f('', !0),
              ((T = l(r).prev) != null && T.link) || ((C = l(r).next) != null && C.link)
                ? (a(),
                  i('nav', Ln, [
                    _('div', Mn, [
                      (k = l(r).prev) != null && k.link
                        ? (a(),
                          i(
                            'a',
                            { key: 0, class: 'pager-link prev', href: l(Z)(l(r).prev.link) },
                            [
                              _(
                                'span',
                                {
                                  class: 'desc',
                                  innerHTML: ((I = l(e).docFooter) == null ? void 0 : I.prev) || 'Previous page',
                                },
                                null,
                                8,
                                Cn,
                              ),
                              _('span', { class: 'title', innerHTML: l(r).prev.text }, null, 8, Bn),
                            ],
                            8,
                            Tn,
                          ))
                        : f('', !0),
                    ]),
                    _('div', In, [
                      (M = l(r).next) != null && M.link
                        ? (a(),
                          i(
                            'a',
                            { key: 0, class: 'pager-link next', href: l(Z)(l(r).next.link) },
                            [
                              _(
                                'span',
                                {
                                  class: 'desc',
                                  innerHTML: ((P = l(e).docFooter) == null ? void 0 : P.next) || 'Next page',
                                },
                                null,
                                8,
                                Nn,
                              ),
                              _('span', { class: 'title', innerHTML: l(r).next.text }, null, 8, xn),
                            ],
                            8,
                            An,
                          ))
                        : f('', !0),
                    ]),
                  ]))
                : f('', !0),
            ]))
          : f('', !0);
      };
    },
  });
const En = m(Hn, [['__scopeId', 'data-v-3d942bbf']]),
  zn = {},
  Dn = { xmlns: 'http://www.w3.org/2000/svg', 'aria-hidden': 'true', focusable: 'false', viewBox: '0 0 24 24' },
  Fn = _(
    'path',
    {
      d: 'M9,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3L8.3,6.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C9.5,18.9,9.3,19,9,19z',
    },
    null,
    -1,
  ),
  On = [Fn];
function Gn(n, e) {
  return a(), i('svg', Dn, On);
}
const Se = m(zn, [['render', Gn]]),
  Rn = { key: 0, class: 'VPDocOutlineDropdown' },
  Un = { key: 0, class: 'items' },
  jn = g({
    __name: 'VPDocOutlineDropdown',
    setup(n) {
      const { frontmatter: e, theme: t } = w(),
        o = V(!1);
      J(() => {
        o.value = !1;
      });
      const s = ge([]);
      return (
        J(() => {
          s.value = Ve(e.value.outline ?? t.value.outline);
        }),
        (r, d) =>
          s.value.length > 0
            ? (a(),
              i('div', Rn, [
                _(
                  'button',
                  { onClick: d[0] || (d[0] = (v) => (o.value = !o.value)), class: A({ open: o.value }) },
                  [N(L(l(Pe)(l(t))) + ' ', 1), h(Se, { class: 'icon' })],
                  2,
                ),
                o.value ? (a(), i('div', Un, [h(we, { headers: s.value }, null, 8, ['headers'])])) : f('', !0),
              ]))
            : f('', !0)
      );
    },
  });
const qn = m(jn, [['__scopeId', 'data-v-23cb63f4']]),
  Wn = (n) => (H('data-v-7b1e2afd'), (n = n()), E(), n),
  Yn = { class: 'container' },
  Kn = Wn(() => _('div', { class: 'aside-curtain' }, null, -1)),
  Xn = { class: 'aside-container' },
  Qn = { class: 'aside-content' },
  Jn = { class: 'content' },
  Zn = { class: 'content-container' },
  es = { class: 'main' },
  ts = g({
    __name: 'VPDoc',
    setup(n) {
      const { theme: e } = w(),
        t = ee(),
        { hasSidebar: o, hasAside: s, leftAside: r } = D(),
        d = $(() => t.path.replace(/[./]+/g, '_').replace(/_html$/, ''));
      return (v, c) => {
        const y = R('Content');
        return (
          a(),
          i(
            'div',
            { class: A(['VPDoc', { 'has-sidebar': l(o), 'has-aside': l(s) }]) },
            [
              u(v.$slots, 'doc-top', {}, void 0, !0),
              _('div', Yn, [
                l(s)
                  ? (a(),
                    i(
                      'div',
                      { key: 0, class: A(['aside', { 'left-aside': l(r) }]) },
                      [
                        Kn,
                        _('div', Xn, [
                          _('div', Qn, [
                            h(cn, null, {
                              'aside-top': p(() => [u(v.$slots, 'aside-top', {}, void 0, !0)]),
                              'aside-bottom': p(() => [u(v.$slots, 'aside-bottom', {}, void 0, !0)]),
                              'aside-outline-before': p(() => [u(v.$slots, 'aside-outline-before', {}, void 0, !0)]),
                              'aside-outline-after': p(() => [u(v.$slots, 'aside-outline-after', {}, void 0, !0)]),
                              'aside-ads-before': p(() => [u(v.$slots, 'aside-ads-before', {}, void 0, !0)]),
                              'aside-ads-after': p(() => [u(v.$slots, 'aside-ads-after', {}, void 0, !0)]),
                              _: 3,
                            }),
                          ]),
                        ]),
                      ],
                      2,
                    ))
                  : f('', !0),
                _('div', Jn, [
                  _('div', Zn, [
                    u(v.$slots, 'doc-before', {}, void 0, !0),
                    h(qn),
                    _('main', es, [
                      h(
                        y,
                        { class: A(['vp-doc', [d.value, l(e).externalLinkIcon && 'external-link-icon-enabled']]) },
                        null,
                        8,
                        ['class'],
                      ),
                    ]),
                    h(En, null, {
                      'doc-footer-before': p(() => [u(v.$slots, 'doc-footer-before', {}, void 0, !0)]),
                      _: 3,
                    }),
                    u(v.$slots, 'doc-after', {}, void 0, !0),
                  ]),
                ]),
              ]),
              u(v.$slots, 'doc-bottom', {}, void 0, !0),
            ],
            2,
          )
        );
      };
    },
  });
const ns = m(ts, [['__scopeId', 'data-v-7b1e2afd']]),
  ss = g({
    __name: 'VPButton',
    props: { tag: {}, size: {}, theme: {}, text: {}, href: {} },
    setup(n) {
      const e = n,
        t = $(() => [e.size ?? 'medium', e.theme ?? 'brand']),
        o = $(() => e.href && Fe.test(e.href)),
        s = $(() => (e.tag ? e.tag : e.href ? 'a' : 'button'));
      return (r, d) => (
        a(),
        b(
          U(s.value),
          {
            class: A(['VPButton', t.value]),
            href: r.href ? l(Z)(r.href) : void 0,
            target: o.value ? '_blank' : void 0,
            rel: o.value ? 'noreferrer' : void 0,
          },
          { default: p(() => [N(L(r.text), 1)]), _: 1 },
          8,
          ['class', 'href', 'target', 'rel'],
        )
      );
    },
  });
const os = m(ss, [['__scopeId', 'data-v-b5a884dc']]),
  as = ['src', 'alt'],
  rs = { inheritAttrs: !1 },
  ls = g({
    ...rs,
    __name: 'VPImage',
    props: { image: {}, alt: {} },
    setup(n) {
      return (e, t) => {
        const o = R('VPImage', !0);
        return e.image
          ? (a(),
            i(
              B,
              { key: 0 },
              [
                typeof e.image == 'string' || 'src' in e.image
                  ? (a(),
                    i(
                      'img',
                      oe(
                        { key: 0, class: 'VPImage' },
                        typeof e.image == 'string' ? e.$attrs : { ...e.image, ...e.$attrs },
                        {
                          src: l(fe)(typeof e.image == 'string' ? e.image : e.image.src),
                          alt: e.alt ?? (typeof e.image == 'string' ? '' : e.image.alt || ''),
                        },
                      ),
                      null,
                      16,
                      as,
                    ))
                  : (a(),
                    i(
                      B,
                      { key: 1 },
                      [
                        h(o, oe({ class: 'dark', image: e.image.dark, alt: e.image.alt }, e.$attrs), null, 16, [
                          'image',
                          'alt',
                        ]),
                        h(o, oe({ class: 'light', image: e.image.light, alt: e.image.alt }, e.$attrs), null, 16, [
                          'image',
                          'alt',
                        ]),
                      ],
                      64,
                    )),
              ],
              64,
            ))
          : f('', !0);
      };
    },
  });
const Le = m(ls, [['__scopeId', 'data-v-3073df40']]),
  is = (n) => (H('data-v-c3e58364'), (n = n()), E(), n),
  cs = { class: 'container' },
  us = { class: 'main' },
  ds = { key: 0, class: 'name' },
  _s = ['innerHTML'],
  vs = ['innerHTML'],
  ps = ['innerHTML'],
  hs = { key: 0, class: 'actions' },
  fs = { key: 0, class: 'image' },
  ms = { class: 'image-container' },
  gs = is(() => _('div', { class: 'image-bg' }, null, -1)),
  ys = g({
    __name: 'VPHero',
    props: { name: {}, text: {}, tagline: {}, image: {}, actions: {} },
    setup(n) {
      const e = ye('hero-image-slot-exists');
      return (t, o) => (
        a(),
        i(
          'div',
          { class: A(['VPHero', { 'has-image': t.image || l(e) }]) },
          [
            _('div', cs, [
              _('div', us, [
                u(
                  t.$slots,
                  'home-hero-info',
                  {},
                  () => [
                    t.name
                      ? (a(), i('h1', ds, [_('span', { innerHTML: t.name, class: 'clip' }, null, 8, _s)]))
                      : f('', !0),
                    t.text ? (a(), i('p', { key: 1, innerHTML: t.text, class: 'text' }, null, 8, vs)) : f('', !0),
                    t.tagline
                      ? (a(), i('p', { key: 2, innerHTML: t.tagline, class: 'tagline' }, null, 8, ps))
                      : f('', !0),
                  ],
                  !0,
                ),
                t.actions
                  ? (a(),
                    i('div', hs, [
                      (a(!0),
                      i(
                        B,
                        null,
                        x(
                          t.actions,
                          (s) => (
                            a(),
                            i('div', { key: s.link, class: 'action' }, [
                              h(os, { tag: 'a', size: 'medium', theme: s.theme, text: s.text, href: s.link }, null, 8, [
                                'theme',
                                'text',
                                'href',
                              ]),
                            ])
                          ),
                        ),
                        128,
                      )),
                    ]))
                  : f('', !0),
              ]),
              t.image || l(e)
                ? (a(),
                  i('div', fs, [
                    _('div', ms, [
                      gs,
                      u(
                        t.$slots,
                        'home-hero-image',
                        {},
                        () => [
                          t.image
                            ? (a(), b(Le, { key: 0, class: 'image-src', image: t.image }, null, 8, ['image']))
                            : f('', !0),
                        ],
                        !0,
                      ),
                    ]),
                  ]))
                : f('', !0),
            ]),
          ],
          2,
        )
      );
    },
  });
const bs = m(ys, [['__scopeId', 'data-v-c3e58364']]),
  $s = g({
    __name: 'VPHomeHero',
    setup(n) {
      const { frontmatter: e } = w();
      return (t, o) =>
        l(e).hero
          ? (a(),
            b(
              bs,
              {
                key: 0,
                class: 'VPHomeHero',
                name: l(e).hero.name,
                text: l(e).hero.text,
                tagline: l(e).hero.tagline,
                image: l(e).hero.image,
                actions: l(e).hero.actions,
              },
              {
                'home-hero-info': p(() => [u(t.$slots, 'home-hero-info')]),
                'home-hero-image': p(() => [u(t.$slots, 'home-hero-image')]),
                _: 3,
              },
              8,
              ['name', 'text', 'tagline', 'image', 'actions'],
            ))
          : f('', !0);
    },
  }),
  ks = {},
  Ps = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
  Vs = _(
    'path',
    {
      d: 'M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z',
    },
    null,
    -1,
  ),
  ws = [Vs];
function Ss(n, e) {
  return a(), i('svg', Ps, ws);
}
const Ls = m(ks, [['render', Ss]]),
  Ms = { class: 'box' },
  Ts = ['innerHTML'],
  Cs = ['innerHTML'],
  Bs = ['innerHTML'],
  Is = { key: 3, class: 'link-text' },
  As = { class: 'link-text-value' },
  Ns = g({
    __name: 'VPFeature',
    props: { icon: {}, title: {}, details: {}, link: {}, linkText: {}, rel: {} },
    setup(n) {
      return (e, t) => (
        a(),
        b(
          O,
          { class: 'VPFeature', href: e.link, rel: e.rel, 'no-icon': !0, tag: e.link ? 'a' : 'div' },
          {
            default: p(() => [
              _('article', Ms, [
                typeof e.icon == 'object'
                  ? (a(),
                    b(
                      Le,
                      { key: 0, image: e.icon, alt: e.icon.alt, height: e.icon.height, width: e.icon.width },
                      null,
                      8,
                      ['image', 'alt', 'height', 'width'],
                    ))
                  : e.icon
                  ? (a(), i('div', { key: 1, class: 'icon', innerHTML: e.icon }, null, 8, Ts))
                  : f('', !0),
                _('h2', { class: 'title', innerHTML: e.title }, null, 8, Cs),
                e.details ? (a(), i('p', { key: 2, class: 'details', innerHTML: e.details }, null, 8, Bs)) : f('', !0),
                e.linkText
                  ? (a(), i('div', Is, [_('p', As, [N(L(e.linkText) + ' ', 1), h(Ls, { class: 'link-text-icon' })])]))
                  : f('', !0),
              ]),
            ]),
            _: 1,
          },
          8,
          ['href', 'rel', 'tag'],
        )
      );
    },
  });
const xs = m(Ns, [['__scopeId', 'data-v-5255680a']]),
  Hs = { key: 0, class: 'VPFeatures' },
  Es = { class: 'container' },
  zs = { class: 'items' },
  Ds = g({
    __name: 'VPFeatures',
    props: { features: {} },
    setup(n) {
      const e = n,
        t = $(() => {
          const o = e.features.length;
          if (o) {
            if (o === 2) return 'grid-2';
            if (o === 3) return 'grid-3';
            if (o % 3 === 0) return 'grid-6';
            if (o > 3) return 'grid-4';
          } else return;
        });
      return (o, s) =>
        o.features
          ? (a(),
            i('div', Hs, [
              _('div', Es, [
                _('div', zs, [
                  (a(!0),
                  i(
                    B,
                    null,
                    x(
                      o.features,
                      (r) => (
                        a(),
                        i(
                          'div',
                          { key: r.title, class: A(['item', [t.value]]) },
                          [
                            h(
                              xs,
                              {
                                icon: r.icon,
                                title: r.title,
                                details: r.details,
                                link: r.link,
                                'link-text': r.linkText,
                                rel: r.rel,
                              },
                              null,
                              8,
                              ['icon', 'title', 'details', 'link', 'link-text', 'rel'],
                            ),
                          ],
                          2,
                        )
                      ),
                    ),
                    128,
                  )),
                ]),
              ]),
            ]))
          : f('', !0);
    },
  });
const Fs = m(Ds, [['__scopeId', 'data-v-1dd680ce']]),
  Os = g({
    __name: 'VPHomeFeatures',
    setup(n) {
      const { frontmatter: e } = w();
      return (t, o) =>
        l(e).features
          ? (a(), b(Fs, { key: 0, class: 'VPHomeFeatures', features: l(e).features }, null, 8, ['features']))
          : f('', !0);
    },
  }),
  Gs = { class: 'VPHome' },
  Rs = g({
    __name: 'VPHome',
    setup(n) {
      return (e, t) => {
        const o = R('Content');
        return (
          a(),
          i('div', Gs, [
            u(e.$slots, 'home-hero-before', {}, void 0, !0),
            h($s, null, {
              'home-hero-info': p(() => [u(e.$slots, 'home-hero-info', {}, void 0, !0)]),
              'home-hero-image': p(() => [u(e.$slots, 'home-hero-image', {}, void 0, !0)]),
              _: 3,
            }),
            u(e.$slots, 'home-hero-after', {}, void 0, !0),
            u(e.$slots, 'home-features-before', {}, void 0, !0),
            h(Os),
            u(e.$slots, 'home-features-after', {}, void 0, !0),
            h(o),
          ])
        );
      };
    },
  });
const Us = m(Rs, [['__scopeId', 'data-v-698e0902']]),
  js = {},
  qs = { class: 'VPPage' };
function Ws(n, e) {
  const t = R('Content');
  return a(), i('div', qs, [u(n.$slots, 'page-top'), h(t), u(n.$slots, 'page-bottom')]);
}
const Ys = m(js, [['render', Ws]]),
  Ks = g({
    __name: 'VPContent',
    setup(n) {
      const { page: e, frontmatter: t } = w(),
        { hasSidebar: o } = D();
      return (s, r) => (
        a(),
        i(
          'div',
          { class: A(['VPContent', { 'has-sidebar': l(o), 'is-home': l(t).layout === 'home' }]), id: 'VPContent' },
          [
            l(e).isNotFound
              ? u(s.$slots, 'not-found', { key: 0 }, () => [h(Bt)], !0)
              : l(t).layout === 'page'
              ? (a(),
                b(
                  Ys,
                  { key: 1 },
                  {
                    'page-top': p(() => [u(s.$slots, 'page-top', {}, void 0, !0)]),
                    'page-bottom': p(() => [u(s.$slots, 'page-bottom', {}, void 0, !0)]),
                    _: 3,
                  },
                ))
              : l(t).layout === 'home'
              ? (a(),
                b(
                  Us,
                  { key: 2 },
                  {
                    'home-hero-before': p(() => [u(s.$slots, 'home-hero-before', {}, void 0, !0)]),
                    'home-hero-info': p(() => [u(s.$slots, 'home-hero-info', {}, void 0, !0)]),
                    'home-hero-image': p(() => [u(s.$slots, 'home-hero-image', {}, void 0, !0)]),
                    'home-hero-after': p(() => [u(s.$slots, 'home-hero-after', {}, void 0, !0)]),
                    'home-features-before': p(() => [u(s.$slots, 'home-features-before', {}, void 0, !0)]),
                    'home-features-after': p(() => [u(s.$slots, 'home-features-after', {}, void 0, !0)]),
                    _: 3,
                  },
                ))
              : (a(),
                b(
                  ns,
                  { key: 3 },
                  {
                    'doc-top': p(() => [u(s.$slots, 'doc-top', {}, void 0, !0)]),
                    'doc-bottom': p(() => [u(s.$slots, 'doc-bottom', {}, void 0, !0)]),
                    'doc-footer-before': p(() => [u(s.$slots, 'doc-footer-before', {}, void 0, !0)]),
                    'doc-before': p(() => [u(s.$slots, 'doc-before', {}, void 0, !0)]),
                    'doc-after': p(() => [u(s.$slots, 'doc-after', {}, void 0, !0)]),
                    'aside-top': p(() => [u(s.$slots, 'aside-top', {}, void 0, !0)]),
                    'aside-outline-before': p(() => [u(s.$slots, 'aside-outline-before', {}, void 0, !0)]),
                    'aside-outline-after': p(() => [u(s.$slots, 'aside-outline-after', {}, void 0, !0)]),
                    'aside-ads-before': p(() => [u(s.$slots, 'aside-ads-before', {}, void 0, !0)]),
                    'aside-ads-after': p(() => [u(s.$slots, 'aside-ads-after', {}, void 0, !0)]),
                    'aside-bottom': p(() => [u(s.$slots, 'aside-bottom', {}, void 0, !0)]),
                    _: 3,
                  },
                )),
          ],
          2,
        )
      );
    },
  });
const Xs = m(Ks, [['__scopeId', 'data-v-02de2336']]),
  Qs = { class: 'container' },
  Js = ['innerHTML'],
  Zs = ['innerHTML'],
  eo = g({
    __name: 'VPFooter',
    setup(n) {
      const { theme: e, frontmatter: t } = w(),
        { hasSidebar: o } = D();
      return (s, r) =>
        l(e).footer && l(t).footer !== !1
          ? (a(),
            i(
              'footer',
              { key: 0, class: A(['VPFooter', { 'has-sidebar': l(o) }]) },
              [
                _('div', Qs, [
                  l(e).footer.message
                    ? (a(), i('p', { key: 0, class: 'message', innerHTML: l(e).footer.message }, null, 8, Js))
                    : f('', !0),
                  l(e).footer.copyright
                    ? (a(), i('p', { key: 1, class: 'copyright', innerHTML: l(e).footer.copyright }, null, 8, Zs))
                    : f('', !0),
                ]),
              ],
              2,
            ))
          : f('', !0);
    },
  });
const to = m(eo, [['__scopeId', 'data-v-878f5316']]),
  no = g({
    __name: 'VPLocalNavOutlineDropdown',
    props: { headers: {}, navHeight: {} },
    setup(n) {
      const e = n,
        { theme: t } = w(),
        o = V(!1),
        s = V(0),
        r = V();
      J(() => {
        o.value = !1;
      });
      function d() {
        (o.value = !o.value), (s.value = window.innerHeight + Math.min(window.scrollY - e.navHeight, 0));
      }
      function v(y) {
        y.target.classList.contains('outline-link') &&
          (r.value && (r.value.style.transition = 'none'),
          ct(() => {
            o.value = !1;
          }));
      }
      function c() {
        (o.value = !1), window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
      return (y, S) => (
        a(),
        i(
          'div',
          { class: 'VPLocalNavOutlineDropdown', style: Oe({ '--vp-vh': s.value + 'px' }) },
          [
            y.headers.length > 0
              ? (a(),
                i(
                  'button',
                  { key: 0, onClick: d, class: A({ open: o.value }) },
                  [N(L(l(Pe)(l(t))) + ' ', 1), h(Se, { class: 'icon' })],
                  2,
                ))
              : (a(), i('button', { key: 1, onClick: c }, L(l(t).returnToTopLabel || 'Return to top'), 1)),
            h(
              he,
              { name: 'flyout' },
              {
                default: p(() => [
                  o.value
                    ? (a(),
                      i(
                        'div',
                        { key: 0, ref_key: 'items', ref: r, class: 'items', onClick: v },
                        [
                          _(
                            'a',
                            { class: 'top-link', href: '#', onClick: c },
                            L(l(t).returnToTopLabel || 'Return to top'),
                            1,
                          ),
                          h(we, { headers: y.headers }, null, 8, ['headers']),
                        ],
                        512,
                      ))
                    : f('', !0),
                ]),
                _: 1,
              },
            ),
          ],
          4,
        )
      );
    },
  });
const so = m(no, [['__scopeId', 'data-v-f9ebf00e']]),
  oo = {},
  ao = { xmlns: 'http://www.w3.org/2000/svg', 'aria-hidden': 'true', focusable: 'false', viewBox: '0 0 24 24' },
  ro = _('path', { d: 'M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z' }, null, -1),
  lo = _('path', { d: 'M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z' }, null, -1),
  io = _('path', { d: 'M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z' }, null, -1),
  co = _('path', { d: 'M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z' }, null, -1),
  uo = [ro, lo, io, co];
function _o(n, e) {
  return a(), i('svg', ao, uo);
}
const vo = m(oo, [['render', _o]]),
  po = ['aria-expanded'],
  ho = { class: 'menu-text' },
  fo = g({
    __name: 'VPLocalNav',
    props: { open: { type: Boolean } },
    emits: ['open-menu'],
    setup(n) {
      const { theme: e, frontmatter: t } = w(),
        { hasSidebar: o } = D(),
        { y: s } = je(),
        r = ge([]),
        d = V(0);
      z(() => {
        d.value = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--vp-nav-height'));
      }),
        J(() => {
          r.value = Ve(t.value.outline ?? e.value.outline);
        });
      const v = $(() => r.value.length === 0 && !o.value),
        c = $(() => ({ VPLocalNav: !0, fixed: v.value, 'reached-top': s.value >= d.value }));
      return (y, S) =>
        l(t).layout !== 'home' && (!v.value || l(s) >= d.value)
          ? (a(),
            i(
              'div',
              { key: 0, class: A(c.value) },
              [
                l(o)
                  ? (a(),
                    i(
                      'button',
                      {
                        key: 0,
                        class: 'menu',
                        'aria-expanded': y.open,
                        'aria-controls': 'VPSidebarNav',
                        onClick: S[0] || (S[0] = (T) => y.$emit('open-menu')),
                      },
                      [h(vo, { class: 'menu-icon' }), _('span', ho, L(l(e).sidebarMenuLabel || 'Menu'), 1)],
                      8,
                      po,
                    ))
                  : f('', !0),
                h(so, { headers: r.value, navHeight: d.value }, null, 8, ['headers', 'navHeight']),
              ],
              2,
            ))
          : f('', !0);
    },
  });
const mo = m(fo, [['__scopeId', 'data-v-779ed09d']]);
function go() {
  const n = V(!1);
  function e() {
    (n.value = !0), window.addEventListener('resize', s);
  }
  function t() {
    (n.value = !1), window.removeEventListener('resize', s);
  }
  function o() {
    n.value ? t() : e();
  }
  function s() {
    window.outerWidth >= 768 && t();
  }
  const r = ee();
  return q(() => r.path, t), { isScreenOpen: n, openScreen: e, closeScreen: t, toggleScreen: o };
}
const yo = {},
  bo = { class: 'VPSwitch', type: 'button', role: 'switch' },
  $o = { class: 'check' },
  ko = { key: 0, class: 'icon' };
function Po(n, e) {
  return (
    a(),
    i('button', bo, [
      _('span', $o, [n.$slots.default ? (a(), i('span', ko, [u(n.$slots, 'default', {}, void 0, !0)])) : f('', !0)]),
    ])
  );
}
const Vo = m(yo, [
    ['render', Po],
    ['__scopeId', 'data-v-68ee8074'],
  ]),
  wo = {},
  So = { xmlns: 'http://www.w3.org/2000/svg', 'aria-hidden': 'true', focusable: 'false', viewBox: '0 0 24 24' },
  Lo = ut(
    '<path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>',
    9,
  ),
  Mo = [Lo];
function To(n, e) {
  return a(), i('svg', So, Mo);
}
const Co = m(wo, [['render', To]]),
  Bo = {},
  Io = { xmlns: 'http://www.w3.org/2000/svg', 'aria-hidden': 'true', focusable: 'false', viewBox: '0 0 24 24' },
  Ao = _(
    'path',
    {
      d: 'M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z',
    },
    null,
    -1,
  ),
  No = [Ao];
function xo(n, e) {
  return a(), i('svg', Io, No);
}
const Ho = m(Bo, [['render', xo]]),
  Eo = g({
    __name: 'VPSwitchAppearance',
    setup(n) {
      const { site: e, isDark: t } = w(),
        o = V(!1),
        s = Ge ? r() : () => {};
      z(() => {
        o.value = document.documentElement.classList.contains('dark');
      });
      function r() {
        const d = window.matchMedia('(prefers-color-scheme: dark)'),
          v = document.documentElement.classList;
        let c = localStorage.getItem(xe),
          y = (e.value.appearance === 'dark' && c == null) || (c === 'auto' || c == null ? d.matches : c === 'dark');
        d.onchange = (C) => {
          c === 'auto' && T((y = C.matches));
        };
        function S() {
          T((y = !y)),
            (c = y ? (d.matches ? 'auto' : 'dark') : d.matches ? 'light' : 'auto'),
            localStorage.setItem(xe, c);
        }
        function T(C) {
          const k = document.createElement('style');
          (k.type = 'text/css'),
            k.appendChild(
              document.createTextNode(`:not(.VPSwitchAppearance):not(.VPSwitchAppearance *) {
  -webkit-transition: none !important;
  -moz-transition: none !important;
  -o-transition: none !important;
  -ms-transition: none !important;
  transition: none !important;
}`),
            ),
            document.head.appendChild(k),
            (o.value = C),
            v[C ? 'add' : 'remove']('dark'),
            window.getComputedStyle(k).opacity,
            document.head.removeChild(k);
        }
        return S;
      }
      return (
        q(o, (d) => {
          t.value = d;
        }),
        (d, v) => (
          a(),
          b(
            Vo,
            { title: 'toggle dark mode', class: 'VPSwitchAppearance', 'aria-checked': o.value, onClick: l(s) },
            { default: p(() => [h(Co, { class: 'sun' }), h(Ho, { class: 'moon' })]), _: 1 },
            8,
            ['aria-checked', 'onClick'],
          )
        )
      );
    },
  });
const Me = m(Eo, [['__scopeId', 'data-v-70fc03bf']]),
  zo = { key: 0, class: 'VPNavBarAppearance' },
  Do = g({
    __name: 'VPNavBarAppearance',
    setup(n) {
      const { site: e } = w();
      return (t, o) => (l(e).appearance ? (a(), i('div', zo, [h(Me)])) : f('', !0));
    },
  });
const Fo = m(Do, [['__scopeId', 'data-v-3d1db0a8']]),
  Te = V();
let We = !1,
  de = 0;
function Oo(n) {
  const e = V(!1);
  if (Ge) {
    !We && Go(), de++;
    const t = q(Te, (o) => {
      var s, r, d;
      o === n.el.value || ((s = n.el.value) != null && s.contains(o))
        ? ((e.value = !0), (r = n.onFocus) == null || r.call(n))
        : ((e.value = !1), (d = n.onBlur) == null || d.call(n));
    });
    me(() => {
      t(), de--, de || Ro();
    });
  }
  return De(e);
}
function Go() {
  document.addEventListener('focusin', Ye), (We = !0), (Te.value = document.activeElement);
}
function Ro() {
  document.removeEventListener('focusin', Ye);
}
function Ye() {
  Te.value = document.activeElement;
}
const Uo = {},
  jo = { xmlns: 'http://www.w3.org/2000/svg', 'aria-hidden': 'true', focusable: 'false', viewBox: '0 0 24 24' },
  qo = _(
    'path',
    {
      d: 'M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z',
    },
    null,
    -1,
  ),
  Wo = [qo];
function Yo(n, e) {
  return a(), i('svg', jo, Wo);
}
const Ke = m(Uo, [['render', Yo]]),
  Ko = {},
  Xo = { xmlns: 'http://www.w3.org/2000/svg', 'aria-hidden': 'true', focusable: 'false', viewBox: '0 0 24 24' },
  Qo = _('circle', { cx: '12', cy: '12', r: '2' }, null, -1),
  Jo = _('circle', { cx: '19', cy: '12', r: '2' }, null, -1),
  Zo = _('circle', { cx: '5', cy: '12', r: '2' }, null, -1),
  ea = [Qo, Jo, Zo];
function ta(n, e) {
  return a(), i('svg', Xo, ea);
}
const na = m(Ko, [['render', ta]]),
  sa = { class: 'VPMenuLink' },
  oa = g({
    __name: 'VPMenuLink',
    props: { item: {} },
    setup(n) {
      const { page: e } = w();
      return (t, o) => (
        a(),
        i('div', sa, [
          h(
            O,
            {
              class: A({ active: l(W)(l(e).relativePath, t.item.activeMatch || t.item.link, !!t.item.activeMatch) }),
              href: t.item.link,
              target: t.item.target,
              rel: t.item.rel,
            },
            { default: p(() => [N(L(t.item.text), 1)]), _: 1 },
            8,
            ['class', 'href', 'target', 'rel'],
          ),
        ])
      );
    },
  });
const ue = m(oa, [['__scopeId', 'data-v-c31b71ab']]),
  aa = { class: 'VPMenuGroup' },
  ra = { key: 0, class: 'title' },
  la = g({
    __name: 'VPMenuGroup',
    props: { text: {}, items: {} },
    setup(n) {
      return (e, t) => (
        a(),
        i('div', aa, [
          e.text ? (a(), i('p', ra, L(e.text), 1)) : f('', !0),
          (a(!0),
          i(
            B,
            null,
            x(
              e.items,
              (o) => (
                a(), i(B, null, ['link' in o ? (a(), b(ue, { key: 0, item: o }, null, 8, ['item'])) : f('', !0)], 64)
              ),
            ),
            256,
          )),
        ])
      );
    },
  });
const ia = m(la, [['__scopeId', 'data-v-8cf08503']]),
  ca = { class: 'VPMenu' },
  ua = { key: 0, class: 'items' },
  da = g({
    __name: 'VPMenu',
    props: { items: {} },
    setup(n) {
      return (e, t) => (
        a(),
        i('div', ca, [
          e.items
            ? (a(),
              i('div', ua, [
                (a(!0),
                i(
                  B,
                  null,
                  x(
                    e.items,
                    (o) => (
                      a(),
                      i(
                        B,
                        { key: o.text },
                        [
                          'link' in o
                            ? (a(), b(ue, { key: 0, item: o }, null, 8, ['item']))
                            : (a(), b(ia, { key: 1, text: o.text, items: o.items }, null, 8, ['text', 'items'])),
                        ],
                        64,
                      )
                    ),
                  ),
                  128,
                )),
              ]))
            : f('', !0),
          u(e.$slots, 'default', {}, void 0, !0),
        ])
      );
    },
  });
const _a = m(da, [['__scopeId', 'data-v-e0d4efb4']]),
  va = ['aria-expanded', 'aria-label'],
  pa = { key: 0, class: 'text' },
  ha = { class: 'menu' },
  fa = g({
    __name: 'VPFlyout',
    props: { icon: {}, button: {}, label: {}, items: {} },
    setup(n) {
      const e = V(!1),
        t = V();
      Oo({ el: t, onBlur: o });
      function o() {
        e.value = !1;
      }
      return (s, r) => (
        a(),
        i(
          'div',
          {
            class: 'VPFlyout',
            ref_key: 'el',
            ref: t,
            onMouseenter: r[1] || (r[1] = (d) => (e.value = !0)),
            onMouseleave: r[2] || (r[2] = (d) => (e.value = !1)),
          },
          [
            _(
              'button',
              {
                type: 'button',
                class: 'button',
                'aria-haspopup': 'true',
                'aria-expanded': e.value,
                'aria-label': s.label,
                onClick: r[0] || (r[0] = (d) => (e.value = !e.value)),
              },
              [
                s.button || s.icon
                  ? (a(),
                    i('span', pa, [
                      s.icon ? (a(), b(U(s.icon), { key: 0, class: 'option-icon' })) : f('', !0),
                      N(' ' + L(s.button) + ' ', 1),
                      h(Ke, { class: 'text-icon' }),
                    ]))
                  : (a(), b(na, { key: 1, class: 'icon' })),
              ],
              8,
              va,
            ),
            _('div', ha, [
              h(_a, { items: s.items }, { default: p(() => [u(s.$slots, 'default', {}, void 0, !0)]), _: 3 }, 8, [
                'items',
              ]),
            ]),
          ],
          544,
        )
      );
    },
  });
const Ce = m(fa, [['__scopeId', 'data-v-235bea56']]),
  ma = {
    discord:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>',
    facebook:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
    github:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
    instagram:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>',
    linkedin:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
    mastodon:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Mastodon</title><path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"/></svg>',
    slack:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Slack</title><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>',
    twitter:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>',
    youtube:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
  },
  ga = ['href', 'aria-label', 'innerHTML'],
  ya = g({
    __name: 'VPSocialLink',
    props: { icon: {}, link: {}, ariaLabel: {} },
    setup(n) {
      const e = n,
        t = $(() => (typeof e.icon == 'object' ? e.icon.svg : ma[e.icon]));
      return (o, s) => (
        a(),
        i(
          'a',
          {
            class: 'VPSocialLink no-icon',
            href: o.link,
            'aria-label': o.ariaLabel ?? (typeof o.icon == 'string' ? o.icon : ''),
            target: '_blank',
            rel: 'noopener',
            innerHTML: t.value,
          },
          null,
          8,
          ga,
        )
      );
    },
  });
const ba = m(ya, [['__scopeId', 'data-v-b1c3bf8a']]),
  $a = { class: 'VPSocialLinks' },
  ka = g({
    __name: 'VPSocialLinks',
    props: { links: {} },
    setup(n) {
      return (e, t) => (
        a(),
        i('div', $a, [
          (a(!0),
          i(
            B,
            null,
            x(
              e.links,
              ({ link: o, icon: s, ariaLabel: r }) => (
                a(), b(ba, { key: o, icon: s, link: o, ariaLabel: r }, null, 8, ['icon', 'link', 'ariaLabel'])
              ),
            ),
            128,
          )),
        ])
      );
    },
  });
const Be = m(ka, [['__scopeId', 'data-v-fcce9ff5']]),
  Pa = { key: 0, class: 'group translations' },
  Va = { class: 'trans-title' },
  wa = { key: 1, class: 'group' },
  Sa = { class: 'item appearance' },
  La = { class: 'label' },
  Ma = { class: 'appearance-action' },
  Ta = { key: 2, class: 'group' },
  Ca = { class: 'item social-links' },
  Ba = g({
    __name: 'VPNavBarExtra',
    setup(n) {
      const { site: e, theme: t } = w(),
        { localeLinks: o, currentLang: s } = te({ correspondingLink: !0 }),
        r = $(() => (o.value.length && s.value.label) || e.value.appearance || t.value.socialLinks);
      return (d, v) =>
        r.value
          ? (a(),
            b(
              Ce,
              { key: 0, class: 'VPNavBarExtra', label: 'extra navigation' },
              {
                default: p(() => [
                  l(o).length && l(s).label
                    ? (a(),
                      i('div', Pa, [
                        _('p', Va, L(l(s).label), 1),
                        (a(!0),
                        i(
                          B,
                          null,
                          x(l(o), (c) => (a(), b(ue, { key: c.link, item: c }, null, 8, ['item']))),
                          128,
                        )),
                      ]))
                    : f('', !0),
                  l(e).appearance
                    ? (a(),
                      i('div', wa, [
                        _('div', Sa, [
                          _('p', La, L(l(t).darkModeSwitchLabel || 'Appearance'), 1),
                          _('div', Ma, [h(Me)]),
                        ]),
                      ]))
                    : f('', !0),
                  l(t).socialLinks
                    ? (a(),
                      i('div', Ta, [
                        _('div', Ca, [
                          h(Be, { class: 'social-links-list', links: l(t).socialLinks }, null, 8, ['links']),
                        ]),
                      ]))
                    : f('', !0),
                ]),
                _: 1,
              },
            ))
          : f('', !0);
    },
  });
const Ia = m(Ba, [['__scopeId', 'data-v-43b6a1da']]),
  Aa = (n) => (H('data-v-6025d9a0'), (n = n()), E(), n),
  Na = ['aria-expanded'],
  xa = Aa(() =>
    _(
      'span',
      { class: 'container' },
      [_('span', { class: 'top' }), _('span', { class: 'middle' }), _('span', { class: 'bottom' })],
      -1,
    ),
  ),
  Ha = [xa],
  Ea = g({
    __name: 'VPNavBarHamburger',
    props: { active: { type: Boolean } },
    emits: ['click'],
    setup(n) {
      return (e, t) => (
        a(),
        i(
          'button',
          {
            type: 'button',
            class: A(['VPNavBarHamburger', { active: e.active }]),
            'aria-label': 'mobile navigation',
            'aria-expanded': e.active,
            'aria-controls': 'VPNavScreen',
            onClick: t[0] || (t[0] = (o) => e.$emit('click')),
          },
          Ha,
          10,
          Na,
        )
      );
    },
  });
const za = m(Ea, [['__scopeId', 'data-v-6025d9a0']]),
  Da = g({
    __name: 'VPNavBarMenuLink',
    props: { item: {} },
    setup(n) {
      const { page: e } = w();
      return (t, o) => (
        a(),
        b(
          O,
          {
            class: A({
              VPNavBarMenuLink: !0,
              active: l(W)(l(e).relativePath, t.item.activeMatch || t.item.link, !!t.item.activeMatch),
            }),
            href: t.item.link,
            target: t.item.target,
            rel: t.item.rel,
            tabindex: '0',
          },
          { default: p(() => [N(L(t.item.text), 1)]), _: 1 },
          8,
          ['class', 'href', 'target', 'rel'],
        )
      );
    },
  });
const Fa = m(Da, [['__scopeId', 'data-v-0db8cb85']]),
  Oa = g({
    __name: 'VPNavBarMenuGroup',
    props: { item: {} },
    setup(n) {
      const { page: e } = w();
      return (t, o) => (
        a(),
        b(
          Ce,
          {
            class: A({
              VPNavBarMenuGroup: !0,
              active: l(W)(l(e).relativePath, t.item.activeMatch, !!t.item.activeMatch),
            }),
            button: t.item.text,
            items: t.item.items,
          },
          null,
          8,
          ['class', 'button', 'items'],
        )
      );
    },
  }),
  Ga = (n) => (H('data-v-cae0bd79'), (n = n()), E(), n),
  Ra = { key: 0, 'aria-labelledby': 'main-nav-aria-label', class: 'VPNavBarMenu' },
  Ua = Ga(() => _('span', { id: 'main-nav-aria-label', class: 'visually-hidden' }, 'Main Navigation', -1)),
  ja = g({
    __name: 'VPNavBarMenu',
    setup(n) {
      const { theme: e } = w();
      return (t, o) =>
        l(e).nav
          ? (a(),
            i('nav', Ra, [
              Ua,
              (a(!0),
              i(
                B,
                null,
                x(
                  l(e).nav,
                  (s) => (
                    a(),
                    i(
                      B,
                      { key: s.text },
                      [
                        'link' in s
                          ? (a(), b(Fa, { key: 0, item: s }, null, 8, ['item']))
                          : (a(), b(Oa, { key: 1, item: s }, null, 8, ['item'])),
                      ],
                      64,
                    )
                  ),
                ),
                128,
              )),
            ]))
          : f('', !0);
    },
  });
const qa = m(ja, [['__scopeId', 'data-v-cae0bd79']]);
const Wa = { type: 'button', class: 'DocSearch DocSearch-Button', 'aria-label': 'Search' },
  Ya = { class: 'DocSearch-Button-Container' },
  Ka = _(
    'svg',
    { class: 'DocSearch-Search-Icon', width: '20', height: '20', viewBox: '0 0 20 20', 'aria-label': 'search icon' },
    [
      _('path', {
        d: 'M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z',
        stroke: 'currentColor',
        fill: 'none',
        'fill-rule': 'evenodd',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
      }),
    ],
    -1,
  ),
  Xa = { class: 'DocSearch-Button-Placeholder' },
  Qa = _(
    'span',
    { class: 'DocSearch-Button-Keys' },
    [_('kbd', { class: 'DocSearch-Button-Key' }), _('kbd', { class: 'DocSearch-Button-Key' }, 'K')],
    -1,
  ),
  Ee = g({
    __name: 'VPNavBarSearchButton',
    props: { placeholder: {} },
    setup(n) {
      return (e, t) => (a(), i('button', Wa, [_('span', Ya, [Ka, _('span', Xa, L(e.placeholder), 1)]), Qa]));
    },
  });
const Ja = { id: 'local-search' },
  Za = { key: 1, id: 'docsearch' },
  er = g({
    __name: 'VPNavBarSearch',
    setup(n) {
      const e = () => null,
        t = () => null,
        { theme: o, localeIndex: s } = w(),
        r = V(!1),
        d = V(!1),
        v = $(() => {
          var I, M, P, F, se, Y, Ne;
          const k = ((I = o.value.search) == null ? void 0 : I.options) ?? o.value.algolia;
          return (
            ((se =
              (F =
                (P = (M = k == null ? void 0 : k.locales) == null ? void 0 : M[s.value]) == null
                  ? void 0
                  : P.translations) == null
                ? void 0
                : F.button) == null
              ? void 0
              : se.buttonText) ||
            ((Ne = (Y = k == null ? void 0 : k.translations) == null ? void 0 : Y.button) == null
              ? void 0
              : Ne.buttonText) ||
            'Search'
          );
        });
      z(() => {});
      function c() {
        r.value || ((r.value = !0), setTimeout(y, 16));
      }
      function y() {
        const k = new Event('keydown');
        (k.key = 'k'),
          (k.metaKey = !0),
          window.dispatchEvent(k),
          setTimeout(() => {
            document.querySelector('.DocSearch-Modal') || y();
          }, 16);
      }
      const S = V(!1),
        T = V("'Meta'");
      z(() => {
        T.value = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? "'⌘'" : "'Ctrl'";
      });
      const C = '';
      return (k, I) => {
        var M;
        return (
          a(),
          i(
            'div',
            { class: 'VPNavBarSearch', style: Oe({ '--vp-meta-key': T.value }) },
            [
              l(C) === 'local'
                ? (a(),
                  i(
                    B,
                    { key: 0 },
                    [
                      S.value
                        ? (a(),
                          b(
                            l(e),
                            { key: 0, placeholder: v.value, onClose: I[0] || (I[0] = (P) => (S.value = !1)) },
                            null,
                            8,
                            ['placeholder'],
                          ))
                        : f('', !0),
                      _('div', Ja, [
                        h(Ee, { placeholder: v.value, onClick: I[1] || (I[1] = (P) => (S.value = !0)) }, null, 8, [
                          'placeholder',
                        ]),
                      ]),
                    ],
                    64,
                  ))
                : l(C) === 'algolia'
                ? (a(),
                  i(
                    B,
                    { key: 1 },
                    [
                      r.value
                        ? (a(),
                          b(
                            l(t),
                            {
                              key: 0,
                              algolia: ((M = l(o).search) == null ? void 0 : M.options) ?? l(o).algolia,
                              onVnodeBeforeMount: I[2] || (I[2] = (P) => (d.value = !0)),
                            },
                            null,
                            8,
                            ['algolia'],
                          ))
                        : f('', !0),
                      d.value
                        ? f('', !0)
                        : (a(), i('div', Za, [h(Ee, { placeholder: v.value, onClick: c }, null, 8, ['placeholder'])])),
                    ],
                    64,
                  ))
                : f('', !0),
            ],
            4,
          )
        );
      };
    },
  });
const tr = g({
  __name: 'VPNavBarSocialLinks',
  setup(n) {
    const { theme: e } = w();
    return (t, o) =>
      l(e).socialLinks
        ? (a(), b(Be, { key: 0, class: 'VPNavBarSocialLinks', links: l(e).socialLinks }, null, 8, ['links']))
        : f('', !0);
  },
});
const nr = m(tr, [['__scopeId', 'data-v-c2652e3d']]),
  sr = ['href'],
  or = g({
    __name: 'VPNavBarTitle',
    setup(n) {
      const { site: e, theme: t } = w(),
        { hasSidebar: o } = D(),
        { currentLang: s } = te();
      return (r, d) => (
        a(),
        i(
          'div',
          { class: A(['VPNavBarTitle', { 'has-sidebar': l(o) }]) },
          [
            _(
              'a',
              { class: 'title', href: l(Z)(l(s).link) },
              [
                u(r.$slots, 'nav-bar-title-before', {}, void 0, !0),
                l(t).logo ? (a(), b(Le, { key: 0, class: 'logo', image: l(t).logo }, null, 8, ['image'])) : f('', !0),
                l(t).siteTitle
                  ? (a(), i(B, { key: 1 }, [N(L(l(t).siteTitle), 1)], 64))
                  : l(t).siteTitle === void 0
                  ? (a(), i(B, { key: 2 }, [N(L(l(e).title), 1)], 64))
                  : f('', !0),
                u(r.$slots, 'nav-bar-title-after', {}, void 0, !0),
              ],
              8,
              sr,
            ),
          ],
          2,
        )
      );
    },
  });
const ar = m(or, [['__scopeId', 'data-v-75724064']]),
  rr = {},
  lr = { xmlns: 'http://www.w3.org/2000/svg', 'aria-hidden': 'true', focusable: 'false', viewBox: '0 0 24 24' },
  ir = _('path', { d: 'M0 0h24v24H0z', fill: 'none' }, null, -1),
  cr = _(
    'path',
    {
      d: ' M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z ',
      class: 'css-c4d79v',
    },
    null,
    -1,
  ),
  ur = [ir, cr];
function dr(n, e) {
  return a(), i('svg', lr, ur);
}
const Xe = m(rr, [['render', dr]]),
  _r = { class: 'items' },
  vr = { class: 'title' },
  pr = g({
    __name: 'VPNavBarTranslations',
    setup(n) {
      const { theme: e } = w(),
        { localeLinks: t, currentLang: o } = te({ correspondingLink: !0 });
      return (s, r) =>
        l(t).length && l(o).label
          ? (a(),
            b(
              Ce,
              { key: 0, class: 'VPNavBarTranslations', icon: Xe, label: l(e).langMenuLabel || 'Change language' },
              {
                default: p(() => [
                  _('div', _r, [
                    _('p', vr, L(l(o).label), 1),
                    (a(!0),
                    i(
                      B,
                      null,
                      x(l(t), (d) => (a(), b(ue, { key: d.link, item: d }, null, 8, ['item']))),
                      128,
                    )),
                  ]),
                ]),
                _: 1,
              },
              8,
              ['label'],
            ))
          : f('', !0);
    },
  });
const hr = m(pr, [['__scopeId', 'data-v-40135c53']]),
  fr = (n) => (H('data-v-a18a9089'), (n = n()), E(), n),
  mr = { class: 'container' },
  gr = { class: 'title' },
  yr = { class: 'content' },
  br = fr(() => _('div', { class: 'curtain' }, null, -1)),
  $r = { class: 'content-body' },
  kr = g({
    __name: 'VPNavBar',
    props: { isScreenOpen: { type: Boolean } },
    emits: ['toggle-screen'],
    setup(n) {
      const { y: e } = je(),
        { hasSidebar: t } = D(),
        o = $(() => ({ 'has-sidebar': t.value, fill: e.value > 0 }));
      return (s, r) => (
        a(),
        i(
          'div',
          { class: A(['VPNavBar', o.value]) },
          [
            _('div', mr, [
              _('div', gr, [
                h(ar, null, {
                  'nav-bar-title-before': p(() => [u(s.$slots, 'nav-bar-title-before', {}, void 0, !0)]),
                  'nav-bar-title-after': p(() => [u(s.$slots, 'nav-bar-title-after', {}, void 0, !0)]),
                  _: 3,
                }),
              ]),
              _('div', yr, [
                br,
                _('div', $r, [
                  u(s.$slots, 'nav-bar-content-before', {}, void 0, !0),
                  h(er, { class: 'search' }),
                  h(qa, { class: 'menu' }),
                  h(hr, { class: 'translations' }),
                  h(Fo, { class: 'appearance' }),
                  h(nr, { class: 'social-links' }),
                  h(Ia, { class: 'extra' }),
                  u(s.$slots, 'nav-bar-content-after', {}, void 0, !0),
                  h(
                    za,
                    {
                      class: 'hamburger',
                      active: s.isScreenOpen,
                      onClick: r[0] || (r[0] = (d) => s.$emit('toggle-screen')),
                    },
                    null,
                    8,
                    ['active'],
                  ),
                ]),
              ]),
            ]),
          ],
          2,
        )
      );
    },
  });
const Pr = m(kr, [['__scopeId', 'data-v-a18a9089']]);
function Vr(n) {
  if (Array.isArray(n)) {
    for (var e = 0, t = Array(n.length); e < n.length; e++) t[e] = n[e];
    return t;
  } else return Array.from(n);
}
var Ie = !1;
if (typeof window < 'u') {
  var ze = {
    get passive() {
      Ie = !0;
    },
  };
  window.addEventListener('testPassive', null, ze), window.removeEventListener('testPassive', null, ze);
}
var re =
    typeof window < 'u' &&
    window.navigator &&
    window.navigator.platform &&
    (/iP(ad|hone|od)/.test(window.navigator.platform) ||
      (window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1)),
  j = [],
  le = !1,
  Ae = -1,
  K = void 0,
  G = void 0,
  X = void 0,
  Qe = function (e) {
    return j.some(function (t) {
      return !!(t.options.allowTouchMove && t.options.allowTouchMove(e));
    });
  },
  ie = function (e) {
    var t = e || window.event;
    return Qe(t.target) || t.touches.length > 1 ? !0 : (t.preventDefault && t.preventDefault(), !1);
  },
  wr = function (e) {
    if (X === void 0) {
      var t = !!e && e.reserveScrollBarGap === !0,
        o = window.innerWidth - document.documentElement.clientWidth;
      if (t && o > 0) {
        var s = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'), 10);
        (X = document.body.style.paddingRight), (document.body.style.paddingRight = s + o + 'px');
      }
    }
    K === void 0 && ((K = document.body.style.overflow), (document.body.style.overflow = 'hidden'));
  },
  Sr = function () {
    X !== void 0 && ((document.body.style.paddingRight = X), (X = void 0)),
      K !== void 0 && ((document.body.style.overflow = K), (K = void 0));
  },
  Lr = function () {
    return window.requestAnimationFrame(function () {
      if (G === void 0) {
        G = { position: document.body.style.position, top: document.body.style.top, left: document.body.style.left };
        var e = window,
          t = e.scrollY,
          o = e.scrollX,
          s = e.innerHeight;
        (document.body.style.position = 'fixed'),
          (document.body.style.top = -t),
          (document.body.style.left = -o),
          setTimeout(function () {
            return window.requestAnimationFrame(function () {
              var r = s - window.innerHeight;
              r && t >= s && (document.body.style.top = -(t + r));
            });
          }, 300);
      }
    });
  },
  Mr = function () {
    if (G !== void 0) {
      var e = -parseInt(document.body.style.top, 10),
        t = -parseInt(document.body.style.left, 10);
      (document.body.style.position = G.position),
        (document.body.style.top = G.top),
        (document.body.style.left = G.left),
        window.scrollTo(t, e),
        (G = void 0);
    }
  },
  Tr = function (e) {
    return e ? e.scrollHeight - e.scrollTop <= e.clientHeight : !1;
  },
  Cr = function (e, t) {
    var o = e.targetTouches[0].clientY - Ae;
    return Qe(e.target)
      ? !1
      : (t && t.scrollTop === 0 && o > 0) || (Tr(t) && o < 0)
      ? ie(e)
      : (e.stopPropagation(), !0);
  },
  Je = function (e, t) {
    if (!e) {
      console.error(
        'disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.',
      );
      return;
    }
    if (
      !j.some(function (s) {
        return s.targetElement === e;
      })
    ) {
      var o = { targetElement: e, options: t || {} };
      (j = [].concat(Vr(j), [o])),
        re ? Lr() : wr(t),
        re &&
          ((e.ontouchstart = function (s) {
            s.targetTouches.length === 1 && (Ae = s.targetTouches[0].clientY);
          }),
          (e.ontouchmove = function (s) {
            s.targetTouches.length === 1 && Cr(s, e);
          }),
          le || (document.addEventListener('touchmove', ie, Ie ? { passive: !1 } : void 0), (le = !0)));
    }
  },
  Ze = function () {
    re &&
      (j.forEach(function (e) {
        (e.targetElement.ontouchstart = null), (e.targetElement.ontouchmove = null);
      }),
      le && (document.removeEventListener('touchmove', ie, Ie ? { passive: !1 } : void 0), (le = !1)),
      (Ae = -1)),
      re ? Mr() : Sr(),
      (j = []);
  };
const Br = g({
  __name: 'VPNavScreenMenuLink',
  props: { item: {} },
  setup(n) {
    const e = ye('close-screen');
    return (t, o) => (
      a(),
      b(
        O,
        { class: 'VPNavScreenMenuLink', href: t.item.link, target: t.item.target, rel: t.item.rel, onClick: l(e) },
        { default: p(() => [N(L(t.item.text), 1)]), _: 1 },
        8,
        ['href', 'target', 'rel', 'onClick'],
      )
    );
  },
});
const Ir = m(Br, [['__scopeId', 'data-v-e8f1abcf']]),
  Ar = {},
  Nr = { xmlns: 'http://www.w3.org/2000/svg', 'aria-hidden': 'true', focusable: 'false', viewBox: '0 0 24 24' },
  xr = _(
    'path',
    {
      d: 'M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z',
    },
    null,
    -1,
  ),
  Hr = [xr];
function Er(n, e) {
  return a(), i('svg', Nr, Hr);
}
const zr = m(Ar, [['render', Er]]),
  Dr = g({
    __name: 'VPNavScreenMenuGroupLink',
    props: { item: {} },
    setup(n) {
      const e = ye('close-screen');
      return (t, o) => (
        a(),
        b(
          O,
          {
            class: 'VPNavScreenMenuGroupLink',
            href: t.item.link,
            target: t.item.target,
            rel: t.item.rel,
            onClick: l(e),
          },
          { default: p(() => [N(L(t.item.text), 1)]), _: 1 },
          8,
          ['href', 'target', 'rel', 'onClick'],
        )
      );
    },
  });
const et = m(Dr, [['__scopeId', 'data-v-7a2b88b5']]),
  Fr = { class: 'VPNavScreenMenuGroupSection' },
  Or = { key: 0, class: 'title' },
  Gr = g({
    __name: 'VPNavScreenMenuGroupSection',
    props: { text: {}, items: {} },
    setup(n) {
      return (e, t) => (
        a(),
        i('div', Fr, [
          e.text ? (a(), i('p', Or, L(e.text), 1)) : f('', !0),
          (a(!0),
          i(
            B,
            null,
            x(e.items, (o) => (a(), b(et, { key: o.text, item: o }, null, 8, ['item']))),
            128,
          )),
        ])
      );
    },
  });
const Rr = m(Gr, [['__scopeId', 'data-v-db2faa45']]),
  Ur = ['aria-controls', 'aria-expanded'],
  jr = { class: 'button-text' },
  qr = ['id'],
  Wr = { key: 1, class: 'group' },
  Yr = g({
    __name: 'VPNavScreenMenuGroup',
    props: { text: {}, items: {} },
    setup(n) {
      const e = n,
        t = V(!1),
        o = $(() => `NavScreenGroup-${e.text.replace(' ', '-').toLowerCase()}`);
      function s() {
        t.value = !t.value;
      }
      return (r, d) => (
        a(),
        i(
          'div',
          { class: A(['VPNavScreenMenuGroup', { open: t.value }]) },
          [
            _(
              'button',
              { class: 'button', 'aria-controls': o.value, 'aria-expanded': t.value, onClick: s },
              [_('span', jr, L(r.text), 1), h(zr, { class: 'button-icon' })],
              8,
              Ur,
            ),
            _(
              'div',
              { id: o.value, class: 'items' },
              [
                (a(!0),
                i(
                  B,
                  null,
                  x(
                    r.items,
                    (v) => (
                      a(),
                      i(
                        B,
                        { key: v.text },
                        [
                          'link' in v
                            ? (a(), i('div', { key: v.text, class: 'item' }, [h(et, { item: v }, null, 8, ['item'])]))
                            : (a(),
                              i('div', Wr, [h(Rr, { text: v.text, items: v.items }, null, 8, ['text', 'items'])])),
                        ],
                        64,
                      )
                    ),
                  ),
                  128,
                )),
              ],
              8,
              qr,
            ),
          ],
          2,
        )
      );
    },
  });
const Kr = m(Yr, [['__scopeId', 'data-v-7a735fe5']]),
  Xr = { key: 0, class: 'VPNavScreenMenu' },
  Qr = g({
    __name: 'VPNavScreenMenu',
    setup(n) {
      const { theme: e } = w();
      return (t, o) =>
        l(e).nav
          ? (a(),
            i('nav', Xr, [
              (a(!0),
              i(
                B,
                null,
                x(
                  l(e).nav,
                  (s) => (
                    a(),
                    i(
                      B,
                      { key: s.text },
                      [
                        'link' in s
                          ? (a(), b(Ir, { key: 0, item: s }, null, 8, ['item']))
                          : (a(), b(Kr, { key: 1, text: s.text || '', items: s.items }, null, 8, ['text', 'items'])),
                      ],
                      64,
                    )
                  ),
                ),
                128,
              )),
            ]))
          : f('', !0);
    },
  }),
  Jr = { key: 0, class: 'VPNavScreenAppearance' },
  Zr = { class: 'text' },
  el = g({
    __name: 'VPNavScreenAppearance',
    setup(n) {
      const { site: e, theme: t } = w();
      return (o, s) =>
        l(e).appearance
          ? (a(), i('div', Jr, [_('p', Zr, L(l(t).darkModeSwitchLabel || 'Appearance'), 1), h(Me)]))
          : f('', !0);
    },
  });
const tl = m(el, [['__scopeId', 'data-v-fef4b7b3']]),
  nl = { class: 'list' },
  sl = g({
    __name: 'VPNavScreenTranslations',
    setup(n) {
      const { localeLinks: e, currentLang: t } = te({ correspondingLink: !0 }),
        o = V(!1);
      function s() {
        o.value = !o.value;
      }
      return (r, d) =>
        l(e).length && l(t).label
          ? (a(),
            i(
              'div',
              { key: 0, class: A(['VPNavScreenTranslations', { open: o.value }]) },
              [
                _('button', { class: 'title', onClick: s }, [
                  h(Xe, { class: 'icon lang' }),
                  N(' ' + L(l(t).label) + ' ', 1),
                  h(Ke, { class: 'icon chevron' }),
                ]),
                _('ul', nl, [
                  (a(!0),
                  i(
                    B,
                    null,
                    x(
                      l(e),
                      (v) => (
                        a(),
                        i('li', { key: v.link, class: 'item' }, [
                          h(O, { class: 'link', href: v.link }, { default: p(() => [N(L(v.text), 1)]), _: 2 }, 1032, [
                            'href',
                          ]),
                        ])
                      ),
                    ),
                    128,
                  )),
                ]),
              ],
              2,
            ))
          : f('', !0);
    },
  });
const ol = m(sl, [['__scopeId', 'data-v-f4115792']]),
  al = g({
    __name: 'VPNavScreenSocialLinks',
    setup(n) {
      const { theme: e } = w();
      return (t, o) =>
        l(e).socialLinks
          ? (a(), b(Be, { key: 0, class: 'VPNavScreenSocialLinks', links: l(e).socialLinks }, null, 8, ['links']))
          : f('', !0);
    },
  }),
  rl = { class: 'container' },
  ll = g({
    __name: 'VPNavScreen',
    props: { open: { type: Boolean } },
    setup(n) {
      const e = V(null);
      function t() {
        Je(e.value, { reserveScrollBarGap: !0 });
      }
      function o() {
        Ze();
      }
      return (s, r) => (
        a(),
        b(
          he,
          { name: 'fade', onEnter: t, onAfterLeave: o },
          {
            default: p(() => [
              s.open
                ? (a(),
                  i(
                    'div',
                    { key: 0, class: 'VPNavScreen', ref_key: 'screen', ref: e, id: 'VPNavScreen' },
                    [
                      _('div', rl, [
                        u(s.$slots, 'nav-screen-content-before', {}, void 0, !0),
                        h(Qr, { class: 'menu' }),
                        h(ol, { class: 'translations' }),
                        h(tl, { class: 'appearance' }),
                        h(al, { class: 'social-links' }),
                        u(s.$slots, 'nav-screen-content-after', {}, void 0, !0),
                      ]),
                    ],
                    512,
                  ))
                : f('', !0),
            ]),
            _: 3,
          },
        )
      );
    },
  });
const il = m(ll, [['__scopeId', 'data-v-a44417f2']]),
  cl = { class: 'VPNav' },
  ul = g({
    __name: 'VPNav',
    setup(n) {
      const { isScreenOpen: e, closeScreen: t, toggleScreen: o } = go();
      return (
        ae('close-screen', t),
        (s, r) => (
          a(),
          i('header', cl, [
            h(
              Pr,
              { 'is-screen-open': l(e), onToggleScreen: l(o) },
              {
                'nav-bar-title-before': p(() => [u(s.$slots, 'nav-bar-title-before', {}, void 0, !0)]),
                'nav-bar-title-after': p(() => [u(s.$slots, 'nav-bar-title-after', {}, void 0, !0)]),
                'nav-bar-content-before': p(() => [u(s.$slots, 'nav-bar-content-before', {}, void 0, !0)]),
                'nav-bar-content-after': p(() => [u(s.$slots, 'nav-bar-content-after', {}, void 0, !0)]),
                _: 3,
              },
              8,
              ['is-screen-open', 'onToggleScreen'],
            ),
            h(
              il,
              { open: l(e) },
              {
                'nav-screen-content-before': p(() => [u(s.$slots, 'nav-screen-content-before', {}, void 0, !0)]),
                'nav-screen-content-after': p(() => [u(s.$slots, 'nav-screen-content-after', {}, void 0, !0)]),
                _: 3,
              },
              8,
              ['open'],
            ),
          ])
        )
      );
    },
  });
const dl = m(ul, [['__scopeId', 'data-v-75f1899b']]),
  _l = (n) => (H('data-v-e17e6aab'), (n = n()), E(), n),
  vl = ['role', 'tabindex'],
  pl = _l(() => _('div', { class: 'indicator' }, null, -1)),
  hl = ['onKeydown'],
  fl = { key: 1, class: 'items' },
  ml = g({
    __name: 'VPSidebarItem',
    props: { item: {}, depth: {} },
    setup(n) {
      const e = n,
        {
          collapsed: t,
          collapsible: o,
          isLink: s,
          isActiveLink: r,
          hasActiveLink: d,
          hasChildren: v,
          toggle: c,
        } = Ft($(() => e.item)),
        y = $(() => (v.value ? 'section' : 'div')),
        S = $(() => (s.value ? 'a' : 'div')),
        T = $(() => (v.value ? (e.depth + 2 === 7 ? 'p' : `h${e.depth + 2}`) : 'p')),
        C = $(() => (s.value ? void 0 : 'button')),
        k = $(() => [
          [`level-${e.depth}`],
          { collapsible: o.value },
          { collapsed: t.value },
          { 'is-link': s.value },
          { 'is-active': r.value },
          { 'has-active': d.value },
        ]);
      function I(P) {
        ('key' in P && P.key !== 'Enter') || (!e.item.link && c());
      }
      function M() {
        e.item.link && c();
      }
      return (P, F) => {
        const se = R('VPSidebarItem', !0);
        return (
          a(),
          b(
            U(y.value),
            { class: A(['VPSidebarItem', k.value]) },
            {
              default: p(() => [
                P.item.text
                  ? (a(),
                    i(
                      'div',
                      oe(
                        { key: 0, class: 'item', role: C.value },
                        dt(P.item.items ? { click: I, keydown: I } : {}, !0),
                        { tabindex: P.item.items && 0 },
                      ),
                      [
                        pl,
                        P.item.link
                          ? (a(),
                            b(
                              O,
                              { key: 0, tag: S.value, class: 'link', href: P.item.link },
                              {
                                default: p(() => [
                                  (a(),
                                  b(U(T.value), { class: 'text', innerHTML: P.item.text }, null, 8, ['innerHTML'])),
                                ]),
                                _: 1,
                              },
                              8,
                              ['tag', 'href'],
                            ))
                          : (a(),
                            b(U(T.value), { key: 1, class: 'text', innerHTML: P.item.text }, null, 8, ['innerHTML'])),
                        P.item.collapsed != null
                          ? (a(),
                            i(
                              'div',
                              {
                                key: 2,
                                class: 'caret',
                                role: 'button',
                                'aria-label': 'toggle section',
                                onClick: M,
                                onKeydown: _t(M, ['enter']),
                                tabindex: '0',
                              },
                              [h(Se, { class: 'caret-icon' })],
                              40,
                              hl,
                            ))
                          : f('', !0),
                      ],
                      16,
                      vl,
                    ))
                  : f('', !0),
                P.item.items && P.item.items.length
                  ? (a(),
                    i('div', fl, [
                      P.depth < 5
                        ? (a(!0),
                          i(
                            B,
                            { key: 0 },
                            x(
                              P.item.items,
                              (Y) => (
                                a(), b(se, { key: Y.text, item: Y, depth: P.depth + 1 }, null, 8, ['item', 'depth'])
                              ),
                            ),
                            128,
                          ))
                        : f('', !0),
                    ]))
                  : f('', !0),
              ]),
              _: 1,
            },
            8,
            ['class'],
          )
        );
      };
    },
  });
const gl = m(ml, [['__scopeId', 'data-v-e17e6aab']]),
  tt = (n) => (H('data-v-6e3afa0a'), (n = n()), E(), n),
  yl = tt(() => _('div', { class: 'curtain' }, null, -1)),
  bl = { class: 'nav', id: 'VPSidebarNav', 'aria-labelledby': 'sidebar-aria-label', tabindex: '-1' },
  $l = tt(() => _('span', { class: 'visually-hidden', id: 'sidebar-aria-label' }, ' Sidebar Navigation ', -1)),
  kl = g({
    __name: 'VPSidebar',
    props: { open: { type: Boolean } },
    setup(n) {
      const e = n,
        { sidebarGroups: t, hasSidebar: o } = D();
      let s = V(null);
      function r() {
        Je(s.value, { reserveScrollBarGap: !0 });
      }
      function d() {
        Ze();
      }
      return (
        vt(async () => {
          var v;
          e.open ? (r(), (v = s.value) == null || v.focus()) : d();
        }),
        (v, c) =>
          l(o)
            ? (a(),
              i(
                'aside',
                {
                  key: 0,
                  class: A(['VPSidebar', { open: v.open }]),
                  ref_key: 'navEl',
                  ref: s,
                  onClick: c[0] || (c[0] = pt(() => {}, ['stop'])),
                },
                [
                  yl,
                  _('nav', bl, [
                    $l,
                    u(v.$slots, 'sidebar-nav-before', {}, void 0, !0),
                    (a(!0),
                    i(
                      B,
                      null,
                      x(
                        l(t),
                        (y) => (
                          a(),
                          i('div', { key: y.text, class: 'group' }, [h(gl, { item: y, depth: 0 }, null, 8, ['item'])])
                        ),
                      ),
                      128,
                    )),
                    u(v.$slots, 'sidebar-nav-after', {}, void 0, !0),
                  ]),
                ],
                2,
              ))
            : f('', !0)
      );
    },
  });
const Pl = m(kl, [['__scopeId', 'data-v-6e3afa0a']]),
  Vl = g({
    __name: 'VPSkipLink',
    setup(n) {
      const e = ee(),
        t = V();
      q(
        () => e.path,
        () => t.value.focus(),
      );
      function o({ target: s }) {
        const r = document.getElementById(decodeURIComponent(s.hash).slice(1));
        if (r) {
          const d = () => {
            r.removeAttribute('tabindex'), r.removeEventListener('blur', d);
          };
          r.setAttribute('tabindex', '-1'), r.addEventListener('blur', d), r.focus(), window.scrollTo(0, 0);
        }
      }
      return (s, r) => (
        a(),
        i(
          B,
          null,
          [
            _('span', { ref_key: 'backToTop', ref: t, tabindex: '-1' }, null, 512),
            _('a', { href: '#VPContent', class: 'VPSkipLink visually-hidden', onClick: o }, ' Skip to content '),
          ],
          64,
        )
      );
    },
  });
const wl = m(Vl, [['__scopeId', 'data-v-05132eb3']]),
  Sl = g({
    __name: 'Layout',
    setup(n) {
      const { isOpen: e, open: t, close: o } = D(),
        s = ee();
      q(() => s.path, o), Dt(e, o), ae('close-sidebar', o), ae('is-sidebar-open', e);
      const { frontmatter: r } = w(),
        d = ht(),
        v = $(() => !!d['home-hero-image']);
      return (
        ae('hero-image-slot-exists', v),
        (c, y) => {
          const S = R('Content');
          return l(r).layout !== !1
            ? (a(),
              i(
                'div',
                { key: 0, class: A(['Layout', l(r).pageClass]) },
                [
                  u(c.$slots, 'layout-top', {}, void 0, !0),
                  h(wl),
                  h(bt, { class: 'backdrop', show: l(e), onClick: l(o) }, null, 8, ['show', 'onClick']),
                  l(r).navbar !== !1
                    ? (a(),
                      b(
                        dl,
                        { key: 0 },
                        {
                          'nav-bar-title-before': p(() => [u(c.$slots, 'nav-bar-title-before', {}, void 0, !0)]),
                          'nav-bar-title-after': p(() => [u(c.$slots, 'nav-bar-title-after', {}, void 0, !0)]),
                          'nav-bar-content-before': p(() => [u(c.$slots, 'nav-bar-content-before', {}, void 0, !0)]),
                          'nav-bar-content-after': p(() => [u(c.$slots, 'nav-bar-content-after', {}, void 0, !0)]),
                          'nav-screen-content-before': p(() => [
                            u(c.$slots, 'nav-screen-content-before', {}, void 0, !0),
                          ]),
                          'nav-screen-content-after': p(() => [
                            u(c.$slots, 'nav-screen-content-after', {}, void 0, !0),
                          ]),
                          _: 3,
                        },
                      ))
                    : f('', !0),
                  h(mo, { open: l(e), onOpenMenu: l(t) }, null, 8, ['open', 'onOpenMenu']),
                  h(
                    Pl,
                    { open: l(e) },
                    {
                      'sidebar-nav-before': p(() => [u(c.$slots, 'sidebar-nav-before', {}, void 0, !0)]),
                      'sidebar-nav-after': p(() => [u(c.$slots, 'sidebar-nav-after', {}, void 0, !0)]),
                      _: 3,
                    },
                    8,
                    ['open'],
                  ),
                  h(Xs, null, {
                    'page-top': p(() => [u(c.$slots, 'page-top', {}, void 0, !0)]),
                    'page-bottom': p(() => [u(c.$slots, 'page-bottom', {}, void 0, !0)]),
                    'not-found': p(() => [u(c.$slots, 'not-found', {}, void 0, !0)]),
                    'home-hero-before': p(() => [u(c.$slots, 'home-hero-before', {}, void 0, !0)]),
                    'home-hero-info': p(() => [u(c.$slots, 'home-hero-info', {}, void 0, !0)]),
                    'home-hero-image': p(() => [u(c.$slots, 'home-hero-image', {}, void 0, !0)]),
                    'home-hero-after': p(() => [u(c.$slots, 'home-hero-after', {}, void 0, !0)]),
                    'home-features-before': p(() => [u(c.$slots, 'home-features-before', {}, void 0, !0)]),
                    'home-features-after': p(() => [u(c.$slots, 'home-features-after', {}, void 0, !0)]),
                    'doc-footer-before': p(() => [u(c.$slots, 'doc-footer-before', {}, void 0, !0)]),
                    'doc-before': p(() => [u(c.$slots, 'doc-before', {}, void 0, !0)]),
                    'doc-after': p(() => [u(c.$slots, 'doc-after', {}, void 0, !0)]),
                    'doc-top': p(() => [u(c.$slots, 'doc-top', {}, void 0, !0)]),
                    'doc-bottom': p(() => [u(c.$slots, 'doc-bottom', {}, void 0, !0)]),
                    'aside-top': p(() => [u(c.$slots, 'aside-top', {}, void 0, !0)]),
                    'aside-bottom': p(() => [u(c.$slots, 'aside-bottom', {}, void 0, !0)]),
                    'aside-outline-before': p(() => [u(c.$slots, 'aside-outline-before', {}, void 0, !0)]),
                    'aside-outline-after': p(() => [u(c.$slots, 'aside-outline-after', {}, void 0, !0)]),
                    'aside-ads-before': p(() => [u(c.$slots, 'aside-ads-before', {}, void 0, !0)]),
                    'aside-ads-after': p(() => [u(c.$slots, 'aside-ads-after', {}, void 0, !0)]),
                    _: 3,
                  }),
                  h(to),
                  u(c.$slots, 'layout-bottom', {}, void 0, !0),
                ],
                2,
              ))
            : (a(), b(S, { key: 1 }));
        }
      );
    },
  });
const Ll = m(Sl, [['__scopeId', 'data-v-67a164b4']]);
const Cl = {
  Layout: Ll,
  enhanceApp: ({ app: n }) => {
    n.component('Badge', mt);
  },
};
export { Cl as t, Tl as u };
