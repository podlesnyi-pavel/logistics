import { defineComponent } from 'vue';
import { optionsNameOne } from '@/data/options/options-name-one';
import { optionsNames } from '@/data/options/options-names';
import removeCell from '@/components/goods-table/cells/remove-cell/remove-cell.vue';

export default defineComponent({
  name: 'goodsTable',
  components: {
    removeCell,
  },
  emits: ['removeRow'],
  props: {
    rows: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      optionsNameOne: optionsNameOne,
      optionsNames: optionsNames,
    };
  },
  methods: {
    removeRow(index: number) {
      this.$emit('removeRow', index);
    },
  },
});
