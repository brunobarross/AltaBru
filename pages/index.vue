<template>
  <div>
    <TheHeader />
    <the-section text="SOBRE"></the-section>
    <the-section text="HABILIDADES"></the-section>
    <the-section text="PROJETOS">
      <template>
        <div class="mt-16 grid grid-cols-1 gap-12">
          <CardProject variation="par"/>
          <CardProject variation="impar"/>

        </div>
      </template>
    </the-section>
    <the-section text="CONTATO"></the-section>
  </div>
</template>

<script>
import CardProject from "../components/projects/CardProject.vue";
import TheHeader from "../components/UI/TheHeader.vue";
import TheSection from "../components/UI/TheSection.vue";


export default {
  name: "IndexPage",
  components: { TheHeader, TheSection, CardProject },
};
</script>
