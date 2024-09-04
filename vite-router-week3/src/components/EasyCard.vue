<script setup>
  import { defineProps, defineEmits } from 'vue'

  const props = defineProps(['inner-data', 'value'])

  const emit = defineEmits(['emitTitle'])
  const editOuterTitle = () => {
    emit('emitTitle', '內層要修改外層的字串')
  }
</script>

<template>
  <div class="card">
    <img class="card-img-top" alt="..." v-bind:src="innerData.imgUrl">
     <div class="card-body">
      <h5 class="card-title">{{ innerData.title }}</h5>
      <p class="card-text">{{ innerData.content }}</p>
      <input type="text" v-model="innerData.title">
      <a href="#" class="btn btn-primary" v-on:click="editOuterTitle">Go somewhere</a>
    </div>
  </div>
</template>