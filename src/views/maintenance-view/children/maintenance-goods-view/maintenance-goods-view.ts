import { defineComponent } from 'vue';
import { ETypeButton } from '@/components/global/app-button/enums/type-button-enum';

export default defineComponent({
  data() {
    return {
      ETypeButton: ETypeButton,
    };
  },
});
