<template>
  <div class="flex justify-between">
    <div class="flex gap-2 items-center">
      <p class="hidden lg:block text-xl font-semibold">Комментарии</p>
      <UiCounter type="comments" :count="12" />
    </div>
    <div class="flex gap-4">
      <UiCounter type="favorites" :count="2" />
      <UiCounter type="likes" :count="39" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
