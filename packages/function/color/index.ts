interface RGBColor {
  r: number;
  g: number;
  b: number;
}

interface HSLColor {
  h: number;
  l: number;
  s: number;
}

interface HWBColor {
  h: number;
  w: number;
  b: number;
}

// hex转rgb
export function hexToRgb(hex: string): RGBColor {
  const hxs: string[] = hex.replace('#', '').match(/../g) || [];
  const newHxs = {} as RGBColor;
  for (let i = 0; i < 3; i++) newHxs[['r', 'g', 'b'][i] as keyof RGBColor] = parseInt(hxs[i], 16);
  return newHxs;
}

// rgb转hex
export function rgbToHex(rgb: RGBColor): string {
  let hex = '#';
  for (const key in rgb) {
    const idx = Math.round(rgb[key as keyof typeof rgb]);
    hex += idx.toString(16).padStart(2, '0');
  }
  return hex;
}

// rgb转hsl
export function rgbToHsl(rgb: RGBColor): HSLColor {
  const { r, g, b } = rgb;
  const r1 = r / 255;
  const g1 = g / 255;
  const b1 = b / 255;
  const maxColor = Math.max(r1, g1, b1);
  const minColor = Math.min(r1, g1, b1);
  const l = (maxColor + minColor) / 2;
  let h = 0;
  let s = 0;
  if (maxColor !== minColor) {
    const d = maxColor - minColor;
    s = l > 0.5 ? d / (2 - maxColor - minColor) : d / (maxColor + minColor);
    switch (maxColor) {
      case r1:
        h = (g1 - b1) / d + (g1 < b1 ? 6 : 0);
        break;
      case g1:
        h = (b1 - r1) / d + 2;
        break;
      case b1:
        h = (r1 - g1) / d + 4;
        break;
    }
    h /= 6;
  }
  return { h: h * 360, s: s * 100, l: l * 100 };
}

// hsl转rgb
export function hslToRgb(hsl: HSLColor): RGBColor {
  const { h, s, l } = hsl;
  const hue = h / 360;
  const saturation = s / 100;
  const lightness = l / 100;
  let r = 0;
  let g = 0;
  let b = 0;
  if (saturation === 0) {
    r = g = b = lightness;
  } else {
    const hueToRgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
    const p = 2 * lightness - q;
    r = hueToRgb(p, q, hue + 1 / 3);
    g = hueToRgb(p, q, hue);
    b = hueToRgb(p, q, hue - 1 / 3);
  }
  return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
}

export function rgbToHwb(rgb: RGBColor): HWBColor {
  const rRatio = rgb.r / 255;
  const gRatio = rgb.g / 255;
  const bRatio = rgb.b / 255;
  const max = Math.max(rRatio, gRatio, bRatio);
  const min = Math.min(rRatio, gRatio, bRatio);
  const delta = max - min;
  const w = Math.round((min / max) * 100);
  const b = Math.round((1 - max) * 100);
  let h;

  if (delta === 0) {
    h = 0;
  } else if (max === rRatio) {
    h = ((gRatio - bRatio) / delta) % 6;
  } else if (max === gRatio) {
    h = (bRatio - rRatio) / delta + 2;
  } else {
    h = (rRatio - gRatio) / delta + 4;
  }

  h = Math.round(h * 60);
  if (h < 0) h += 360;

  return { h, w, b };
}

// export function hwbToRgb(hwb: HWBColor): RGBColor {
//   const { h, w, b } = hwb;
//   const ratio = w + b > 1 ? 1 / (w + b) : 1;
//   const c = ratio * (1 - b);
//   const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
//   const m = 1 - (c + x) * w;
//   const { floor } = Math;
//   const [r1, g1, b1] = [
//     [c, x, 0],
//     [x, c, 0],
//     [0, c, x],
//     [0, x, c],
//     [x, 0, c],
//     [c, 0, x],
//   ][floor(h / 60)];
//   return {
//     r: floor((r1 + m) * 255),
//     g: floor((g1 + m) * 255),
//     b: floor((b1 + m) * 255),
//   };
// }

// export function hwbToRgb(hwb: HWBColor): [number, number, number] {
//   const rgbMax = 255;
//   const hRatio = hwb.h / 360;
//   const wRatio = hwb.w / 100;
//   const bRatio = hwb.b / 100;
//   const i = Math.floor(hRatio * 6);
//   const f = hRatio * 6 - i;
//   const p = bRatio * (1 - wRatio);
//   const q = bRatio * (1 - f * wRatio);
//   const t = bRatio * (1 - (1 - f) * wRatio);
//   let r, g, b;

//   switch (i % 6) {
//     case 0:
//       r = bRatio;
//       g = t;
//       b = p;
//       break;
//     case 1:
//       r = q;
//       g = bRatio;
//       b = p;
//       break;
//     case 2:
//       r = p;
//       g = bRatio;
//       b = t;
//       break;
//     case 3:
//       r = p;
//       g = q;
//       b = bRatio;
//       break;
//     case 4:
//       r = t;
//       g = p;
//       b = bRatio;
//       break;
//     case 5:
//       r = bRatio;
//       g = p;
//       b = q;
//       break;
//   }

//   return { r: Math.round(r * rgbMax), g: Math.round(g * rgbMax), b: Math.round(b * rgbMax) };
// }

// 参考element style 计算
export function colorPalette(color1: string, neutralColor: string, weight: number): string {
  weight = Math.max(Math.min(Number(weight), 1), 0);
  const mainColor = hexToRgb(color1);
  const mixColor = hexToRgb(neutralColor);
  const hex = [];
  for (const key in mainColor) {
    const idx = key as keyof typeof mainColor;
    hex.push(Math.round(mainColor[idx] * (1 - weight) + mixColor[idx] * weight));
  }
  return rgbToHex({ r: hex[0], g: hex[1], b: hex[2] });
}

export function batchColorMatching(primaryColor: string, themeMode: 'light' | 'dark'): string[] {
  if (!primaryColor) return [];
  const mixColor = themeMode === 'dark' ? '#141414' : '#ffffff';
  const colorList: string[] = [];
  for (let i = 1; i <= 9; i++) {
    colorList.push(colorPalette(primaryColor, mixColor, i * 0.1));
  }
  return colorList;
}
