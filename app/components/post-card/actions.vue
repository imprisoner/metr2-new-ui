<template>
  <div class="flex gap-1">
    <PButton
      v-bind="shareButtonProps"
      label="Подписаться"
      class="hidden lg:inline-flex"
    />
    <div class="relative">
      <PostCardMoreMenu :mobile="mobile" />
    </div>
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
  mobile?: boolean;
  shareButtonProps?: ButtonProps;
}>();
</script>

