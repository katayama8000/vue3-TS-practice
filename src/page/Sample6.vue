<template>
  <h1>hello</h1>
  <button @click="editMode = !editMode">edit</button>
  <table>
    <tr style="background-color: aqua">
      <th>name</th>
      <th>age</th>
    </tr>
    <template v-if="!editMode">
      <tr v-for="item in dummyArray" :key="item.name">
        <td>{{ item.name }}</td>
        <td>{{ item.age }}</td>
      </tr>
    </template>
    <template v-else>
      <tr v-for="item in dummyArray" :key="item.name">
        <td><input type="text" :value="item.name" /></td>
        <td><input type="text" :value="item.age" /></td>
      </tr>
    </template>
  </table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      editMode: false,
      count: 0,
      dummyArray: [
        { name: "mike", age: 18 },
        {
          name: "alice",
          age: 19,
        },
        {
          name: "bob",
          age: 20,
        },
        {
          name: "charlie",
          age: 21,
        },
      ],
    };
  },
});
</script>

<style scoped>
table,
table th,
table td {
  border: 1px solid black；;
}
</style>
