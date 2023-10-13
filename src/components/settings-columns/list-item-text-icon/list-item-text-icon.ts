import { defineComponent } from 'vue';
import type { IMainListItem } from '@/components/settings-columns/interfaces/main-list-item-interface';
import type { IItemSubmenuList } from '@/views/maintenance-view/interfaces/litem-submenu-list-interface';

export default defineComponent({
  name: 'listItemTextIcon',
  emits: ['actionClick'],
  props: {
    items: {
      type: Array,
    },
    keyItem: {
      type: [String, Number],
    },
    icon: {
      type: String,
    },
    customClass: {
      type: String,
    },
  },
  data() {
    return {
      sizeIcon: 'xxs',
    };
  },
  methods: {
    // add type for item from list testArray from parrent, which will be in vuex
    actionClick(item: IMainListItem | IItemSubmenuList): void {
      this.$emit('actionClick', item);
    },
  },
});
