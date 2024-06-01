<script setup>
import { IconDell } from "@/lib/imports";
import { useAddBasketStore } from "@/stores/addBasketStore";
import { useProductSingleStore } from "@/stores/productSingleStore";
const addBasketStore = useAddBasketStore();
const productSingleStore = useProductSingleStore();
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
                <p v-if="item.brand == null">Sotuvchi: nomalum</p>
                <p class="basket__box-txt" v-else>Sotuvchi: {{ item.brand }}</p>
              </div>
              <div class="basket__box-card-mini">
                <div class="basket__box-counter">
                  <span class="basket__box-counter-decrement" @click="addBasketStore.decrementQ(item.id)">-</span>
                  <span class="basket__box-counter-count">{{
        item.quantity
      }}</span>
                  <span class="basket__box-counter-increment" @click="addBasketStore.incrementQ(item.id)">+</span>
                </div>
              </div>
              <div class="basket__box-card-mini2">
                <span class="basket__box-dell" @click="addBasketStore.removeProduct(item.id)">
                  <IconDell /> Yo'q qilish
                </span>
                <span class="basket__box-price">{{ item.price * item.quantity }} 000 so'm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="basket-order">
        <p class="basket-order-title">Buyurtmangiz</p>
        <div class="basket-order-box">
          <div class="basket-order-box-mini">
            <p class="basket-order-txt">
              Mahsulotlar ({{ addBasketStore.basket?.length }}):
            </p>
          </div>
          <div class="basket-order-box-mini">
            <p class="basket-order-price">
              {{ addBasketStore.totallSum * 2 }} 000 so'm
            </p>
          </div>
        </div>
        <span class="basket-order-delivary">Yetkazib berish M05 27 (Ertaga)</span>
        <div class="basket-order-prices">
          <p class="basket-order-prices-title">Jami:</p>
          <p class="basket-order-prices-price">
            {{ addBasketStore.totallSum }} 000 so'm
          </p>
        </div>
        <button class="basket-order-goOrder">Rasmilashtirishga o'tish</button>
      </div>
    </div>
  </div>
</template>
