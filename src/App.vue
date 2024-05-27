<script setup>
import HeaderLayouts from "@/layouts/headerLayouts/HeaderLayouts.vue";
import FooterLayout from "./layouts/footerLayouts/FooterLayout.vue";
</script>
<template>
    <div class="wrapper">
        <HeaderLayouts />
        <RouterView />
        <FooterLayout />
    </div>
</template>
