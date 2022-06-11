import { defineNuxtConfig } from "nuxt";
import { presetAttributify, presetUno } from "unocss";

export default defineNuxtConfig({
  modules: ["@unocss/nuxt"],
  unocss: {
    uno: true,
    icons: true,
    attributify: true,
    shortcuts: [],
    rules: [],
    presets: [presetAttributify({}), presetUno()],
    preflight: true,
  },
});
