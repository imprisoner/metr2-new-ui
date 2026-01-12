<template>
  <UiSmallModalLayout v-if="visible">
    <template v-for="(item, index) in dotsMenuItems" :key="index">
      <UiDesktopMenuButton :item="item" />
    </template>
    <UiAccordion
      :dt="{
        header: {
          padding: '10px 16px',
        },
      }"
    >
      <template #header>
        <div class="flex gap-2 items-center mr-auto">
          <ShareIcon class="w-3.5 h-3.5" />
          <span class="text-base font-normal">Поделиться</span>
        </div>
      </template>
      <div class="flex gap-2 p-2 flex-wrap">
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
    </UiAccordion>
  </UiSmallModalLayout>
</template>

<script setup lang="ts">
import ShareIcon from "~/components/icons/share.vue";
import { SHARE_BUTTONS } from "~/const";

const visible = defineModel<boolean>("visible");

const { dotsMenuItems } = useDotsMenuItems();
</script>

