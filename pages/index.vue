<script setup lang="ts">
import { useScroll } from "~/composables/scroll";
import {
  BENEFIT,
  HOME_SCREEN_SUBTITLE,
  HOME_SCREEN_TITLE,
} from "~/utilities/constant";
import { useCard } from "~/composables/card";

const { cardData } = useCard();
const { scrollPosition } = useScroll();

definePageMeta({
  layout: "welcome",
});
</script>

<template>
  <section class="md:px-32 bg-gray-900 items-center flex w-full flex-col">
    <Navbar class="z-10 w-full" />
    <NuxtLayout>
      <div
        :class="{
          'transition-all duration-200 scroll-smooth': scrollPosition > 60,
        }"
        class="flex py-10 px-16 w-full justify-center items-start flex-col py-20 container h-full gap-y-4"
      >
        <h1
          class="text-white font-bold font-sans text-4xl sm:text-3xl md:text-5xl lg:text-6xl"
        >
          {{ HOME_SCREEN_TITLE }}
        </h1>
        <h1 class="text-sm md:text-2xl text-white">
          {{ HOME_SCREEN_SUBTITLE }}
        </h1>
      </div>
      <div
        :class="{
          'py-24 transition-all duration-200 scroll-smooth':
            scrollPosition > 60,
        }"
        class="flex py-10 px-4 w-full md:justify-between items-center flex-col py-20 container"
      >
        <img
          class="w-[400px] md:w-[500px] lg:w-[500px]"
          src="/logo/ads.svg"
          alt=""
        />
      </div>
    </NuxtLayout>
    <NuxtLayout>
      <div
        class="flex flex-col px-16 w-full justify-cenetr items-center py-20 h-screen bg-gray-900"
      >
        <h1
          class="text-white items-center font-semibold font-sans text-2xl sm:text-3xl md:text-3xl lg:text-6xl"
        >
          {{ BENEFIT }}
        </h1>
        <section class="overflow-hidden text-gray-700">
          <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
            <div
              class="p-3 grid lg:grid-cols-3 md:grid-cols-2 grid-row-3 gap-3"
            >
              <div
                v-for="(item, index) in cardData"
                :key="index"
                class="flex flex-wrap w-auto"
              >
                <div class="w-full p-1 md:p-2">
                  <div
                    class="block rounded-lg shadow-lg bg-gray-700 max-w-sm text-center"
                  >
                    <div class="p-6">
                      <h5 class="text-white text-xl font-medium mb-2">
                        {{ item.title }}
                      </h5>
                      <p class="text-white text-base mb-4">
                        {{ item.content }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </NuxtLayout>
    <NuxtLayout>
      <div
        class="flex flex-col px-16 w-full justify-cenetr items-center py-20 h-screen bg-gray-900"
      >
        <h1
          class="text-white items-center font-semibold font-sans text-2xl sm:text-3xl md:text-3xl lg:text-6xl"
        >
          Apa saja kelebihan BeastADS?
        </h1>
        <section class="overflow-hidden text-gray-700">
          <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
            <div
              class="p-3 grid lg:grid-cols-3 md:grid-cols-2 grid-row-3 gap-3"
            >
              <div
                v-for="(item, index) in cardData"
                :key="index"
                class="flex flex-wrap w-auto"
              >
                <div class="w-full p-1 md:p-2">
                  <div
                    class="block rounded-lg shadow-lg bg-gray-700 max-w-sm text-center"
                  >
                    <div class="p-6">
                      <h5 class="text-white text-xl font-medium mb-2">
                        {{ item.title }}
                      </h5>
                      <p class="text-white text-base mb-4">
                        {{ item.content }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </NuxtLayout>
  </section>
</template>
