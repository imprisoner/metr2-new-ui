<template>
  <NuxtLink
    :to="to"
    class="flex gap-2 p-3 text-primary font-medium items-center"
  >
    <Component v-if="icon" :is="icon" class="text-custom-icon w-5 h-5 flex" />
    {{ label }}
    <PBadge v-if="count" severity="warn" :value="count" />
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Component } from "vue";

const { to } = defineProps<{
  to?: string;
  label: string;
  icon?: Component;
  count?: number;
}>();
</script>

