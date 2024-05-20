<script setup>
import { useProductSingleStore } from "@/stores/productSingleStore";
<<<<<<< HEAD
import { useRoute } from "vue-router";
import { IconStar, IconHeard } from "@/lib/imports";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
const router = useRoute();
const productSingleStore = useProductSingleStore();

productSingleStore.getSingleProduct(router.params.id);
=======
import { onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter()
const productSingleStore = useProductSingleStore();

onMounted(() => {
  productSingleStore.getSingleProduct(router.params.id);
})

>>>>>>> 4a36d80ab33555576a15b9de20823905a30597f1
</script>

<template>
  <section class="main">
    <div class="container">
<<<<<<< HEAD
      <div class="product">
        <div class="product__imgs">
          <swiper
            v-if="productSingleStore.product?.images.length > 1"
            @swiper="setThumbsSwiper"
            :grabCursor="true"
            :spaceBetween="1"
            :slidesPerView="productSingleStore.product?.images.length"
            :freeMode="true"
            :watchSlidesProgress="true"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide
              imgper-slide
              v-for="(image, i) in productSingleStore.product?.images"
              :key="i"
              ><img class="swiper__slide-img" :src="image" alt=""
            /></swiper-slide>
          </swiper>

          <swiper
            :spaceBetween="10"
            :navigation="true"
            :thumbs="{ swiper: thumbsSwiper }"
            :modules="modules"
            :grabCursor="true"
            class="mySwiper2"
          >
            <swiper-slide
              v-for="(image, i) in productSingleStore.product?.images"
              :key="i"
              ><img class="swiper__slide-img2" :src="image" alt=""
            /></swiper-slide>
          </swiper>
        </div>
        <div class="product__about"></div>
      </div>
=======
      <h1>Product name: {{ productSingleStore.product?.title }}</h1>
>>>>>>> 4a36d80ab33555576a15b9de20823905a30597f1
    </div>
  </section>
</template>
