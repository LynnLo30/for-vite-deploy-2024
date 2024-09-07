<script setup>
  import { RouterLink, RouterView, useRouter } from 'vue-router'
  import { ref } from 'vue'

  const text = ref('')
  const router = useRouter()

  const goPage = () => {
    router.push(`/nest/${text.value}`)
  }

  // Pinia
  import { useCounterStore } from './store/countStore';
  const countStore = useCounterStore()
</script>

<template>
  <header>
    <input type="text" v-model="text"><button type="button" @click="goPage">去哪個頁面</button>

    <p>{{ countStore.count }} / {{ doubleCount }}</p>
    <button @click="countStore.increment">++</button>


    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/about">About</RouterLink> |
        <RouterLink to="/sample">Sample</RouterLink> |
        <RouterLink to="/sample2">Sample2</RouterLink> |
        <RouterLink to="/nest">Nest</RouterLink> |
        <RouterLink to="/nest/child">NestChild</RouterLink> |
        <RouterLink v-bind:to="`/nest/${text}`">DynNestChild</RouterLink> |
        <RouterLink to="/login">登入</RouterLink> |
        <RouterLink to="/todo">待辦</RouterLink> |
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
  .view {
    padding: 20px;
    border: 1px solid red;
  }
</style>
