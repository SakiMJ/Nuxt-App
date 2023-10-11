<template>
    <div>
        关于页面
        <NuxtPage></NuxtPage>
    </div>
</template>

<script setup>
const router = useRoute()
console.log(router.query);


const resData = await useFetch('http://127.0.0.1:8081/test', {
    method: 'get',
    params: {
        id: 1
    }
});

console.log(resData, '请求回来的数据')



</script>

<style lang="scss" scoped></style>