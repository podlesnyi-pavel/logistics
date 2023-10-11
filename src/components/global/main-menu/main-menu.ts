import { defineComponent } from 'vue';
import routesData from '@/router/routes-data';
import mainMenuItem from '@/components/global/main-menu/main-menu-item/main-menu-item.vue';

export default defineComponent({
  name: 'mainMenu',
  components: {
    mainMenuItem,
  },
  data() {
    return {
      routes: routesData,
    };
  },
});
