<script setup>
import Card from "@/components/card/Card.vue";
import FavoriteNull from "@/components/favoriteNull/FavoriteNull.vue";
import { useFavoriteStore } from "@/stores/addFavoriteStore";

const favoriteStore = useFavoriteStore();
</script>
<template>
  <div class="container">
    <FavoriteNull v-if="favoriteStore.favorite.length === 0" />
    <div class="card__wrapper" v-else>
      <Card v-for="item in favoriteStore.favorite" :key="item.id" :card="item" />
    </div>
  </div>
</template>
