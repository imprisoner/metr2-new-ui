<template>
  <div>
    <PButton text @click="toggle">
      <template #icon>
        <DotsIcon />
      </template>
    </PButton>
    <ClientOnly>
      <CommentItemActionsMenuDesktop v-model:visible="visible" />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import DotsIcon from "~/components/icons/dots.vue";

const visible = ref(false);

watch(() => visible.value, (v) => {
  emit('toggle', v)
})

const emit = defineEmits<{
  (e: 'toggle', value: boolean): void
}>()

const toggle = () => {
  visible.value = !visible.value;
};
</script>

<style scoped>

</style>
