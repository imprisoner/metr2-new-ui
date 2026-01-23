<template>
  <div class="flex justify-between">
    <div class="flex gap-3">
      <UiUserAvatar size="large" :image-url="avatar" />
      <div>
        <p class="font-semibold text-base">{{ username }}</p>

        <!-- flat section -->
        <div v-if="flatId" class="flex gap-1.5 font-semibold text-base">
          <p class="max-w-50 text-ellipsis overflow-hidden text-nowrap">
            {{ typeLabel }}
            <NuxtLink :to="`/flats/${flatId}`" class="text-custom-secondary">{{
              flatName
            }}</NuxtLink>
          </p>
          <span class="font-normal text-custom-secondary">{{
            publishTimeElapsed
          }}</span>
        </div>
        <!-- flat section end -->

        <span v-if="subscribersCount" class="text-base text-custom-secondary">
          {{ subscribersCount }} подписчиков
        </span>
      </div>
    </div>
    <ClientOnly>
      <PostCardActions :share-button-props="shareButtonProps" />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { getFormattedTimeElapsed } from "#imports";
import { POST_TYPES_MAP } from "~/const";
import type { IUserSectionProps } from "~/types/ui.types";

const { publishDate, type } = defineProps<IUserSectionProps>();

const publishTimeElapsed = publishDate
  ? getFormattedTimeElapsed(publishDate)
  : undefined;
const typeLabel = type ? POST_TYPES_MAP[type] : undefined;
</script>

