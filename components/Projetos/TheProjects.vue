<template>
  <div class="mt-8 md:mt-12">
    <div class="mt-8 md:mt-12 grid grid-cols-1  lg:grid-cols-2 gap-6" >
      <CardProject v-for="projeto in projetos" v-if="projetos.length" :projeto="projeto" data-aos="zoom-in" data-aos-delay="200" />

    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'
import CardProject from "./CardProject.vue";
// import { projetos } from '@/projetos.js'

const props = defineProps(['projetos'])


console.log(props.projetos)


</script>


<style scoped>
.agile {
  width: 100%
}

.agile__nav-button {
  width: 24px;
  height: 24px;
  display: grid;
  place-items: center;
  background-color: red;
  color: #fff;
}
</style>
