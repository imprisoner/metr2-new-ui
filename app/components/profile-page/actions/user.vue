<template>
  <PButton label="Подписаться" class="flex-1 min-w-fit" />
  <PButton
    outlined
    severity="secondary"
    label="Написать"
    pt:label:class="lg:hidden"
    class="flex-1 lg:flex-auto"
  >
    <template #icon>
      <ArrowIcon class="w-3.5 h-3.5" />
    </template>
    <!-- <span class="lg:hidden">
            Написать
          </span> -->
  </PButton>
  <!-- TODO profile more menu? -->
  <PButton text>
    <DotsIcon />
  </PButton>
</template>

<script setup lang="ts"></script>

<style scoped></style>
