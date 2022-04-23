<template>
  <div>
    <the-header />

    <div class="sm:flex container p-5 mx-auto content flex-col justify-between flex-wrap">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import TheHeader from './components/TheHeader/index.vue';
</script>
