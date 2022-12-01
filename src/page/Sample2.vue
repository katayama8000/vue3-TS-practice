<template>
  <div>
    <h1>
      slotとは親コンポーネントから、子コンポーネントのテンプレートの一部を差し込む
    </h1>
    <h2>{{ msg }}</h2>
    <myCom></myCom>
    <myCom>
      <template v-slot:name>
        <p>名前:katayama</p>
      </template>
      <template v-slot:adress>
        <p>住所:tokyo</p>
      </template>
    </myCom>
    <myCom>
      <template v-slot:name>
        <p>名前:okuda</p>
      </template>
      <template v-slot:adress>
        <p>住所:aichi</p>
      </template>
    </myCom>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import myCom from "../components/myCom.vue";
export default defineComponent({
  name: "Sample",
  components: {
    myCom,
  },
  data() {
    return {
      msg: "hello",
    };
  },

  methods: {},
});
</script>
