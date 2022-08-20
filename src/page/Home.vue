<script setup lang="ts">
import { useCounter } from '../hooks/useCounter'

const { count, double, increment, decrement } =  useCounter()
</script>

<template>
    <h1>カウントするページ</h1>
  <p>カウント：{{ count }}</p>
  <p>カウント（2倍）：{{ double }}</p>
  <button @click="decrement">減らす</button>
  <button @click="increment">増やす</button>
</template>

