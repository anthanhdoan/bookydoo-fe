import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import TodoView from '@/views/TodoView.vue'
import BookmarkManagerView from '@/views/BookmarkManagerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/todo',
      name: 'todo-app',
      component: TodoView,
    },
    {
      path: '/bookmark-manager',
      name: 'bookmark-manager',
      component: BookmarkManagerView,
    },
  ],
})

export default router
