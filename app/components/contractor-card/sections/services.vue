<template>
  <div class="flex flex-col gap-2">
    <ContractorServicesList :items="services" />
    <ContractorCardLinkWithArrow label="Все услуги" :count="services.length" />
  </div>
</template>

<script setup lang="ts">
import type { IServiceItemProps } from '~/types/ui.types';

defineProps<{
  services: IServiceItemProps[];
}>()
</script>

<style scoped></style>
