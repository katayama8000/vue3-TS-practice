import { DefineComponent } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "../page/Home.vue";
import About from "../page/About.vue";
import Test from "../page/Test.vue";
import Slot from "../page/Slot.vue";
import Bind from "../page/Bind.vue";

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
  {
    path: "/test",
    name: "Test",
    component: Test,
  },
  {
    path: "/slot",
    name: "Slot",
    component: Slot,
  },
  {
    path: "/bind",
    name: "Bind",
    component: Bind,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
