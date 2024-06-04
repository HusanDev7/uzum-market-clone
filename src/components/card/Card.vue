<script setup>
import { IconaddBag, IconHeard, IconStar } from "@/lib/imports";
import { useFavoriteStore } from "@/stores/addFavoriteStore";
import { useAddBasketStore } from "@/stores/addBasketStore";
import { ref } from "vue";
const addBasketStore = useAddBasketStore();

const favroriteStore = useFavoriteStore()

const props = defineProps({
    card: {
        type: Object,
        required: true,
    },
});

const isActive = ref(false);

const toggleActive = () => {
    isActive.value = !isActive.value;
};
</script>
<template>
    <div class="card">
        <span class="card__heard" @click=" favroriteStore.addFavStore(card), toggleActive()">
            <IconHeard class="card__heard-heard" :class="{ active: isActive }" />
        </span>
        <div class="card__img-box">
            <RouterLink :to="'/product/' + card.id">
                <img class="card__img" :src="card.thumbnail ?? ' @/assets/img/no-photo.jpg'" alt="" />
            </RouterLink>
        </div>
        <p class="card__title">
            {{ card.title }}
        </p>
        <p class="card__status">
            <IconStar /> {{ card.rating }} (sharhlar)
        </p>
        <div class="card__box">
            <div class="card__box-item">
                <p class="card__salle">{{ card.discountPercentage }} 000 so'm</p>
                <p class="card__price">{{ card.price }} 000 so'm</p>
            </div>
            <div class="card__box-item">
                <span class="card__bag" @click="addBasketStore.getAddBasket(card)">
                    <IconaddBag />
                </span>
            </div>
        </div>
    </div>
</template>
