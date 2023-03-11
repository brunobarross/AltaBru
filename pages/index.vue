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
    <TheSection text="Serviços que ofereço" id="servicos">
      <template>
        <TheServicos />
    </template>
    </TheSection>
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
    <TheSection text="Vamos conversar?" id="contato" inverse="true">
      <p class="md:max-w-[36rem] leading-[150%] mt-4 text-center mx-auto text-sm md:text-base" data-aos="fade-up" data-aos-delay="150">Tem uma idéia? Quer que eu desenvolva algo para você?<br> Escreva para mim e vamos bater um papo!</p>
      <template>
        <TheContato/>
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
