import '@/assets/styles/main.scss';

import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router/router';
import appIcon from '@/components/global/app-icon/app-icon.vue';

const app = createApp(App);

app.config.errorHandler = (error) => {
  console.log('error', error);
};

app.component(appIcon.name, appIcon);

app.use(router);

app.mount('#app');
