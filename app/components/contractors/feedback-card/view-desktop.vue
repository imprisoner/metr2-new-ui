<template>
  <div class="flex gap-4">
    <UiUserAvatar size="xlarge" :image-url="author.avatarUrl" />
    <div class="flex flex-col gap-2">
      <div class="flex gap-2">
        <span class="text-base font-semibold">{{ author.name }}</span>
        <span class="text-[12.3]px text-custom-secondary"></span>
      </div>
      <PRating readonly :default-value="rating" />
      <div v-if="services" class="flex gap-2">
        <span
          v-for="(service, index) in services"
          class="flex gap-2 text-[12.3]px text-custom-secondary"
        >
          {{ service }}
          <span v-if="index !== services.length - 1" class="w-0.5 h-0.5 rounded-full bg-custom-secondary"></span>
        </span>
      </div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IFeedbackCardTopProps } from "~/types/ui.types";

defineProps<IFeedbackCardTopProps>();
</script>

