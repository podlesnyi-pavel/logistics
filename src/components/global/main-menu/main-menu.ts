import { defineComponent } from 'vue';
import routesData from '@/router/routes-data';

export default defineComponent({
  name: 'mainMenu',
  data() {
    return {
      routes: routesData,
    };
  },
});
