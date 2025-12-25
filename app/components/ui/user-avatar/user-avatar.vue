<template>
  <PAvatar :size="size" shape="circle" :src="imageUrl" :label="label">
    <!-- <template v-if="!imageUrl" #icon> 
      <UserIcon />
    </template> -->
  </PAvatar>
</template>

<script setup lang="ts">
import type { AvatarProps } from "primevue";
import UserIcon from "~/components/icons/user.vue"

const {label= 'P'} = defineProps<{
  size?: AvatarProps["size"];
  imageUrl?: string;
  label?: string;
}>();
</script>

<style scoped></style>
