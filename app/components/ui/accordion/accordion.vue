<template>
  <PAccordion value="0" :unstyled="true" class="w-full" :dt="dt">
    <template #expandicon>
      <ChevronUpIcon class="rotate-180" />
    </template>
    <template #collapseicon>
      <ChevronUpIcon />
    </template>
    <PAccordionPanel value="0" class="shadow-none">
      <PAccordionHeader class="justify-start gap-4">
        <slot name="header" />
      </PAccordionHeader>
      <PAccordionContent>
        <div class="flex flex-col gap-4">
          <slot />
        </div>
      </PAccordionContent>
    </PAccordionPanel>
  </PAccordion>
</template>

<script setup lang="ts">
import type { AccordionDesignTokens } from "@primeuix/themes/types/accordion";
import ChevronUpIcon from "~/components/icons/chevron-up.vue";

const dt: AccordionDesignTokens = {
  colorScheme: {
    light: {
      panel: {
        borderColor: "transparent",
      },
      content: {
        padding: "0",
        borderWidth: "0",
        borderColor: "#FFFFFF",
      },
    },
  },
  header: {
    hoverBackground: "#FFFFFF",
    padding: "0 0 16px 0",
    borderWidth: "0",
  },
};
</script>

