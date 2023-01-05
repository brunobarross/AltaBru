<template>
  <header class="py-6 h-16 fixed top-0 w-full flex items-center z-10">
    <div class="container-personalizado">
      <div class="flex justify-between">
        <div class="logo">
          <a href="#" class="text-xl font-semibold">Altamiro</a>
        </div>
        <ul class="flex items-center">
          <li class="link-item text-base">Sobre</li>
          <li class="link-item text-base">Projetos</li>
          <li class="link-item text-base">Habilidades</li>
          <li class="link-item text-base">Contato</li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>

</script>

<style scoped>
header {
  background-color: #1D2224;
  /* background-color: #182031; */
}

.logo a {
  display: block;
  color: #0192e4;
}
.link-item {
  cursor: pointer;
}

.link-item + .link-item {
  margin-left: 1rem;
}
</style>
