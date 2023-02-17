const toString = Object.prototype.toString;

// toString() 检测对象类型
export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`;
}

// 属性是否定义
export function isDef<T = unknown>(val?: T): val is T {
  return typeof val !== 'undefined';
}

// 属性是否未定义
export function isUnDef<T = unknown>(val?: T): val is T {
  return !isDef(val);
}

// 是否为object类型
export function isObject(val: any): val is Record<any, any> {
  return val !== null && is(val, 'Object');
}

// 判断 string array map set object 是否为空
export function isEmpty<T = unknown>(val: T): val is T {
  if (isArray(val) || isString(val)) {
    return val.length === 0;
  }

  if (val instanceof Map || val instanceof Set) {
    return val.size === 0;
  }

  if (isObject(val)) {
    return Object.keys(val).length === 0;
  }

  return false;
}

// 是否是日期类型
export function isDate(val: unknown): val is Date {
  return is(val, 'Date');
}

// 是否等于null
export function isNull(val: unknown): val is null {
  return val === null;
}

// 判断属性是为undefined或者null
export function isNullOrUnDef(val: unknown): val is null | undefined {
  return isUnDef(val) || isNull(val);
}

// 是否为Number类型
export function isNumber(val: unknown): val is number {
  return is(val, 'Number');
}

// 是否为promise类型
export function isPromise<T = any>(val: unknown): val is Promise<T> {
  return (
    is(val, 'Promise') ||
    ((isObject(val) || isFunction(val)) && isFunction(val.then) && isFunction(val.catch))
  );
}

// 是否string类型
export function isString(val: unknown): val is string {
  return is(val, 'String');
}

// 是否为function类型
export function isFunction(val: unknown): val is Function {
  return typeof val === 'function';
}

// 是否为boolean类型
export function isBoolean(val: unknown): val is boolean {
  return is(val, 'Boolean');
}

// 是否为正则表达式
export function isRegExp(val: unknown): val is RegExp {
  return is(val, 'RegExp');
}

// 是否为数组类型
export function isArray(val: any): val is Array<any> {
  return val && Array.isArray(val);
}

// 是否为window对象
export function isWindow(val: any): val is Window {
  return typeof window !== 'undefined' && is(val, 'Window');
}

// 是否为 Element
export function isElement(val: unknown): val is Element {
  return isObject(val) && !!val.tagName;
}

// 是否为map类型
export function isMap(val: unknown): val is Map<any, any> {
  return is(val, 'Map');
}

// 是否为地址
export function isUrl(path: string): boolean {
  const reg =
    /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
  return reg.test(path);
}
