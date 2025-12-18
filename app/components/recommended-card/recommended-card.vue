<template>
  <div class="flex flex-col gap-4 lg:flex-row bg-white">
    <div v-if="imageUrl" class="flex shrink-0 rounded-md w-60 h-42 lg:w-50 lg:h-35 overflow-hidden">
      <img :src="imageUrl" alt="" class="object-cover w-full h-full" />
    </div>
    <div class="flex flex-col lg:gap-2 gap-4">
      <div class="flex gap-2 lg:items-center text-base font-semibold flex-col lg:flex-row">
        <div class="flex gap-2 lg:items-center">
          <UiUserAvatar :image-url="user.avatarUrl"/>
          <div class="flex lg:gap-2 lg:items-center flex-col lg:flex-row">
            <p>{{ user.name }}</p>
            <div class="rounded-full bg-custom-secondary w-1 h-1 hidden lg:block" />
            <span>{{ type }}</span>
          </div>
        </div>
      </div>
      <p class="flex-1 text-xl font-semibold">{{ title }}</p>
      <div class="flex gap-4">
        <UiCounter type="comments" :count="12" />
        <UiCounter type="favorites" :count="2" />
        <UiCounter type="likes" :count="39" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  user: {
    avatarUrl?: string;
    name: string;
  };
  imageUrl?: string;
  type: string;
  title: string;
  commentsCount: number;
  favoritesCount: number;
  likesCount: number;
}>();
</script>

<style scoped></style>
