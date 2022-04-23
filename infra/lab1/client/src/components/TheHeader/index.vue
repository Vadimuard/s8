<template>
  <nav class="flex items-center justify-between flex-wrap bg-indigo-500 p-4">
    <div class="flex items-center flex-shrink-0 text-white mr-12">
      <router-link to="/" class="font-semibold text-2xl tracking-tight">
        Auto Dealer
      </router-link>
    </div>
    <div class="block lg:hidden"></div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-md lg:flex-grow">
        <header-link to="/" text="Home" />
        <header-link to="/advertisements" text="Advertisements" />
        <header-link to="/about" text="About" />
      </div>
      <div>
        <router-link
          to="/login"
          class="inline-block text-sm px-4 py-2 leading-none border rounded bg-white text-indigo-800 border-white hover:border-white hover:text-white hover:bg-indigo-500 mt-4 lg:mt-0"
          >Login</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script setup>
import HeaderLink from './Link.vue';
</script>
