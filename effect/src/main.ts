import { createApp } from 'vue';
import xsCom from '@xs-utils-vue/index';

import App from './App.vue';

const app = createApp(App);

app.use(xsCom);

app.mount('#app');
