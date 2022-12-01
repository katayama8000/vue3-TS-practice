<template>
    <div>
        <h1>hello</h1>
        <h2>{{msg}}</h2>
        <input type="text" v-model="inputVal">
        <button @click="check()">check</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'Sample',
    data() {
        return {
            msg: 'hello',
            inputVal: '',
        }
    },

    methods: {
        check() {
            console.log(this.inputVal)
            if(this.inputVal === '') {
                alert('入力してください')
                return
            } else {
                alert('入力されました')
            }
        }
    }
})
</script>