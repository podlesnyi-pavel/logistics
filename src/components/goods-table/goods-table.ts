import { defineComponent } from 'vue';
import { optionsNameOne } from '@/data/options/options-name-one';
import { optionsNames } from '@/data/options/options-names';
import removeCell from '@/components/goods-table/cells/remove-cell/remove-cell.vue';

export default defineComponent({
  name: 'goodsTable',
  components: {
    removeCell,
  },
  emits: ['removeRow', 'swapRows'],
  props: {
    headers: {
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
      previousRowDragIndex: '',
    };
  },
  methods: {
    removeRow(index: number) {
      this.$emit('removeRow', index);
    },
    dragStart(event: DragEvent) {
      setTimeout(() => {
        (event.target as Element).closest('tr')?.classList.add('dragging-row');
      }, 0);
    },
    dragEnter(event: DragEvent) {
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
    },
    dragEnd(event: DragEvent) {
      this.previousRowDragIndex = '';

      (event.target as Element).closest('tr')?.classList.remove('dragging-row');
    },
  },
});
