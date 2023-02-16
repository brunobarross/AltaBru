<template>
  <div class="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 ">
    <CardProject v-for="projeto in projetos" v-if="projetos.length" :projeto="projeto"/>

</div>
</template>

<script setup>
import {ref} from 'vue'
import CardProject from "./CardProject.vue";
import {projetos} from '../../projetos'


</script>
