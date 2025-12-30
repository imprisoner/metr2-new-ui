<template>
  <div class="flex justify-between">
    <div class="flex gap-3">
      <UiUserAvatar size="large" :image-url="undefined" />
      <div>
        <p class="font-semibold text-base">Nilin743</p>
        <p class="font-semibold text-base">
          Дневник
          <NuxtLink to="#" class="text-custom-secondary"
            >Моя квартирка</NuxtLink
          >
          <span class="font-normal text-custom-secondary"> 45 мин</span>
        </p>
      </div>
    </div>
    <PostCardActions :share-button-props="shareButtonProps" :mobile="mobile" />
  </div>
</template>

<script setup lang="ts">
import type { ButtonProps } from "primevue";

const { shareButtonProps } = defineProps<{
  shareButtonProps?: ButtonProps;
  mobile?: boolean;
}>();
</script>

<style scoped></style>

