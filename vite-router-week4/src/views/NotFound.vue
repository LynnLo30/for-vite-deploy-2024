<template>
  <h1>404</h1>
</template>

<script setup>
  import { router } from 'vue-router'

  const router = useRouter()

  onMounted(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000);
  })
</script>