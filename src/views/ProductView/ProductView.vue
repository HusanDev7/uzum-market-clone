<script setup>
import { useProductSingleStore } from "@/stores/productSingleStore";
import { useRoute } from "vue-router";
import ProductSwipper from "@/components/productSwipper/ProductSwipper.vue";
import { IconStar, IconHeard } from "@/lib/imports";
const route = useRoute();

const productSingleStore = useProductSingleStore();

productSingleStore.getSingleProduct(route.params.id);
</script>

<template>
    <section class="main">
        <div class="container">
            <div class="product">
                <div class="product__imgs">
                    <img src="../../assets/img/no-photo.jpg" alt="" />
                    <!-- <ProductSwipper /> -->
                </div>
                <div class="product__about">
                    <div class="product__box">
                        <div class="product__box-mini">
                            <IconStar />
                            <span class="product__box-rating">
                                {{ productSingleStore.product?.rating }}
                            </span>
                            <span class="product__box-txt">(baho)</span>
                            <span class="product__box-txt">{{ productSingleStore.product?.stock }} Buyurtma</span>
                        </div>
                        <div class="product__box-mini">
                            <span class="product__box-mini-fav">
                                <IconHeard :size="16 && 16" />
                            </span>
                            <span class="product__box-txt-fav">Istaklarga</span>
                        </div>
                    </div>
                    <div class="product__desc">
                        <h3 class="product__title">{{ productSingleStore.product?.title }}</h3>
                        <p class="product__txt">{{ productSingleStore.product?.description }}</p>
                        <span class="product__line"></span>
                        <div class="product__prices-count">
                            <h4 class="product__conter-title">Miqdor:</h4>
                            <div class="product__counter">
                                <span class="product__counter-decrement">-</span>
                                <span class="product__count">1</span>
                                <span class="product__counter-increment">+</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
