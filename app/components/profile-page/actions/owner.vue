<template>
    <PButton label="Редактировать" class="flex-1 lg:flex-auto" @click="onEditClick" />
    <PButton label="Выйти" class="flex-1 lg:flex-auto" outlined severity="secondary" @click="logout" />
</template>

<script setup lang="ts">
import ProfilePageFormsEditProfile from "~/components/profile-page/forms/edit-profile.vue"
const { openDialog } = useDialogStore();

const onEditClick = () => {
  openDialog(ProfilePageFormsEditProfile)
}

const logout = () => {
  // TODO handler
}
</script>

<style scoped></style>

