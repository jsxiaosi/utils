export function stringTrim(str: string, type: 'all' | 'left' | 'right' = 'all'): string {
  switch (type) {
    case 'left':
      return str.replace(/^\s+/, '');
    case 'right':
      return str.replace(/\s+$/, '');
    default:
      return str.replace(/\s+/g, '');
  }
}

type StringTransformType = 'lowerCamelCase' | 'upperCamelCase' | 'upperCase';

export function transformString(str: string, type: StringTransformType): string {
  switch (type) {
    case 'lowerCamelCase':
      return str.replace(/[-_]+(\w)/g, (_, c) => c.toUpperCase());
    case 'upperCamelCase':
      return str.replace(/[-_]+(\w)/g, (_, c) => c.toUpperCase()).replace(/^(\w)/, (_, c) => c.toUpperCase());
    case 'upperCase':
      return str.toUpperCase();
    default:
      return str;
  }
}
