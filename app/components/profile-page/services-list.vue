<template>
  <PAccordion :value="[items[0]?.id!]" multiple :dt="dt">
    <!-- icon -->
    <template #expandicon>
      <ChevronUpAltIcon class="rotate-180 translate-y-0.5" />
    </template>
    <template #collapseicon>
      <ChevronUpAltIcon class="translate-y-0.5"/>
    </template>
    <!--  -->
    <PAccordionPanel
      v-for="(item, index) in items"
      :key="item.id + item.name"
      :value="item.id"
      class="shadow-none border-b border-custom-divider my-0"
      :class="{
        'border-none': index === items.length - 1,
      }"
    >
    <!-- <PAccordionHeader>{{ item.name }}</PAccordionHeader> -->
      <PAccordionHeader class="items-baseline gap-2">
        <div class="flex w-full justify-between">
          <div
            class="flex flex-col lg:flex-row flex-1 lg:items-center justify-between"
          >
            <h5 class="text-base font-bold">{{ item.name }}</h5>
            <p class="text-base font-normal text-custom-secondary">
              <template v-if="!!item.priceMin">от {{ item.priceMin }}</template>
              <template v-if="!!item.priceMax">до {{ item.priceMax }}</template>
              <template v-if="!(item.priceMin || item.priceMax)">
                по договорённости
              </template>
            </p>
          </div>
          <UiButtonEdit class="p-1 w-5.5 h-5.5 ms-2" />
        </div>
      </PAccordionHeader>
      <PAccordionContent class="text-base">
        {{ item.description }}
      </PAccordionContent>
    </PAccordionPanel>
  </PAccordion>
</template>

<script setup lang="ts">
import type { AccordionDesignTokens } from "@primeuix/themes/types/accordion";
import ChevronUpAltIcon from "~/components/icons/chevron-up-alt.vue";
import type { IServiceItemProps } from "~/types/ui.types";

defineProps<{ items: IServiceItemProps[] }>();

const dt: AccordionDesignTokens = {
  colorScheme: {
    light: {
      header: {
        activeColor: "{primary.500}",
        color: "#6B7280",
        padding: ".75rem 0",
      },
      panel: {
        borderColor: "transparent",
        borderWidth: "0",
      },
      content: {
        color: "#4B5563",
        padding: "0 0 1rem 0",
        borderWidth: "0",
        borderColor: "transparent",
      },
    },
  },
  header: {
    hoverBackground: "#FFFFFF",
    padding: ".75rem 0",
    borderWidth: "0",
    activeColor: "#374151",
    color: "#6B7280",
  },
};
</script>

