<template>
  <div class="bg-[#FAFAFA] rounded-sm py-4 px-5 flex flex-col w-70 lg:w-100 gap-4 h-54">
    <div class="flex items-center gap-2">
      <UiUserAvatar size="normal" :image-url="user.avatarUrl" />
      <div class="flex flex-col gap-1 flex-1">
        <span class="font-semibold text-base leading-4">{{ user.name }}</span>
        <span class="text-custom-secondary text-[12.3px] leading-[12.3px]">{{
          date
        }}</span>
      </div>
      <div class="flex items-center gap-2 text-base">
        <StarIcon class="w-3.5 h-3.5" />
        <span class="font-semibold">{{ rating }}</span>
      </div>
    </div>
    <p class="text-base">
      {{ text }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { IFeedbackPreview } from "~/types/ui.types";

defineProps<IFeedbackPreview>();
</script>

