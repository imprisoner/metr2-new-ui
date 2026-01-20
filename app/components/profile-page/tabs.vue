<template>
  <nav>
    <PTabs
      v-model:value="visibleSection"
      pt:root:class="bg-white"
      :show-navigators="false"
    >
      <PTabList>
        <PTab v-for="tab in tabs" :key="tab.sectionKey" :value="tab.sectionKey">
          <div class="flex gap-1">
            <span>{{ tab.label }}</span>
            <span class="text-xs">{{tab.count}}</span>
          </div>
        </PTab>
      </PTabList>
    </PTabs>
  </nav>
</template>

<script setup lang="ts">
import { UsersProfileViewRoleOptions } from '~/types/pocketbase-types';
import type { IUiTabsItem } from '~/types/ui.types';

const { visibleSection, pageData } = storeToRefs(useUsersPageStore());

const contractorsTabs = computed<IUiTabsItem[]>(() => ([
    {
      label: "Услуги",
      sectionKey: "services",
      count: pageData.value?.serviceCount,
    },
    {
      label: "Портфолио",
      sectionKey: "portfolio",
      count: pageData.value?.portfolioCount,
    },
    {
      label: "Отзывы",
      sectionKey: "feedbacks",
      count: undefined /** TODO pageData.value?.feedbacksCount */,
    },
  ]));

  const commonTabs = computed<IUiTabsItem[]>(() => ([
    {
      label: "Квартиры/дома",
      sectionKey: "estate",
      count: pageData.value?.flatsCount,
    },
    {
      label: "Блог",
      sectionKey: "blog",
      count: pageData.value?.blogCount,
    },
  ]));

  const tabs = computed(() => {
    if (!pageData.value) {
      return [];
    }

    return pageData.value.role === UsersProfileViewRoleOptions.contractor
      ? contractorsTabs.value
      : commonTabs.value;
  });
</script>

