<template>
  <div class="mt-8 md:mt-12">
    <div class="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6" >
      <CardServicos v-for="servico in servicos" v-if="servicos.length" :key="servico.id" :servico="servico" :icone_servicos="servico.icon" data-aos="zoom-in" data-aos-delay="200" />

    </div>
  </div>
</template>
<script setup>
import {ref} from 'vue';
import CardServicos from './CardServicos.vue';



const servicos = ref([
  {
    id: 0,
    title: 'Desenvolvimento de Sites',
    description: 'Criação de sites responsivos e eficientes para garantir uma experiência de usuário excepcional em todas as plataformas. Utilização de técnicas de SEO e ferramentas de análise para garantir que o site seja facilmente encontrado pelos usuários e pelos motores de busca. ',
    icon:"sites.svg"
  },
  {
    id: 1,
    title: 'Desenvolvimento de E-commerce',
    description: 'Criação de lojas virtuais eficientes e responsivas, com foco em proporcionar uma experiência de compra excepcional aos usuários. Utilização de técnicas de SEO e integração com plataformas de pagamento seguras. ',
    icon:"ecommerce.svg"

  },
  {
    id: 2,
    title: 'Desenvolvimento de Aplicações Web',
    description: 'Criação de aplicações web modernas e eficientes, utilizando frameworks como Vue.js e React. Desenvolvimento de recursos personalizados para atender às necessidades específicas do negócio, com foco na experiência do usuário e na eficiência do sistema. ',
    icon:"aplicacoes.svg"
  },
  {
    id: 3,
    title: 'Design Responsivo',
    description: 'Criação de layouts responsivos que se adaptam a todas as plataformas, desde desktops até smartphones, proporcionando uma experiência de usuário excepcional em todas as telas. ',
    icon: 'responsivo.svg'
  }
]);

</script>

<style lang="scss" scoped>

</style>
