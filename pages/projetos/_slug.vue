<template>
  <div class="relative" :key="projeto.id">
    <section class=" w-full mt-16 relative h-96 z-[1]">
      <img :src="projeto.banner.url" class="absolute inset-0 object-cover object-top h-full w-full opacity-40" />
    </section>
    <section class="w-full relative -mt-20 z-10">
      <div class="container-personalizado">
        <div class="flex lg:justify-between lg:items-end lg:flex-row flex-col items-center">
          <div class="flex items-center md:flex-row flex-col" >
            <div class="profile w-[15rem] h-[15rem] border border-primary-pure p-2 rounded-md overflow-hidden" data-aos="zoom-in" data-aos-delay="100">

              <img :src="projeto.miniatura.url" class="object-cover object-center h-full w-full " />
            </div>
            <div class="titulo mt-4 ml-0 md:ml-4 lg:mt-0" data-aos="fade-left" data-aos-delay="150">
              <h3 class="font-semibold">{{ projeto.nome }}</h3>
              <p class="font-medium text-primary-pure">{{ projeto.tipo }}</p>
            </div>

          </div>
          <div class="flex flex-col">

            <div class="botoes flex md:flex-row flex-col items-center lg:mt-0 mt-8 lg:justify-end justify-center" data-aos="fade-left" data-aos-delay="150">
              <a :href="projeto.deploy" target="_blank" class="btn secondary">
                Live Demo
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 md:w-5 md:h-5 ml-2" viewBox="0 0 512 512">
                  <path d="M320 336h76c55 0 100-21.21 100-75.6s-53-73.47-96-75.6C391.11 99.74 329 48 256 48c-69 0-113.44 45.79-128 91.2-60 5.7-112 35.88-112 98.4S70 336 136 336h56M192 400.1l64 63.9 64-63.9M256 224v224.03" fill="none" stroke="var(--color1, #fff)" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
                </svg>
              </a>
              <a :href="projeto.repositorio" target="_blank" class="btn secondary ml-0 mt-4 md:mt-0 md:ml-4">
                Repositório
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-4 h-4 md:w-5 md:h-5 ml-2">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" style="fill: var(--cor-icone, #fff)" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="detalhes pt-12 md:pt-20">
      <div class="container-personalizado">
        <div class="flex lg:justify-between flex-col lg:flex-row">
          <div class="descricao">
            <TheTitle text="Descrição" :inverse="false" />
            <div class="texto-descricao max-w-[800px] mt-4">
              <p class="text-sm md:text-base leading-[180%]" data-aos="fade-up" data-aos-delay="150">{{ projeto.descricao }}</p>
            </div>
          </div>
          <div class="tecnologias mt-8">
            <TheTitle text="Tecnologias" :inverse="false" />
            <ul class="mt-4" data-aos="fade-left" data-aos-delay="200">
              <li class="text-sm md:text-base" v-for="tecnologia in projeto.tecnologias" :key="tecnologia.id" >- {{ tecnologia.nome }}</li>
            </ul>

          </div>
        </div>

      </div>
    </section>

    <section class="video pt-12 md:pt-20"  v-if="projeto.video">
      <div class="container-personalizado">
        <TheTitle text="Video Demonstrativo" :inverse="true" />
        <div class="flex justify-center flex-col">
          <div class="video-content mt-8 flex justify-center flex-col" data-aos="zoom-in" data-aos-delay="150">
            <iframe class="aspect-video w-full max-w-[800px] mx-auto h-[250px] md:h-[450px] overflow-hidden rounded-md" :src="projeto.video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
import gql from 'graphql-tag';
import TheTitle from '../../components/ui/TheTitle.vue';
const SINGLE_PROJECT_QUERY = gql`
query SINGLE_PROJECT_QUERY ($slug: String) {
  projeto(where: { slug: $slug }) {
    id
    nome
    descricao
    repositorio
    deploy
    video
    slug
    tipo
    banner{
      url
      fileName
    }
    miniatura{
      url
      fileName
    }
    tecnologias{
      id
      nome
    }

  }
}
`

export default {
  components:{
   TheTitle
  },
  async asyncData({ app, params }) {
    const client = app.apolloProvider.defaultClient;
    const { slug } = params;
    const res = await client.query({
      query: SINGLE_PROJECT_QUERY,
      variables:{
        slug,
      }
    })
    console.log(res.data)
    const { projeto} = await res.data;
    console.log(projeto)

    return {
      projeto,
    }
  },
}



</script>
<style scoped>
.tag {
  display: grid;
  place-items: center;
  backdrop-filter: blur(24px);
  padding: .5rem 1rem;
  border-radius: 2.25rem;
  border: 1px solid rgba(255, 255, 255, .2);
  font-size: .75rem;
  background-color: rgba(134, 160, 220, 0.41);
}

.titulo h3 {
  font-size: clamp(1.625rem, 6vw, 2.5rem);
}

.video h2::after{
  margin: 0 auto;

}
</style>
