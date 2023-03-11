<template>
  <div class="card-projeto overflow-hidden relative md:items-start h-[15.625rem] md:h-[18.75rem] rounded-md">
    <div class="img overflow-hidden rounded-md relative w-full h-full">
      <img
        :src="projeto.banner.url"
        class="md:bg-cover h-full w-full"
      />
    </div>
    <div
      class="detail py-6 px-4 absolute top-0 left-0 flex flex-col justify-center  w-full h-full transition-all"
    >

        <h3 class=" text-2xl mt-2 font-semibold text-center">{{ projeto.nome }}</h3>
      <div class="btn-container flex mt-4 justify-center">

        <nuxt-link :to="`projetos/${projeto.slug}`" class="btn primary sm">Ver detalhes</nuxt-link>
      </div>
    </div>
  </div>

</template>

<script setup>
const props = defineProps(['projeto'])
</script>

<style scoped>

  .card-projeto .detail {
    opacity: 0;
  }

  .card-projeto {
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
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
    background-color: #30373B;
    opacity: 0.9;


  }
  .card-projeto:hover .detail {
    opacity: 1;
  }



</style>
