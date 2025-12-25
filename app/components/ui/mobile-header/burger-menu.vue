<template>
  <UiPopoverWithBlock
    v-model:visible="visible"
    ref="popover"
    :icon="IconBurger"
  >
    <UiHeaderNavigation :is-mobile="true" />
  </UiPopoverWithBlock>
</template>

<script setup lang="ts">
import IconBurger from "@/components/icons/burger.vue";

const visible = defineModel("visible", { default: false });
</script>

