<script setup lang="ts"></script>

<template>
  <RouterLink to="/">Home|</RouterLink>
  <RouterLink to="/About">About|</RouterLink>
  <RouterLink to="/test">Test|</RouterLink>
  <RouterLink to="/slot">Slot|</RouterLink>
  <h1 class="text-3xl font-bold underline text-emerald-600">Hello world!</h1>
  <router-view></router-view>
</template>

<style scoped></style>
