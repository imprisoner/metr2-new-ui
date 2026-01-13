import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  components: {
    dirs: [
      { path: "components", pathPrefix: false, prefix: "Ui" },
      { path: "icons" },
    ],
  },
  // vite: {
  //   plugins: [tailwindcss()],
  // },
  // css: ["~/assets/css/main.css"],
  // primevue: {
  //   components: {
  //     prefix: "P",
  //   },
  //   options: {
  //     theme: {
  //       options: {
  //         cssLayer: {
  //           name: "primevue",
  //           order: "theme, base, primevue",
  //         },
  //         darkModeSelector: ".p-dark",
  //       },
  //     },
  //   },
  // },
});

