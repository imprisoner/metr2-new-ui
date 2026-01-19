import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  components: {
    dirs: [
      { path: "components", pathPrefix: false, prefix: "Ui" },
      { path: "icons" },
    ],
  },
});

