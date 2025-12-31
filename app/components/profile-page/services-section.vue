<template>
  <UiSheet title="Услуги" :count="3" class="flex flex-col gap-6">
    <PAccordion :value="[services[0]!.id]" multiple :dt="dt">
      <!-- icon -->
      <template #expandicon>
        <ChevronUpIcon class="rotate-180 ml-2" />
      </template>
      <template #collapseicon>
        <ChevronUpIcon class="ml-2" />
      </template>
      <!--  -->
      <PAccordionPanel
        v-for="item in services"
        :key="item.id"
        :value="item.id"
        class="shadow-none border-b border-custom-divider"
      >
        <PAccordionHeader>
          <div class="flex flex-1 items-center justify-between">
            <h5 class="text-base font-bold">{{ item.name }}</h5>
            <p class="text-base font-normal text-custom-secondary">
              <template v-if="!!item.priceMin">от {{ item.priceMin }}</template>
              <template v-if="!!item.priceMax">до {{ item.priceMax }}</template>
              <template v-if="!(item.priceMin || item.priceMax)"
                >по договорённости</template
              >
            </p>
          </div>
        </PAccordionHeader>
        <PAccordionContent class="text-base">
          {{ item.description }}
        </PAccordionContent>
      </PAccordionPanel>
    </PAccordion>
    <!--  -->
    <div>
      <PButton outlined severity="secondary" label="Оставить отзыв" />
    </div>
  </UiSheet>
</template>

<script setup lang="ts">
import type { AccordionDesignTokens } from "@primeuix/themes/types/accordion";
import ChevronUpIcon from "~/components/icons/chevron-up.vue";

const dt: AccordionDesignTokens = {
  colorScheme: {
    light: {
      header: {
        activeColor: "{primary.500}",
        color: "#6B7280"
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
  },
};

interface IServiceItemProps {
  id: string;
  name: string;
  description?: string;
  priceMin: number;
  priceMax: number;
}

const services: IServiceItemProps[] = [
  {
    id: "1",
    name: "Строительство бань и саун",
    description: "Строим бани и сауны, недорого, качественно, в любых объёмах",
    priceMin: 500000,
    priceMax: 1000000,
  },
  {
    id: "2",
    name: "Демонтаж стен и перегородок",
    description:
      "Демонтируем стены и перегородки, недорого, качественно, в любых объёмах",
    priceMin: 500000,
    priceMax: 0,
  },
  {
    id: "3",
    name: "Строительство коттеджей",
    description:
      "Строим коттеджи, недорого, качественно, в любых объёмах. Строим коттеджи, недорого, качественно, в любых объёмах. Строим коттеджи, недорого, качественно, в любых объёмах. ",
    priceMin: 0,
    priceMax: 0,
  },
];
</script>

<style scoped></style>

