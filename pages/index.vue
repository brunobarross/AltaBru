<template>
  <div class="">
    <the-banner></the-banner>
    <TheSection text="Sobre mim" id="sobre">
      <template>
        <TheSobre></TheSobre>
      </template>
    </TheSection>
    <!-- <TheSection text="Minhas Experiências Profissionais" id="experiencias">
      <template>
        <TheExperiencias/>
      </template>
    </TheSection> -->
    <TheSection text="Meus Projetos" id="projetos">
      <template>
        <TheProjects :projetos="projetos"/>
    </template>
    </TheSection>
    <TheSection text="Minhas Habilidades" id="habilidades">
      <template>
        <TheHabilidades></TheHabilidades>
      </template>
    </TheSection>
    <TheSection text="Vamos conversar?" id="habilidades">
      <p class="max-w-[36rem] leading-[150%] ">Quer que eu desenvolva algo para você?<br> Escreva para mim e vamos bater um papo!</p>
      <template>
        <TheContato/>
      </template>
    </TheSection>
  </div>
</template>

<script>
import gql from 'graphql-tag';
import TheProjects from "../components/projetos/TheProjects.vue";
import TheHabilidades from "../components/Habilidades/TheHabilidades.vue";
import TheSobre from "../components/sobre/TheSobre.vue";
import TheBanner from "../components/UI/TheBanner.vue";
import TheSection from "../components/UI/TheSection.vue"
import TheExperiencias from '../components/Experiencia/TheExperiencias.vue';
import TheContato from '../components/Contato/TheContato.vue';


const PROJECTS_QUERY = gql`
query PROJECTS_QUERY {
  projetos {
    id
    nome
    descricao
    repositorio
    deploy
    video
    slug
    banner{
      url
      fileName
    }
    tecnologias{
      id
      nome
    }

  }
}
`

export default {
  components:{
    TheProjects,
    TheBanner,
    TheHabilidades,
    TheSection,
    TheSobre,
    TheExperiencias,
    TheContato
},
  async asyncData({ app, params }) {
    const client = app.apolloProvider.defaultClient;

    const res = await client.query({
      query: PROJECTS_QUERY,
    })

    const { projetos} = await res.data;
    console.log(projetos)

    return {
      projetos,
    }
  },
}



</script>
