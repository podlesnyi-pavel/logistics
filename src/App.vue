<script lang="ts">
import { defineComponent } from 'vue';

import mainMenu from '@/components/global/main-menu/main-menu.vue';

export default defineComponent({
  components: {
    mainMenu,
  },
});
</script>

<template>
  <div class="container">
    <div class="inner-wrapper">
      <main-menu />

      <div class="page">
        <router-view />
      </div>
    </div>
  </div>
</template>
