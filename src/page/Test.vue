<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
const store = useStore();

//const count = store.state.count;
const { count, arrayName } = useStore().state;

//increment
const onIncrement = (num: number): void => {
  store.commit("increment", num);
};

//decrement
const onDecrement = (num: number): void => {
  store.commit("decrement", num);
};

//addName
const addName = (): void => {
  store.commit("addName", "test");
};

//storeの更新を検知する
const detectedCount = computed<number>(() => {
  return useStore().state.count;
});

//storeの更新を検知する
const detectedArrayName = computed<string[]>(() => {
  return useStore().state.arrayName;
});

//leftItems
const leftItems = computed<number>(() => {
  return useStore().state.leftItems;
});

//rightItems
const rightItems = computed<number>(() => {
  return useStore().state.rightItems;
});

//moveLeft
const moveLeft = (): void => {
  store.commit("moveItem");
};

//moveRight
const moveRight = (): void => {
  store.commit("moveItem2");
};

const moveLeftToRight = (): void => {
  store.commit("moveLeftToRight");
};

const moveRightToLeft = (): void => {
  store.commit("moveRightToLeft");
};
</script>

<template>
  <button @click="onIncrement(2)" class="bg-red-200 p-2 m-1">
    incrementcount
  </button>
  <button @click="onDecrement(5)" class="bg-blue-200 p-2 m-1">decrement</button>

  <div>カウント: {{ count }}/{{ detectedCount }}</div>
  <button @click="addName">addName</button>
  <div>名前: {{ arrayName }}/{{ detectedArrayName }}</div>
  <div>
    <ul>
      <li v-for="item in arrayName" :key="item.id">
        {{ item }}
      </li>
    </ul>
  </div>
  <hr />
  <div class="flex">
    <div class="w-1/2">
      <h1>left</h1>
      <div v-for="item in leftItems" :key="item">
        {{ item }}
      </div>
      <button @click="moveRight" class="bg-green-200">右に移動</button>
      <button @click="moveLeftToRight" class="bg-purple-200">右に移動</button>
    </div>
    <div class="w-1/2">
      <h1>right</h1>
      <div v-for="item in rightItems" :key="item">
        {{ item }}
      </div>
      <button @click="moveLeft" class="bg-green-200">左に移動</button>
      <button @click="moveRightToLeft" class="bg-purple-200">左に移動</button>
    </div>
  </div>
</template>
