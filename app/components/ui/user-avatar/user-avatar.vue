<template>
  <PAvatar :size="size" shape="circle" :label="computedLabel" :image="imageUrl" class="user-avatar"/>
</template>

<script setup lang="ts">
import type { AvatarProps } from "primevue";

const {label= 'P', imageUrl} = defineProps<{
  size?: AvatarProps["size"];
  imageUrl?: string;
  label?: string;
}>();

const computedLabel = computed(() => imageUrl ? undefined : label)
</script>

<style scoped>
  :deep(img) {
    object-fit: cover;
  }
</style>
