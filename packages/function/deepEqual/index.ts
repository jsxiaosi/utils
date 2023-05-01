import { getObjectProtoType, isArray, isObject } from '../../utils/is';

export function compareValues(val1: any, val2: any): number {
  if (isObject(val1) && isObject(val2)) {
    return compareObjects(val1, val2);
  } else if (isArray(val1) && isArray(val2)) {
    return compareArrays(val1, val2);
  } else {
    return val1 < val2 ? -1 : val1 > val2 ? 1 : 0;
  }
}

export function compareObjects(obj1: any, obj2: any): number {
  const keys1 = Object.keys(obj1).sort(compareValues);
  const keys2 = Object.keys(obj2).sort(compareValues);

  if (keys1.length !== keys2.length) {
    return keys1.length - keys2.length;
  }

  for (let i = 0; i < keys1.length; i++) {
    if (keys1[i] !== keys2[i]) {
      return compareValues(keys1[i], keys2[i]);
    }

    const result = compareValues(obj1[keys1[i]], obj2[keys2[i]]);
    if (result !== 0) {
      return result;
    }
  }

  return 0;
}

export function compareArrays(arr1: any[], arr2: any[]): number {
  if (arr1.length !== arr2.length) {
    return arr1.length - arr2.length;
  }

  const arr1Copy = [...arr1].sort(compareValues);
  const arr2Copy = [...arr2].sort(compareValues);

  for (let i = 0; i < arr1Copy.length; i++) {
    const result = compareValues(arr1Copy[i], arr2Copy[i]);
    if (result !== 0) {
      return result;
    }
  }

  return 0;
}

export function deepEqual(val1: any, val2: any, visited = new Set()): boolean {
  // 处理循环引用，避免无限递归和堆栈溢出问题
  if (visited.has(val1)) {
    return true;
  }

  // 检查类型是否相同
  const type1 = getObjectProtoType(val1);
  const type2 = getObjectProtoType(val2);

  if (type1 !== type2) {
    return false;
  }

  // 处理对象
  if (isObject(val1) && isObject(val2)) {
    visited.add(val1);

    const keys1 = Object.keys(val1);
    const keys2 = Object.keys(val2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (const key of keys1) {
      if (!keys2.includes(key)) {
        return false;
      }

      if (!deepEqual(val1[key], val2[key], visited)) {
        return false;
      }
    }
    // 处理数组，忽略顺序
  } else if (isArray(val1) && isArray(val2)) {
    if (val1.length !== val2.length) {
      return false;
    }

    const arr1Copy = [...val1];
    const arr2Copy = [...val2];

    if (arr1Copy.every(isObject) && arr2Copy.every(isObject)) {
      arr1Copy.sort(compareObjects);
      arr2Copy.sort(compareObjects);
    } else if (arr1Copy.every(isArray) && arr2Copy.every(isArray)) {
      arr1Copy.sort(compareArrays);
      arr2Copy.sort(compareArrays);
    } else {
      arr1Copy.sort();
      arr2Copy.sort();
    }

    for (let i = 0; i < arr1Copy.length; i++) {
      if (!deepEqual(arr1Copy[i], arr2Copy[i], visited)) {
        return false;
      }
    }
    // 处理特殊类型
  } else if (type1 === '[object Date]' || type1 === '[object RegExp]') {
    return val1.toString() === val2.toString();
    // 处理函数
  } else if (type1 === '[object Function]') {
    return val1.toString() === val2.toString();
    // 处理简单类型
  } else {
    return val1 === val2;
  }

  return true;
}
