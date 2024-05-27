<script setup>
import { IconInstagram, IconTelegram, IconYoutube, IconFackebook } from "@/lib/imports";
</script>

<template>
    <div class="footer">
        <div class="footer__box">
            <ul class="footer__list">
                <h4 class="footer__list-title">Biz haqimizda</h4>
                <li class="footer__list-item">Topshirish punktlari</li>
                <li class="footer__list-item">Vakansiyalar</li>
            </ul>
        </div>
        <div class="footer__box">
            <ul class="footer__list">
                <h4 class="footer__list-title">Foydalanuvchilarga</h4>
                <li class="footer__list-item">Biz bilan bog'lanish</li>
                <li class="footer__list-item">Savol javob</li>
            </ul>
        </div>
        <div class="footer__box">
            <ul class="footer__list">
                <h4 class="footer__list-title">Tadbirkorlarga</h4>
                <li class="footer__list-item">Uzumda soting</li>
                <li class="footer__list-item">Sotuvchi kabinetiga kirish</li>
            </ul>
        </div>
        <div class="footer__box">
            <h4 class="footer__list-title2">Ilovani yuklab olish</h4>
            <ul class="footer__list2">
                <li class="footer__list2-item2">
                    <img class="footer__list-item-img" src="@/assets/img/appStore.svg" alt="" />
                </li>
                <li class="footer__list-item">
                    <img class="footer__list-item-img" src="@/assets/img/googlePlay.svg" alt="" />
                </li>
            </ul>
            <div class="footer-socila-media">
                <span><IconInstagram /></span>
                <span><IconTelegram /></span>
                <span><IconYoutube /></span>
                <span><IconFackebook /></span>
            </div>
        </div>
        <span class="footer-line"></span>
        <div class="footer-security">
            <div class="footer-securirt-box">
                <span class="footer-security-title">Maxfiylik kelishuvi Foydalanuvchi kelishuvi</span>
            </div>
            <div class="footer-securirt-box">
                <span class="footer-security-txt">«2024© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar himoyalangan»</span>
            </div>
        </div>
    </div>
</template>
