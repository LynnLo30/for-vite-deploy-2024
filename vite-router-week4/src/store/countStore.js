import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

// 匯出 Store
export const useCounterStore = defineStore('countStore', () => {
  const router = useRouter()
  // State
  const count = ref(0)
  // Getter
  const doubleCount = computed(() => count.value * 2)
  // Action
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
