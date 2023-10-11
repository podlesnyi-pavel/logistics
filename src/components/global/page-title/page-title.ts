import { defineComponent } from 'vue';

export default defineComponent({
  name: 'pageTitle',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
