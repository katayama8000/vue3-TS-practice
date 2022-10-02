<template>
  <Child v-slot:default="slotProps">
    {{ slotProps.user.age }}
  </Child>
</template>

<script setup lang="ts">
import Child from "../components/Child.vue";
</script>
