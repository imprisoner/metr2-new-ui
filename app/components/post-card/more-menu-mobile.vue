<template>
  <PDrawer
    v-model:visible="visible"
    position="bottom"
    style="height: auto"
    :show-close-icon="false"
    block-scroll
    :dt="dt"
    :pt="{
      root: {
        class: 'rounded-t-xl',
      },
    }"
  >
    <template v-for="(item, index) in POST_CARD_MORE_MENU_ITEMS" :key="index">
      <UiMobileMenuButton v-if="item.type === 'button'" v-bind="item.props" />
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
          v-for="item in shareButtons"
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
  </PDrawer>
</template>

<script setup lang="ts">
import type { DrawerDesignTokens } from "@primeuix/themes/types/drawer";
import { POST_CARD_MORE_MENU_ITEMS } from "~/const";
import ChainsIcon from "../icons/share/chains.vue";
import MaxIcon from "../icons/share/max.vue";
import PinterestIcon from "../icons/share/pinterest.vue";
import TelegramIcon from "../icons/share/telegram.vue";
import VkIcon from "../icons/share/vk.vue";
import WhatsappIcon from "../icons/share/whatsapp.vue";

const dt: DrawerDesignTokens = {
  content: {
    padding: "1.25rem .5rem 0",
  },
  header: {
    padding: "0",
  },
};

const visible = defineModel<boolean>("visible");

const shareButtons = [
  { provider: "copy", icon: ChainsIcon, handler: () => {} },
  { provider: "telegram", icon: TelegramIcon, handler: () => {} },
  { provider: "vkontakte", icon: VkIcon, handler: () => {} },
  { provider: "pinterest", icon: PinterestIcon, handler: () => {} },
  { provider: "max", icon: MaxIcon, handler: () => {} },
  { provider: "whatsapp", icon: WhatsappIcon, handler: () => {} },
] as const;
</script>
