<template>
  <UiSheet :title :count class="flex flex-col gap-4 lg:gap-6 relative">
    <template v-if="isOwner" #controls>
      <UiButtonAdd
        :button-props="{
          outlined: true,
          severity: 'secondary',
          rounded: true,
        }"
        icon-only
        class="w-11.5 h-11.5"
      />
    </template>
    <slot />
  </UiSheet>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  count?: number;
}>();

const { isOwner } = storeToRefs(useAuthStore());
</script>
