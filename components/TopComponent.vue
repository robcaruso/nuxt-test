<template>
    <div>
        This is a coponent with a sub component.
    </div>
    <CommonButtonComponent />
    <CommonTextBoxComponent />
    <Suspense>

        <CommonProductList />
    </Suspense>
    
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>