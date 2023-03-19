// 是否包含某个class
export function hasClass<T extends HTMLElement>(ele: T, cls: string): boolean {
  return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

// el 添加class
export function addClass<T extends HTMLElement>(ele: T, cls: string): void {
  if (!hasClass(ele, cls)) ele.className += ' ' + cls;
}

// el 去除某个class
export function removeClass<T extends HTMLElement>(ele: T, cls: string): void {
  if (hasClass(ele, cls)) {
    const reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
    ele.className = ele.className.replace(reg, ' ').trim();
  }
}
