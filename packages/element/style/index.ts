import type * as CSS from 'csstype';
import { transformString } from '../../utils/string';

export type CSSProperty = CSS.Properties<string | number> | CSS.PropertiesHyphen<string | number>;

type Styles = keyof CSSProperty;

export function getStyle(elem: HTMLElement): CSSProperty {
  const styles: any = {};
  for (let i = 0; i < elem.style.length; i++) {
    const prop = elem.style[i];
    styles[transformString(prop, 'lowerCamelCase')] = elem.style.getPropertyValue(prop as string);
  }
  return styles as CSSProperty;
}

export function setStyle(elem: HTMLElement, styles: CSSProperty): void {
  for (const prop in styles) {
    if (Object.prototype.hasOwnProperty.call(styles, prop)) {
      const value = styles[prop as Styles];
      console.log('value', value, prop);
      if (value !== undefined) {
        elem.style.setProperty(transformString(prop, 'kebabCase'), String(value));
      }
    }
  }
}

export function removeStyle(elem: HTMLElement, styles: Styles[]): void {
  styles.forEach((prop) => elem.style.removeProperty(transformString(prop, 'kebabCase')));
}
