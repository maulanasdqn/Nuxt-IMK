<template>
  <section class="h-screen bg-gray-800">
    <div class="px-6 h-full text-white">
      <div
        class="flex xl:justify-center md:justify-between justify-center items-center flex-wrap h-full g-6"
      >
        <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
          <div class="justify-center w-full">
            <h1 class="items-centers font-bold text-4xl w-full">
              Masuk ke Akun Kamu
            </h1>
          </div>
          <form>
            <div
              class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-298 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
            >
              <p class="text-center font-semibold mb-0">
                Hai, Selamat Datang kembali :)
              </p>
            </div>

            <!-- Email input -->
            <div class="mb-6">
              <input
                type="text"
                class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="maulana@psu.org"
              />
            </div>

            <!-- Password input -->
            <div class="mb-6">
              <input
                type="password"
                class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Masukkan password kamu"
              />
              <p class="text-sm font-semibold md:text-center my-4">
                Lupa kata sandi? Reset
                <NuxtLink
                  to="/forgot"
                  class="text-blue-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                  >Disini</NuxtLink
                >
              </p>
            </div>

            <div class="text-center md:text-left">
              <NuxtLink to="/dashboard">
                <button
                  type="button"
                  class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Masuk Sekarang
                </button>
              </NuxtLink>
              <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                Tidak punya akun? Mari
                <NuxtLink
                  to="/register"
                  class="text-blue-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                  >Daftar</NuxtLink
                >
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
