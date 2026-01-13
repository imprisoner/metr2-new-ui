<template>
  <UiPopoverWithBlock
    v-model:visible="visible"
    header="Написать"
    :icon="MagnifyIcon"
  >
    <div class="flex flex-col gap-4">
      <UiTextInput
        :icon="MagnifyIcon"
        :input-props="{
          placeholder: 'Поиск по сайту',
        }"
      />
      <PButton label="Найти" fluid />
    </div>
  </UiPopoverWithBlock>
</template>

<script setup lang="ts">
import MagnifyIcon from "#layers/ui/app/icons/magnify-icon.vue";

const visible = defineModel("visible", { default: false });
</script>

<style scoped></style>

