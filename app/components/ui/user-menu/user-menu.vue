<template>
  <PCard
    pt:content:class="flex flex-col gap-2"
    pt:root:class="p-5"
    pt:body:class="p-0"
  >
    <template #content>
      <div class="flex justify-between px-3">
        <div>
          <p class="text-xl font-semibold">{{ name }}</p>
          <p class="text-base text-custom-secondary">
            {{ subscribersCount }} подписчиков
          </p>
        </div>
        <UiUserAvatar size="large"/>
      </div>
      <div class="flex flex-col">
        <template v-for="(item, index) in USER_MENU_ITEMS" :key="index">
          <UiNavItem v-if="item.type === 'button'" v-bind="item.props" />
          <UiDivider v-else-if="item.type === 'divider'" v-bind="item.props" class="my-3"/>
        </template>
      </div>
    </template>
  </PCard>
</template>

<script setup lang="ts">
import { USER_MENU_ITEMS } from "~/const";

const name = "Алсу Новикова";
const subscribersCount = 728;
</script>

