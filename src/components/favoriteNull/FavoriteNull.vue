<script setup></script>
<template>
  <div class="container">
    <div class="productNull">
      <img
        class="productNull__img"
        src="@/assets/img/product-null.png"
        alt=""
      />
      <h3 class="productNull__title">{{ $t("like") }}</h3>
      <p class="productNull__txt">{{ $t("remember") }}</p>
      <RouterLink to="/">
        <button class="productNull__btn">{{ $t("back") }}</button>
      </RouterLink>
    </div>
  </div>
</template>