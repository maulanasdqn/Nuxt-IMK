<script setup lang="ts">
import {
  HOME_SCREEN_TITLE,
  HOME_SCREEN_SUBTITLE,
  Benefit,
} from "~/utilities/constant";
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
      <div class="flex flex-col gap-y-4 w-full">
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
        class="w-[600px] md:w-[500px] lg:w-[500px]"
        src="/logo/ads.svg"
        alt=""
      />
    </div>
  </NuxtLayout>
  <NuxtLayout name="benefit" class="bg-gray-900">
    <div
      class="flex flex-col px-16 w-full justify-cenetr items-center py-20 h-screen"
    >
      <h1
        class="text-white items-center font-semibold font-sans text-2xl sm:text-3xl md:text-3xl lg:text-6xl"
      >
        {{ Benefit }}
      </h1>
      <section class="overflow-hidden text-gray-700">
        <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
          <div class="flex flex-wrap -m-1 md:-m-2">
            <div class="flex flex-wrap w-1/3">
              <div class="w-full p-1 md:p-2">
                <div
                  class="block rounded-lg shadow-lg bg-white max-w-sm text-center"
                >
                  <div class="py-3 px-6 border-b border-gray-300">Featured</div>
                  <div class="p-6">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">
                      Hemat Waktu
                    </h5>
                    <p class="text-gray-700 text-base mb-4">
                      Analisa 3 toko online di 3 Ad Account berbeda dalam 1
                      aplikasi tanpa perlu akses Business Manager.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap w-1/3">
              <div class="w-full p-1 md:p-2">
                <div
                  class="block rounded-lg shadow-lg bg-white max-w-sm text-center"
                >
                  <div class="py-3 px-6 border-b border-gray-300">Featured</div>
                  <div class="p-6">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">
                      Mudah dan Cepat
                    </h5>
                    <p class="text-gray-700 text-base mb-4">
                      Banyak Campaign dengan optimasi berbeda (IC, LEAD, API)?
                      Ctr.id bisa mengkompilasi 3 event tersebut menjadi 1 goal
                      agar mudah dibaca dan dianalisa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap w-1/3">
              <div class="w-full p-1 md:p-2">
                <div
                  class="block rounded-lg shadow-lg bg-white max-w-sm text-center"
                >
                  <div class="py-3 px-6 border-b border-gray-300">Featured</div>
                  <div class="p-6">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">
                      Lebih Nyaman Dan Tenang
                    </h5>
                    <p class="text-gray-700 text-base mb-4">
                      Pantau performa iklan tanpa perlu laptop. Anda bisa
                      analisa ratusan campaign melalui smartphone, kapan saja
                      dan di mana saja.
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
</template>
