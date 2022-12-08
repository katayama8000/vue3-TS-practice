<template>
  <div>
    <h1>AI</h1>
    <button @click="increase()">+</button>
    <button @click="decrease()">-</button>
    <button @click="reset()">reset</button>
    <p>{{ count }}</p>
    <p>{{ doubleCount }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increase() {
      this.count++;
    },
    decrease() {
      this.count--;
    },
    reset() {
      this.count = 0;
    },
  },
  computed: {
    doubleCount() {
      return this.count * 2;
    },
  },
});
</script>
