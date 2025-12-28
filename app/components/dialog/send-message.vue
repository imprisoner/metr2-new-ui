<template>
  <UiDialog v-model:visible="visible">
    <form class="flex flex-col gap-4 max-w-98 flex-1">
      <p class="text-2xl font-semibold">Отправить сообщение {{ name }}</p>
      <PTextarea v-model="message" class="min-h-27"/>
      <div class="flex flex-col gap-2">
        <PButton label="Отправить" type="submit" :disabled="message.length === 0"/>
        <PButton outlined severity="secondary" label="Отмена" type="submit"/>
      </div>
    </form>
  </UiDialog>
</template>

<script setup lang="ts">
const { name = "John Doe" } = defineProps<{ name?: string }>();

const message = ref("")

const visible = ref(true)
</script>
