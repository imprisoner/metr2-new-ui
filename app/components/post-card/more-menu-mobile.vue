<template>
  <UiBottomDrawer v-model:visible="visible" :dt="dt">
    <template v-for="(item, index) in dotsMenuItems" :key="index">
      <UiMobileMenuButton
        v-if="item.type === 'button'"
        v-bind="item.props"
      />
      <UiDivider
        v-else-if="item.type === 'divider'"
        v-bind="item.props"
        class="my-3 mx-2"
      />
    </template>
    <UiDivider direction="horizontal" class="my-3 mx-2" />
    <div class="flex flex-col">
      <UiMobileMenuButton label="Поделиться" />
      <div class="flex gap-2 p-2">
        <PButton
          v-for="item in SHARE_BUTTONS"
          :key="item.provider"
          text
          class="p-0 w-12 h-12"
          @click="item.handler"
        >
          <template #icon>
            <Component :is="item.icon" />
          </template>
        </PButton>
      </div>
    </div>
  </UiBottomDrawer>
</template>

<script setup lang="ts">
import type { DrawerDesignTokens } from "@primeuix/themes/types/drawer";

import { useDotsMenuItems } from "~/composables/useDotsMenuItems";
import { SHARE_BUTTONS } from "~/const";

const dt: DrawerDesignTokens = {
  content: {
    padding: "1.25rem .5rem 0",
  },
  header: {
    padding: "0",
  },
};

const visible = defineModel<boolean>("visible");

const { dotsMenuItems } = useDotsMenuItems();
</script>
