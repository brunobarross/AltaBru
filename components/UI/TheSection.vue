<template>
  <section class="pt-32 md:pt-40" :id="text" :ref="secao">
    <div class="container-personalizado">
      <div class="title-section" :class="{ isInverse: inverse }">
        <TheTitle :text="text" />
      </div>
      <slot></slot>

    </div>
  </section>
</template>


<script setup>
import { ref, onMounted } from 'vue'
const props = defineProps(['text', 'inverse', 'secao'])





</script>


<style>
.title-section.isInverse {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  text-align: center;
}

.title-section.isInverse h2::after{
  margin: .25rem auto 0 auto;
}
</style>
