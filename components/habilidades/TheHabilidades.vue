<template>
  <div class="grid  grid-habilidades mt-8 md:mt-12">
    <TheCardHabilidade v-for="habilidade in habilidades" v-if="habilidades" :key="habilidade.id" :logo_tecnologia="habilidade.logo_tecnologia" :nome_tecnologia="habilidade.nome_tecnologia" data-aos="zoom-in" data-aos-delay="200"></TheCardHabilidade>
  </div>
</template>

<script setup>
import TheCardHabilidade from "./TheCardHabilidade.vue";


const habilidades = [
  {
    id: 0,
    nome_tecnologia: "Vue.js",
    logo_tecnologia: "vuejs.svg",
  },
  {
    id: 1,
    nome_tecnologia: "Nuxt.js",
    logo_tecnologia: "nuxt.png",
  },
  {
    id: 2,
    nome_tecnologia: "Quasar",
    logo_tecnologia: "quasar.png",
  },

  {
    id: 3,
    nome_tecnologia: "React.js",
    logo_tecnologia: "react.svg",
  },
  {
    id: 4,
    nome_tecnologia: "GraphQL",
    logo_tecnologia: "graphql.svg",
  },
  {
    id: 5,
    nome_tecnologia: "Wordpress CMS",
    logo_tecnologia: "wordpress.svg",
  },
  {
    id: 6,
    nome_tecnologia: "Javascript",
    logo_tecnologia: "javascript.svg",
  },

  {
    id: 7,
    nome_tecnologia: "HTML5",
    logo_tecnologia: "html5.svg",
  },
  {
    id:8,
    nome_tecnologia: "CSS3",
    logo_tecnologia: "css3.svg",
  },
  {
    id: 9,
    nome_tecnologia: "TailwindCSS",
    logo_tecnologia: "tailwind.svg",
  },
  {
    id: 10,
    nome_tecnologia: "Bootstrap",
    logo_tecnologia: "bootstrap.svg",
  },

  {
    id: 11,
    nome_tecnologia: "Figma",
    logo_tecnologia: "figma.svg",
  },

  {
    id: 12,
    nome_tecnologia: "Git",
    logo_tecnologia: "git.svg",
  }
];
</script>

<style scoped>
.grid-habilidades {
  grid-template-columns: repeat(auto-fit, minmax(100px, max-content));
  column-gap: 2rem;
  row-gap: 4rem;
  justify-content: center;
}

@media(max-width: 640px) {
  .grid-habilidades {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1rem;
    row-gap: 2rem;

  }

}
</style>
