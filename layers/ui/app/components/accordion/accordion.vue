<template>
  <PAccordion :value="`${value}`" :unstyled="true" class="w-full" :dt="dt">
    <template #expandicon>
      <ChevronUpIcon class="rotate-180" />
    </template>
    <template #collapseicon>
      <ChevronUpIcon />
    </template>
    <PAccordionPanel value="0" class="shadow-none">
      <PAccordionHeader :class="headerClass">
        <slot name="header" />
      </PAccordionHeader>
      <PAccordionContent>
        <slot />
      </PAccordionContent>
    </PAccordionPanel>
  </PAccordion>
</template>

<script setup lang="ts">
import type { AccordionDesignTokens } from "@primeuix/themes/types/accordion";

const props = defineProps<{
  dt?: AccordionDesignTokens;
  value?: number;
  headerClass?: string
}>();

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
  ...props.dt,
};
</script>

