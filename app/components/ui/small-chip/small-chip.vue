<template>
  <PChip v-bind="$props" pt:root:class="py-0.5 px-1.5 text-xs" />
</template>

<script setup lang="ts">
import type { ChipProps } from "primevue";

defineProps<ChipProps>();
</script>

<style scoped></style>
