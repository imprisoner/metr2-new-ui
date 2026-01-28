<template>
  <div class="flex flex-wrap gap-2">
    <PChip label="Все" class="cursor-pointer"/>
    <NuxtLink v-for="{ id, name } in visibleItems" :key="id" :to="`specialties/${id}`">
      <PChip
        class="cursor-pointer"
        :label="name"
      />
    </NuxtLink>
    <PChip class="cursor-pointer" @click="toggle">
      <Component :is="actionButtonProps.icon" />
      {{ actionButtonProps.label }}
    </PChip>
  </div>
</template>

<script setup lang="ts">
import MinusIcon from "~~/layers/ui/app/icons/minus-icon.vue";
import PlusIcon from "~~/layers/ui/app/icons/plus-icon.vue";

const { items } = defineProps<{
  items: { id: string; name: string }[];
}>();

const showAll = ref(false);

const toggle = () => showAll.value = !showAll.value

const visibleItems = computed(() =>
  showAll.value ? items : items.slice(0, 4),
);

const actionButtonProps = computed(() =>
  showAll.value
    ? { icon: MinusIcon, label: "Показать меньше" }
    : { icon: PlusIcon, label: "Показать ещё" },
);
</script>

