<template>
  <div class="grid grid-cols-3 gap-x-6 gap-y-4">
    <label v-for="service in services" :key="service.id" class="flex gap-2 items-center text-base leading-3.5">
      <PCheckbox :value="service.id" v-model="model" :dt="checkboxDT" size="large" :pt="{box: 'before:content-none', icon: 'w-3 h-3'}"/>
      {{ capitalizeFirstLetter(service.name) }}
    </label>
  </div>
</template>

<script setup lang="ts">
import type { CheckboxDesignTokens } from '@primeuix/themes/types/checkbox';

const model = defineModel<string[]>();

defineProps<{
  services: { id: string; name: string }[];
}>();

const checkboxDT: CheckboxDesignTokens = {
  root: {
    borderColor: "#D1D5DB",
    borderRadius: "6px",
  },
  icon: {
    size: '4px'
  }
}
</script>

