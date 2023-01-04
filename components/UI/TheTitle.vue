<template>
    <div>
      <h2 class="text-5xl lg:text-8xl font-semibold text-center">{{ text }}</h2>
    </div>
</template>

<script setup>
  defineProps(['text'])

</script>


<style scoped>
  h2{
    color: rgba(134,160,220,0.41);
  }


</style>
