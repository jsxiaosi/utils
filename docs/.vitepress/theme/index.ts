import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';

import Demo from '../components/v-demo.vue';
import '../styles/index.scss';

import ElementPlus from 'element-plus';

export default <Theme>{
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(ElementPlus);
    app.component('Demo', Demo);
  },
};
