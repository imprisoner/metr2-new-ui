<template>
  <p v-if="cities.length" class="text-xl font-semibold">
    <span
      v-for="(city, index) in cities"
      :class="{
        'text-custom-secondary': !city.isCapital,
      }"
      >{{ city.name }}{{ index < cities.length - 1 ? ", " : "" }}
    </span>
  </p>
</template>

<script setup lang="ts">
import { UsersProfileViewRoleOptions } from "~/types/pocketbase-types";

const { pageData } = storeToRefs(useUsersPageStore());

const cities = computed(() => {
  if (!pageData.value) return [];

  if (pageData.value.role === UsersProfileViewRoleOptions.owner) {
    return pageData.value.location ? [pageData.value.location] : [];
  }

  return pageData.value.contractorCitiesList ? pageData.value.contractorCitiesList : [];
});
</script>
