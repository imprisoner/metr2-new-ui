<template>
  <div
    class="user-avatar border-2 border-white rounded-full w-31 h-31 overflow-hidden relative cursor-pointer"
  >
    <UiUserAvatar
      :image-url="avatarUrl"
      size="xlarge"
      class="w-full h-full object-cover"
    />
    <div
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
  isOwner?: boolean;
}>();

const { openDialog } = useDialogStore();

const uploadAvatarFormComponent = defineAsyncComponent(() => import("./forms/avatar-upload.vue"))

const showAvatarUploadDialog = () => {
  openDialog(uploadAvatarFormComponent)
};
</script>

<style scoped>
.user-avatar:hover > .overlay {
  display: flex;
}
</style>

