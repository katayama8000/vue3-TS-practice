<script setup lang="ts">
import { ref } from "vue";
const isLogin = ref<boolean>(false);
</script>

<template>
  <button v-on:click="isLogin = !isLogin">
    {{ isLogin ? "ログアウト" : "ログイン" }}
  </button>
  <hr />
  <p v-if="isLogin">ログイン中</p>
  <p v-show="isLogin">ログイン中</p>
</template>
