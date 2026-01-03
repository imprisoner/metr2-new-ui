<template>
  <PForm
    v-slot="$form"
    :resolver
    :initial-values
    class="flex flex-col gap-4 max-w-98 flex-1 h-full justify-center"
    @submit="onSubmit"
  >
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
  </PForm>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from "@primevue/forms";
import resolver, { type ComplaintSchema } from "~/schemas/complaint";

const { name = "John Doe" } = defineProps<{ name?: string }>();

const message = ref("");

const initialValues: ComplaintSchema = {}

const onSubmit = (e: FormSubmitEvent) => {
  const event = e as FormSubmitEvent<ComplaintSchema>;

  const { valid, values } = event;

  // TODO
};
</script>

