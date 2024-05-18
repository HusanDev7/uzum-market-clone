<script setup>
const props = defineProps({
    size: {
        type: Number,
        default: 24
    },
    color: {
        type: String,
        default: "#ffb54c"
    }
})
</script>
<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24">
        <path :fill="color"
            d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z" />
    </svg>
</template>
