<template>
  <UiDialogFormWrapper>
    <p class="text-2xl font-semibold">Отправить сообщение {{ name }}</p>
    <PTextarea v-model="message" class="min-h-27" />
    <div class="flex flex-col gap-2">
      <PButton
        label="Отправить"
        type="submit"
        :disabled="message.length === 0"
      />
      <PButton outlined severity="secondary" label="Отмена" type="submit" />
    </div>
  </UiDialogFormWrapper>
</template>

<script setup lang="ts">
const { name = "John Doe" } = defineProps<{ name?: string }>();

const message = ref("");
</script>
