<template>
  <section class="p-4 lg:p-6 shadow-custom-card rounded-lg bg-white">
    <div v-if="title" class="flex gap-2 text-5xl font-semibold">
      <h2>{{ title }}</h2>
      <span v-if="!!count" class="text-custom-secondary">{{ count }}</span>
    </div>
    <slot />
  </section>
</template>

<script setup lang="ts">
import type { IUiSheetProps } from "~/types/ui.types";

defineProps<IUiSheetProps>();
</script>

<style scoped></style>

