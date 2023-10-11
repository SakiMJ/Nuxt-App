<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>


<script setup>
useHead({
  title: '测试',
  meta: [{
    name: 'keywords', content: '第一个关键词'
  }, {
    name: 'description', content: '第一个描述'
  }]
})
</script>

<style lang="scss" scoped></style>