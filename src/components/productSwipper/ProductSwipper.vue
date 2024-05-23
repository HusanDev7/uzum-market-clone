<script setup>
import { ref, onMounted } from "vue";
import { useProductSingleStore } from "@/stores/productSingleStore";
import { useRoute } from "vue-router";
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "@/components/productSwipper/productSwipper.scss";

const productSingleStore = useProductSingleStore();
const route = useRoute();
const thumbsSwiper = ref(null);
const modules = [FreeMode, Navigation, Thumbs];

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

onMounted(async () => {
  await productSingleStore.getSingleProduct(route.params.id);
  console.log(productSingleStore.product);
});
</script>

<template>
  <div>
    <swiper
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
  </div>
</template>
