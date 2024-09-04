<!-- 先刻完再拆成元件 -->
<!-- 元件可以包元件 -->
<script setup>
  import EasyHeader from '@/components/EasyHeader.vue'
  import EasyCard from '@/components/EasyCard.vue'
  import EasyFooter from '@/components/EasyFooter.vue'
  import { ref } from 'vue';

  const data = ref({
    title: '卡片標題',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, aperiam dicta. Quibusdam voluptate voluptatem vero dolore aperiam voluptas aut eligendi quod. Quibusdam facere labore quos rem error quis numquam modi?',
    imgUrl: 'https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  })

  const value = ref('這是外層單向數據流的文字')

  const editTitle = (newTitle) => {
    data.value.title = newTitle
  }
</script>

<template>
  <div class="container">
    <EasyHeader />
    <div class="col-4">
      <!-- 實作通常會使用同樣的名稱 -->
      <EasyCard v-bind:inner-data="data" @emit-title="editTitle" v-bind:value="value" />
    </div>

    <div class="row g-4">
      <!-- <div class="col-4" v-for="i in 10" v-bind:key="i">
        <EasyCard />
      </div> -->
    </div>
    <EasyFooter />
  </div>
</template>
