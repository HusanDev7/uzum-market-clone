<script setup>
import { ref, onMounted } from "vue";
import { useProductSingleStore } from "@/stores/productSingleStore";
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const productSingleStore = useProductSingleStore();
const thumbsSwiper = ref(null);
const modules = [FreeMode, Navigation, Thumbs];

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};
</script>

<template>
  <div>
    <swiper
      v-if="productSingleStore.product?.images.length > 1"
      :spaceBetween="10"
      :navigation="true"
      :thumbs="{ swiper: thumbsSwiper }"
      :modules="modules"
      class="mySwiper2"
    >
      <swiper-slide
        v-for="(image, index) in productSingleStore.product?.images"
        :key="index"
      >
        <img :src="image" />
      </swiper-slide>
    </swiper>
    <swiper
      v-if="productSingleStore.product?.images.length > 1"
      @swiper="setThumbsSwiper"
      :spaceBetween="10"
      :slidesPerView="4"
      :freeMode="true"
      :watchSlidesProgress="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide
        v-for="(image, index) in productSingleStore.product?.images"
        :key="index"
      >
        <img :src="image" />
      </swiper-slide>
    </swiper>
    <div v-else>
      <img :src="productSingleStore.product?.images[0]" />
    </div>
  </div>
</template>

<style scoped>
.swiper {
  width: 650px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.swiper-slide img {
  width: 100%;
  height: auto;
  max-width: 270px;
  object-fit: cover;
}
</style>
