<template>
  <router-link
    :to="to"
    class="block mt-4 lg:inline-block lg:mt-0 text-indigo-100 hover:text-white mr-4"
  >
    {{ text }}
  </router-link>
</template>

<script setup>
const props = defineProps({
  text: { type: String, required: true },
  to: { type: String, require: true }
});
console.log(props);
</script>
