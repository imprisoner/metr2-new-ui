<template>
  <PAvatar :size="size" shape="circle" :src="imageUrl">
    <template v-if="!imageUrl" #icon> 
      <UserIcon />
    </template>
  </PAvatar>
</template>

<script setup lang="ts">
import type { AvatarProps } from "primevue";
import UserIcon from "~/components/icons/user.vue"
defineProps<{
  size?: AvatarProps["size"];
  imageUrl?: string;
}>();
</script>

<style scoped></style>
