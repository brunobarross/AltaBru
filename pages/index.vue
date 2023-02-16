<template>
  <div class="">
    <the-banner></the-banner>

    <TheSection text="SOBRE MIM" id="sobre">
      <template>
        <TheSobre></TheSobre>
      </template>
    </TheSection>
    <TheSection text="PROJETOS" id="projetos">
      <template>
        <TheProjects></TheProjects>
      </template>
    </TheSection>
    <TheSection text="HABILIDADES" id="habilidades">
      <template>
        <TheHabilidades></TheHabilidades>
      </template>
    </TheSection>
</div>
</template>

<script>
import gql from 'graphql-tag'
import TheProjects from "../components/projetos/TheProjects.vue";
import TheHabilidades from "../components/Habilidades/TheHabilidades.vue";
import TheSobre from "../components/sobre/TheSobre.vue";
import TheBanner from "../components/UI/TheBanner.vue";
import TheSection from "../components/UI/TheSection.vue";

export default {
  components: {
    TheProjects,
    TheHabilidades,
    TheSobre,
    TheBanner,
    TheSection
  },
  apollo: {
    projetos: gql`
    query MyQuery {
      projetos {
        id
        nome
        slug
        descricao
        deploy
        repositorio
        banner {
          bannerProjeto {
            id
          }
        }
      }
    }

    `
  }
}


</script>
