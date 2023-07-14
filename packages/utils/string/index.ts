type StringTrimType = 'all' | 'left' | 'right';

export function stringTrim(str: string, type: StringTrimType = 'all'): string {
  switch (type) {
    case 'left':
      return str.replace(/^\s+/, '');
    case 'right':
      return str.replace(/\s+$/, '');
    default:
      return str.replace(/\s+/g, '');
  }
}

type StringTransformType = 'lowerCamelCase' | 'upperCamelCase' | 'upperCase' | 'kebabCase';

export function transformString(str: string, type?: StringTransformType): string {
  switch (type) {
    case 'lowerCamelCase':
      return str.replace(/[-_]+(\w)/g, (_, c) => c.toUpperCase());
    case 'upperCamelCase':
      return str.replace(/[-_]+(\w)/g, (_, c) => c.toUpperCase()).replace(/^(\w)/, (_, c) => c.toUpperCase());
    case 'upperCase':
      return str.toUpperCase();
    case 'kebabCase':
      return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
    default:
      return str;
  }
}

export function removeString(str: string, substrings: string[]): string {
  const regex = new RegExp(substrings.join('|'), 'g');
  return str.replace(regex, '');
}
