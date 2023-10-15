import { defineComponent } from 'vue';
import { optionsNameOne } from '@/data/options/options-name-one';
import { optionsNames } from '@/data/options/options-names';

export default defineComponent({
  name: 'goodsTable',
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
    openRemoveCell() {},
  },
});
