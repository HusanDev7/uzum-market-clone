<script setup>
import Swiper from "@/components/swipper/Swipper.vue";
import Card from "@/components/card/Card.vue";

import { useProductStore } from "@/stores/productStore";
const productStore = useProductStore();
productStore.getProduct();
</script>
<template>
    <div class="container">
      <Swiper />
      <div class="card__wrapper">
        <Card
          v-for="item in productStore.products"
          :key="item.id"
          :card="item"
        />
      </div>
    </div>
</template>
