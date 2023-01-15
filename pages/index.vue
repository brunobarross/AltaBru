<template>
  <div class="">
      <the-banner></the-banner>
      <TheSection text="SOBRE">
        <template>
          <TheSobre></TheSobre>
        </template>
      </TheSection>
      <TheSection text="PROJETOS">
        <template>
          <TheProjects></TheProjects>
        </template>
      </TheSection>
      <TheSection text="HABILIDADES">
        <template>
          <TheHabilidades></TheHabilidades>
        </template>
      </TheSection>
      <TheSection text="CONTATO"></TheSection>

  </div>
</template>

<script setup>
import { ref } from "vue";
import TheProjects from "../components/projetos/TheProjects.vue";
import TheHabilidades from "../components/Habilidades/TheHabilidades.vue";
import TheSobre from "../components/sobre/TheSobre.vue";
import TheBanner from "../components/UI/TheBanner.vue";
import TheSection from "../components/UI/TheSection.vue";
</script>
