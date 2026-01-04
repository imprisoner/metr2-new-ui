<template>
  <label class="flex flex-col gap-1">
    <span v-if="label" class="text-custom-secondary text-sm">{{ label }}</span>
    <div class="relative w-full">
      <Component v-if="icon" :is="icon" class="absolute top-4 left-4" />
      <PInputText
        v-bind="inputProps"
        fluid
        :class="{
          'ps-9.5': !!icon,
        }"
      />
    </div>
    <PMessage v-if="formFieldState?.invalid" severity="error" size="small" variant="simple">
      {{ formFieldState?.error.message }}
    </PMessage>
  </label>
</template>

<script setup lang="ts">
import type { FormFieldState } from "@primevue/forms";
import type { InputTextProps } from "primevue";
import type { Component } from "vue";

const {formFieldState, form} = defineProps<{
  icon?: Component;
  inputProps: Omit<InputTextProps, "fluid">;
  label?: string;
  formFieldState?: FormFieldState;
  form?: Record<string, any>
}>();
</script>

<style scoped></style>

