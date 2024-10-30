import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
	{
		path: '/',
		name: 'Home',
		component:() => import('@/views/HomeView.vue'),
	 },
	{
		path: '/returned-dots',
		name: 'returned-dots',
		component:() => import('@/views/ReturnedDots.vue'),
	 },
  ],
});

export default router;
