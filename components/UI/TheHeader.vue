<template>
  <header class="py-6 h-16 fixed top-0 w-full flex items-center z-10">
    <div class="container-personalizado">
      <div class="flex justify-between">
        <div class="logo">
          <a href="#" class="text-xl font-semibold">Altamiro</a>
        </div>
        <ul class="flex items-center">
          <li class="link-item text-base transition-all" v-for="link in links" @click="(e)=> handleClick(e)">
            <a :href="link.anchor" :class="{isActive: link.isActive}">{{ link.nome }}</a>
          </li>

        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import { defineEmits, ref } from 'vue';

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
  },
  {
    nome: 'Contato',
    anchor: '#contato',
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
