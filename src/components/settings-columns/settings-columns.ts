import { defineComponent } from 'vue';
import type { IMainListItem } from '@/components/settings-columns/interfaces/main-list-item-interface';

export default defineComponent({
  name: 'settingsColumns',
  data() {
    return {
      isOpenMenu: false,
      mainListItems: [
        {
          id: 0,
          type: 'visibility',
          title: 'Отображение столбцов',
        },
        {
          id: 1,
          type: 'order',
          title: 'Порядок столбцов',
        },
      ],
      currentItem: null as IMainListItem | null,
    };
  },
  computed: {
    isShowMainList(): boolean {
      return !this.currentItem && this.isOpenMenu;
    },
  },
  methods: {
    openMenu(): void {
      this.isOpenMenu = !this.isOpenMenu;
    },
    chooseCurrentItem(item: IMainListItem): void {
      this.currentItem = item;
    },
    resetcurrentItem(): void {
      this.currentItem = null;
    },
  },
});
