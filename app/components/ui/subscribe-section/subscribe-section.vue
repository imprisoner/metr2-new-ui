<template>
  <div class="flex flex-col py-10 items-center justify-center gap-4">
    <div class="flex flex-col gap-2">
      <UiUserAvatar size="xlarge" :image-url="avatarUrl" />
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
const { avatarUrl } = defineProps<{
  avatarUrl?: string;
  name: string;
}>();

defineEmits<{
  (e: "subscribe"): void;
}>();
console.log(avatarUrl)
</script>

<style scoped></style>

