import { v as s, b as l, R as e } from './chunks/framework.5bf5a401.js';
const n = e(
    `<h1 id="fullscreen" tabindex="-1">FullScreen <a class="header-anchor" href="#fullscreen" aria-label="Permalink to &quot;FullScreen&quot;">​</a></h1><p>开启和关闭全屏模式的方法。</p><h2 id="openfullscreen" tabindex="-1">openFullScreen <a class="header-anchor" href="#openfullscreen" aria-label="Permalink to &quot;openFullScreen&quot;">​</a></h2><p>开启全屏模式。如果提供了 <code>element</code> 参数，那么 <code>element</code> 将会进入全屏模式；如果没有提供 <code>element</code> 参数，那么整个页面将会进入全屏模式。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">openFullScreen</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@jsxiaosi/utils</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 整个页面进入全屏模式</span></span>
<span class="line"><span style="color:#82AAFF;">openFullScreen</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 指定元素进入全屏模式</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> elem</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HTMLDivElement</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createElement</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">div</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">openFullScreen</span><span style="color:#A6ACCD;">(elem)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>参数:</p><table><thead><tr><th>参数</th><th>描述</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>element</td><td>要进入全屏模式的元素</td><td><code>HTMLElement</code></td><td><code>document.body</code></td></tr></tbody></table><h2 id="closefullscreen" tabindex="-1">closeFullScreen <a class="header-anchor" href="#closefullscreen" aria-label="Permalink to &quot;closeFullScreen&quot;">​</a></h2><p>关闭全屏模式。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">closeFullScreen</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@jsxiaosi/utils</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 退出全屏模式</span></span>
<span class="line"><span style="color:#82AAFF;">closeFullScreen</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span></code></pre></div>`,
    10,
  ),
  a = [n],
  i = JSON.parse(
    '{"title":"FullScreen","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guide/element/fullScreen.md","filePath":"guide/element/fullScreen.md","lastUpdated":1689426897000}',
  ),
  o = { name: 'guide/element/fullScreen.md' },
  y = Object.assign(o, {
    setup(t) {
      return (p, c) => (s(), l('div', null, a));
    },
  });
export { i as __pageData, y as default };
