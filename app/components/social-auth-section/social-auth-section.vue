<template>
  <UiTextWithLines severity="secondary">или продолжить с</UiTextWithLines>
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
        <VkontakteIcon />
      </template>
    </PButton>
  </div>
</template>

<script setup lang="ts">
</script>
