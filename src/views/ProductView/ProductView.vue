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
                    <ProductSwipper />
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
                        <h3 class="product__title">
                            {{ productSingleStore.product?.title }}
                        </h3>
                        <p class="product__txt">
                            {{ productSingleStore.product?.description }}
                        </p>
                        <span class="product__line"></span>
                        <h4 class="product__conter-title">Miqdor:</h4>
                        <div class="product__prices-count">
                            <div class="product__counter">
                                <span class="product__counter-decrement">-</span>
                                <span class="product__count">1</span>
                                <span class="product__counter-increment">+</span>
                            </div>
                            <span class="product__prices-count-quantity"
                                >Sotuvda {{ productSingleStore.product?.minimumOrderQuantity }} dona bor</span
                            >
                        </div>
                    </div>

                    <div class="product__price">
                        <h4 class="product__price-title">Narx:</h4>
                        <h3 class="product__price-price">{{ productSingleStore.product?.price }} 000 So'm</h3>
                    </div>

                    <div class="product__btns">
                        <button class="product__btns-btn">
                            <RouterLink to="#!" class="product__btns-btn-link1">Savatga qoshish</RouterLink>
                        </button>
                        <button class="product__btns-btn-order">
                            <RouterLink to="/" class="product__btns-btn-order-link"> Tugmani 1 bosishda xarid qilish </RouterLink>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
