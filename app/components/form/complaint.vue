<template>
  <UiDialogFormWrapper>
    <p class="text-2xl font-semibold">Пожаловаться на контент</p>
    <div class="flex flex-col gap-4">
      <label
        v-for="item in COMPLAINT_REASONS"
        :key="item.value"
        class="flex items-center gap-2"
      >
        <PRadioButton
          v-model="reasonValues"
          :name="item.label"
          :value="item.value"
          size="large"
        />
        <span class="text-base">{{ item.label }}</span>
      </label>
    </div>
    <PTextarea v-model="message" class="min-h-27" />
    <div class="flex flex-col gap-2">
      <PButton
        label="Отправить"
        type="submit"
        :disabled="reasonValues.length === 0"
      />
      <PButton outlined severity="secondary" label="Отмена" type="submit" />
    </div>
  </UiDialogFormWrapper>
</template>

<script setup lang="ts">
const message = ref("");

const COMPLAINT_REASONS = [
  {
    value: 1,
    label: "Некорректная реклама",
  },
  {
    value: 2,
    label: "Призывы и одобрение насилия",
  },
  {
    value: 3,
    label: "Запрещённый к публикации контент",
  },
  {
    value: 4,
    label: "Преследование и травля",
  },
  {
    value: 5,
    label: "Спам",
  },
  {
    value: 6,
    label: "Другое",
  },
] as const;

const reasonValues = ref([]);
</script>
