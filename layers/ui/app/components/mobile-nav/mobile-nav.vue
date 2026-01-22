<template>
  <nav>
    <PTabs :value="MAIN_NAV_ITEMS[0]!.route" pt:root:class="bg-white" :show-navigators="false">
      <PTabList>
        <PTab v-for="tab in MAIN_NAV_ITEMS" :key="tab.route" :value="tab.route">
          <NuxtLink :to="tab.route" class="absolute inset-0">
          </NuxtLink>
          <div  class="flex gap-2">
            <Component :is="tab.iconComponent" class="w-5 h-5" />
            <span>{{ tab.label }}</span>
          </div>
        </PTab>
      </PTabList>
    </PTabs>
  </nav>
</template>

<script setup lang="ts">
import { MAIN_NAV_ITEMS } from "~/const";
</script>
