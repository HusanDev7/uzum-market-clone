<script setup>
import BasketNull from "@/components/basketNull/BasketNull.vue";
import BasketCard from "@/components/BasketCard/BasketCard.vue";
import { useAddBasketStore } from "@/stores/addBasketStore";
const addBasketStore = useAddBasketStore();
</script>
<template>
    <BasketNull v-if="addBasketStore.basket?.length == 0" />
    <BasketCard v-else />
</template>
