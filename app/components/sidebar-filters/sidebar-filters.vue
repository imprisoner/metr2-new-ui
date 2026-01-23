<template>
  <UiSheet class="flex flex-col gap-4 p-5!">
    <div v-if="isDesktop" class="flex flex-col gap-4">
      <SidebarFiltersTop />
      <SidebarFiltersBody />
    </div>
    <!-- mobile -->
    <UiAccordion
      v-else
      header-class="pb-0 cursor-default"
      panel-class="flex flex-col gap-4"
    >
      <template v-if="!isMobile" #expandicon>
        <ChevronDownIcon class="self-start w-6 h-6" />
      </template>
      <template #collapseicon>
        <ChevronUpIcon class="self-start w-6 h-6" />
      </template>

      <template #header>
        <SidebarFiltersTop />
      </template>
      <SidebarFiltersBody />
    </UiAccordion>
  </UiSheet>
</template>

<script setup lang="ts">
const { isDesktop } = useDevice();
</script>

