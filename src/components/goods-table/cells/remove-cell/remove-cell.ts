import { defineComponent } from 'vue';

export default defineComponent({
  name: 'removeCell',
  emits: ['removeRow'],
  data() {
    return {
      isOpenButton: false,
    };
  },
  methods: {
    toggleButton() {
      this.isOpenButton = !this.isOpenButton;
    },
    removeRow() {
      this.$emit('removeRow');
    },
  },
});
