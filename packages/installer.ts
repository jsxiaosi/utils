import type { App, Plugin } from 'vue';

import { IButton } from './components/button';

import { waterMark } from './components/waterMark';

const component = [IButton] as Plugin[];

const directive = [waterMark] as Plugin[];

export const install = function (app: App) {
  [...component, ...directive].forEach((i) => app.use(i));
};

export default {
  install,
};
