import { o as s, g as a, h as e } from './app.c381dac2.js';
const l = e(
    `<h1 id="类型判断" tabindex="-1">类型判断 <a class="header-anchor" href="#类型判断" aria-hidden="true">#</a></h1><h2 id="is" tabindex="-1">is <a class="header-anchor" href="#is" aria-hidden="true">#</a></h2><p>通过Object.prototype.toString() 检测对象类型</p><details class="details custom-block"><summary>示例代码</summary><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">is</span><span style="color:#A6ACCD;">(val</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> type)</span></span>
<span class="line"></span></code></pre></div></details><p>参数:</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>val</td><td>数据源</td><td>unknown</td><td></td></tr><tr><td>type</td><td>数据类型</td><td>string</td><td></td></tr></tbody></table><h2 id="isdef" tabindex="-1">isDef <a class="header-anchor" href="#isdef" aria-hidden="true">#</a></h2><p>判断属性是否已定义（不等于Undefined）</p><details class="details custom-block"><summary>示例代码</summary><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">isDef</span><span style="color:#A6ACCD;">(val)</span></span>
<span class="line"></span></code></pre></div></details><h2 id="isundef" tabindex="-1">isUnDef <a class="header-anchor" href="#isundef" aria-hidden="true">#</a></h2><p>判断属性是否未定义（等于Undefined）</p><details class="details custom-block"><summary>示例代码</summary><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">isUnDef</span><span style="color:#A6ACCD;">(val)</span></span>
<span class="line"></span></code></pre></div></details><h2 id="isobject" tabindex="-1">isObject <a class="header-anchor" href="#isobject" aria-hidden="true">#</a></h2><p>判断属性是否为Object类型</p><details class="details custom-block"><summary>示例代码</summary><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">isObject</span><span style="color:#A6ACCD;">(val)</span></span>
<span class="line"></span></code></pre></div></details><h2 id="isempty" tabindex="-1">isEmpty <a class="header-anchor" href="#isempty" aria-hidden="true">#</a></h2><p>判断 String Array Map Set Object 是否为空</p><details class="details custom-block"><summary>示例代码</summary><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">isEmpty</span><span style="color:#A6ACCD;">(val)</span></span>
<span class="line"></span></code></pre></div></details><h2 id="isdate" tabindex="-1">isDate <a class="header-anchor" href="#isdate" aria-hidden="true">#</a></h2><p>判断是否为Date类型</p><details class="details custom-block"><summary>示例代码</summary><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">isDate</span><span style="color:#A6ACCD;">(val)</span></span>
<span class="line"></span></code></pre></div></details><h2 id="isnull" tabindex="-1">isNull <a class="header-anchor" href="#isnull" aria-hidden="true">#</a></h2><p>判断属性是否为Null</p><details class="details custom-block"><summary>示例代码</summary><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">isNull</span><span style="color:#A6ACCD;">(val)</span></span>
<span class="line"></span></code></pre></div></details><h2 id="isnullorundef" tabindex="-1">isNullOrUnDef <a class="header-anchor" href="#isnullorundef" aria-hidden="true">#</a></h2><p>是否等Null或者Undefined</p><details class="details custom-block"><summary>示例代码</summary><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">isNullOrUnDef</span><span style="color:#A6ACCD;">(val)</span></span>
<span class="line"></span></code></pre></div></details><h2 id="isnumber" tabindex="-1">isNumber <a class="header-anchor" href="#isnumber" aria-hidden="true">#</a></h2><p>是否为Number类型</p><details class="details custom-block"><summary>示例代码</summary><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">isNumber</span><span style="color:#A6ACCD;">(val)</span></span>
<span class="line"></span></code></pre></div></details><h2 id="ispromise" tabindex="-1">isPromise <a class="header-anchor" href="#ispromise" aria-hidden="true">#</a></h2><p>是否为Promise类型</p><details class="details custom-block"><summary>示例代码</summary><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">isPromise</span><span style="color:#A6ACCD;">(val)</span></span>
<span class="line"></span></code></pre></div></details><h2 id="isstring" tabindex="-1">isString <a class="header-anchor" href="#isstring" aria-hidden="true">#</a></h2><p>是否为String类型</p><details class="details custom-block"><summary>示例代码</summary><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">isString</span><span style="color:#A6ACCD;">(val)</span></span>
<span class="line"></span></code></pre></div></details><h2 id="isfunction" tabindex="-1">isFunction <a class="header-anchor" href="#isfunction" aria-hidden="true">#</a></h2><p>是否为Function类型</p><details class="details custom-block"><summary>示例代码</summary><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">isFunction</span><span style="color:#A6ACCD;">(val)</span></span>
<span class="line"></span></code></pre></div></details><h2 id="isboolean" tabindex="-1">isBoolean <a class="header-anchor" href="#isboolean" aria-hidden="true">#</a></h2><p>是否为Boolean类型</p><details class="details custom-block"><summary>示例代码</summary><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">isBoolean</span><span style="color:#A6ACCD;">(val)</span></span>
<span class="line"></span></code></pre></div></details><h2 id="isregexp" tabindex="-1">isRegExp <a class="header-anchor" href="#isregexp" aria-hidden="true">#</a></h2><p>是否为正则表达式</p><details class="details custom-block"><summary>示例代码</summary><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">isRegExp</span><span style="color:#A6ACCD;">(val)</span></span>
<span class="line"></span></code></pre></div></details><h2 id="isarray" tabindex="-1">isArray <a class="header-anchor" href="#isarray" aria-hidden="true">#</a></h2><p>是否为Array类型</p><details class="details custom-block"><summary>示例代码</summary><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">isArray</span><span style="color:#A6ACCD;">(val)</span></span>
<span class="line"></span></code></pre></div></details><h2 id="iswindow" tabindex="-1">isWindow <a class="header-anchor" href="#iswindow" aria-hidden="true">#</a></h2><p>是否为Window对象</p><details class="details custom-block"><summary>示例代码</summary><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">isWindow</span><span style="color:#A6ACCD;">(val)</span></span>
<span class="line"></span></code></pre></div></details><h2 id="iselement" tabindex="-1">isElement <a class="header-anchor" href="#iselement" aria-hidden="true">#</a></h2><p>是否为Element</p><details class="details custom-block"><summary>示例代码</summary><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">isElement</span><span style="color:#A6ACCD;">(val)</span></span>
<span class="line"></span></code></pre></div></details>`,
    54,
  ),
  i = [l],
  o = JSON.parse(
    '{"title":"类型判断","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"is","slug":"is","link":"#is","children":[]},{"level":2,"title":"isDef","slug":"isdef","link":"#isdef","children":[]},{"level":2,"title":"isUnDef","slug":"isundef","link":"#isundef","children":[]},{"level":2,"title":"isObject","slug":"isobject","link":"#isobject","children":[]},{"level":2,"title":"isEmpty","slug":"isempty","link":"#isempty","children":[]},{"level":2,"title":"isDate","slug":"isdate","link":"#isdate","children":[]},{"level":2,"title":"isNull","slug":"isnull","link":"#isnull","children":[]},{"level":2,"title":"isNullOrUnDef","slug":"isnullorundef","link":"#isnullorundef","children":[]},{"level":2,"title":"isNumber","slug":"isnumber","link":"#isnumber","children":[]},{"level":2,"title":"isPromise","slug":"ispromise","link":"#ispromise","children":[]},{"level":2,"title":"isString","slug":"isstring","link":"#isstring","children":[]},{"level":2,"title":"isFunction","slug":"isfunction","link":"#isfunction","children":[]},{"level":2,"title":"isBoolean","slug":"isboolean","link":"#isboolean","children":[]},{"level":2,"title":"isRegExp","slug":"isregexp","link":"#isregexp","children":[]},{"level":2,"title":"isArray","slug":"isarray","link":"#isarray","children":[]},{"level":2,"title":"isWindow","slug":"iswindow","link":"#iswindow","children":[]},{"level":2,"title":"isElement","slug":"iselement","link":"#iselement","children":[]}],"relativePath":"guide/utils/is/type.md","lastUpdated":1679327366000}',
  ),
  n = { name: 'guide/utils/is/type.md' },
  r = Object.assign(n, {
    setup(t) {
      return (p, c) => (s(), a('div', null, i));
    },
  });
export { o as __pageData, r as default };
