import {
  f as d,
  g,
  r as f,
  o as u,
  c as i,
  a,
  w as r,
  d as c,
  u as _,
  F as v,
  h as k,
  i as x,
  j as M,
  k as y,
  b as m,
  _ as b,
  v as j,
} from '../app.8ecaf5df.js';
const B = d({
    __name: 'basic',
    setup(p) {
      const { setWaterMark: e, close: n } = g();
      return (l, o) => {
        const t = f('ElButton');
        return (
          u(),
          i(
            v,
            null,
            [
              a(
                t,
                { onClick: o[0] || (o[0] = () => _(e)('xs-utils-demo')) },
                { default: r(() => [c('全局')]), _: 1 },
              ),
              a(
                t,
                { onClick: o[1] || (o[1] = () => _(n)()) },
                { default: r(() => [c('清除')]), _: 1 },
              ),
            ],
            64,
          )
        );
      };
    },
  }),
  z = Object.freeze(
    Object.defineProperty({ __proto__: null, default: B }, Symbol.toStringTag, { value: 'Module' }),
  ),
  O = { class: 'local-demo' },
  S = d({
    __name: 'dir-basic',
    setup(p) {
      const e = k('指令水印');
      return (n, l) => {
        const o = f('ElInput'),
          t = x('water-mark');
        return (
          u(),
          i(
            v,
            null,
            [
              a(
                o,
                {
                  modelValue: _(e),
                  'onUpdate:modelValue': l[0] || (l[0] = (s) => (M(e) ? (e.value = s) : null)),
                },
                null,
                8,
                ['modelValue'],
              ),
              y(m('div', O, null, 512), [[t, _(e)]]),
            ],
            64,
          )
        );
      };
    },
  });
const C = b(S, [['__scopeId', 'data-v-bbe38c2d']]),
  D = Object.freeze(
    Object.defineProperty({ __proto__: null, default: C }, Symbol.toStringTag, { value: 'Module' }),
  ),
  E = { class: 'local-demo' },
  w = d({
    __name: 'dir-demand',
    setup(p) {
      const e = j;
      return (n, l) => y((u(), i('div', E, null, 512)), [[_(e), '按需引入']]);
    },
  });
const T = b(w, [['__scopeId', 'data-v-f30e7c15']]),
  P = Object.freeze(
    Object.defineProperty({ __proto__: null, default: T }, Symbol.toStringTag, { value: 'Module' }),
  ),
  V = d({
    __name: 'local',
    setup(p) {
      const e = k(),
        { setWaterMark: n, close: l } = g(e);
      return (o, t) => {
        const s = f('ElButton');
        return (
          u(),
          i(
            v,
            null,
            [
              m('div', null, [
                a(
                  s,
                  { onClick: t[0] || (t[0] = () => _(n)('xs-utils-demo')) },
                  { default: r(() => [c('生成水印')]), _: 1 },
                ),
                a(
                  s,
                  { onClick: t[1] || (t[1] = () => _(l)()) },
                  { default: r(() => [c('清除水印')]), _: 1 },
                ),
              ]),
              m('div', { id: 'dom', ref_key: 'dom', ref: e, class: 'local-demo' }, null, 512),
            ],
            64,
          )
        );
      };
    },
  });
const I = b(V, [['__scopeId', 'data-v-c845a4cb']]),
  $ = Object.freeze(
    Object.defineProperty({ __proto__: null, default: I }, Symbol.toStringTag, { value: 'Module' }),
  );
export { z as _, D as a, P as b, $ as c };
