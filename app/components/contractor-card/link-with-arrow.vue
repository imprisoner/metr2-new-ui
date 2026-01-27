<template>
  <NuxtLink
    :to
    class="text-base font-semibold flex items-center gap-1"
    @click="$emit('click', $event)"
  >
    <span>{{ label }}</span>
    <span v-if="count" class="text-custom-secondary">{{ count }}</span>
    <ChevronRightIcon class="w-3.5 h-3.5" />
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  to?: string;
  label: string;
  count?: number;
}>();

defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();
</script>

