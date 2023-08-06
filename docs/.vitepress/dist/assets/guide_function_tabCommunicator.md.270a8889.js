import { v as s, b as a, R as n } from './chunks/framework.5bf5a401.js';
const l = n(
    `<h1 id="浏览器跨标签通讯" tabindex="-1">浏览器跨标签通讯 <a class="header-anchor" href="#浏览器跨标签通讯" aria-label="Permalink to &quot;浏览器跨标签通讯&quot;">​</a></h1><p>用于在浏览器的多个标签页间进行通信。</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">TabCommunicator</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tab-communicator</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 创建一个新的TabCommunicator实例</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> communicator </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">TabCommunicator</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">unique-key</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">callbackFunction</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">data</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Received:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 监听某个事件</span></span>
<span class="line"><span style="color:#A6ACCD;">communicator</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">someEvent</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> callbackFunction)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 发送某个事件</span></span>
<span class="line"><span style="color:#A6ACCD;">communicator</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">emit</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">someEvent</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello, World!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 停止监听某个事件</span></span>
<span class="line"><span style="color:#A6ACCD;">communicator</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">off</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">someEvent</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> callbackFunction)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 销毁TabCommunicator实例</span></span>
<span class="line"><span style="color:#A6ACCD;">communicator</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">destroy</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="typescript" tabindex="-1">Typescript <a class="header-anchor" href="#typescript" aria-label="Permalink to &quot;Typescript&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">TabCommunicator</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tab-communicator</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// ✅ 正确使用使用示例</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">EventsType</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">someEvent</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">typeEvent</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> communicator </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">TabCommunicator</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">EventsType</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">unique-key</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">callbackFunction</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">data</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Received:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">communicator</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">someEvent</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">data</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Received:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">communicator</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">emit</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">someEvent</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello, World!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// ❌ 错误使用示例</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Type error 类型“&quot;foo&quot;”的参数不能赋给类型“&quot;someEvent&quot; | &quot;typeEvent&quot;”的参数。ts(2345)</span></span>
<span class="line"><span style="color:#A6ACCD;">communicator</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">data</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Received:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">communicator</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">emit</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello, World!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Type error 类型“number”的参数不能赋给类型“string”的参数。ts(2345)</span></span>
<span class="line"><span style="color:#A6ACCD;">communicator</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">someEvent</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Received:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">communicator</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">12</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><h2 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h2><h3 id="tabcommunicator" tabindex="-1">TabCommunicator <a class="header-anchor" href="#tabcommunicator" aria-label="Permalink to &quot;TabCommunicator&quot;">​</a></h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>key</td><td>通道ID，所有使用相同key的TabCommunicator实例将可以互相通信。</td><td>string</td></tr></tbody></table><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><ul><li><h3 id="emit" tabindex="-1">emit <a class="header-anchor" href="#emit" aria-label="Permalink to &quot;emit&quot;">​</a></h3><p>发送一个事件。</p><p>参数：</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>event</td><td>需要触发的事件的名称。该名称必须是 T 类型对象的键</td><td><code>K</code>/<code>string</code></td></tr><tr><td>data</td><td>事件相关的数据。其类型与 T 类型对象中对应键的值的类型相同。</td><td><code>T[K]</code></td></tr></tbody></table></li><li><h3 id="on" tabindex="-1">on <a class="header-anchor" href="#on" aria-label="Permalink to &quot;on&quot;">​</a></h3><p>监听一个事件。</p><p>参数：</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>event</td><td>要监听的事件的名称</td><td><code>string</code></td></tr><tr><td>callback</td><td>当事件被触发时，将会被调用的回调函数</td><td><code>Function</code></td></tr></tbody></table></li><li><h3 id="off" tabindex="-1">off <a class="header-anchor" href="#off" aria-label="Permalink to &quot;off&quot;">​</a></h3><p>停止监听一个事件。</p><p>参数：</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>event</td><td>要停止监听的事件的名称</td><td><code>string</code></td></tr><tr><td>callback</td><td>当事件被触发时，被调用的回调函数。这个回调函数必须和之前在on方法中注册的回调函数完全相同。如果不传就删除给定类型的所有回调</td><td><code>Function</code></td></tr></tbody></table></li><li><h3 id="getalllisteners" tabindex="-1">getAllListeners <a class="header-anchor" href="#getalllisteners" aria-label="Permalink to &quot;getAllListeners&quot;">​</a></h3><p>获取所有已注册监听器的对象</p></li><li><h3 id="destroy" tabindex="-1">destroy <a class="header-anchor" href="#destroy" aria-label="Permalink to &quot;destroy&quot;">​</a></h3><p>销毁TabCommunicator实例。销毁后的实例将无法发送或接收任何事件。</p></li></ul><h2 id="注意事项⚠️" tabindex="-1">注意事项⚠️ <a class="header-anchor" href="#注意事项⚠️" aria-label="Permalink to &quot;注意事项⚠️&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><ul><li><p><code>TabCommunicator</code>类使用浏览器的<code>BroadcastChannel</code> API进行通信。在不支持<code>BroadcastChannel</code> API的浏览器中，<code>TabCommunicator</code>将会使用<code>localStorage</code>作为备选方案。</p></li><li><p>在同一个浏览器窗口的不同标签页中，可以使用相同的key创建多个<code>TabCommunicator</code>实例，这些实例将能够互相通信。在不同的浏览器窗口中，也可以使用相同的key创建<code>TabCommunicator</code>实例，但是这些实例将无法互相通信。</p></li><li><p><code>TabCommunicator</code>实例在创建时会自动开始监听事件，但是在不需要时，应该调用destroy方法来销毁实例，以避免内存泄漏。</p></li></ul></div>`,
    13,
  ),
  o = [l],
  D = JSON.parse(
    '{"title":"浏览器跨标签通讯","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guide/function/tabCommunicator.md","filePath":"guide/function/tabCommunicator.md","lastUpdated":1689687556000}',
  ),
  p = { name: 'guide/function/tabCommunicator.md' },
  y = Object.assign(p, {
    setup(t) {
      return (e, c) => (s(), a('div', null, o));
    },
  });
export { D as __pageData, y as default };