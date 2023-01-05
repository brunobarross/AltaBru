<template>
    <section class="pt-20 md:pt-32" :id="text">
      <div class="container-personalizado">
        <TheTitle :text="text" />
        <slot></slot>

      </div>
    </section>
</template>


<script setup>
  import TheTitle from './TheTitle.vue';
  defineProps(['text'])
</script>
