import { createRouter, createWebHistory } from 'vue-router';
import routesData from '@/router/routes-data';

import maintenanceView from '@/views/maintenance-view/maintenance-view.vue';
import TestView from '@/views/TestView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: routesData.maintenance.path,
      name: routesData.maintenance.name,
      component: maintenanceView,
    },
    {
      path: routesData.test.path,
      name: routesData.test.name,
      component: TestView,
    },
  ],
});

export default router;
