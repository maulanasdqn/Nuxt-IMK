<script setup lang="ts">
import { LOGIN, REGISTER, APP_TITLE } from "~/utilities/constant";
import { useScroll } from "~/composables/scroll";
const { scrollPosition } = useScroll();
</script>
<template>
  <nav
    class="sticky top-0 flex items-center w-auto h-auto px-16 justify-between py-3 transition-all duration-300"
  >
    <div class="flex w-full gap-x-4">
      <h1 class="font-bold font-bold font-sans text-1xl text-white">
        {{ APP_TITLE }}
      </h1>
    </div>
    <div class="flex w-full gap-x-4 gap-y-2 justify-end">
      <NuxtLink to="/login">
        <button
          :class="{
            'text-white bg-gray-700 border-gray-800': scrollPosition > 40,
            'text-gray-800 bg-white': scrollPosition == 0,
          }"
          class="font-medium font-sans text-md border-2 border-gray-800 rounded-lg w-auto h-auto p-2 hover:text-white hover:bg-blue-400 hover:border-blue-400"
        >
          {{ LOGIN }}
        </button>
      </NuxtLink>
      <NuxtLink to="/register">
        <button
          :class="{
            'text-gray-800 bg-white border-blue-400': scrollPosition > 40,
          }"
          class="font-medium font-sans text-md border-2 border-gray-800 bg-gray-700 text-white rounded-lg w-auto h-auto p-2 hover:text-white hover:bg-blue-400 hover:border-blue-400"
        >
          {{ REGISTER }}
        </button>
      </NuxtLink>
    </div>
  </nav>
</template>
