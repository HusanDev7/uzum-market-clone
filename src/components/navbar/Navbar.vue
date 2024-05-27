<script setup>
import { IconLocation, IconUzbekistan, IconRussian, IconLogo, IconPerson, IconHeard, IconBag, IconSearch, IconNavHeard } from "@/lib/imports";
// imports

import { useAddBasketStore } from "@/stores/addBasketStore";

const addBasketStore = useAddBasketStore();

import { ref } from "vue";
import { useRoute } from "vue-router";

const dropdownActive = ref(false);

const toggleDropdown = () => {
    dropdownActive.value = !dropdownActive.value;
};

const category = [
    {
        id: 1,
        keyWords: "Elektronika",
    },

    {
        id: 2,
        keyWords: "Maishiy texnika",
    },

    {
        id: 3,
        keyWords: "Kiym",
    },

    {
        id: 4,
        keyWords: "Poyabzallar",
    },

    {
        id: 5,
        keyWords: "Aksesuarlar",
    },

    {
        id: 6,
        keyWords: "Gozallik va parvarish",
    },

    {
        id: 7,
        keyWords: "Salomatlik",
    },

    {
        id: 8,
        keyWords: "Yana",
    },
];
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
                        <p class="navbar__top-city">Shahar:</p>
                        <p class="navbar__top-city-name">Toshkent</p>
                        <a href="https://uzum.uz/uz/about/delivery-points" class="navbar__top-getZone">Topshirish punktlari</a>
                    </div>
                </div>
                <div class="navbar__top-item">
                    <div class="navbar__top-item-box2">
                        <a href="https://seller.uzum.uz/" class="navbar__top-sallInUzum">Uzumda soting</a>
                        <a href="https://uzum.uz/uz/faq" class="navbar__top-questions">Savol-Javoblar</a>
                        <a href="#" class="navbar__top-orders">Buyurtmalarim</a>

                        <div class="navbar__top-dropdown">
                            <div class="navbar__top-sellect" @click="toggleDropdown">
                                <span class="navbar__top-selected">
                                    <IconUzbekistan :size="20" @click="showLangueage('uz')" />
                                    O'zbekcha
                                </span>
                            </div>
                            <ul class="navbar__top-menu" :class="{ active: dropdownActive }">
                                <li class="navbar__top-menu-link">
                                    <IconRussian :size="20" @click="showLangueage('ru')" />
                                    Русский
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
                <input class="navbar-search" type="text" placeholder="Mahsulotlar va turkumlar izlash" />
                <IconSearch />
            </div>

            <div class="navbar-item2">
                <RouterLink to="/entrance/">
                    <button class="navbar-sign"><IconPerson /> Kirish</button>
                </RouterLink>
                <RouterLink to="/favorite/">
                    <button class="navbar-fav"><IconNavHeard /> Saralangan</button>
                </RouterLink>

                <RouterLink to="/basket/">
                    <button class="navbar-bag">
                        <IconBag /> Savat
                        <span v-if="addBasketStore.basket?.length === 0"></span>
                        <span class="navbar-totallSum" v-else>{{ addBasketStore.basket?.length }}</span>
                    </button>
                </RouterLink>
            </div>
        </nav>
        <div class="navbar__other-product">
            <div class="navbar__other-product-item" v-for="item in category" :key="item.id">
                <span>{{ item.keyWords }}</span>
            </div>
        </div>
    </div>
</template>
