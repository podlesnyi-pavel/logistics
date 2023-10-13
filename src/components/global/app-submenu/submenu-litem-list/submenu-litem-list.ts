import { defineComponent } from 'vue';

export default defineComponent({
  name: 'submenuItemList',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
});
