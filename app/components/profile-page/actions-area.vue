<template>
  <div class="flex gap-2 w-full lg:w-auto">
    <ProfilePageActionsOwner v-if="isOwner" />
    <ProfilePageActionsUser v-else />
  </div>
</template>

<script setup lang="ts">
const isOwner = true;
</script>
