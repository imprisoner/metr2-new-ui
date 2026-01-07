<template>
  <UiInputWrapper :label>
    <div class="flex flex-wrap gap-1">
      <UiChip v-for="label in options" :label="label" @click="modelValue = label" 
      class="border border-custom-surface-ground cursor-pointer"
      :class="{
        'border-[#1E293B]! bg-[#F9FDFF]': modelValue === label
      }"
      />
    </div>
  </UiInputWrapper>
</template>

<script setup lang="ts">
  defineProps<{
    options: any[];
    label?: string;
  }>();

const modelValue = defineModel<any>();
</script>

<style scoped></style>

