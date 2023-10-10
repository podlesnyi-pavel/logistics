import { createRouter, createWebHistory } from 'vue-router';
import routesData from '@/router/routes-data';

import maintenanceView from '@/views/maintenance-view/maintenance-view.vue';
import TestView from '@/views/TestView.vue';

export const routes = [
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
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
