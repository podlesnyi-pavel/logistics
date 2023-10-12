import '@/assets/styles/main.scss';

import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router/router';
import appIcon from '@/components/global/app-icon/app-icon.vue';
import appButton from '@/components/global/app-button/app-button.vue';

const app = createApp(App);

app.config.errorHandler = (error) => {
  console.log('error', error);
};

app.component(appIcon.name, appIcon);
app.component(appButton.name, appButton);

app.use(router);

app.mount('#app');
