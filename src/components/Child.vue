<template>
  <p>
    <slot v-bind:user="user">{{ user.name }}</slot>
  </p>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
const val = ref<string>("hello");
const user = reactive({
  name: "john",
  age: 20,
  sex: "male",
});
</script>
