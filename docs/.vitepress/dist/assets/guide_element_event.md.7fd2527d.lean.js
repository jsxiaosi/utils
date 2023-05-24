import { d as A, a as u, o as F, g as i, e as o, w as l, f as E, u as r, b as D, h as B } from './app.77b60f74.js';
const k = {
    contextmenu: (s) => s.preventDefault(),
    copy: (s) => s.preventDefault(),
    select: (s) => s.preventDefault(),
    paste: (s) => s.preventDefault(),
  },
  c = new Map();
function C(s, a) {
  return `${s.id}_${a}`;
}
function y(s, a) {
  a.forEach((t) => {
    if (t === 'select') {
      const n = (e) => e.preventDefault();
      c.set(C(s, 'select_mousedown'), n),
        c.set(C(s, 'select_mousemove'), n),
        s.addEventListener('mousedown', n),
        s.addEventListener('mousemove', n);
    } else c.set(C(s, t), k[t]), s.addEventListener(t, k[t]);
  });
}
function d(s, a) {
  a.forEach((t) => {
    if (t === 'select') {
      const n = c.get(C(s, 'select_mousedown')),
        e = c.get(C(s, 'select_mousemove'));
      n && (s.removeEventListener('mousedown', n), c.delete(C(s, 'select_mousedown'))),
        e && (s.removeEventListener('mousemove', e), c.delete(C(s, 'select_mousemove')));
    } else {
      const n = c.get(C(s, t));
      n && (s.removeEventListener(t, n), c.delete(C(s, t)));
    }
  });
}
const m = A({
    __name: 'disableElementEvents',
    setup(s) {
      const a = (t) => {
        y(document.body, t);
      };
      return (t, n) => {
        const e = u('ElButton');
        return (
          F(),
          i('div', null, [
            o(
              e,
              { onClick: n[0] || (n[0] = (p) => a(['contextmenu'])) },
              { default: l(() => [E('禁用右击事件')]), _: 1 },
            ),
            o(e, { onClick: n[1] || (n[1] = (p) => a(['copy'])) }, { default: l(() => [E('禁用复制事件')]), _: 1 }),
            o(e, { onClick: n[2] || (n[2] = (p) => a(['paste'])) }, { default: l(() => [E('禁用黏贴事件')]), _: 1 }),
            o(e, { onClick: n[3] || (n[3] = (p) => a(['select'])) }, { default: l(() => [E('禁用选择事件')]), _: 1 }),
            o(
              e,
              { onClick: n[4] || (n[4] = (p) => a(['contextmenu', 'copy', 'paste', 'select'])) },
              { default: l(() => [E('禁用全部事件')]), _: 1 },
            ),
          ])
        );
      };
    },
  }),
  v = Object.freeze(Object.defineProperty({ __proto__: null, default: m }, Symbol.toStringTag, { value: 'Module' })),
  g = A({
    __name: 'enableElementEvents',
    setup(s) {
      const a = (t) => {
        d(document.body, t);
      };
      return (t, n) => {
        const e = u('ElButton');
        return (
          F(),
          i('div', null, [
            o(
              e,
              { onClick: n[0] || (n[0] = (p) => a(['contextmenu'])) },
              { default: l(() => [E('恢复鼠标右击事件')]), _: 1 },
            ),
            o(e, { onClick: n[1] || (n[1] = (p) => a(['copy'])) }, { default: l(() => [E('恢复复制事件')]), _: 1 }),
            o(e, { onClick: n[2] || (n[2] = (p) => a(['paste'])) }, { default: l(() => [E('恢复黏贴事件')]), _: 1 }),
            o(e, { onClick: n[3] || (n[3] = (p) => a(['select'])) }, { default: l(() => [E('恢复选择事件')]), _: 1 }),
            o(
              e,
              { onClick: n[4] || (n[4] = (p) => a(['contextmenu', 'copy', 'paste', 'select'])) },
              { default: l(() => [E('恢复全部事件')]), _: 1 },
            ),
          ])
        );
      };
    },
  }),
  b = Object.freeze(Object.defineProperty({ __proto__: null, default: g }, Symbol.toStringTag, { value: 'Module' })),
  _ = D(
    'h1',
    { id: 'event', tabindex: '-1' },
    [E('Event '), D('a', { class: 'header-anchor', href: '#event', 'aria-hidden': 'true' }, '#')],
    -1,
  ),
  h = D(
    'h2',
    { id: 'disableelementevents', tabindex: '-1' },
    [
      E('disableElementEvents '),
      D('a', { class: 'header-anchor', href: '#disableelementevents', 'aria-hidden': 'true' }, '#'),
    ],
    -1,
  ),
  f = D('p', null, 'event/disableElementEvents', -1),
  x = B('', 6),
  T = D('p', null, 'event/enableElementEvents', -1),
  w = B('', 5),
  S = JSON.parse(
    '{"title":"Event","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"disableElementEvents","slug":"disableelementevents","link":"#disableelementevents","children":[]},{"level":2,"title":"enableElementEvents","slug":"enableelementevents","link":"#enableelementevents","children":[]}],"relativePath":"guide/element/event.md","lastUpdated":1681995813000}',
  ),
  j = { name: 'guide/element/event.md' },
  q = Object.assign(j, {
    setup(s) {
      const a = Object.assign({
          '../../example/event/disableElementEvents.vue': v,
          '../../example/event/enableElementEvents.vue': b,
        }),
        t = '../../example/event/*.vue';
      return (n, e) => {
        const p = u('Demo');
        return (
          F(),
          i('div', null, [
            _,
            h,
            o(
              p,
              {
                demos: r(a),
                source:
                  "%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20disableElementEvents%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%40jsxiaosi%2Futils'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20type%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20DisableElementEventType%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%40jsxiaosi%2Futils'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3EonChange%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20parameter%22%3E%3Cspan%20class%3D%22token%20literal-property%20property%22%3EeventType%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20DisableElementEventType%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20function%22%3EdisableElementEvents%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3Edocument%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Ebody%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20eventType%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EElButton%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EonChange(%5B'contextmenu'%5D)%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E7%A6%81%E7%94%A8%E5%8F%B3%E5%87%BB%E4%BA%8B%E4%BB%B6%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3EElButton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EElButton%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EonChange(%5B'copy'%5D)%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E7%A6%81%E7%94%A8%E5%A4%8D%E5%88%B6%E4%BA%8B%E4%BB%B6%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3EElButton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EElButton%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EonChange(%5B'paste'%5D)%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E7%A6%81%E7%94%A8%E9%BB%8F%E8%B4%B4%E4%BA%8B%E4%BB%B6%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3EElButton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EElButton%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EonChange(%5B'select'%5D)%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E7%A6%81%E7%94%A8%E9%80%89%E6%8B%A9%E4%BA%8B%E4%BB%B6%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3EElButton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EElButton%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EonChange(%5B'contextmenu'%2C%20'copy'%2C%20'paste'%2C%20'select'%5D)%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E7%A6%81%E7%94%A8%E5%85%A8%E9%83%A8%E4%BA%8B%E4%BB%B6%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3EElButton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",
                path: t,
                pathName: 'event/disableElementEvents',
                'raw-source':
                  "%3Cscript%20setup%20lang%3D%22ts%22%3E%0A%20%20import%20%7B%20disableElementEvents%20%7D%20from%20'%40jsxiaosi%2Futils'%3B%0A%20%20import%20type%20%7B%20DisableElementEventType%20%7D%20from%20'%40jsxiaosi%2Futils'%3B%0A%0A%20%20const%20onChange%20%3D%20(eventType%3A%20DisableElementEventType%5B%5D)%20%3D%3E%20%7B%0A%20%20%20%20disableElementEvents(document.body%2C%20eventType)%3B%0A%20%20%7D%3B%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3CElButton%20%40click%3D%22onChange(%5B'contextmenu'%5D)%22%3E%E7%A6%81%E7%94%A8%E5%8F%B3%E5%87%BB%E4%BA%8B%E4%BB%B6%3C%2FElButton%3E%0A%20%20%20%20%3CElButton%20%40click%3D%22onChange(%5B'copy'%5D)%22%3E%E7%A6%81%E7%94%A8%E5%A4%8D%E5%88%B6%E4%BA%8B%E4%BB%B6%3C%2FElButton%3E%0A%20%20%20%20%3CElButton%20%40click%3D%22onChange(%5B'paste'%5D)%22%3E%E7%A6%81%E7%94%A8%E9%BB%8F%E8%B4%B4%E4%BA%8B%E4%BB%B6%3C%2FElButton%3E%0A%20%20%20%20%3CElButton%20%40click%3D%22onChange(%5B'select'%5D)%22%3E%E7%A6%81%E7%94%A8%E9%80%89%E6%8B%A9%E4%BA%8B%E4%BB%B6%3C%2FElButton%3E%0A%20%20%20%20%3CElButton%20%40click%3D%22onChange(%5B'contextmenu'%2C%20'copy'%2C%20'paste'%2C%20'select'%5D)%22%3E%E7%A6%81%E7%94%A8%E5%85%A8%E9%83%A8%E4%BA%8B%E4%BB%B6%3C%2FElButton%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A",
                description:
                  '%3Cp%3E%E7%A6%81%E7%94%A8Element%20%E5%8F%B3%E5%87%BB%E3%80%81%E5%A4%8D%E5%88%B6%E3%80%81%E9%BB%8F%E8%B4%B4%E3%80%81%E9%80%89%E6%8B%A9%E4%BA%8B%E4%BB%B6%3C%2Fp%3E%0A',
              },
              { default: l(() => [f]), _: 1 },
              8,
              ['demos'],
            ),
            x,
            o(
              p,
              {
                demos: r(a),
                source:
                  "%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20enableElementEvents%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%40jsxiaosi%2Futils'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20type%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20DisableElementEventType%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%40jsxiaosi%2Futils'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3EonChange%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20parameter%22%3E%3Cspan%20class%3D%22token%20literal-property%20property%22%3EeventType%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20DisableElementEventType%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20function%22%3EenableElementEvents%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3Edocument%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Ebody%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20eventType%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EElButton%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EonChange(%5B'contextmenu'%5D)%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E6%81%A2%E5%A4%8D%E9%BC%A0%E6%A0%87%E5%8F%B3%E5%87%BB%E4%BA%8B%E4%BB%B6%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3EElButton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EElButton%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EonChange(%5B'copy'%5D)%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E6%81%A2%E5%A4%8D%E5%A4%8D%E5%88%B6%E4%BA%8B%E4%BB%B6%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3EElButton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EElButton%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EonChange(%5B'paste'%5D)%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E6%81%A2%E5%A4%8D%E9%BB%8F%E8%B4%B4%E4%BA%8B%E4%BB%B6%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3EElButton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EElButton%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EonChange(%5B'select'%5D)%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E6%81%A2%E5%A4%8D%E9%80%89%E6%8B%A9%E4%BA%8B%E4%BB%B6%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3EElButton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EElButton%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EonChange(%5B'contextmenu'%2C%20'copy'%2C%20'paste'%2C%20'select'%5D)%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E6%81%A2%E5%A4%8D%E5%85%A8%E9%83%A8%E4%BA%8B%E4%BB%B6%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3EElButton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",
                path: t,
                pathName: 'event/enableElementEvents',
                'raw-source':
                  "%3Cscript%20setup%20lang%3D%22ts%22%3E%0A%20%20import%20%7B%20enableElementEvents%20%7D%20from%20'%40jsxiaosi%2Futils'%3B%0A%20%20import%20type%20%7B%20DisableElementEventType%20%7D%20from%20'%40jsxiaosi%2Futils'%3B%0A%0A%20%20const%20onChange%20%3D%20(eventType%3A%20DisableElementEventType%5B%5D)%20%3D%3E%20%7B%0A%20%20%20%20enableElementEvents(document.body%2C%20eventType)%3B%0A%20%20%7D%3B%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3CElButton%20%40click%3D%22onChange(%5B'contextmenu'%5D)%22%3E%E6%81%A2%E5%A4%8D%E9%BC%A0%E6%A0%87%E5%8F%B3%E5%87%BB%E4%BA%8B%E4%BB%B6%3C%2FElButton%3E%0A%20%20%20%20%3CElButton%20%40click%3D%22onChange(%5B'copy'%5D)%22%3E%E6%81%A2%E5%A4%8D%E5%A4%8D%E5%88%B6%E4%BA%8B%E4%BB%B6%3C%2FElButton%3E%0A%20%20%20%20%3CElButton%20%40click%3D%22onChange(%5B'paste'%5D)%22%3E%E6%81%A2%E5%A4%8D%E9%BB%8F%E8%B4%B4%E4%BA%8B%E4%BB%B6%3C%2FElButton%3E%0A%20%20%20%20%3CElButton%20%40click%3D%22onChange(%5B'select'%5D)%22%3E%E6%81%A2%E5%A4%8D%E9%80%89%E6%8B%A9%E4%BA%8B%E4%BB%B6%3C%2FElButton%3E%0A%20%20%20%20%3CElButton%20%40click%3D%22onChange(%5B'contextmenu'%2C%20'copy'%2C%20'paste'%2C%20'select'%5D)%22%3E%E6%81%A2%E5%A4%8D%E5%85%A8%E9%83%A8%E4%BA%8B%E4%BB%B6%3C%2FElButton%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A",
                description:
                  '%3Cp%3E%E6%81%A2%E5%A4%8DElement%20%E5%8F%B3%E5%87%BB%E3%80%81%E5%A4%8D%E5%88%B6%E3%80%81%E9%BB%8F%E8%B4%B4%E3%80%81%E9%80%89%E6%8B%A9%E4%BA%8B%E4%BB%B6%3C%2Fp%3E%0A',
              },
              { default: l(() => [T]), _: 1 },
              8,
              ['demos'],
            ),
            w,
          ])
        );
      };
    },
  });
export { S as __pageData, q as default };
