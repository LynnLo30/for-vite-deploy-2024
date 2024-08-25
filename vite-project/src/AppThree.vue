<script setup>
import { ref } from 'vue';

const text = ref('文字')

const todos = ref([{
  id: 1,
  text: '123'
}])

const tempEdit = ref({
  id: '',
  text: ''
})

const addTodo = () => {
  todos.value.push({
    text: text.value,
    id: new Date().getTime()
  })
  text.value = ''
}

const deleteTodo = (todo) => {
  const index = todos.value.findIndex(item => item.id === todo.id)

  todos.value.splice(index, 1)
}

const prepareEdit = (todo) => {
  tempEdit.value = { ...todo } // 拷貝
  // JS: 物件傳參考
}

const confirmEdit = () => {
  const index = todos.value.findIndex(item => item.id === tempEdit.value.id)

  todos.value[index] = tempEdit.value
  tempEdit.value = {}
}
</script>

<template>
  <input type="text" name="" id="" v-model="text">
  <button type="button" @click="addTodo">新增</button>
  <hr>
  <div v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
    <button type="button" @click="deleteTodo(todo)">刪除</button>
    <button type="button" @click="prepareEdit(todo)">編輯</button>
    <hr>
  </div>
  <hr>
  <div v-if="tempEdit.id">
    <h2>編輯區</h2>
    當前修改的值:{{ tempEdit.text }}
    <input type="text" name="" id="" v-model="tempEdit.text">
    <button type="button" @click="confirmEdit(todo)">確認編輯</button>
    <button type="button" @click="tempEdit = {}">取消編輯</button>
  </div>
</template>