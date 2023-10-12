import { defineComponent, type PropType } from 'vue';
import { ETypeButton } from '@/components/global/app-button/enums/type-button-enum';

export default defineComponent({
  name: 'appButton',
  props: {
    text: {
      type: String,
      default: 'Кнопка',
    },
    type: {
      type: String as PropType<ETypeButton>,
      default: ETypeButton.button,
    },
    bgColor: {
      type: String,
      default: 'blue',
    },
    color: {
      type: String,
      default: 'white',
    },
    icon: {
      type: String,
    },
    sizeIcon: {
      type: String,
      default: 'xs',
    },
  },
});
