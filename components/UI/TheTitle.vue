<template>
    <h2 class="text-[2rem] md:text-[2.5rem] font-semibold text-neutral-100" :class="{ inverse: inverse }" data-aos="fade-up" data-aos-delay="100">{{ text }}</h2>
</template>

<script setup>
const props = defineProps(['text', 'inverse'])

</script>


<style scoped>

h2{
  font-size: clamp(1.5rem,4vw,2rem);
}

h2::after{
  content: "";
  display: block;
  width: 64px;
  height: 5px;
  background-color:#0192E4;
  border-radius: 6px;
  margin-top: .25rem;
}
h2.inverse{
  text-align: center !important;
}
</style>
