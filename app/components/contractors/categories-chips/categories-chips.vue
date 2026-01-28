<template>
  <div class="flex flex-wrap gap-2">
    <NuxtLink v-for="{ id, label } in visibleItems">
      <Chip :label />
    </NuxtLink>
    <Chip>
      <PlusIcon />
      Показать ещё
    </Chip>
  </div>
</template>

<script setup lang="ts">
const { categories } = defineProps<{
  categories: { id: string; label: string }[];
}>();

const showAll = ref(false);

const visibleItems = computed(() =>
  showAll ? categories : categories.slice(0, 5),
);
</script>

