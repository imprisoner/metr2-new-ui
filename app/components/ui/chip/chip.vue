<template>
  <PChip v-bind="$props" :pt="{ root: `${classNames}` }" />
</template>

<script setup lang="ts">
import type { ChipProps } from "primevue";

const { size } = defineProps<ChipProps & { size?: "sm" }>();

const classNames = size === "sm" ? "py-0.5 px-1.5 text-xs" : "text-base";
</script>

<style scoped></style>

