<template>
  <ContractorCardSectionsAbout />
  <ContractorCardSectionsGallery />
  <ContractorCardSectionsFeedbacks :feedbacks :total="feedbacksCount" />
  <ContractorCardSectionsServices :services />
</template>

<script setup lang="ts">
import type { IFeedbackPreview, IServiceItemProps } from "~/types/ui.types";

defineProps<{
  feedbacks: IFeedbackPreview[];
  feedbacksCount: number;
  services: IServiceItemProps[];
}>();
</script>

<style scoped></style>

