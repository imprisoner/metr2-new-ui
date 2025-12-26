<template>
  <UiPopoverWithBlock
    v-model:visible="visible"
    ref="popover"
    header="Написать"
    :icon="UserIcon"
  >
    <template v-for="(item, index) in USER_MENU_ITEMS" :key="index">
      <UiMobileMenuItem
        v-if="item.type === 'button'"
        v-bind="item.props"
      />
      <UiDivider v-else v-bind="item.props" />
    </template>

    <UiDivider direction="horizontal" />
  </UiPopoverWithBlock>
</template>

<script setup lang="ts">
import UserIcon from "~/components/icons/user.vue";
import { USER_MENU_ITEMS } from "~/components/const";

const visible = defineModel("visible", { default: false });
</script>
