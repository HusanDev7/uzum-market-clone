<script setup>
import { useProductSingleStore } from "@/stores/productSingleStore";

const productSingleStore = useProductSingleStore();
productSingleStore.getSingleProduct();
</script>
<template>
  <section class="main">
    <div class="container">
      <h1>Product name:{{ productSingleStore.product?.title }}</h1>
    </div>
  </section>
</template>
