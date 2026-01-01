<script setup lang="ts"></script>

<template>
  <NuxtLayout :name="$device.isDesktop ? 'default' : 'mobile'">
    <NuxtPage />
  </NuxtLayout>
  <!-- <DialogLoginOrRegister /> -->
  <!-- <DialogSendMessage /> -->
   <!-- <DialogComplaint /> -->
</template>

