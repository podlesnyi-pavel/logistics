import { defineComponent } from 'vue';
import pageTitle from '@/components/global/page-title/page-title.vue';
import appSubmenu from '@/components/global/app-submenu/app-submenu.vue';
import routesData from '@/router/routes-data';
import type { IItemSubmenuList } from '@/views/maintenance-view/interfaces/litem-submenu-list-interface';

export default defineComponent({
  components: {
    pageTitle,
    appSubmenu,
  },
  // done just for demonstration
  provide() {
    return {
      changeIsShowItemListSubmenu: this.changeIsShowItemListSubmenu,
    };
  },
  data() {
    return {
      routes: routesData,
      listSubmenu: [
        {
          title: routesData.maintenance.children.general.name,
          isShow: true,
        },
        {
          title: routesData.maintenance.children.goods.name,
          isShow: true,
        },
        {
          title: routesData.maintenance.children.expenses.name,
          isShow: true,
        },
      ] as IItemSubmenuList[],
    };
  },
  methods: {
    changeIsShowItemListSubmenu(index: number): void {
      this.listSubmenu[index].isShow = !this.listSubmenu[index].isShow;
    },
  },
});
