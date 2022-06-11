<script setup lang="ts">
import { HOME_SCREEN_TITLE, HOME_SCREEN_SUBTITLE } from "~/utilities/constant";
import { useScroll } from "~/composables/scroll";
const { scrollPosition } = useScroll();

definePageMeta({
  layout: "welcome",
});
</script>

<template>
  <Navbar />
  <NuxtLayout name="welcome" class="bg-gray-900">
    <div
      :class="{
        'transition-all duration-200 scroll-smooth': scrollPosition > 60,
      }"
      class="flex py-10 px-16 w-full justify-center items-start flex-col py-20 container h-full"
    >
      <h1
        class="text-white font-bold font-sans text-4xl sm:text-3xl md:text-5xl lg:text-6xl"
      >
        {{ HOME_SCREEN_TITLE }}
      </h1>
      <div class="flex w-full">
        <h1 class="text-sm md:text-2xl text-white">
          {{ HOME_SCREEN_SUBTITLE }}
        </h1>
      </div>
    </div>
    <div
      :class="{
        'py-24 transition-all duration-200 scroll-smooth': scrollPosition > 60,
      }"
      class="flex py-10 px-4 w-full justify-between flex-col py-20 container"
    >
      <img
        class="w-[600px] md:w-[500px] lg:w-[700px]"
        src="/logo/ads.svg"
        alt=""
      />
    </div>
  </NuxtLayout>
</template>
