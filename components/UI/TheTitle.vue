<template>
    <div>
      <h2 class="text-8xl font-semibold text-center">{{ text }}</h2>
    </div>
</template>

<script setup>
  defineProps(['text'])

</script>


<style scoped>
  h2{
    color: #222231;
  }


</style>
