<template>
  <h2>Todo</h2>
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import axios from 'axios'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  // 驗證
  onMounted(async () => {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)todoToken\s*\=\s*([^;]*).*$)|^.*$/,
      "$1",
    )

    if (!token) {
      router.push('/login')
    }

    try {
      const res = await axios.get(`${api}/users/check`, {
        headers: {
          Authorization: token
        }
      })
      user.value = res.data
    } catch (error) {
      console.log(error)

      setTimeout(() => {
        router.push('/login')
      }, 3000);
    })
</script>