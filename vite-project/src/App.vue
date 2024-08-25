<script setup>
import { ref, reactive } from 'vue'

const num = ref(0)

// Reactive 的缺點
const data = reactive({
  name: '卡斯柏'
})

// 1. 不能使用純值
// const text1 = reactive('123')

// 2. 不能重新被賦予
// data = {
//   name: '杰倫'
// }

const todos = ref([
  {
    id: 1,
    name: '購買雜貨',
    dueDate: '2024-07-30',
    complete: true
  }, {
    id: 2,
    name: '完成報告',
    dueDate: '2024-08-01',
    complete: false
  }, {
    id: 3,
    name: '清理房間',
    dueDate: '2024-07-28',
    complete: true
  }, {
    id: 4,
    name: '計劃假期',
    dueDate: '2024-08-05',
    complete: false
  }, {
    id: 5,
    name: '處理稅務',
    dueDate: '2024-08-10',
    complete: false
  }
])
console.log(todos.value[0].name)
</script>

<template>
  <h1>Vue 的資料建構</h1>

  {{ data.name }}
  <input type="text" name="" id="" v-model="data.name">

  <table>
    <thead>
      <tr>
        <th>代辦事項名稱</th>
        <th>到期日</th>
        <th>是否已完成</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="todo in todos" :key="todo.id">
        <td>{{ todo.name }}</td>
        <td>{{ todo.dueDate }}</td>
        <td>{{ todo.complete ? '是' : '否' }}</td>
      </tr>
    </tbody>
  </table>
</template>


<style></style>