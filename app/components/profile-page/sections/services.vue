<template>
  <ProfilePageSectionWrapper
    title="Услуги"
    :count="services.length"
    class="flex flex-col gap-4 lg:gap-6"
  >
    <ProfilePageServicesList v-if="services.length" :items="services" />
    <!--  -->
    <PButton
      v-if="!isOwner"
      outlined
      severity="secondary"
      label="Оставить отзыв"
      class="w-fit"
    />
  </ProfilePageSectionWrapper>
</template>

<script setup lang="ts">
import { getFullContractorsServicesListByUserId } from "~/api/contractors";
import type { ContractorServicesDto } from "~/dto/contractors.dto";

const { isOwner } = storeToRefs(useAuthStore());

const { pageData } = storeToRefs(useUsersPageStore());
const items = ref<ContractorServicesDto[]>();

items.value = await getFullContractorsServicesListByUserId(pageData.value?.userId);

const services = computed(() => {
  if (!items.value?.length) {
    return [];
  }

  return items.value;
});
</script>

