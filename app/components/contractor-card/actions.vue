<template>
  <div class="flex gap-1 h-fit">
    <PButton label="Написать" class="flex-1 lg:flex-none">
      <template #icon>
        <ArrowIcon class="w-3.5 h-3.5" />
      </template>
    </PButton>
    <PButton variant="outlined" severity="secondary">
      <template #icon>
        <FavoriteIcon class="w-3.5 h-3.5" />
      </template>
    </PButton>
    <PButton variant="text" class="absolute top-0 right-0 lg:static">
      <template #icon><DotsIcon class="w-4 h-4" /></template>
    </PButton>
  </div>
</template>

<script setup lang="ts"></script>

