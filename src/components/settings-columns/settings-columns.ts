import { defineComponent } from 'vue';
import type { IMainListItem } from '@/components/settings-columns/interfaces/main-list-item-interface';
import { EMainListItemId } from '@/components/settings-columns/enums/main-list-item-id';
import listItemTextIcon from '@/components/settings-columns/list-item-text-icon/list-item-text-icon.vue';
import { EDataAttr } from '@/enums/data-attr-enum';

export default defineComponent({
  name: 'settingsColumns',
  components: {
    listItemTextIcon,
  },
  emits: ['swapItems', 'changeIsShowItem'],
  props: {
    settingsList: {
      type: Array,
    },
  },
  data() {
    return {
      EDataAttr: EDataAttr,
      isOpenMenu: false,
      mainListItems: [
        {
          id: EMainListItemId.visibility,
          title: 'Отображение столбцов',
        },
        {
          id: EMainListItemId.order,
          title: 'Порядок столбцов',
        },
      ],
      currentItem: null as IMainListItem | null,
      sizeIcon: 'xxs',
      dragStartIndex: null as null | Number,
    };
  },
  computed: {
    isShowMainList(): boolean {
      return !this.currentItem && this.isOpenMenu;
    },
    isVisibilityCurrentItem(): boolean {
      return this.currentItem?.id === EMainListItemId.visibility;
    },
  },
  methods: {
    openMenu(): void {
      if (this.isOpenMenu) {
        this.resetcurrentItem();
      }
      this.isOpenMenu = !this.isOpenMenu;
    },
    chooseCurrentItem(item: IMainListItem): void {
      this.currentItem = item;
    },
    resetcurrentItem(): void {
      this.currentItem = null;
    },
    changeDragStartIndex(index: number): void {
      this.dragStartIndex = index;
    },
    changeIsShowItem(index: number): void {
      this.$emit('changeIsShowItem', index);
    },
    swapItems(dragEndIndex: number): void {
      this.$emit('swapItems', this.dragStartIndex, dragEndIndex);
    },
  },
});
