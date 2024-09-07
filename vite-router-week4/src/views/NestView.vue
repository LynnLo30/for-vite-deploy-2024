<template>
  <div class="view">
    <h1>巢狀路由</h1>
    <p>這段文字在子頁面都會出現</p>
    <RouterView />
  </div>
</template>

<style>
  .nest-view {
    padding: 10px;
    border: 1px solid blue;
  }
</style>