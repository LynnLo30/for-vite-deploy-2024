<template>
  <div class="view">
    <h1>動態路由(id:{{ id }})</h1>
    {{ person }}
  </div>
</template>

<script setup>
  // 狀態 useRoute
  // 方法 useRouter
  import { useRoute } from 'vue-router'
  import { onMounted, ref } from 'vue'
  import axios from 'axios'

  const route = useRoute() // 呼叫

  // const id = route.params.id
  // const id = ref(route.params.id)
  const { id } = route.params

  const person = ref({})

  onMounted(async () => {
    const data = await axios.get(`https://randomuser.me/api/?seed=${id}`)
    person.value = data.data.results[0]
  })
</script>