<template>
  <div class="relative">
    <section class=" w-full mt-16 relative h-96 z-[1]">
      <img :src="projeto.banner" class="absolute inset-0 object-cover object-top h-full w-full opacity-40" />
    </section>
    <section class="w-full relative -mt-20 z-10">
      <div class="container-personalizado">
        <div class="flex md:justify-between md:items-end md:flex-row flex-col items-center">
            <div class="profile w-[15rem] h-[15rem] bg-primary-pure grid place-items-center rounded">
              <h1 class="text-2xl font-semibold md:text-left text-center">{{ projeto.nome }}</h1>
            </div>
          <div class="botoes flex items-center md:mt-0 mt-8">
            <a :href="projeto.deploy" target="_blank" class="border border-primary-pure btn-cv py-2 px-4 md:min-w-[12.5rem] inline-flex items-center justify-center relative h-12 font-medium transition-all bg-transparent hover:bg-primary-pure hover:border-transparent rounded">
              Live Demo
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 md:w-5 md:h-5 ml-2" viewBox="0 0 512 512">
                <path d="M320 336h76c55 0 100-21.21 100-75.6s-53-73.47-96-75.6C391.11 99.74 329 48 256 48c-69 0-113.44 45.79-128 91.2-60 5.7-112 35.88-112 98.4S70 336 136 336h56M192 400.1l64 63.9 64-63.9M256 224v224.03" fill="none" stroke="var(--color1, #fff)" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
              </svg>
            </a>
            <a :href="projeto.repositorio" target="_blank" class="border border-primary-pure btn-cv py-2 px-4 md:min-w-[12.5rem] inline-flex items-center justify-center relative h-12 font-medium transition-all bg-transparent hover:bg-primary-pure hover:border-transparent ml-4 rounded">
              Repositório
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-4 h-4 md:w-5 md:h-5 ml-2">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" style="fill: var(--cor-icone, #fff)" />
              </svg>

            </a>
          </div>

        </div>
      </div>
    </section>

    <section class="detalhes pt-12 md:pt-20">
      <div class="container-personalizado">
        <TheTitle text="Descrição" inverse="true" />
        <div class="texto-descricao max-w-[800px] mt-4">
            <p class=" leading-7">{{ projeto.descricao }}</p>
        </div>
      </div>
    </section>
</div>
</template>
<script>
export default {
  name: "Projeto",
  inheritAttrs: false,
  customOptions: {},
  components: { TheTitle }
}
</script>

<script setup>
import {ref} from 'vue'
import { computed, defineComponent, inject, useRoute, onMounted } from '@nuxtjs/composition-api'
import {projetos} from '../../projetos.js'
import TheTitle from '../../components/UI/TheTitle.vue';

const route = useRoute()
const projeto = ref({})





onMounted(()=>{
  console.log(route.value.params.id)
  const filtro = projetos.filter(i => i.id == route.value.params.id )
  projeto.value = filtro[0]
})



</script>
