<template>
  <h1>Review</h1>
  <div>
    <input type="text" v-model="newName">
    <input type="number" name="" id="" v-model="newNumber">
    <button type="button" v-on:click="addProduct">新增</button>
  </div>

  <table>
    <thead>
      <tr>
        <th>標題</th>
        <th>價格</th>
        <th>調整價格</th>
        <th>刪除品項</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in data" v-bind:key="item.id">
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td><input type="number" name="" id="" v-model="item.price"></td>
        <td><button type="button" v-on:click="delItem(item.id)">刪除</button></td>
      </tr>
    </tbody>
  </table>
  <h2>總額：{{ sum }}</h2>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';


const newName = ref('')
const newNumber = ref(0)

const data = ref([])

const addProduct = () => {
  data.value.push({
    id: new Date().getTime(),
    name: newName.value,
    price: newNumber.value
  })
  newName.value = ''
  newNumber.value = 0
}

const delItem = (id) => {
  const index = data.value.findIndex((item) => item.id === id)
  data.value.splice(index, 1)
}

const sum = computed(() => {
  // 1. forEach
  // let tempSum = 0
  // data.value.forEach((item) => {
  //   tempSum += item.price
  // })
  // return tempSum

  // 2. reduce
  return data.value.reduce((pre, item) => pre + item.price, 0)
})

// 非同步 (Ajax後才加入)
let IntervalId = 0
onMounted(() => {
  setTimeout(() => {
    data.value =
      [{
        id: 1,
        name: '珍珠奶茶',
        price: 50
      },
      {
        id: 2,
        name: '冬瓜檸檬',
        price: 45
      },
      {
        id: 3,
        name: '翡翠檸檬',
        price: 55
      },
      {
        id: 4,
        name: '四季春茶',
        price: 45
      },
      {
        id: 5,
        name: '阿薩姆奶茶',
        price: 50
      },
      {
        id: 6,
        name: '檸檬冰茶',
        price: 45
      },
      {
        id: 7,
        name: '芒果綠茶',
        price: 55
      },
      {
        id: 8,
        name: '抹茶拿鐵',
        price: 60
      }]
  }, 1000)

  // 避免重複觸發
  onUnmounted(() => {
    clearInterval(IntervalId)
  })
})
</script>

<style></style>