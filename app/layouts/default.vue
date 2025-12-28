<template>
  <div>
    <UiHeader />
    <div class="layout-grid pt-10 max-w-360 mx-auto">
      <UiSidebar />
      <main>
        <slot />
      </main>
      <aside class="pe-7 sticky top-24.75">
        <UiSheet>
          <LoginForm />
          <!-- <UiUserMenu /> -->
        </UiSheet>
      </aside>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.layout-grid {
  display: grid;
  grid-template-columns: 339px 2fr 339px;
  gap: 24px;
}

.layout-grid aside {
  height: fit-content;
}
</style>
