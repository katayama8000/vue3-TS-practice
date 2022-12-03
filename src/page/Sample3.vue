<template>
  <table border="1">
    <tr>
      <th>名前</th>
      <th>住所</th>
    </tr>
    <tr
      v-for="(item, index) in items"
      :key="item.id"
      @click="changebgcolor(index)"
      :class="{ bgcolor: item.isActiveBgColor }"
    >
      <td>{{ item.name }}</td>
      |
      <td>{{ item.adress }}</td>
      |
      <input
        type="radio"
        value="ios"
        @change="changeRadio(index, 'ios')"
        :checked="item.isIos"
      />ios
      <input
        type="radio"
        value="android"
        @change="changeRadio(index, 'android')"
        :checked="item.isAndroid"
      />android
    </tr>
  </table>
  {{ platform }}
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Sample3",
  data() {
    return {
      platform: "",
      items: [
        {
          id: 1,
          name: "katayama",
          adress: "tokyo",
          isActiveBgColor: false,
          isIos: false,
          isAndroid: false,
        },
        {
          id: 2,
          name: "okuda",
          adress: "aichi",
          isActiveBgColor: false,
          isIos: false,
          isAndroid: false,
        },
        {
          id: 3,
          name: "suzuki",
          adress: "osaka",
          isActiveBgColor: false,
          isIos: true,
          isAndroid: false,
        },
        {
          id: 4,
          name: "sato",
          adress: "kyoto",
          isActiveBgColor: false,
          isIos: false,
          isAndroid: false,
        },
        {
          id: 5,
          name: "tanaka",
          adress: "fukuoka",
          isActiveBgColor: false,
          isIos: false,
          isAndroid: false,
        },
      ],
    };
  },
  methods: {
    changebgcolor(num: number) {
      this.items.forEach((item, index) => {
        if (index === num) {
          item.isActiveBgColor = true;
        } else {
          item.isActiveBgColor = false;
        }
      });
    },

    changeRadio(num: number, platform: "ios" | "android") {
      this.items.forEach((item, index) => {
        if (index === num) {
          if (platform === "ios") {
            item.isIos = true;
            item.isAndroid = false;
          } else {
            item.isIos = false;
            item.isAndroid = true;
          }
        } else {
          item.isIos = false;
          item.isAndroid = false;
        }
      });
    },
  },
});
</script>

<style scoped>
.bgcolor {
  background-color: yellowgreen;
}
</style>
