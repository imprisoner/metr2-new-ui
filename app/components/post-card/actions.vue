<template>
  <div class="flex gap-1">
    <PButton
      v-bind="shareButtonProps"
      label="Подписаться"
      class="hidden lg:inline-flex"
    />
    <PostCardMoreMenu />
  </div>
</template>

<script setup lang="ts">
import type { ButtonProps } from "primevue";

const {
  shareButtonProps = {
    severity: "secondary",
    outlined: true,
    label: "Подписаться",
  },
} = defineProps<{
  shareButtonProps?: ButtonProps;
}>();
</script>

