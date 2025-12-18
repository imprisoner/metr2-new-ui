<template>
  <NuxtLink :to="to" class="flex gap-2 p-3 text-primary font-medium">
    <Component v-if="icon" :is="icon" class="text-custom-icon" />
    {{ label }}
    <PBadge v-if="count" severity="warn" :value="count"/>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Component } from "vue";

defineProps<{
  to: string;
  label: string;
  icon?: Component;
  count?: number;
}>();
</script>

<style scoped></style>

