import { DefineComponent } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "../page/Home.vue";
import About from "../page/About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
