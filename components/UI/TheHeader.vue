<template>
  <header class="py-6 h-16 fixed top-0 w-full flex items-center">
    <div class="container-personalizado">
      <div class="flex items-center justify-between">
        <div class="logo z-50">
          <nuxt-link to="/" class="text-2xl font-semibold">Altamiro<span class="text-white">.code</span></nuxt-link>
        </div>
        <span id="hamburger" class="z-50 lg:hidden"></span>
        <div class="menu " >
          <ul class="flex  items-center flex-col lg:flex-row lg:justify-start justify-center" v-if="route.name !== 'projetos-slug'">
            <li class="link-item text-2xl lg:text-base transition-all" v-for="link in links" @click="(e) => handleClick(e)">
              <a :href="link.anchor" :class="{ isActive: link.isActive }">{{ link.nome }}</a>
            </li>
          </ul>
          <ul class="flex md:flex-row flex-col items-center lg:justify-start justify-center lg:mt-0 mt-8" v-else>
            <nuxt-link class="link-item text-2xl lg:text-base transition-all" to="/">Voltar para home</nuxt-link>
          </ul>
        </div>


      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
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

const showMenu = ref(false);

const isMobile = ref(false);

function handleClick({ currentTarget }) {
  links.value.forEach((i) => {
    if (i.nome === currentTarget.textContent) {
      i.isActive = true;
    } else {
      i.isActive = false;

    }
  })
}
function toggleNavFunction () {
  showMenu.value = !showMenu.value;
}

</script>

<style scoped>
.link-item:hover {
  color: #0192E4;
}

header {
  background-color: #1D2224;
  z-index: 1000;
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




@media(max-width: 768px) {

  .link-item+.link-item {
    margin-left: 0;
    margin-top: 2rem;
  }

  .menu {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    min-height: 100vh;
    background-color: #1D2224;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 11;
  }

  .menu ul {
    height: 100%;
  }

  #hamburger {
  display: block;
  border-top: 2px solid #fff;
  width: 24px;
}


#hamburger::before,
#hamburger::after {
  content: '';
  display: block;
  width: 24px;
  height: 2px;
  background-color: currentColor;
  margin-top: 5px;
  transition: .3s;
  position: relative;
}

header.active #hamburger {
  border-top-color: transparent;
  color: #fff;
}


header.active #hambuerger::before {
  transform: rotate(135deg);
}

header.active #hambuerger::after {
  transform: rotate(-135deg);
  top: -7px;
}

}

/* .isActive{
  color: #0192E4;
} */




</style>
