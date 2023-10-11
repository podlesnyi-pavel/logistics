import { defineComponent } from 'vue';

export default defineComponent({
  name: 'appListItem',
  props: {
    routeName: {
      type: String,
      required: true,
    },
  },
});
