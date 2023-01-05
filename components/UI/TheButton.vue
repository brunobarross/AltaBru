<template>
  <button class="inline-flex justify-center items-center font-medium text-xs border-2 px-4 py-2 transition-all rounded">{{ text }}</button>
</template>

<script setup>
  defineProps(['text'])

</script>

<style scoped>
  button{
    border-color: #fff;
    color: #fff;

  }

  button:hover{
      transform: translateY(-3px);
  }
</style>
