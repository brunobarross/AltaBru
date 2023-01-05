<template>
  <div class="card-projeto overflow-hidden relative md:items-start h-[250px] md:h-[300px] border-2 rounded-md">
    <div class="img overflow-hidden rounded-md relative w-full h-full">
      <img
        src="../../assets/img/games4free.png"
        class="md:bg-cover h-full w-full"
      />
    </div>
    <div
      class="detail py-6 px-4 absolute top-0 left-0 flex flex-col justify-center  w-full h-full transition-all"
    >
      <div class="title flex flex-col text-center">
        <h3 class=" text-2xl mt-2 font-semibold">Google Pesquisa</h3>

      </div>

      <div class="btn-container flex mt-6 justify-center">
        <TheButton text="Ver mais" />
      </div>
    </div>
  </div>
</template>

<script setup>
import TheButton from "../UI/TheButton.vue";
</script>

<style scoped>

  .card-projeto .detail {
    opacity: 0;
  }

  .card-projeto{
    border-color:  rgba(134,160,220,0.41);
    padding: 1rem;
  }

  .card-projeto .img::after {
    content: "";
    background: rgb(27,56,116, 0.2);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: 0.3s ease;
  }

  .card-projeto:hover .img::after {
    background: rgb(27,56,116, 0.9);
  }
  .card-projeto:hover .detail {
    opacity: 1;
  }



</style>
