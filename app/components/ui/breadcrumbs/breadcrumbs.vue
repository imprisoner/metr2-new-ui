<template>
  <PBreadcrumb v-bind="$props" class="text-base">
    <template #separator>
      <div class="w-1.5 h-1.5 bg-custom-secondary rounded-full" />
    </template>
  </PBreadcrumb>
</template>

<script setup lang="ts">
import type { BreadcrumbProps } from "primevue";

defineProps<BreadcrumbProps>();

</script>

<style scoped></style>
