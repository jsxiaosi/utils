import type { App, Directive } from 'vue';
import type { SFCWithInstall } from '../types';

export const withInstall = <T>(main: T) => {
  (main as SFCWithInstall<T>).install = (app): void => {
    const comp: Record<string, any> = main as Record<string, any>;
    app.component(comp.name, comp);
  };
  return main as SFCWithInstall<T>;
};

export const withInstallDirectives = <T extends Directive>(main: T, name: string) => {
  return {
    install: (app: App): void => {
      app.directive(name, main);
    },
    directive: main,
  };
};
