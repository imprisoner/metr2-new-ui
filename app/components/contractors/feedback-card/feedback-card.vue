<template>
  <ContractorsFeedbackCardViewDesktop v-if="isDesktop" :author :services :rating :date>
    <ContractorsFeedbackCardBody />
  </ContractorsFeedbackCardViewDesktop>
  <ContractorsFeedbackCardViewMobile v-else :author :services :rating :date>
    <ContractorsFeedbackCardBody />
  </ContractorsFeedbackCardViewMobile>
</template>

<script setup lang="ts">
import type { IFeedbackEntity } from "~/types/ui.types";

defineProps<IFeedbackEntity>();

const { isDesktop } = useDevice();
</script>

