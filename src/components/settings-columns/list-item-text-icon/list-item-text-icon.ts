import { EDataAttr } from '@/enums/data-attr-enum';
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
      classOver: 'settings-columns__item--dragover',
    };
  },
  methods: {
    dragStart() {
      this.$emit(
        'changeDragStartIndex',
        +this.$el.getAttribute(EDataAttr.index)
      );
    },
    dragEnter() {
      this.$el.classList.add(this.classOver);
    },
    dragLeave() {
      this.$el.classList.remove(this.classOver);
    },
    dragDrop() {
      const dragEndIndex = +this.$el.getAttribute(EDataAttr.index);
      this.$emit('dragDrop', dragEndIndex);
      this.$el.classList.remove(this.classOver);
    },
  },
});
