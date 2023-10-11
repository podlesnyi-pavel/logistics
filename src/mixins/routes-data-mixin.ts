import { defineComponent } from 'vue';
import routesData from '@/router/routes-data';

export default defineComponent({
  data() {
    return {
      routes: routesData,
    };
  },
});
