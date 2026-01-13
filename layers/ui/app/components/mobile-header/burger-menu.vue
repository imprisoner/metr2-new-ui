<template>
  <UiPopoverWithBlock v-model:visible="visible" :icon="BurgerIcon">
    <UiHeaderNavigation :is-mobile="true" />
  </UiPopoverWithBlock>
</template>

<script setup lang="ts">
import BurgerIcon from "#layers/ui/app/icons/burger-icon.vue";

const visible = defineModel("visible", { default: false });
</script>

