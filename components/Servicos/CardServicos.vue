<template>
  <div class="card-servico p-6 md:p-8 rounded-lg">
    <img :src="icone" alt="" class="max-w-[3.5rem] md:max-w-[5rem] ">
    <h2 class="text-neutral-100 text-base md:text-lg font-semibold mt-2">{{ servico.title }}</h2>
    <p class="text-sm md:text-base leading-[150%] mt-2">{{ servico.description }}</p>

  </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps(['servico', 'icone_servicos'])

console.log(props.icone_servicos)

const icone = computed(() => {
  return require(`~/assets/img/icons/${props.icone_servicos}`)
})
</script>

<style  scoped>

.card-servico{
  background-color:#2C3E50;
}
</style>
