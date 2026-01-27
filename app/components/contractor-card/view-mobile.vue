<template>
  <div class="flex flex-col gap-6 relative">
    <div class="flex gap-4 items-center">
      <UiUserAvatar
        :image="undefined"
        shape="square"
        class="w-24 h-24 rounded-md mb-2 shadow-inner"
      />
      <div class="flex flex-col gap-2">
        <ContractorCardMainInfo :name :city :status />
        <ContractorCardCounters :feedbacks-count :rating />
      </div>
    </div>
    <ContractorCardActions />
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { IContractorCardTopProps } from "~/types/ui.types";

defineProps<IContractorCardTopProps>();
</script>

