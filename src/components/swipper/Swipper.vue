<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@/components/swipper/swipper.scss";
import { Pagination, Navigation } from "swiper/modules";
import { ref } from "vue";

const modules = [Pagination, Navigation];

const images = [
    { src: import("@/assets/img/swipper-slide1.jpg") },
    { src: import("@/assets/img/swipper-slide2.jpg") },
    { src: import("@/assets/img/swipper-slide3.jpg") },
    { src: import("@/assets/img/swipper-slide4.jpg") },
    { src: import("@/assets/img/swipper-slide5.jpg") },
    { src: import("@/assets/img/swipper-slide6.jpg") },
    { src: import("@/assets/img/swipper-slide7.jpg") },
    { src: import("@/assets/img/swipper-slide8.jpg") },
    { src: import("@/assets/img/swipper-slide9.jpg") },
    { src: import("@/assets/img/swipper-slide10.jpg") },
    { src: import("@/assets/img/swipper-slide11.jpg") },
    { src: import("@/assets/img/swipper-slide12.jpg") },
    { src: import("@/assets/img/swipper-slide13.jpg") },
    { src: import("@/assets/img/swipper-slide14.jpg") },
    { src: import("@/assets/img/swipper-slide15.jpg") },
    { src: import("@/assets/img/swipper-slide16.jpg") },
];

const resolvedImages = ref([]);
Promise.all(
    images.map(async (image) => {
        const resolvedImage = await image.src;
        resolvedImages.value.push(resolvedImage.default);
    })
);
</script>

<template>
    <div class="container">
        <swiper :slidesPerView="1" :spaceBetween="30" :loop="true" :pagination="{
            clickable: true,
        }" :navigation="true" :modules="modules" class="mySwiper">
            <swiper-slide v-for="(image, index) in resolvedImages" :key="index">
                <img :src="image" alt="" />
            </swiper-slide>
        </swiper>
    </div>
</template>
