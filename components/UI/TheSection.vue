<template>
    <section class="pt-20 md:pt-32" :id="text" :ref="secao">
      <div class="container-personalizado" >
        <div :class="{isInverse: inverse }">
          <TheTitle :text="text" />
          <slot></slot>
        </div>
      </div>
    </section>
</template>


<script setup>
import {ref, onMounted} from 'vue'
import TheTitle from './TheTitle.vue';
const props = defineProps(['text', 'inverse', 'secao'])



onMounted(()=>{
  console.log(props.secao)
})


</script>


<style scoped>
.isInverse{
  display: flex;
  align-items: center;
  justify-content: space-between;
}


</style>
