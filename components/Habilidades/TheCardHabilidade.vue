<template>
  <div class="card-habilidade flex flex-col items-center justify-center transition-all lg:contrast-75 lg:hover:contrast-100 cursor-pointer ">
    <div class="img max-w-[56px] md:max-w-[64px]">
      <img
        :src="logo"
        alt="" class="transition-all w-16 h-16  object-contain"
      />
    </div>
    <div class="texto pt-4">
      <h3 class="text-sm md:text-lg tracking-tight text-center">{{ nome_tecnologia }}</h3>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps(["logo_tecnologia", "nome_tecnologia"]);



const logo = computed(() => {
  return require(`~/assets/img/logos/${props.logo_tecnologia}`)
})


</script>

<style scoped>

</style>
