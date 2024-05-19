<script setup>
import { IconaddBag, IconHeard, IconStar } from "@/lib/imports";

const props = defineProps({
  card: {
    type: Object,
    required: true,
  },
});

// const togleActive = () => {
//   isActive.value = !isActive.value;
// };
</script>
<template>
  <div class="card__wrapper">

    <RouterLink :to="'/product/' + card.id" class="card">
      <span class="card__heard"><IconHeard /></span>
      <div class="card__img-box">
        <img
          class="card__img"
          :src="card.thumbnail ?? ' @/assets/img/no-photo.jpg'"
          alt=""
        />
      </div>
      <p class="card__title">
        {{ card.title }}
      </p>
      <p class="card__status"><IconStar /> {{ card.rating }} (sharhlar)</p>
      <div class="card__box">
        <div class="card__box-item">
          <p class="card__salle">{{ card.discountPercentage * 25 }} so'm</p>
          <p class="card__price">{{ card.price }} so'm</p>
        </div>
        <div class="card__box-item">
          <span class="card__bag">
            <IconaddBag />
          </span>
        </div>
      </div>
    </RouterLink>

  </div>
</template>
