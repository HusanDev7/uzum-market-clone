<script setup>
    import { IconDell } from "@/lib/imports";
    import { useAddBasketStore } from "@/stores/addBasketStore";
    const addBasketStore = useAddBasketStore();
</script>
<template>
    <div class="container">
        <h3 class="how-meny-product">
            Savatingiz, <span>{{ addBasketStore.basket?.length }} mahsulot</span>
        </h3>
        <div class="basket">
            <div class="basket__box">
                <div class="basket__box-line-over">
                    <div class="basket__box-box" v-for="item in addBasketStore.basket" :key="item.id">
                        <span class="basket__box-line"></span>
                        <div class="basket__box-card">
                            <div class="basket__box-card-mini">
                                <img class="basket__box-img" :src="item.thumbnail ?? '@/assets/img/no-photo.jpg'" alt="" />
                            </div>
                            <div class="basket__box-card-mini">
                                <p class="basket__box-title">{{ item.title }}</p>
                                <p class="basket__box-txt">Sotuvchi: {{ item.brand }}</p>
                            </div>
                            <div class="basket__box-card-mini">
                                <div class="basket__box-counter">
                                    <span class="basket__box-counter-decrement">-</span>
                                    <span class="basket__box-counter-count">1</span>
                                    <span class="basket__box-counter-increment">+</span>
                                </div>
                            </div>
                            <div class="basket__box-card-mini2">
                                <span class="basket__box-dell"><IconDell /> Yo'q qilish</span>
                                <span class="basket__box-price">{{ item.price }} 000 so'm</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="basket-order">
                <p class="basket-order-title">Buyurtmangiz</p>
                <div class="basket-order-box">
                    <div class="basket-order-box-mini">
                        <p class="basket-order-txt">Mahsulotlar ({{ addBasketStore.basket?.length }}):</p>
                    </div>
                    <div class="basket-order-box-mini">
                        <p class="basket-order-price">12.2334 so'm</p>
                    </div>
                </div>
                <span class="basket-order-delivary">Yetkazib berish M05 27 (Ertaga)</span>
                <div class="basket-order-prices">
                    <p class="basket-order-prices-title">Jami:</p>
                    <p class="basket-order-prices-price">10.2434 so'm</p>
                </div>
                <button class="basket-order-goOrder">Rasmilashtirishga o'tish</button>
            </div>
        </div>
    </div>
</template>
