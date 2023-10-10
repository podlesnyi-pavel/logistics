import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.config.errorHandler = (error) => {
  console.log('error', error);
};

app.mount('#app');
