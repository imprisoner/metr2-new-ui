<template>
  <UiInputWrapper :icon :label :invalid="invalid" :message="message">
    <PInputText
      v-bind="inputProps"
      fluid
      :class="{
        'ps-9.5': !!icon,
      }"
    />
  </UiInputWrapper>
</template>

<script setup lang="ts">
import type { InputTextProps } from "primevue";
import type { UiInputWrapperProps } from "~/types/ui.types";

defineProps<
  UiInputWrapperProps & {
    inputProps: Omit<InputTextProps, "fluid">;
  }
>();
</script>

<style scoped></style>

