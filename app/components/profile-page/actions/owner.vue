<template>
  <PButton
    label="Редактировать"
    class="flex-1 lg:flex-auto"
    @click="onEditClick"
  >
    <template #icon><PencilIcon /></template>
  </PButton>
  <PButton
    label="Выйти"
    class="flex-1 lg:flex-auto"
    outlined
    severity="secondary"
    @click="logout"
  />
</template>

<script setup lang="ts">
const { openDialog } = useDialogStore();

const profileFormComponent = defineAsyncComponent(
  () => import("../forms/edit-profile.vue")
);

const onEditClick = () => {
  openDialog(profileFormComponent);
};

const store = useAuthStore()

const logout = () => {
  store.logout()
  navigateTo('/')
};
</script>
