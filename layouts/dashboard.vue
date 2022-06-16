<template>
  <div class="flex flex-col w-full bg-gray-900 h-screen">
    <div class="flex w-full">
      <Sidebar />
      <div class="flex flex-col h-full w-full">
        <NavbarDashboard class="w-full h-[60px]" />
        <slot> </slot>
      </div>
    </div>
  </div>
</template>
