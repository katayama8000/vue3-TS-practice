<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
const store = useStore();
//const count = store.state.count;
const { count, arrayName } = useStore().state;
const onIncrement = () => {
  store.commit("increment");
};

//storeの更新を検知する
const detectedCount = computed(() => {
  return useStore().state.count;
});
</script>

<template>
  <button @click="onIncrement">incrementcount</button>
  <div>カウント: {{ count }}/{{ detectedCount }}</div>
  <div>
    <ul>
      <li v-for="item in arrayName" :key="item.id">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
