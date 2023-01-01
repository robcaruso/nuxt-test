<template>
  <div>
    Products:

    <Dropdown
      id="products"
      v-model="product"
      :options="products"
      optionLabel="id"
      placeholder="Select a Product"
    />
    <div v-if="product">{{ product?.title }}</div>
    <div v-if="product">{{ product?.price }}</div>
  </div>
</template>

<script setup lang="ts">
import { ofetch } from "ofetch";
interface Product {
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}
const product = ref<Product>();
const products = ref<Product[]>();

onMounted(async () => {
  products.value = await ofetch<Product[]>(
    "https://fakestoreapi.com/products?limit=5"
  );
});
</script>

<style scoped></style>
