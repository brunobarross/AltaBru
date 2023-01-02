<template>
  <div class="card-projeto relative grid lg:grid-cols-12 lg:items-center" :class="variation">
    <div class="img col-span-7 h-[350px]">
      <img src="../../assets/img/default.png" class="bg-cover h-full w-full" />
    </div>
    <div class="detail absolute right-0  max-w-[600px] ">
      <div class="title flex flex-col text-right">
        <span class="text-xs">Featured Project</span>
        <h3 class="text-2xl mt-2 font-semibold">Google Pesquisa</h3>
      </div>
      <div class="description bg-slate-400 text-right mt-4 p-4 rounded-md">
        <p class="text-base leading-[150%]">
          Having struggled with understanding how the Spotify OAuth flow works,
          I made the course I wish I could have had. Unlike tutorials that only
          cover a few concepts and leave you with half-baked GitHub.
        </p>
      </div>
      <ul class="tecnologies flex items-center justify-end mt-4">
        <li>Vue</li>
        <li>Tailwind</li>
      </ul>
      <div class="btn-container flex justify-end mt-4">
        <TheButton text="Ver mais"/>
      </div>
    </div>
  </div>
</template>


<script setup>
import TheButton from '../UI/TheButton.vue';

defineProps(['variation'])


</script>


<style scoped>

.card-projeto.impar  .img{
  order: 2;
  grid-column: -1;
}
.card-projeto.impar .title{
  text-align: left;
}

.card-projeto.impar .detail{
  right: initial;
  left: 0;
}
.card-projeto.impar .description{
  text-align: left;
}

.card-projeto.impar .tecnologies{
  justify-content: flex-start;
}

.card-projeto.impar .btn-container{
  justify-content: flex-start;
}




.title span{
  color: #647bff;
}
  .tecnologies li{
    font-size: .875rem;
  }

  .tecnologies li + li {
    margin-left: .5rem;
  }

  .description{
    background-color: #171b3c;
  }
</style>
