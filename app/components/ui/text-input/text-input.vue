<template>
  <div class="relative w-full">
    <Component :is="icon" class="absolute top-4 left-4" />
    <PInputText v-bind="inputProps" fluid class="ps-9.5" />
  </div>
</template>

<script setup lang="ts">
import type { InputTextProps } from 'primevue';
import type { Component } from 'vue';

defineProps<{icon: Component, inputProps: Omit<InputTextProps, 'fluid'>}>()
</script>

<style scoped></style>

