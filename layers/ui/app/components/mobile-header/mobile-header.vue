<template>
  <header>
    <div
      class="flex px-4 py-3 justify-between bg-orange-500 text-white items-center h-14"
    >
      <div class="flex gap-2">
        <UiMobileHeaderBurgerMenu
          v-model:visible="visible.burger"
          @update:visible="onUpdateVisibility($event, 'burger')"
        />
        <NuxtLink to="/" class="flex">
          <LogoIcon class="h-full w-11" />
        </NuxtLink>
      </div>
      <div class="flex gap-2">
        <UiMobileHeaderSearch
          v-model:visible="visible.search"
          @update:visible="onUpdateVisibility($event, 'search')"
        />
        <UiMobileHeaderPlusMenu
          v-model:visible="visible.plus"
          @update:visible="onUpdateVisibility($event, 'plus')"
        />

        <!-- if not authorized -->

        <!-- <PButton
          rounded
          variant="outlined"
          class="bg-white border-white w-8 h-8"
        >
          <template #icon>
            <IconsUser />
          </template>
        </PButton> -->

        <!--  -->
        <UiMobileUserMenu
          v-if="authorized"
          :visible="visible.user"
          @update:visible="onUpdateVisibility($event, 'user')"
        />
        <UiRoundWhiteButton
          v-else
          :icon="UserIcon"
          @click="showForm('login')"
        />
      </div>
    </div>
    <UiMobileNav />
  </header>
</template>

<script setup lang="ts">
import UserIcon from "#layers/ui/app/icons/user-icon.vue";
import UiMobileHeaderBurgerMenu from "./burger-menu.vue"
import UiMobileHeaderSearch from "./search.vue"
import UiMobileHeaderPlusMenu from "./plus-menu.vue"

type MenuKey = "burger" | "search" | "plus" | "user";
const visible = reactive<Record<MenuKey, boolean>>({
  burger: false,
  search: false,
  plus: false,
  user: false,
});

const onUpdateVisibility = (value: boolean, updatedKey: MenuKey) => {
  (Object.keys(visible) as MenuKey[]).forEach((key) => {
    visible[key] = false;
  });

  visible[updatedKey] = value;
};

const authorized = false;

const { showForm } = useLoginOrRegisterDialog();
</script>

