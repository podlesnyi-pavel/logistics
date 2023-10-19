import { defineComponent } from 'vue';
import submenuItemList from '@/components/global/app-submenu/submenu-litem-list/submenu-litem-list.vue';
import settingsColumns from '@/components/settings-columns/settings-columns.vue';

export default defineComponent({
  name: 'appSubmenu',
  components: {
    submenuItemList,
    settingsColumns,
  },
  emits: ['changeIsShowItemListSubmenu', 'swapItemsSettingsColumns'],
  props: {
    listItems: {
      type: Array,
      required: true,
    },
  },
  methods: {
    changeIsShowItemListSubmenu(index: number) {
      this.$emit('changeIsShowItemListSubmenu', index);
    },
    swapItemsSettingsColumns(dragStartIndex: number, dragEndIndex: number) {
      this.$emit('swapItemsSettingsColumns', dragStartIndex, dragEndIndex);
    },
  },
});
