<script setup>
import { ref } from "vue";

const props = defineProps({
  size: {
    type: Number,
    default: 24,
  },
  color: {
    type: String,
    default: "rgba(0, 0, 0, 0.7)",
  },
});

const isActive = ref(false);

const toggleActive = () => {
  isActive.value = !isActive.value;
};
</script>

<template>
  <div @click="toggleActive">
    <svg
      id="icon"
      :class="{ active: isActive }"
      xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
    >
      <path
        :fill="color"
        stroke-width="1.5"
        d="M12 3.942a6.35 6.35 0 0 1 4.305-1.692c1.726 0 3.374.71 4.58 1.96a6.7 6.7 0 0 1 1.865 4.652a6.7 6.7 0 0 1-1.865 4.652c-.796.825-1.591 1.67-2.39 2.518c-1.624 1.724-3.265 3.467-4.97 5.108l-.003.004a2.213 2.213 0 0 1-3.113-.069l-7.295-7.561c-2.485-2.577-2.485-6.727 0-9.303A6.33 6.33 0 0 1 12 3.942"
      />
    </svg>
  </div>
</template>

<style lang="scss" scoped>
#icon {
  fill: transparent;
  stroke: rgba(0, 0, 0, 0.7);

  & path {
    fill: transparent;
    stroke: rgba(0, 0, 0, 0.7);
  }

  &.active {
    fill: red;
    transform: scale(1.2);
    stroke: transparent;
  }
}
</style>
