import '@/assets/styles/main.scss';

import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router/router';

const app = createApp(App);

app.config.errorHandler = (error) => {
  console.log('error', error);
};

app.use(router);

app.mount('#app');
