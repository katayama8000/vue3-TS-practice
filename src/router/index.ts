import { DefineComponent } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "../page/Home.vue";
import About from "../page/About.vue";
import Test from "../page/Test.vue";
import Slot from "../page/Slot.vue";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
