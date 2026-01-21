<template>
  <div
    class="user-avatar border-2 border-white rounded-full w-31 h-31 overflow-hidden relative bg-white"
    :class="{ 'cursor-pointer': isOwner }"
  >
    <UiUserAvatar
      :image-url="avatarUrl"
      size="xlarge"
      class="w-full h-full object-cover"
    />
    <div
      v-if="isOwner"
      class="overlay bg-[#00000080] absolute top-0 bottom-0 left-0 right-0 items-center justify-center hidden"
      @click="showAvatarUploadDialog"
    >
      <PhotoDeviceIcon class="text-white w-6 h-6" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  avatarUrl?: string;
}>();

const { openDialog } = useDialogStore();

const uploadAvatarFormComponent = defineAsyncComponent(
  () => import("./forms/avatar-upload.vue"),
);

const showAvatarUploadDialog = () => {
  openDialog(uploadAvatarFormComponent);
};

const { isOwner } = storeToRefs(useUsersPageStore());
</script>

<style scoped>
.user-avatar:hover > .overlay {
  display: flex;
}
</style>
