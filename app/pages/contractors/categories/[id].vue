<template>
  <div class="flex flex-col gap-4">
    <ContractorsTopSection>
      <ContractorsSpecialtiesChips v-if="!isTurnkeyCategory" :items="specialties" />
    </ContractorsTopSection>
    <ContractorCard />
  </div>
</template>

<script setup lang="ts">
import { getSpecialtiesByCategory } from '~/api/contractors';
import { TURNKEY_CATEGORY_MENU_ITEM_ID } from '~/const';

const route = useRoute("contractors-categories-id");

const isTurnkeyCategory = computed(() => route.params.id === TURNKEY_CATEGORY_MENU_ITEM_ID)
const specialties = ref(isTurnkeyCategory.value ?  [] : await getSpecialtiesByCategory(route.params.id))
</script>
