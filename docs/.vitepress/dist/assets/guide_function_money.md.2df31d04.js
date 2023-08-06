import {
  u as d,
  v as i,
  b as r,
  X as c,
  N as p,
  F as t,
  n as v,
  x as D,
  O as F,
  L as f,
  R as m,
  M as T,
} from './chunks/framework.5bf5a401.js';
function x(a) {
  const [s, n] = String(a).split('.'),
    u = s.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return n ? `${u}.${n}` : u;
}
function U(a, s) {
  return Number(a).toFixed(s);
}
function j(a) {
  return Number(a) / 100;
}
function S(a) {
  return Math.round(Number(a) * 100);
}
function y(a) {
  const s = '零壹贰叁肆伍陆柒捌玖',
    n = ['', '拾', '佰', '仟'],
    u = ['', '万', '亿', '兆'],
    _ = '角分毫厘',
    l = '元',
    B = '整',
    [E, A] = String(a).split('.');
  let e = '',
    k = 0;
  if (Number(E) > 0) {
    for (let o = 0; o < E.length; o++) {
      const C = Number(E[o]),
        g = s[C],
        h = n[(E.length - o - 1) % 4];
      C === 0 ? k++ : (k > 0 && (e += s[0]), (k = 0), (e += g + h)),
        (E.length - o - 1) % 4 === 0 && k < 4 && (e += u[(E.length - o - 1) / 4]);
    }
    e += l;
  }
  if (A) {
    const o = A.split('');
    for (let C = 0; C < o.length; C++) {
      const g = Number(o[C]),
        h = s[g],
        b = _[C];
      e += h + b;
    }
  }
  return e == '' ? (e += s[0] + l + B) : A || (e += B), e;
}
const P = d({
    __name: 'amountSeparator',
    setup(a) {
      return (s, n) => (i(), r('div', null, c(p(x)(123456789)), 1));
    },
  }),
  N = Object.freeze(Object.defineProperty({ __proto__: null, default: P }, Symbol.toStringTag, { value: 'Module' })),
  w = d({
    __name: 'centsToYuan',
    setup(a) {
      return (s, n) => (i(), r('div', null, c(p(j)(1234567)), 1));
    },
  }),
  O = Object.freeze(Object.defineProperty({ __proto__: null, default: w }, Symbol.toStringTag, { value: 'Module' })),
  q = d({
    __name: 'formatDecimal',
    setup(a) {
      return (s, n) => (i(), r('div', null, c(p(U)(12345.6789, 2)), 1));
    },
  }),
  M = Object.freeze(Object.defineProperty({ __proto__: null, default: q }, Symbol.toStringTag, { value: 'Module' })),
  Y = d({
    __name: 'toChineseUpper',
    setup(a) {
      return (s, n) => (
        i(),
        r(
          v,
          null,
          [
            t('div', null, c(p(y)(1234567891231234e-4)), 1),
            t('div', null, c(p(y)(1234567891234e-4)), 1),
            t('div', null, c(p(y)(12345.67)), 1),
            t('div', null, c(p(y)(0)), 1),
          ],
          64,
        )
      );
    },
  }),
  I = Object.freeze(Object.defineProperty({ __proto__: null, default: Y }, Symbol.toStringTag, { value: 'Module' })),
  R = d({
    __name: 'yuanToCents',
    setup(a) {
      return (s, n) => (i(), r('div', null, c(p(S)(12345.67)), 1));
    },
  }),
  $ = Object.freeze(Object.defineProperty({ __proto__: null, default: R }, Symbol.toStringTag, { value: 'Module' })),
  z = t(
    'h1',
    { id: 'money', tabindex: '-1' },
    [f('money '), t('a', { class: 'header-anchor', href: '#money', 'aria-label': 'Permalink to "money"' }, '​')],
    -1,
  ),
  L = t('p', null, '金额转换工具', -1),
  G = t(
    'h2',
    { id: 'amountseparator', tabindex: '-1' },
    [
      f('amountSeparator '),
      t('a', { class: 'header-anchor', href: '#amountseparator', 'aria-label': 'Permalink to "amountSeparator"' }, '​'),
    ],
    -1,
  ),
  J = t('p', null, 'money/amountSeparator', -1),
  W = m(
    `<details class="details custom-block"><summary>示例代码</summary><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">amountSeparator</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@jsxiaosi/utils</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">amountSeparator</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">123456789</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 123,456,789</span></span></code></pre></div></details><p>参数:</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>amount</td><td>金额</td><td>string / number</td></tr></tbody></table><p>返回类型：<code>string</code></p><h2 id="formatdecimal" tabindex="-1">formatDecimal <a class="header-anchor" href="#formatdecimal" aria-label="Permalink to &quot;formatDecimal&quot;">​</a></h2>`,
    5,
  ),
  X = t('p', null, 'money/formatDecimal', -1),
  H = m(
    `<details class="details custom-block"><summary>示例代码</summary><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">formatDecimal</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@jsxiaosi/utils</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">formatDecimal</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">12345.6789</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 12345.67</span></span></code></pre></div></details><p>参数:</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>amount</td><td>金额</td><td>string / number</td></tr><tr><td>decimalPlaces</td><td>位数</td><td>number</td></tr></tbody></table><p>返回类型：<code>string</code></p><h2 id="centstoyuan" tabindex="-1">centsToYuan <a class="header-anchor" href="#centstoyuan" aria-label="Permalink to &quot;centsToYuan&quot;">​</a></h2>`,
    5,
  ),
  K = t('p', null, 'money/centsToYuan', -1),
  Q = m(
    `<details class="details custom-block"><summary>示例代码</summary><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">centsToYuan</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@jsxiaosi/utils</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">centsToYuan</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1234567</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 12345.67</span></span></code></pre></div></details><p>参数:</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>amount</td><td>金额</td><td>string / number</td></tr></tbody></table><p>返回类型：<code>number</code></p><h2 id="yuantocents" tabindex="-1">yuanToCents <a class="header-anchor" href="#yuantocents" aria-label="Permalink to &quot;yuanToCents&quot;">​</a></h2>`,
    5,
  ),
  V = t('p', null, 'money/yuanToCents', -1),
  Z = m(
    `<details class="details custom-block"><summary>示例代码</summary><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">yuanToCents</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@jsxiaosi/utils</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">yuanToCents</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">12345.67</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 1234567</span></span></code></pre></div></details><p>参数:</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>amount</td><td>金额</td><td>string / number</td></tr></tbody></table><p>返回类型：<code>number</code></p><h2 id="tochineseupper" tabindex="-1">toChineseUpper <a class="header-anchor" href="#tochineseupper" aria-label="Permalink to &quot;toChineseUpper&quot;">​</a></h2>`,
    5,
  ),
  s2 = t('p', null, 'money/toChineseUpper', -1),
  a2 = m(
    `<details class="details custom-block"><summary>示例代码</summary><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">toChineseUpper</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@jsxiaosi/utils</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">toChineseUpper</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">12345.67</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 壹万贰仟叁佰肆拾伍元陆角柒分</span></span></code></pre></div></details><p>参数:</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>amount</td><td>金额</td><td>string / number</td></tr></tbody></table><p>返回类型：<code>string</code></p>`,
    4,
  ),
  p2 = JSON.parse(
    '{"title":"money","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guide/function/money.md","filePath":"guide/function/money.md","lastUpdated":1680448147000}',
  ),
  n2 = { name: 'guide/function/money.md' },
  e2 = Object.assign(n2, {
    setup(a) {
      const s = Object.assign({
          '../../example/money/amountSeparator.vue': N,
          '../../example/money/centsToYuan.vue': O,
          '../../example/money/formatDecimal.vue': M,
          '../../example/money/toChineseUpper.vue': I,
          '../../example/money/yuanToCents.vue': $,
        }),
        n = '../../example/money/*.vue';
      return (u, _) => {
        const l = T('Demo');
        return (
          i(),
          r('div', null, [
            z,
            L,
            G,
            D(
              l,
              {
                demos: p(s),
                source:
                  "%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20amountSeparator%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%40jsxiaosi%2Futils'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%7B%7B%20amountSeparator(123456789)%20%7D%7D%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",
                path: n,
                pathName: 'money/amountSeparator',
                'raw-source':
                  "%3Cscript%20setup%20lang%3D%22ts%22%3E%0A%20%20import%20%7B%20amountSeparator%20%7D%20from%20'%40jsxiaosi%2Futils'%3B%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%7B%7B%20amountSeparator(123456789)%20%7D%7D%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A",
                description: '%3Cp%3E%E9%87%91%E9%A2%9D%E6%B7%BB%E5%8A%A0%E5%8D%83%E5%88%86%E7%AC%A6%3C%2Fp%3E%0A',
              },
              { default: F(() => [J]), _: 1 },
              8,
              ['demos'],
            ),
            W,
            D(
              l,
              {
                demos: p(s),
                source:
                  "%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20formatDecimal%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%40jsxiaosi%2Futils'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%7B%7B%20formatDecimal(12345.6789%2C%202)%20%7D%7D%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",
                path: n,
                pathName: 'money/formatDecimal',
                'raw-source':
                  "%3Cscript%20setup%20lang%3D%22ts%22%3E%0A%20%20import%20%7B%20formatDecimal%20%7D%20from%20'%40jsxiaosi%2Futils'%3B%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%7B%7B%20formatDecimal(12345.6789%2C%202)%20%7D%7D%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A",
                description: '%3Cp%3E%E9%87%91%E9%A2%9D%E4%BF%9D%E7%95%99%E5%B0%8F%E6%95%B0%E4%BD%8D%3C%2Fp%3E%0A',
              },
              { default: F(() => [X]), _: 1 },
              8,
              ['demos'],
            ),
            H,
            D(
              l,
              {
                demos: p(s),
                source:
                  "%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20centsToYuan%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%40jsxiaosi%2Futils'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%7B%7B%20centsToYuan(1234567)%20%7D%7D%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",
                path: n,
                pathName: 'money/centsToYuan',
                'raw-source':
                  "%3Cscript%20setup%20lang%3D%22ts%22%3E%0A%20%20import%20%7B%20centsToYuan%20%7D%20from%20'%40jsxiaosi%2Futils'%3B%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%7B%7B%20centsToYuan(1234567)%20%7D%7D%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A",
                description:
                  '%3Cp%3E%E9%87%91%E9%A2%9D%E5%88%86%E5%8D%95%E4%BD%8D%E8%BD%AC%E5%85%83%E5%8D%95%E4%BD%8D%3C%2Fp%3E%0A',
              },
              { default: F(() => [K]), _: 1 },
              8,
              ['demos'],
            ),
            Q,
            D(
              l,
              {
                demos: p(s),
                source:
                  "%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20yuanToCents%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%40jsxiaosi%2Futils'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%7B%7B%20yuanToCents(12345.67)%20%7D%7D%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",
                path: n,
                pathName: 'money/yuanToCents',
                'raw-source':
                  "%3Cscript%20setup%20lang%3D%22ts%22%3E%0A%20%20import%20%7B%20yuanToCents%20%7D%20from%20'%40jsxiaosi%2Futils'%3B%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%7B%7B%20yuanToCents(12345.67)%20%7D%7D%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A",
                description:
                  '%3Cp%3E%E9%87%91%E9%A2%9D%E5%85%83%E5%8D%95%E4%BD%8D%E8%BD%AC%E5%88%86%E5%8D%95%E4%BD%8D%3C%2Fp%3E%0A',
              },
              { default: F(() => [V]), _: 1 },
              8,
              ['demos'],
            ),
            Z,
            D(
              l,
              {
                demos: p(s),
                source:
                  "%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20toChineseUpper%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%40jsxiaosi%2Futils'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%7B%7B%20toChineseUpper(123456789123.1234)%20%7D%7D%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%7B%7B%20toChineseUpper(123456789.1234)%20%7D%7D%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%7B%7B%20toChineseUpper(12345.67)%20%7D%7D%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%7B%7B%20toChineseUpper(0)%20%7D%7D%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",
                path: n,
                pathName: 'money/toChineseUpper',
                'raw-source':
                  "%3Cscript%20setup%20lang%3D%22ts%22%3E%0A%20%20import%20%7B%20toChineseUpper%20%7D%20from%20'%40jsxiaosi%2Futils'%3B%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%7B%7B%20toChineseUpper(123456789123.1234)%20%7D%7D%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%7B%7B%20toChineseUpper(123456789.1234)%20%7D%7D%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%7B%7B%20toChineseUpper(12345.67)%20%7D%7D%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%7B%7B%20toChineseUpper(0)%20%7D%7D%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A",
                description:
                  '%3Cp%3E%E9%87%91%E9%A2%9D%E8%BD%AC%E6%8D%A2%E4%B8%BA%E4%B8%AD%E6%96%87%E5%A4%A7%E5%86%99%3C%2Fp%3E%0A',
              },
              { default: F(() => [s2]), _: 1 },
              8,
              ['demos'],
            ),
            a2,
          ])
        );
      };
    },
  });
export { p2 as __pageData, e2 as default };
