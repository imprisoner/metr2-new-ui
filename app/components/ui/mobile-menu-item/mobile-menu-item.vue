<template>
  <NuxtLink :to="to" class="flex gap-2 p-3 text-primary font-medium">
    <div class="w-5 h-5 flex">
      <Component v-if="icon" :is="icon" class="text-custom-icon" />
    </div>
    {{ label }}
    <PBadge v-if="count" severity="warn" :value="count" :pt="{
      root: {
        class: 'w-[21px] min-w-0 h-[21px] font-[10.5px]'
      }
    }"/>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Component } from "vue";

defineProps<{
  to: string;
  label: string;
  icon?: Component;
  count?: number
}>();
</script>

