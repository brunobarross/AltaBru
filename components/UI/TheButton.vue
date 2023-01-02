<template>
  <button class="inline-flex justify-center items-center font-medium text-xs transition-all border px-4 py-2">{{ text }}</button>
</template>

<script setup>
  defineProps(['text'])

</script>

<style scoped>
  button{
    border-color: #647bff;
    color: #647bff;
  }
</style>
