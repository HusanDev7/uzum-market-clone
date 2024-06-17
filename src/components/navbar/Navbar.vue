<script setup>
import {
  IconLocation,
  IconUzbekistan,
  IconRussian,
  IconLogo,
  IconPerson,
  IconHeard,
  IconBag,
  IconSearch,
  IconNavHeard,
} from "@/lib/imports";

import { ref, onMounted, onBeforeUnmount } from "vue";
import { useAddBasketStore } from "@/stores/addBasketStore";
import { useProductStore } from "@/stores/productStore";
import { i18n } from "@/main";
const productStore = useProductStore();
const addBasketStore = useAddBasketStore();

const dropdownActive = ref(false);
const searchFilter = ref("");

const category = [
  { id: 1, keyWords: "qwe" },
  { id: 2, keyWords: "qwe" },
  { id: 3, keyWords: "qwe" },
  { id: 4, keyWords: "wqe" },
  { id: 5, keyWords: "wqe" },
  { id: 6, keyWords: "qwe" },
  { id: 7, keyWords: "qwe" },
  { id: 8, keyWords: "qwe" },
];

const toggleDropdown = () => {
  dropdownActive.value = !dropdownActive.value;
};

const search = () => {
  productStore.getSearch(searchFilter.value);
  if (productStore.getSearch(searchFilter.value)) {
    searchFilter.value = "";
  }
};

const languageUz = ref(true);
const languageRu = ref(false);

const language = (lang) => {
  if (lang === "UZ") {
    languageRu.value = false;
    languageUz.value = true;
    i18n.global.locale.value = "UZ";
    localStorage.setItem("language", "UZ");
  } else if (lang === "RU") {
    languageUz.value = false;
    languageRu.value = true;
    i18n.global.locale.value = "RU";
    localStorage.setItem("language", "RU");
  }
};

onMounted(() => {
  const savedLanguage = localStorage.getItem("language");
  if (savedLanguage) {
    language(savedLanguage);
  }
});

onBeforeUnmount(() => {
  localStorage.setItem("languageRu", languageRu.value);
  localStorage.setItem("languageUz", languageUz.value);
});
</script>

<template>
  <div class="line">
    <div class="container">
      <div class="navbar__top">
        <div class="navbar__top-item">
          <div class="navbar__top-item-box">
            <span class="navbar__top-icon">
              <IconLocation />
            </span>
            <p class="navbar__top-city">{{ $t("citys") }}:</p>
            <p class="navbar__top-city-name">{{ $t("city-name") }}</p>
            <a
              href="https://uzum.uz/uz/about/delivery-points"
              class="navbar__top-getZone"
              >{{ $t("give-zone") }}</a
            >
          </div>
        </div>
        <div class="navbar__top-item">
          <div class="navbar__top-item-box2">
            <a href="https://seller.uzum.uz/" class="navbar__top-sallInUzum">{{
              $t("buy-for-uzum")
            }}</a>
            <a href="https://uzum.uz/uz/faq" class="navbar__top-questions">{{
              $t("questions")
            }}</a>
            <a href="#" class="navbar__top-orders">{{ $t("my-order") }}</a>

            <div class="navbar__top-dropdown">
              <div class="navbar__top-sellect" @click="toggleDropdown">
                <span class="navbar__top-selected" v-show="languageUz">
                  <IconUzbekistan :size="20" />
                  {{ $t("uz") }}
                </span>
                <span class="navbar__top-selected" v-show="languageRu">
                  <IconRussian :size="20" />
                  {{ $t("ru") }}
                </span>
              </div>
              <ul class="navbar__top-menu" :class="{ active: dropdownActive }">
                <li
                  class="navbar__top-menu-link"
                  @click="language('RU')"
                  v-show="!languageRu"
                >
                  <IconRussian :size="20" />
                  {{ $t("ru") }}
                </li>
                <li
                  class="navbar__top-menu-link"
                  @click="language('UZ')"
                  v-show="!languageUz"
                >
                  <IconUzbekistan :size="20" />
                  {{ $t("uz") }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ......... navbar start ......... -->
  <div class="container">
    <nav class="navbar">
      <RouterLink to="/">
        <IconLogo :size="215 && 32" />
      </RouterLink>
      <div class="navbar-item">
        <input
          class="navbar-search"
          v-model="searchFilter"
          @keydown.enter="search"
          type="text"
          :placeholder="$t('input-text')"
        />
        <IconSearch @click="search" />
      </div>

      <div class="navbar-item2">
        <RouterLink to="#!">
          <button class="navbar-sign"><IconPerson /> {{ $t("sign-up") }}</button>
        </RouterLink>
        <RouterLink to="/favorite/">
          <button class="navbar-fav">
            <IconNavHeard /> {{ $t("favorite") }}
          </button>
        </RouterLink>

        <RouterLink to="/basket/">
          <button class="navbar-bag">
            <IconBag /> {{ $t("basket") }}
            <span v-if="addBasketStore.basket?.length === 0"></span>
            <span class="navbar-totallSum" v-else>{{
              addBasketStore.basket?.length
            }}</span>
          </button>
        </RouterLink>
      </div>
    </nav>
    <div class="navbar__other-product">
      <div
        class="navbar__other-product-item"
        v-for="item in category"
        :key="item.id"
      >
        <span>{{ item.keyWords }}</span>
      </div>
    </div>
  </div>
</template>
