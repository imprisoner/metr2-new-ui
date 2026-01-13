<template>
  <PButton
    v-bind="buttonProps"
    :label="computedLabel"
    class="{'justify-start': !iconOnly}"
    :pt="{
      label: 'font-semibold text-base',
    }"
  >
    <template #icon>
      <PlusIcon class="min-w-3.5"/>
    </template>
  </PButton>
</template>

<script setup lang="ts">
import type { ButtonProps } from "primevue";

const { label = "Добавить", iconOnly = false } = defineProps<{
  buttonProps?: ButtonProps;
  label?: string;
  iconOnly?: boolean;
}>();

const computedLabel = !iconOnly ? label : undefined;
</script>

