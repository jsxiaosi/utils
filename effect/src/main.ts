import { createApp } from 'vue';
import xsCom from '@xs-vue-utils/index';

import App from './App.vue';

const app = createApp(App);

app.use(xsCom);

app.mount('#app');
