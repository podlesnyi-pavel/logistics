import { defineComponent } from 'vue';
import routesData from '@/router/routes-data';
import routerItemList from '@/components/global/router-item-list/router-item-list.vue';

export default defineComponent({
  name: 'mainMenu',
  components: {
    routerItemList,
  },
  data() {
    return {
      routes: routesData,
    };
  },
});
