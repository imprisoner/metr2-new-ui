<template>
  <UiInputWrapper :label :icon :invalid :message>
    <PInputNumber
      v-bind="inputProps"
      fluid
      :class="{
        'ps-9.5': !!icon,
      }"
    />
  </UiInputWrapper>
</template>

<script setup lang="ts">
import type { InputNumberProps } from "primevue";
import type { UiInputWrapperProps } from "~/types/ui.types";

defineProps<
  UiInputWrapperProps & {
    inputProps: Omit<InputNumberProps, "fluid">;
  }
>();
</script>

<style scoped></style>

