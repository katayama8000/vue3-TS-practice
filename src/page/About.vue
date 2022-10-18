<script setup lang="ts">
import { reactive, ref } from "vue";
import axios from "axios";
import { musicType } from "../type/type.model";

const term = ref("");
const music = ref<musicType[]>([]);
const search = async () => {
  console.log(term.value);
  const { data } = await axios.get(
    `//itunes.apple.com/search?term=${term.value}&country=jp&entity=musicVideo`
  );
  console.log(data);
  music.value = data.results;
};
</script>

<template>
  <input type="text" v-model="term" class="bg-red-200" />
  <input class="submit" type="submit" value="Search" @click="search" />
  <ul>
    <li v-for="item in music">
      <h2>{{ item.trackName }}</h2>
      <img :src="item.artworkUrl100" />
    </li>
  </ul>
</template>
