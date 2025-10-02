import { createResolver } from "@nuxt/kit";
import tailwindcss from "@tailwindcss/vite";

const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: { "@shared": resolve("./app") },

  modules: ["@nuxt/ui", "@pinia/nuxt"],
  vite: {
    plugins: [tailwindcss()],
  },

  components: [{ prefix: "Shared", path: resolve("./app/components") }],

  css: ["@/assets/css/global.css"],

  imports: {
    dirs: ["app/store/**"],
  },

  pinia: {
    storesDirs: ["app/store/**"],
  },
});
