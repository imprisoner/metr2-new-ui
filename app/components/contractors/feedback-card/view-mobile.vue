<template>
  <div class="flex flex-col gap-1">
    <div class="flex flex-col gap-2">
      <div class="flex gap-2">
        <UiUserAvatar size="xlarge" :image-url="user.avatarUrl" />
        <div class="flex flex-col gap-1">
          <div class="flex gap-2">
            <span class="text-base font-semibold">{{ user.name }}</span>
            <span class="text-[12.3]px text-custom-secondary">{{ date }}</span>
          </div>
          <PRating readonly :default-value="rating" />
        </div>
      </div>

      <div v-if="services" class="flex flex-wrap gap-2 py-2">
        <span
          v-for="(service, index) in services"
          class="flex gap-2 text-[12.3]px text-custom-secondary"
        >
          {{ service }}
          <span
            v-if="index !== services.length - 1"
            class="w-0.5 h-0.5 rounded-full bg-custom-secondary"
          ></span>
        </span>
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { IFeedbackCardTopProps } from '~/types/ui.types';

defineProps<IFeedbackCardTopProps>();
</script>

