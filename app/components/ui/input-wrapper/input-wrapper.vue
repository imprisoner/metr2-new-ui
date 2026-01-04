<template>
  <label class="flex flex-col gap-1">
    <span v-if="label" class="text-custom-secondary text-sm">{{ label }}</span>
    <div class="relative w-full">
      <Component v-if="icon" :is="icon" class="absolute top-4 left-4" />
      <slot />
    </div>
    <PMessage v-if="invalid" severity="error" size="small" variant="simple">
      {{ message }}
    </PMessage>
  </label>
</template>

<script setup lang="ts">
defineProps<{
  icon?: Component;
  label?: string;
  invalid?: boolean;
  message?: string;
}>();
</script>
