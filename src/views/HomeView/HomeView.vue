<script setup>
import { useProductStore } from "@/stores/productStore";
import Swiper from "@/components/swipper/Swipper.vue";
import Card from "@/components/card/Card.vue";
import ProductNull from "@/components/productNull/ProductNull.vue";
// ///////////////////////////////////////////////////////////////////
const productStore = useProductStore();
productStore.getProduct();
</script>

<template>
    <div class="container">
        <div class="wrapper" v-if="productStore.totalCount > 0">
            <Swiper />
            <div class="card__wrapper">
                <Card v-for="item in productStore.products" :key="item.id" :card="item" />
            </div>
        </div>
        <div class="product" v-else>
            <ProductNull />
        </div>
    </div>
</template>
