<script setup></script>
<template>
  <div class="container">
    <div class="basketNull">
      <img class="basketNull__img" src="@/assets/img/basket-null.png" alt="" />
      <h3 class="basketNull__title">{{ $t("basket-null") }}</h3>
      <p class="basketNull__txt">{{ $t("search") }}</p>
      <RouterLink to="/">
        <button class="basketNull__btn">{{ $t("back") }}</button>
      </RouterLink>
    </div>
  </div>
</template>
