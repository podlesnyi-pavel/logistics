import { defineComponent } from 'vue';

export default defineComponent({
  name: 'appIcon',
  props: {
    icon: {
      type: String,
    },
    size: {
      type: String,
      default: 'm',
    },
  },
});
