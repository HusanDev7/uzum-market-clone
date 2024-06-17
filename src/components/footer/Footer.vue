<script setup>
import { IconInstagram, IconTelegram, IconYoutube, IconFackebook } from "@/lib/imports";
</script>

<template>
    <div class="footer">
        <div class="footer__box">
            <ul class="footer__list">
                <h4 class="footer__list-title">{{ $t("about-us") }}</h4>
                <li class="footer__list-item">{{$t("get-zone")}}</li>
                <li class="footer__list-item">{{$t("jobs")}}</li>
            </ul>
        </div>
        <div class="footer__box">
            <ul class="footer__list">
                <h4 class="footer__list-title">{{$t("user's")}}</h4>
                <li class="footer__list-item">{{$t("call-us")}}</li>
                <li class="footer__list-item">{{$t("asks")}}</li>
            </ul>
        </div>
        <div class="footer__box">
            <ul class="footer__list">
                <h4 class="footer__list-title">{{$t("bussnes")}}</h4>
                <li class="footer__list-item">{{$t("sell")}}</li>
                <li class="footer__list-item">{{$t("sign-in")}}</li>
            </ul>
        </div>
        <div class="footer__box">
            <h4 class="footer__list-title2">{{$t("download-app")}}</h4>
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
