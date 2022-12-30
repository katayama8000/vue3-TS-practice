<script setup lang="ts">
import { ref } from "vue";
const isLogin = ref<boolean>(false);
const loginword = `ログイン中`;
</script>

<template>
  <button v-on:click="isLogin = !isLogin">
    {{ isLogin ? "ログアウト" : "ログイン" }}
  </button>
  <hr />
  {{ isLogin ? loginword : null }}
  <p v-bind:style="{ display: isLogin ? '' : 'none' }">ログイン中</p>
</template>
