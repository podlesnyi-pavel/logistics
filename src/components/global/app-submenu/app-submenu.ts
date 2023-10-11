import { defineComponent } from 'vue';
import appListItem from '@/components/global/app-list-item/app-list-item.vue';

export default defineComponent({
  name: 'appSubmenu',
  components: {
    appListItem,
  },
  props: {
    listNames: {
      type: Array,
      required: true,
    },
  },
});
