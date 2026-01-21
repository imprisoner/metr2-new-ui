<template>
  <UiSheet class="lg:px-2 lg:py-5 flex flex-col gap-4">
    <div class="flex justify-between items-center px-3">
      <div>
        <p class="text-xl font-semibold">{{ userInfo.name }}</p>
        <p class="text-base text-custom-secondary">
          {{ subscribersCount }} подписчиков
        </p>
      </div>
      <UiUserAvatar size="xlarge" :image-url="avatarUrl" />
    </div>
    <PSplitButton
      class="mx-3 font-bold"
      fluid
      label="Написать"
      :model="splitButtonItems"
    >
      <div class="flex items-center me-auto gap-2 flex-1">
        <PlusIcon class="w-3.5 h-3.5" />
        Новая запись
      </div>

      <template #item="{ item }">
        <NuxtLink :to="item.props.to">
          <div
            class="flex items-center gap-2 px-[17.5px] py-3.5 cursor-pointer text-base"
          >
            <Component :is="item.props.icon" class="w-3.5 h-3.5" />
            {{ item.props.label }}
          </div>
        </NuxtLink>
      </template>
    </PSplitButton>
    <div class="flex flex-col">
      <template v-for="(item, index) in items" :key="index">
        <UiNavItem v-if="item.type === 'button'" v-bind="item.props" />
        <UiDivider
          v-else-if="item.type === 'divider'"
          v-bind="item.props"
          class="my-3"
        />
      </template>
    </div>
  </UiSheet>
</template>

<script setup lang="ts">
const subscribersCount = 728;

const { userInfo } = storeToRefs(useAuthStore());

const avatarUrl = computed(() => {
  if (userInfo.value.avatar) {
    return getPocketbaseFilePath(userInfo.value, userInfo.value.avatar);
  }

  return undefined;
});

const { items } = useUserMenu()

const splitButtonItems = items.value.filter(
  (item) => item.type === "button" && Boolean(item.props.quickAccess),
);
</script>

