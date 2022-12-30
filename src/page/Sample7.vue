<script setup lang="ts">
import { ref } from "vue";
const isLogin = ref<boolean>(false);
const loginword = `ログイン中`;
const html = `<p>ログイン中</p>`;
</script>

<template>
  <button v-on:click="isLogin = !isLogin">
    {{ isLogin ? "ログアウト" : "ログイン" }}
  </button>
  <hr />
  {{ isLogin ? loginword : null }}
  {{ isLogin && "ログイン中" }}
  {{ false && "hello" }}
  <p v-bind:style="{ display: isLogin ? '' : 'none' }">ログイン中</p>
  <template v-html="html"></template>
</template>
