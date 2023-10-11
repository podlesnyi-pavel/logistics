import { defineComponent } from 'vue';
import appListItem from '@/components/global/app-list-item/app-list-item.vue';
import routesDataMixin from '@/mixins/routes-data-mixin';

export default defineComponent({
  name: 'mainMenu',
  components: {
    appListItem,
  },
  mixins: [routesDataMixin],
});