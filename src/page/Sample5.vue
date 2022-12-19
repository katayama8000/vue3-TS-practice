<template>
  <div>
    <h1>AI</h1>
    <button @click="increase()">+</button>
    <button @click="decrease()">-</button>
    <button @click="reset()">reset</button>
    <p>{{ count }}</p>
    <p>{{ doubleCount }}</p>
    <input type="text" @change="showChange($event)" />
    <div>{{ num }}</div>
    <button @click="add">add</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
export default defineComponent({
  data() {
    return {
      count: 0,
    };
  },

  setup() {
    const num = ref(0);

    watch(
      () => num.value,
      (newVal, oldVal) => {
        console.log("newVal", newVal);
        console.log("oldVal", oldVal);
      }
    );

    return { num };
  },
  methods: {
    add() {
      this.num++;
    },
    showChange(e: Event) {
      if (e.target instanceof HTMLInputElement) console.log(e.target!.value);
      console.log("change");
    },

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
