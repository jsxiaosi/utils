import type { SFCWithInstall } from '../types';

export const withInstall = <T>(main: T) => {
  (main as SFCWithInstall<T>).install = (app): void => {
    const comp: Record<string, any> = main as Record<string, any>;
    app.component(comp.name, comp);
  };
  return main as SFCWithInstall<T>;
};