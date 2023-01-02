<template>
    <div class="py-32">
      <div class="container-personalizado">
        <TheTitle :text="text" />
        <slot></slot>

      </div>
    </div>
</template>


<script setup>
  import TheTitle from './TheTitle.vue';
  defineProps(['text'])
</script>
