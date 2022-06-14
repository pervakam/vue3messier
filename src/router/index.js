import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "@/pages/MainPage";
import ObjectsPage from "@/pages/ObjectsPage";
import ObjectsPageAPI from "@/pages/ObjectsPage";
import AboutObject from "@/pages/AboutObject";
import MyCabinet from "@/pages/MyCabinet";

const routes = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/objects',
    component: ObjectsPage
  },
  {
    path: '/account',
    component: MyCabinet
  },
  {
    path: '/objects/:id',
    component: AboutObject
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
