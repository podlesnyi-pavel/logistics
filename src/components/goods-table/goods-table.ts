import { defineComponent } from 'vue';
import { optionsNameOne } from '@/data/options/options-name-one';
import { optionsNames } from '@/data/options/options-names';
import settingsColumns from '@/components/settings-columns/settings-columns.vue';
import removeCell from '@/components/goods-table/cells/remove-cell/remove-cell.vue';

export default defineComponent({
  name: 'goodsTable',
  components: {
    removeCell,
    settingsColumns,
  },
  emits: ['removeRow', 'swapRows', 'swapHeaders', 'changeVisibleColumns'],
  props: {
    headers: {
      type: Array,
      required: true,
    },
    visibleHeaders: {
      type: Array,
      required: true,
    },
    rows: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      optionsNameOne: optionsNameOne,
      optionsNames: optionsNames,
      isDraggingHeader: false,
      isDraggingRow: false,
      previousHeaderDragIndex: '',
      previousRowDragIndex: '',
    };
  },
  methods: {
    changeVisibleColumns(index: number): void {
      this.$emit('changeVisibleColumns', index);
    },
    swapItemsSettingsColumns(dragStartIndex: number, dragEndIndex: number) {
      this.$emit('swapHeaders', dragStartIndex, dragEndIndex);
    },
    removeRow(index: number) {
      this.$emit('removeRow', index);
    },
    dragOverPrevent(event: DragEvent, typeCell: boolean) {
      if (!typeCell) {
        event.preventDefault;
      }
    },
    dragStartHeader() {
      this.isDraggingHeader = true;
    },
    dragEnterHeader(event: DragEvent) {
      if (!this.isDraggingRow) {
        const currentTh = (event.target as Element).closest('th');
        const currentDragIndex = currentTh?.dataset.headerIndex;

        currentTh?.classList.add('dragging-th');

        (this.$refs.tableTd as HTMLElement[])
          .filter((item: HTMLElement) => {
            return item.dataset.columnIndex === currentDragIndex;
          })
          .forEach((td) => td.classList.add('dragging-th'));

        if (this.previousHeaderDragIndex === currentDragIndex) {
          return;
        } else {
          if (this.previousHeaderDragIndex) {
            this.$emit(
              'swapHeaders',
              this.previousHeaderDragIndex,
              currentDragIndex
            );
          }

          if (currentDragIndex) {
            this.previousHeaderDragIndex = currentDragIndex;
          }
        }
      }
    },
    dragLeaveHeader(event: DragEvent) {
      const currentTh = (event.target as Element).closest('th');
      const currentDragIndex = currentTh?.dataset.headerIndex;

      currentTh?.classList.remove('dragging-th');

      (this.$refs.tableTd as HTMLElement[])
        .filter((item: HTMLElement) => {
          return item.dataset.columnIndex === currentDragIndex;
        })
        .forEach((td) => td.classList.remove('dragging-th'));
    },
    dragEndHeader() {
      this.previousHeaderDragIndex = '';
      this.isDraggingHeader = false;
    },
    dragDropHeader(event: DragEvent) {
      const currentTh = (event.target as Element).closest('th');
      const currentDragIndex = currentTh?.dataset.headerIndex;

      currentTh?.classList.remove('dragging-th');

      (this.$refs.tableTd as HTMLElement[])
        .filter((item: HTMLElement) => {
          return item.dataset.columnIndex === currentDragIndex;
        })
        .forEach((td) => td.classList.remove('dragging-th'));
    },
    dragStartRow(event: DragEvent) {
      this.isDraggingRow = true;

      setTimeout(() => {
        (event.target as Element).closest('tr')?.classList.add('dragging-row');
      }, 0);
    },
    dragEnterRow(event: DragEvent) {
      if (!this.isDraggingHeader) {
        const currentTr = (event.target as Element).closest('tr');
        const currentDragIndex = currentTr?.dataset.rowIndex;

        if (this.previousRowDragIndex === currentDragIndex) {
          return;
        } else {
          if (this.previousRowDragIndex) {
            this.$emit('swapRows', this.previousRowDragIndex, currentDragIndex);
          }

          if (currentDragIndex) {
            this.previousRowDragIndex = currentDragIndex;
          }
        }
      }
    },
    dragEndRow(event: DragEvent) {
      this.previousRowDragIndex = '';
      this.isDraggingRow = false;
      (event.target as Element).closest('tr')?.classList.remove('dragging-row');
    },
  },
});
