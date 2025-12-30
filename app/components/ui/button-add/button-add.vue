<template>
  <PButton
    v-bind="buttonProps"
    :label="label"
    class="justify-start"
    :pt="{
      label: 'font-normal text-base',
    }"
  >
    <template #icon>
      <PlusIcon />
    </template>
  </PButton>
</template>

<script setup lang="ts">
import type { ButtonProps } from "primevue";
import PlusIcon from "~/components/icons/plus.vue";

const { label = "Добавить" } = defineProps<{
  buttonProps?: ButtonProps;
  label?: string;
}>();
</script>

