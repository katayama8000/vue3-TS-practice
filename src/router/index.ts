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
  {
    path: "/sample1",
    name: "Sample1",
    component: () => import("../page/Sample1.vue"),
  },
  {
    path: "/sample2",
    name: "Sample2",
    component: () => import("../page/Sample2.vue"),
  },
  {
    path: "/sample3",
    name: "Sample3",
    component: () => import("../page/Sample3.vue"),
  },
  {
    path: "/sample4",
    name: "Sample4",
    component: () => import("../page/Sample4.vue"),
  },
  {
    path: "/sample5",
    name: "Sample5",
    component: () => import("../page/Sample5.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
