import { defineComponent } from 'vue';
import pageTitle from '@/components/global/page-title/page-title.vue';
import appSubmenu from '@/components/global/app-submenu/app-submenu.vue';
import routesDataMixin from '@/mixins/routes-data-mixin';

export default defineComponent({
  components: {
    pageTitle,
    appSubmenu,
  },
  mixins: [routesDataMixin],
  computed: {
    listNamesSubmenu() {
      return [
        this.routes.maintenance.children.general.name,
        this.routes.maintenance.children.goods.name,
        this.routes.maintenance.children.expenses.name,
      ];
    },
  },
});
