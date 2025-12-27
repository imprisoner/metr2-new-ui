<template>
  <aside class="ps-7 flex flex-col gap-10 sticky top-24.75">
    <PMenu :model="MAIN_NAV_ITEMS">
      <template #itemicon="{ class: classNames, item }">
        <span class="h-5 w-5" :class="classNames">
          <Component :is="MAIN_NAV_ITEMS_ICONS_MAP[item.icon!]" class="w-full h-full"/>
        </span>
      </template>
    </PMenu>
    <SidebarFilters />
  </aside>
</template>

<script setup lang="ts">
import { MAIN_NAV_ITEMS, MAIN_NAV_ITEMS_ICONS_MAP } from "~/const";
</script>

