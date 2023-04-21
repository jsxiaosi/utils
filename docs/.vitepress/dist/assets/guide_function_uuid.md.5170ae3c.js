import {
  d as u,
  o as p,
  g as o,
  t as r,
  u as l,
  a as C,
  e as E,
  w as d,
  b as a,
  f as c,
  h as D,
} from './app.34b59631.js';
function F() {
  let s = new Date().getTime();
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (n) {
    const e = (s + Math.random() * 16) % 16 | 0;
    return (s = Math.floor(s / 16)), (n == 'x' ? e : (e & 3) | 8).toString(16);
  });
}
const _ = u({
    __name: 'uuid',
    setup(s) {
      return (t, n) => (p(), o('div', null, r(l(F)()), 1));
    },
  }),
  k = Object.freeze(Object.defineProperty({ __proto__: null, default: _ }, Symbol.toStringTag, { value: 'Module' })),
  x = a(
    'h1',
    { id: 'uuid', tabindex: '-1' },
    [c('uuid '), a('a', { class: 'header-anchor', href: '#uuid', 'aria-hidden': 'true' }, '#')],
    -1,
  ),
  g = a(
    'h2',
    { id: '生成uuid', tabindex: '-1' },
    [c('生成UUID '), a('a', { class: 'header-anchor', href: '#生成uuid', 'aria-hidden': 'true' }, '#')],
    -1,
  ),
  m = a('p', null, 'uuid/uuid', -1),
  A = D(
    `<details class="details custom-block"><summary>示例代码</summary><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">generateUUID</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@jsxiaosi/utils</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">generateUUID</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div></details><p>返回类型：<code>string</code></p>`,
    2,
  ),
  U = JSON.parse(
    '{"title":"uuid","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"生成UUID","slug":"生成uuid","link":"#生成uuid","children":[]}],"relativePath":"guide/function/uuid.md","lastUpdated":1681059808000}',
  ),
  h = { name: 'guide/function/uuid.md' },
  v = Object.assign(h, {
    setup(s) {
      const t = Object.assign({ '../../example/uuid/uuid.vue': k }),
        n = '../../example/uuid/*.vue';
      return (e, y) => {
        const i = C('Demo');
        return (
          p(),
          o('div', null, [
            x,
            g,
            E(
              i,
              {
                demos: l(t),
                source:
                  "%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20generateUUID%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%40jsxiaosi%2Futils'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%7B%7B%20generateUUID()%20%7D%7D%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",
                path: n,
                pathName: 'uuid/uuid',
                'raw-source':
                  "%3Cscript%20setup%20lang%3D%22ts%22%3E%0A%20%20import%20%7B%20generateUUID%20%7D%20from%20'%40jsxiaosi%2Futils'%3B%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%7B%7B%20generateUUID()%20%7D%7D%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A",
                description: '',
              },
              { default: d(() => [m]), _: 1 },
              8,
              ['demos'],
            ),
            A,
          ])
        );
      };
    },
  });
export { U as __pageData, v as default };
