<template>
  <div class="flex flex-col py-10 items-center justify-center gap-4">
    <div class="flex flex-col gap-2 items-center">
      <UiUserAvatar size="xlarge" :image-url="avatar" />
      <span class="text-xl font-semibold">{{ name }}</span>
    </div>

    <div>
      <p class="text-xl font-semibold text-center">
        Если нравится - подпишитесь
      </p>
      <p class="text-base text-custom-secondary text-center">
        Так вы не пропустите новые публикации автора
      </p>
    </div>

    <PButton label="Подписаться" @click="$emit('subscribe')" />
  </div>
</template>

<script setup lang="ts">
import type { IUserSectionProps } from '~/types/ui.types';

const { avatar } = defineProps<IUserSectionProps>();

defineEmits<{
  (e: "subscribe"): void;
}>();
</script>
