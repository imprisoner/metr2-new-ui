<template>
  <label class="text-base flex gap-2">
    <PCheckbox />
    <span v-if="label">{{ label }}</span>
    <slot v-else name="label"/>
  </label>
</template>

<script setup lang="ts">
import type { CheckboxProps } from 'primevue';

  defineProps<{
    label?: string;
    inputProps: CheckboxProps
  }>()
</script>

<style scoped>

</style>