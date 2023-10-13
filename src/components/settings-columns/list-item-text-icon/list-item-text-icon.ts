import { defineComponent } from 'vue';

export default defineComponent({
  name: 'listItemTextIcon',
  props: {
    item: {
      type: Object,
    },
    icon: {
      type: String,
    },
  },
  data() {
    return {
      sizeIcon: 'xxs',
    };
  },
});
