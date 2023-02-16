<template>
  <header class="py-6 lg:h-16 h-max fixed top-0 w-full flex items-center z-10">
    <div class="container-personalizado">
      <div class="flex lg:flex-row flex-col items-center lg:justify-between">
        <div class="logo">
          <nuxt-link to="/" class="text-2xl lg:text-xl font-semibold">Altamiro<span class="text-white">.code</span></nuxt-link>

        </div>
        <ul class="flex items-center lg:justify-start justify-center lg:mt-0 mt-8" v-if="route.name !== 'projetos-id'">
          <li class="link-item text-base transition-all"  v-for="link in links" @click="(e)=> handleClick(e)">
            <a :href="link.anchor" :class="{isActive: link.isActive}">{{ link.nome }}</a>
          </li>
        </ul>
        <ul class="flex items-center lg:justify-start justify-center lg:mt-0 mt-8" v-else>
          <nuxt-link class="link-item text-base transition-all" to="/">Voltar para home</nuxt-link>
        </ul>

      </div>
    </div>
  </header>
</template>

<script setup>
import { defineEmits, ref } from 'vue';
import { useRoute } from '@nuxtjs/composition-api';
const route = useRoute()

console.log(route);

const links = ref([
  {
    nome: 'Sobre mim',
    anchor: '#sobre',
    isActive: false,
  },
  {
    nome: 'Projetos',
    anchor: '#projetos',
    isActive: false,
  },
  {
    nome: 'Habilidades',
    anchor: '#habilidades',
    isActive: false,
  }
])

function handleClick({currentTarget}){
  links.value.forEach((i)=>{
    if(i.nome === currentTarget.textContent){
      i.isActive = true;
    } else{
      i.isActive = false;

    }
  })
}


</script>

<style scoped>
.link-item:hover {
  color: #0192E4;
}

header {
  background-color: #1D2224;
  /* background-color: #182031; */
}

.logo a {
  display: block;
  color: #0192e4;
}

.link-item {
  cursor: pointer;
}

.link-item+.link-item {
  margin-left: 1rem;
}

/* .isActive{
  color: #0192E4;
} */
</style>
