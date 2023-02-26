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



  </div>
</template>

<script>
import gql from 'graphql-tag';

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
