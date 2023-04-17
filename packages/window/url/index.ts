import { isArray, isUrl } from '../../utils/is';

export type ArrayFormat = 'brackets' | 'indices' | 'repeat' | 'comma' | 'unnamed';

export function objectToUrlParams(params: Record<string, any>, arrayFormat: ArrayFormat = 'unnamed'): string {
  if (isArray(params)) {
    return params.map((val) => `[]=${val}`).join('&');
  } else {
    const queryString = Object.entries(params)
      .flatMap(([key, value]) => {
        if (isArray(value)) {
          switch (arrayFormat) {
            case 'brackets':
              return value.map((val) => `${key}[]=${val}`);
            case 'indices':
              return value.map((val, index) => `${key}[${index}]=${val}`);
            case 'repeat':
              return value.map((val) => `${key}=${val}`);
            case 'comma':
              return `${key}=${value.join(',')}`;
            default:
              return value.map((val) => `[]=${val}`);
          }
        } else {
          return `${key}=${value}`;
        }
      })
      .join('&');

    return queryString;
  }
}

export function appendUrlParams(
  url: string,
  params: Record<string, any>,
  arrayFormat: ArrayFormat = 'unnamed',
): string {
  const queryString = objectToUrlParams(params, arrayFormat);
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}${queryString}`;
}

export function urlParamsToObject(queryString: string): Record<string, any> {
  let urlParams = queryString;
  if (isUrl(queryString)) {
    urlParams = queryString.split('?')[1];
  }
  const searchParams = new URLSearchParams(urlParams);
  const paramsObject: Record<string, any> = {};
  const unnamedArray: any[] = [];

  for (const [key, value] of searchParams.entries()) {
    let isArray = false;
    let realKey = key;
    if (key.endsWith('[]')) {
      isArray = true;
      realKey = key.slice(0, -2);
    } else if (key.match(/\[\d+\]$/)) {
      isArray = true;
      realKey = key.replace(/\[\d+\]$/, '');
    }

    if (realKey === '') {
      unnamedArray.push(value);
      continue;
    }

    if (Object.prototype.hasOwnProperty.call(paramsObject, realKey)) {
      isArray = true;
      if (!Array.isArray(paramsObject[realKey])) {
        paramsObject[realKey] = [paramsObject[realKey]];
      }
    }

    if (isArray) {
      if (!paramsObject[realKey]) {
        paramsObject[realKey] = [];
      }
      paramsObject[realKey].push(value);
    } else {
      paramsObject[realKey] = value;
    }
  }

  if (unnamedArray.length > 0) {
    if (Object.keys(paramsObject).length > 0) paramsObject.$unnamedArray = unnamedArray;
    else return unnamedArray;
  }

  return paramsObject;
}
