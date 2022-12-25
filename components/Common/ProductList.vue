<template>
    <div>
        <ul v-for="product in products" key="title">
            <li>{{ product.title }}</li>

        </ul>
    </div>
</template>

<script setup lang="ts">

interface Product {
    title: string;
    price: number;
    description: string;
    image: string;
    category: string;
}
const { data: products } = useFetch<Product[]>("https://fakestoreapi.com/products?limit=5");

</script>

<style scoped>

</style>