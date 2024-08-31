<template>
  <h1>Async Function</h1>
</template>

<script setup>
import axios from 'axios'

// Promise
axios.get('https://randomuser.me/api/')
  .then(response => {
    console.log(response)
  })
  .catch(err => {
    console.log(err.message)
  })

async function getData() {
  // await 會逐行執行 -> 同步語言
  const response = await axios.get('https://randomuser.me/api/')

  try {
    
  } catch (error) {
    
  }
}
getData()
</script>