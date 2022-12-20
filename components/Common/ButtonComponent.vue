<template>
    <div>
        <Button @click="store.plusCount">push me +</Button>
        {{ store.count }}
        <Button @click="store.minusCount">push me -</Button>
    </div>
</template>

<script setup lang="ts">
import { useCountStore, } from "~~/stores/CountStore"
const store = useCountStore()
</script>

<style scoped>

</style>