import { createApp } from 'vue';
import xsCom from '@xs-utils/index';
// import '@xs-utils/theme-chalk/index.css';

import App from './App.vue';

const app = createApp(App);

app.use(xsCom);

app.mount('#app');
