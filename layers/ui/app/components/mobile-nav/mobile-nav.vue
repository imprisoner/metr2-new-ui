<template>
  <nav>
    <PTabs :value="MAIN_NAV_ITEMS[0]!.route" pt:root:class="bg-white" :show-navigators="false">
      <PTabList>
        <PTab v-for="tab in MAIN_NAV_ITEMS" :key="tab.route" :value="tab.route">
          <NuxtLink :to="tab.route" class="absolute inset-0">
          </NuxtLink>
          <div  class="flex gap-2">
            <Component :is="MAIN_NAV_ITEMS_ICONS_MAP[tab.icon]" />
            <span>{{ tab.label }}</span>
          </div>
        </PTab>
      </PTabList>
    </PTabs>
  </nav>
</template>

<script setup lang="ts">
import { MAIN_NAV_ITEMS, MAIN_NAV_ITEMS_ICONS_MAP } from "~/const";
</script>

<style scoped>
</style>
