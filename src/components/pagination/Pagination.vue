<script setup>
import { ref, computed, onMounted } from "vue";
import { useProductStore } from "@/stores/productStore";

const productStore = useProductStore();
const currentPage = ref(1); 

onMounted(() => {
  productStore.getProduct(0, 20); 
});


const loadMore = () => {
  currentPage.value++;
  productStore.getProduct((currentPage.value - 1) * 20, 20);
};

const allProductsLoaded = computed(() => {
  return productStore.products.length >= productStore.totalCount;
});
</script>
<template>
  <div class="btn__box">
    <button class="btn" @click="loadMore" :disabled="allProductsLoaded">
      Yana Ko'rsatish 20
    </button>
  </div>
</template>
