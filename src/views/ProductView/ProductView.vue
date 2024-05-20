<script setup>
import { useProductSingleStore } from "@/stores/productSingleStore";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter()
const productSingleStore = useProductSingleStore();

onMounted(() => {
  productSingleStore.getSingleProduct(router.params.id);
})

</script>

<template>
  <section class="main">
    <div class="container">
      <h1>Product name: {{ productSingleStore.product?.title }}</h1>
    </div>
  </section>
</template>
