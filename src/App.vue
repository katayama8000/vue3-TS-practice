<script setup lang="ts">
const LINKS = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  // {
  //   name: "Test",
  //   path: "/test",
  // },
  {
    name: "Slot",
    path: "/slot",
  },
  {
    name: "Bind",
    path: "/bind",
  },
  {
    name: "Sample1",
    path: "/sample1",
  },
  {
    name: "Sample2",
    path: "/sample2",
  },
  {
    name: "Sample3",
    path: "/sample3",
  },
  {
    name: "Sample4",
    path: "/sample4",
  },
];
</script>

<template>
  <div class="max-w-6xl m-auto mt-10">
    <h1 class="text-bold text-3xl p-3">practice</h1>
    <hr />
    <ul class="flex">
      <li v-for="link in LINKS" :key="link.name" class="px-3">
        <RouterLink :to="link.path">{{ link.name }}</RouterLink>
      </li>
    </ul>
    <br />
    <hr />
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
