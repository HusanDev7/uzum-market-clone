<script setup>
import { ref } from "vue";
import { IconDell } from "@/lib/imports";
import { useAddBasketStore } from "@/stores/addBasketStore";
import { useProductSingleStore } from "@/stores/productSingleStore";
const addBasketStore = useAddBasketStore();
const productSingleStore = useProductSingleStore();

const hour = ref("");
const minut = ref("");
const secont = ref("");

const time = () => {
  const localDate = new Date();
  hour.value = (localDate.getHours() < 10 ? "0" : "") + localDate.getHours();
  minut.value =
    (localDate.getMinutes() < 10 ? "0" : "") + localDate.getMinutes();
  secont.value =
    (localDate.getSeconds() < 10 ? "0" : "") + localDate.getSeconds();
};

setInterval(() => time(), 1000);
</script>
<template>
  <div class="container">
    <h3 class="how-meny-product">
      {{ $t("in-basket") }},
      <span>{{ addBasketStore.basket?.length }} {{ $t("product") }}</span>
    </h3>
    <div class="basket">
      <div class="basket__box">
        <div class="basket__box-line-over">
          <div
            class="basket__box-box"
            v-for="item in addBasketStore.basket"
            :key="item.id"
          >
            <span class="basket__box-line"></span>
            <div class="basket__box-card">
              <div class="basket__box-card-mini">
                <img
                  class="basket__box-img"
                  :src="item.thumbnail ?? '@/assets/img/no-photo.jpg'"
                  alt=""
                />
              </div>
              <div class="basket__box-card-mini">
                <p class="basket__box-title">{{ item.title }}</p>
                <p v-if="item.brand == null">
                  {{ $t("seller") }}: {{ $t("undifine") }}
                </p>
                <p class="basket__box-txt" v-else>
                  {{ $t("seller") }}: {{ item.brand }}
                </p>
              </div>
              <div class="basket__box-card-mini">
                <div class="basket__box-counter">
                  <span
                    class="basket__box-counter-decrement"
                    @click="addBasketStore.decrementQ(item)"
                    >-</span
                  >
                  <span class="basket__box-counter-count">{{
                    item.quantity
                  }}</span>
                  <span
                    class="basket__box-counter-increment"
                    @click="addBasketStore.incrementQ(item)"
                    >+</span
                  >
                </div>
              </div>
              <div class="basket__box-card-mini2">
                <span
                  class="basket__box-dell"
                  @click="addBasketStore.removeProduct(item.id)"
                >
                  <IconDell /> {{ $t("delet") }}
                </span>
                <span class="basket__box-price"
                  >{{ item.price * item.quantity }} 000 {{ $t("sum") }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="basket-order">
        <p class="basket-order-title">{{ $t("your-order") }}</p>
        <div class="basket-order-box">
          <div class="basket-order-box-mini">
            <p class="basket-order-txt">
              {{ $t("products") }} ({{ addBasketStore.basket?.length }}):
            </p>
          </div>
          <div class="basket-order-box-mini">
            <p class="basket-order-price">
              {{ addBasketStore.totallSum * 2 }} 000 {{ $t("sum") }}
            </p>
          </div>
        </div>
        <span class="basket-order-delivary">
          {{ $t("deliver") }} M05 27 {{ hour }}:{{ minut }}:{{ secont }}</span
        >
        <div class="basket-order-prices">
          <p class="basket-order-prices-title">{{ $t("overall") }}:</p>
          <p class="basket-order-prices-price">
            {{ addBasketStore.totallSum }} 000 {{ $t("sum") }}
          </p>
        </div>
        <button class="basket-order-goOrder">{{ $t("go-order") }}</button>
      </div>
    </div>
  </div>
</template>
