<template>
  <div class="grid grid-cols-3 lg:grid-cols-4 gap-8  justify-center mt-8 md:mt-12">
    <the-card-habilidade
      v-for="habilidade in habilidades"
      v-if="habilidades" :key="habilidade.id"
      :logo_tecnologia="habilidade.logo_tecnologia" :nome_tecnologia="habilidade.nome_tecnologia"
    ></the-card-habilidade>
  </div>
</template>

<script setup>
import TheCardHabilidade from "./TheCardHabilidade.vue";
import logoBootstrap from "../../assets/img/logos/bootstrap.svg";

const habilidades = [
  {
    id: 0,
    nome_tecnologia: "Vue.js",
    logo_tecnologia: "vuejs.svg",
  },
  {
    id: 1,
    nome_tecnologia: "Quasar",
    logo_tecnologia: "quasar.png",
  },
  {
    id: 1,
    nome_tecnologia: "Nuxt.js",
    logo_tecnologia: "nuxt.png",
  },
  {
    id: 2,
    nome_tecnologia: "React.js",
    logo_tecnologia: "react.svg",
  },
  {
    id: 3,
    nome_tecnologia: "Javascript",
    logo_tecnologia: "javascript.svg",
  },

  {
    id: 4,
    nome_tecnologia: "HTML5",
    logo_tecnologia: "html5.svg",
  },
  {
    id: 5,
    nome_tecnologia: "CSS3",
    logo_tecnologia: "css3.svg",
  },
  {
    id: 6,
    nome_tecnologia: "TailwindCSS",
    logo_tecnologia: "tailwind.svg",
  },
  {
    id: 7,
    nome_tecnologia: "Bootstrap",
    logo_tecnologia: "bootstrap.svg",
  },

  {
    id: 8,
    nome_tecnologia: "Figma",
    logo_tecnologia: "figma.svg",
  },

  {
    id: 9,
    nome_tecnologia: "Git",
    logo_tecnologia: "git.svg",
  },
];
</script>
