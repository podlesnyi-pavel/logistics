import { defineComponent } from 'vue';

export default defineComponent({
  name: 'mainMenuItem',
  props: {
    routerName: {
      type: String,
      required: true,
    },
  },
});
