<template>
  <div class="flex gap-6">
    <div class="flex flex-col items-center shrink-0">
      <UiUserAvatar
        :image="undefined"
        shape="square"
        class="w-34 h-34 rounded-md mb-2 shadow-inner"
      />
      <ContractorCardCounters :feedbacks-count :rating />
    </div>

    <div class="flex-1 flex flex-col gap-6 min-w-0">
      <div class="flex justify-between gap-6">
        <ContractorCardMainInfo :name :city :status />
        <ContractorCardActions />
      </div>

      <!-- Body -->
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IContractorCardTopProps } from "~/types/ui.types";

defineProps<IContractorCardTopProps>();
</script>

