<script setup>
import { ref } from 'vue';

const text = ref('卡斯柏')

const num = ref(1)
const add = () => { num.value++ }

const imgSrc = ref('https://images.unsplash.com/photo-1679908731995-4ee6f1ceedbc?q=80&w=350&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')

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
</script>

<template>
  <h1>{{ text }}</h1>
  <input type="text" v-model="text">

  <h1>{{ num }}</h1>
  <button type="button" v-on:click="add">點我</button>

  <!-- 屬性 -->
  <img v-bind:src="imgSrc" alt="">

  <div>
    <div v-for="todo in todos" v-bind:key="todo.id">
      {{ todo.name }}
      {{ todo.dueDate }}
      {{ todo.complete ? '是' : '否' }}
      <input type="checkbox" v-model="todo.complete">
      <button type="button" @click="todo.complete = !todo.complete">切換</button>
    </div>
  </div>
</template>