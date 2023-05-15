import { d, o as E, g as C, b as n, t as l, u as e, a as B, e as D, w as F, f as A, h as k } from './app.717403ec.js';
function g() {
  const a = navigator.userAgent;
  let s = 'Unknown',
    t = 'Unknown',
    o = 'Unknown';
  const i = [
    { name: 'Chrome', rule: /Chrome\/([\d.]+)/ },
    { name: 'Firefox', rule: /Firefox\/([\d.]+)/ },
    { name: 'Safari', rule: /Version\/([\d.]+).*Safari/ },
    { name: 'Edge', rule: /Edg\/([\d.]+)/ },
    { name: 'IE', rule: /MSIE ([\d.]+)/ },
    { name: 'Opera', rule: /OPR\/([\d.]+)/ },
    { name: 'Samsung Internet', rule: /SamsungBrowser\/([\d.]+)/ },
    { name: 'UC Browser', rule: /UCBrowser\/([\d.]+)/ },
    { name: 'QQ Browser', rule: /QQBrowser\/([\d.]+)/ },
    { name: 'Baidu Browser', rule: /BIDUBrowser\/([\d.]+)/ },
    { name: 'Sogou Browser', rule: /SE ([\d.X]+)/ },
    { name: 'Yandex Browser', rule: /YaBrowser\/([\d.]+)/ },
    { name: 'Brave', rule: /Brave\/([\d.]+)/ },
    { name: 'WeChat', rule: /MicroMessenger\/([\d.]+)/ },
    { name: 'DingTalk', rule: /DingTalk\/([\d.]+)/ },
  ];
  for (const { name: r, rule: c } of i) {
    const u = a.match(c);
    if (u) {
      (s = r), (t = u[1]);
      break;
    }
  }
  const p = [
    { name: 'Windows', rule: /Windows/i },
    { name: 'Mac OS', rule: /Macintosh/i },
    { name: 'Linux', rule: /Linux/i },
    { name: 'Android', rule: /Android/i },
    { name: 'iOS', rule: /iPhone|iPad|iPod/i },
    { name: 'Windows Phone', rule: /Windows Phone/i },
    { name: 'BlackBerry', rule: /BlackBerry/i },
    { name: 'Symbian', rule: /Symbian/i },
    { name: 'Chrome OS', rule: /CrOS/i },
  ];
  for (const { name: r, rule: c } of p)
    if (c.test(a)) {
      o = r;
      break;
    }
  return { browserName: s, browserVersion: t, operatingSystem: o };
}
function m() {
  const a = navigator.userAgent;
  return /(android|iphone|ipad|ipod|windows phone|blackberry|symbian|mobile)/i.test(a)
    ? 'Mobile'
    : /(windows|macintosh|linux|chromeos|desktop)/i.test(a)
    ? 'Desktop'
    : 'Unknown';
}
const y = d({
    __name: 'getBrowserInfo',
    setup(a) {
      const s = g();
      return (t, o) => (
        E(),
        C('div', null, [
          n('div', null, '浏览器名称：' + l(e(s).browserName), 1),
          n('div', null, '浏览器版本：' + l(e(s).browserVersion), 1),
          n('div', null, '系统环境：' + l(e(s).operatingSystem), 1),
        ])
      );
    },
  }),
  _ = Object.freeze(Object.defineProperty({ __proto__: null, default: y }, Symbol.toStringTag, { value: 'Module' })),
  w = d({
    __name: 'getDeviceType',
    setup(a) {
      return (s, t) => (
        E(), C('div', null, [n('div', null, '运行的设备类型：' + l(e(m)() === 'Mobile' ? '移动端' : 'PC'), 1)])
      );
    },
  }),
  b = Object.freeze(Object.defineProperty({ __proto__: null, default: w }, Symbol.toStringTag, { value: 'Module' })),
  f = n(
    'h1',
    { id: '浏览器信息', tabindex: '-1' },
    [A('浏览器信息 '), n('a', { class: 'header-anchor', href: '#浏览器信息', 'aria-hidden': 'true' }, '#')],
    -1,
  ),
  v = n(
    'h2',
    { id: 'getbrowserinfo', tabindex: '-1' },
    [A('getBrowserInfo '), n('a', { class: 'header-anchor', href: '#getbrowserinfo', 'aria-hidden': 'true' }, '#')],
    -1,
  ),
  h = n('p', null, 'browser/getBrowserInfo', -1),
  I = k('', 5),
  S = n('p', null, 'browser/getDeviceType', -1),
  T = k('', 4),
  N = JSON.parse(
    '{"title":"浏览器信息","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"getBrowserInfo","slug":"getbrowserinfo","link":"#getbrowserinfo","children":[]},{"level":2,"title":"getDeviceType","slug":"getdevicetype","link":"#getdevicetype","children":[]}],"relativePath":"guide/window/browser.md","lastUpdated":1682932221000}',
  ),
  x = { name: 'guide/window/browser.md' },
  V = Object.assign(x, {
    setup(a) {
      const s = Object.assign({
          '../../example/browser/getBrowserInfo.vue': _,
          '../../example/browser/getDeviceType.vue': b,
        }),
        t = '../../example/browser/*.vue';
      return (o, i) => {
        const p = B('Demo');
        return (
          E(),
          C('div', null, [
            f,
            v,
            D(
              p,
              {
                demos: e(s),
                source:
                  "%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20getBrowserInfo%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%40jsxiaosi%2Futils'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20browserInfo%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3EgetBrowserInfo%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E6%B5%8F%E8%A7%88%E5%99%A8%E5%90%8D%E7%A7%B0%EF%BC%9A%7B%7B%20browserInfo.browserName%20%7D%7D%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E6%B5%8F%E8%A7%88%E5%99%A8%E7%89%88%E6%9C%AC%EF%BC%9A%7B%7B%20browserInfo.browserVersion%20%7D%7D%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E7%B3%BB%E7%BB%9F%E7%8E%AF%E5%A2%83%EF%BC%9A%7B%7B%20browserInfo.operatingSystem%20%7D%7D%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",
                path: t,
                pathName: 'browser/getBrowserInfo',
                'raw-source':
                  "%3Cscript%20setup%20lang%3D%22ts%22%3E%0A%20%20import%20%7B%20getBrowserInfo%20%7D%20from%20'%40jsxiaosi%2Futils'%3B%0A%0A%20%20const%20browserInfo%20%3D%20getBrowserInfo()%3B%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cdiv%3E%E6%B5%8F%E8%A7%88%E5%99%A8%E5%90%8D%E7%A7%B0%EF%BC%9A%7B%7B%20browserInfo.browserName%20%7D%7D%3C%2Fdiv%3E%0A%20%20%20%20%3Cdiv%3E%E6%B5%8F%E8%A7%88%E5%99%A8%E7%89%88%E6%9C%AC%EF%BC%9A%7B%7B%20browserInfo.browserVersion%20%7D%7D%3C%2Fdiv%3E%0A%20%20%20%20%3Cdiv%3E%E7%B3%BB%E7%BB%9F%E7%8E%AF%E5%A2%83%EF%BC%9A%7B%7B%20browserInfo.operatingSystem%20%7D%7D%3C%2Fdiv%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A",
                description: '%3Cp%3E%E8%8E%B7%E5%8F%96%E6%B5%8F%E8%A7%88%E5%99%A8%E4%BF%A1%E6%81%AF%3C%2Fp%3E%0A',
              },
              { default: F(() => [h]), _: 1 },
              8,
              ['demos'],
            ),
            I,
            D(
              p,
              {
                demos: e(s),
                source:
                  "%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20getDeviceType%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%40jsxiaosi%2Futils'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E8%BF%90%E8%A1%8C%E7%9A%84%E8%AE%BE%E5%A4%87%E7%B1%BB%E5%9E%8B%EF%BC%9A%7B%7B%20getDeviceType()%20%3D%3D%3D%20'Mobile'%20%3F%20'%E7%A7%BB%E5%8A%A8%E7%AB%AF'%20%3A%20'PC'%20%7D%7D%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",
                path: t,
                pathName: 'browser/getDeviceType',
                'raw-source':
                  "%3Cscript%20setup%20lang%3D%22ts%22%3E%0A%20%20import%20%7B%20getDeviceType%20%7D%20from%20'%40jsxiaosi%2Futils'%3B%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cdiv%3E%E8%BF%90%E8%A1%8C%E7%9A%84%E8%AE%BE%E5%A4%87%E7%B1%BB%E5%9E%8B%EF%BC%9A%7B%7B%20getDeviceType()%20%3D%3D%3D%20'Mobile'%20%3F%20'%E7%A7%BB%E5%8A%A8%E7%AB%AF'%20%3A%20'PC'%20%7D%7D%3C%2Fdiv%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A",
                description:
                  '%3Cp%3E%E8%8E%B7%E5%8F%96%E5%BD%93%E5%89%8D%E8%AE%BE%E5%A4%87%E7%B1%BB%E5%9E%8B%3C%2Fp%3E%0A',
              },
              { default: F(() => [S]), _: 1 },
              8,
              ['demos'],
            ),
            T,
          ])
        );
      };
    },
  });
export { N as __pageData, V as default };
