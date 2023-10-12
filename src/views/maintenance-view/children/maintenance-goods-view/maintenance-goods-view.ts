import appButton from '@/components/global/app-button/app-button.vue';
import { defineComponent } from 'vue';
import { ETypeButton } from '@/components/global/app-button/enums/type-button-enum';

export default defineComponent({
  components: {
    appButton,
  },
  data() {
    return {
      ETypeButton: ETypeButton,
    };
  },
});
