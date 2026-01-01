<template>
  <nav>
    <PTabs
      v-model:value="tabValue"
      pt:root:class="bg-white"
      :show-navigators="false"
      @update:value="onTabValueUpdate"
    >
      <PTabList>
        <PTab v-for="tab in tabs" :key="tab.sectionKey" :value="tab.sectionKey">
          <div class="flex gap-2">
            <span>{{ tab.label }}</span>
          </div>
        </PTab>
      </PTabList>
    </PTabs>
  </nav>
</template>

<script setup lang="ts">
import type { IUiTabsItem } from '~/types/ui.types';

const emit = defineEmits<{(e: 'tab-click', v: string | number): void}>()

const onTabValueUpdate = (v: string | number) => {
  emit('tab-click', v)
}

const tabs: IUiTabsItem[] = [
  {
    label: "Услуги",
    sectionKey: 'services',
  },
  {
    label: "Портфолио",
    sectionKey: 'portfolio',
  },
  {
    label: "Отзывы",
    sectionKey: 'feedbacks',
  },
  {
    label: "Квартиры/дома",
    sectionKey: 'estate',
  },
  {
    label: "Блог",
    sectionKey: 'blog',
  },
] as const;

const tabValue = ref(tabs[0]!.sectionKey);
</script>

