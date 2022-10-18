<script setup lang="ts">
import { ref } from "vue";

const youTubeUrl = "https://www.youtube.com";
const attribute = "href";
const twitterUrl = "https://twitter.com";
const number = ref(0);
</script>

<template>
  <h1>bind</h1>
  <a v-bind:[attribute]="youTubeUrl">YouTube</a>
  // aタグにオブジェクト付けられない？
  <a v-bind="{ href: twitterUrl }">Twitter</a>
  <span>{{ number }}</span>
  <button v-on:click="number += 1">+</button>
</template>
