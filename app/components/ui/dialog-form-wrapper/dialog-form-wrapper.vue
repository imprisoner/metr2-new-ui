<template>
  <PForm
    ref="form"
    v-slot="$form"
    class="flex flex-col gap-4 max-w-98 flex-1 h-full justify-center"
    @submit="$emit('submit', $event)"
    @reset="$emit('reset', $event)"
  >
    <slot v-bind="$form"/>
  </PForm>
</template>

<script setup lang="ts">
import type { FormProps, FormResetEvent, FormSubmitEvent } from "@primevue/forms";

defineEmits<{
  (e: 'submit', event: FormSubmitEvent): void;
  (e: 'reset', event: FormResetEvent): void;
}>()

defineProps<FormProps>();

const formRef = useTemplateRef('form');

defineExpose({formRef})
</script>
