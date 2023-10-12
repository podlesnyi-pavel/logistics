import { defineComponent } from 'vue';
import appListItem from '@/components/global/app-list-item/app-list-item.vue';
import settingsColumns from '@/components/settings-columns/settings-columns.vue';

export default defineComponent({
  name: 'appSubmenu',
  components: {
    appListItem,
    settingsColumns,
  },
  props: {
    listNames: {
      type: Array,
      required: true,
    },
  },
});
