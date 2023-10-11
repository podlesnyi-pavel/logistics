<template>
  <div class="test-page">
    <header>
      <page-title :title="routes.test.name" />
    </header>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import pageTitle from '@/components/global/page-title/page-title.vue';
import routesDataMixin from '@/mixins/routes-data-mixin';

export default defineComponent({
  components: {
    pageTitle,
  },
  mixins: [routesDataMixin],
});
</script>
