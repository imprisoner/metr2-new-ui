export const useAuthStore = defineStore('auth', () => {
  const isOwner = ref(true)

  return {
    isOwner
  }
})