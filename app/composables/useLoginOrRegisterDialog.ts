export const useLoginOrRegisterDialog = () => {
  const formComponent = {
    login: defineAsyncComponent(
      () => import("~/components/form/login.vue")
    ),
    register: defineAsyncComponent(
      () => import("~/components/form/register.vue")
    ),
  };

  const dialogStore = useDialogStore();

  const showForm = (key: "login" | "register") => {
    dialogStore.openDialog(formComponent[key]);
  };

  return {
    showForm
  };
};

