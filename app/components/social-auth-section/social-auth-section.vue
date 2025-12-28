<template>
  <UiTextWithLines>или продолжить с</UiTextWithLines>
  <div class="flex gap-2 justify-center">
    <PButton outlined rounded severity="secondary">
      <template #icon>
        <GoogleIcon />
      </template>
    </PButton>
    <PButton outlined rounded severity="secondary">
      <template #icon>
        <YandexIcon />
      </template>
    </PButton>
    <PButton outlined rounded severity="secondary">
      <template #icon>
        <VkIcon />
      </template>
    </PButton>
  </div>
</template>

<script setup lang="ts">
import GoogleIcon from "~/components/icons/google.vue";
import YandexIcon from "~/components/icons/yandex.vue";
import VkIcon from "~/components/icons/vkontakte.vue";
</script>
