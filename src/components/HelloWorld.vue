<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="state.count++">count is: {{ state.count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <p class="text-2xl">{{ moises }}</p>
</template>

<script setup>
import axios from "axios";
import { defineProps, reactive,onMounted, ref } from 'vue'

defineProps({
  msg: String
})

onMounted(() => {
  axios.get('auth/login.php').then(res => {
    console.log(res);
  })
  console.log('salio mi nombre');
});

const state = reactive({ count: 0 })
const moises = ref('moises')
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
