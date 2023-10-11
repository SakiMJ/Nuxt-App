<template>
    <div>
        首页
        <div @click="navigateTo('/about/personal?data=444')">跳转关于</div>
        <!-- <nuxt-link to="/about/personal">跳转</nuxt-link> -->
        <Banner />
        <BannerChild />
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>