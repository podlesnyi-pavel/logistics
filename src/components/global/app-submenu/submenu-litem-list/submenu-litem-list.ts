import { defineComponent } from 'vue';

export default defineComponent({
  name: 'submenuItemList',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  // data() {
  //   return {
  //     dragStartIndex: null,
  //     isDragging: false,
  //     isOver: false,
  //   };
  // },
  // methods: {
  //   dragStart() {
  //     console.log('dragStart');
  //   },
  //   dragOver() {
  //     console.log('drogOver');
  //   },
  //   dragEnter() {
  //     console.log('dragEnter');
  //     this.isOver = true;
  //   },
  //   dragLeave() {
  //     console.log('dragLeave');
  //     this.isOver = false;
  //   },
  //   dragDrop() {
  //     console.log('dragDrop');
  //   },
  // },
});
