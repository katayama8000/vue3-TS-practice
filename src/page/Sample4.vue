<template>
  <h1>vuex module</h1>
  <button @click="handleGetTitle()">click</button>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { key } from "../store";
import { fruitModule } from "../store/module/fruit";
const store = useStore(key);
const handleGetTitle = () => {
  console.log(store.getters.getArrayName);
};
</script>
