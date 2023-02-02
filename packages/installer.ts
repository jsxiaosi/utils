import type { App, Plugin } from 'vue';

import { waterMark } from './components/waterMark';

const component = [] as Plugin[];

const directive = [waterMark] as Plugin[];

export const install = function (app: App) {
  [...component, ...directive].forEach((i) => app.use(i));
};

export default {
  install,
};
