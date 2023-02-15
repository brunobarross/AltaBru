<template>
    <h2 class="text-[2rem] md:text-[2.5rem] font-semibold" :class="{ inverse: inverse }">{{ text }}</h2>
</template>

<script setup>
const props = defineProps(['text', 'inverse'])

</script>


<style scoped>
h2 {
  color: rgba(134, 160, 220, 0.41);
  text-align: center;
}

h2.inverse{
  text-align: left !important;
}
</style>
