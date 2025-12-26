<template>
  <PAvatar :size="size" shape="circle" :src="imageUrl" :label="label" />
</template>

<script setup lang="ts">
import type { AvatarProps } from "primevue";

const {label= 'P'} = defineProps<{
  size?: AvatarProps["size"];
  imageUrl?: string;
  label?: string;
}>();
</script>

<style scoped></style>
