<template>
  <div class="flex flex-col gap-4">
    <ContractorsTopSection>
      <ContractorsServiceFilters :services v-model="chosenServices"/>
    </ContractorsTopSection>
    <ContractorCard />
  </div>
</template>

<script setup lang="ts">
import { getServicesBySpecialty } from '~/api/contractors';

const route = useRoute("contractors-categories-specialties-id");
const id = route.params.id;
const services = await getServicesBySpecialty(id)

const chosenServices = ref([])
</script>

