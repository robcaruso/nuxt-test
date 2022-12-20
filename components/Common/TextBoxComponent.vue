<template>
    <div>
        <InputText v-model="name"></InputText>
        hello {{ name }}
    </div>
</template>

<script setup lang="ts">
import InputText from 'primevue/inputtext';
const name = ref("");

</script>

<style scoped>

</style>