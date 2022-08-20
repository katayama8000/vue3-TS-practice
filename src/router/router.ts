import { DefineComponent } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "../page/Home.vue";
import Snake from "../page/Snake.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/snake",
    name: "Snake",
    component: Snake,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
