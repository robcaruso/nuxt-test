<template>
    <div>
        <Button id="plus" @click="store.plusCount">push me +</Button>
        <div id="count">{{ store.count }}</div>
        <Button id="minus" @click="store.minusCount">push me -</Button>
    </div>
</template>

<script setup lang="ts">
import { useCountStore, } from "~~/stores/CountStore"
const store = useCountStore()
</script>

<style scoped>

</style>