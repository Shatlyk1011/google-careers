import { createRouter, createWebHashHistory } from 'vue-router';
// import HomeView from '@/views/HomeView.vue';
// import JobResults from '@/views/JobResultsView.vue';
// import JobView from '@/views/JobView.vue';

const HomeView = () => import('@/views/HomeView.vue');
const JobResults = () =>
  import(/* webpackChunkName: "jobs" */ '@/views/JobResultsView.vue');
const JobView = () =>
  import(/* webpackChunkName: "jobs" */ '@/views/JobView.vue');

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/jobs/results',
    name: 'JobResults',
    component: JobResults,
  },
  {
    path: '/jobs/results/:id',
    name: 'JobView',
    component: JobView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
