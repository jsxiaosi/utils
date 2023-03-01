import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';

import Demo from '../components/v-demo.vue';
import '../styles/app.scss';

import xsComponents from 'xs-utils-vue';
// import 'xs-utils-vue/theme-default/index.css';

import ElementPlus from 'element-plus';

export default <Theme>{
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register global components
    app.use(xsComponents);
    app.use(ElementPlus);
    app.component('Demo', Demo);
  },
};
