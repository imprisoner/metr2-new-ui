<template>
  <PButton
    v-if="item.type === 'button'"
    :label="item.props.label"
    text
    class="justify-start w-full rounded-none"
    pt:label:class="font-normal"
    @click="item.handler"
  >
    <template #icon>
      <span class="h-5 w-5 me-2">
        <Component :is="item.props.icon" class="w-full h-full" />
      </span>
    </template>
  </PButton>
  <UiDivider
    v-else-if="item.type === 'divider'"
    v-bind="item.props"
    class="my-1"
  />
</template>

<script setup lang="ts">
import type { IUserMenuButton, IUserMenuDivider, IUserMenuItem } from "../../../types/ui.types";

defineProps<{ item: IUserMenuButton | IUserMenuDivider }>();
</script>

<style scoped></style>

