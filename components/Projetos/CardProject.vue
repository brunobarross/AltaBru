<template>
  <div class="card-projeto overflow-hidden relative md:items-start h-[250px] md:h-[350px] border-2 rounded-md border-neutral-600 p-2">
    <div class="img overflow-hidden rounded-md relative w-full h-full">
      <img
        :src="projeto.banner.url"
        class="md:bg-cover h-full w-full"
      />
    </div>
    <div
      class="detail py-6 px-4 absolute top-0 left-0 flex flex-col justify-center  w-full h-full transition-all"
    >
      <div class="title flex flex-col text-center">
        <h3 class=" text-2xl mt-2 font-semibold">{{ projeto.nome }}</h3>

      </div>

      <div class="btn-container flex mt-6 justify-center">
        <nuxt-link :to="`projetos/${projeto.slug}`"><TheButton text="Ver mais" /></nuxt-link>

      </div>

    </div>
  </div>

</template>

<script setup>
import {defineProps} from 'vue'
import TheButton from "../ui/TheButton.vue";


const props = defineProps(['projeto'])


</script>

<style scoped>

  .card-projeto .detail {
    opacity: 0;
  }



  .card-projeto .img::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: 0.3s ease;

  }

  .card-projeto:hover .img::after {
    background:  #0192E4;
    opacity: 0.7;


  }
  .card-projeto:hover .detail {
    opacity: 1;
  }



</style>
