<template>
  <div class="flex gap-3">
    <PAvatar
      :size="size === 'sm' ? 'normal' : 'large'"
      label="U"
      shape="circle"
    />
    <PTextarea
      :size="size === 'sm' ? 'small' : 'large'"
      placeholder="Поделитесь мнением"
      class="flex-1"
      :class="heightClass"
    />
  </div>
</template>

<script setup lang="ts">
const { size } = defineProps<{
  size: "sm" | "lg";
}>();

const heightClass = size === "sm" ? "h-11" : "h-27";
</script>

<style scoped></style>

