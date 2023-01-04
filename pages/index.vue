<template>
  <div class="">
    <the-header ></the-header>
    <the-banner></the-banner>
    <the-section :section="section" text="SOBRE">
      <template>
        <the-sobre></the-sobre>
      </template>
    </the-section>
    <the-section text="PROJETOS">
      <template>
        <the-projects></the-projects>
      </template>
    </the-section>
    <the-section text="HABILIDADES">
      <template>
        <the-habilidades></the-habilidades>
      </template>
    </the-section>
    <the-section text="CONTATO"></the-section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TheHeader from "../components/UI/TheHeader.vue";
import TheSection from "../components/UI/TheSection.vue";
import TheProjects from "../components/projects/TheProjects.vue";
import TheHabilidades from "../components/habilidades/TheHabilidades.vue";
import TheSobre from "../components/sobre/TheSobre.vue";
import TheBanner from "../components/UI/TheBanner.vue";

</script>
