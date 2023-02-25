<template>
  <div class="mt-8 md:mt-12">
    <div class="grid grid-tabs">
      <ul class="rounded-md tabs-list">
        <li class=" py-4 px-4 border border-neutral-200 rounded-md cursor-pointer" :class="{active: isActive}" v-for="tab in tabs" @click="handleClickInTab(tab.nome)" :key="tab.nome">{{ tab.nome }}</li>
      </ul>
      <div class="tab-content">
        <div v-show="situation == 'Novadata'">
          <h3>Desenvolvedor Front-end - Nova Data Tecnologia LTDA</h3>
          <p>
            Trabalho ativamente no desenvolvimento e manutenção de interfaces nos dashboards administrativos, nessa experiência fiz coisas como:
          </p>
          <ul>
            <li> - Modernização do código legado para Vue.js;</li>
            <li> - Implementação de boas práticas no front end;</li>
            <li> - Criação de novas funcionalidades e melhorias no core das aplicações;</li>
            <li> - Criação de novas funcionalidades e melhorias no core das aplicações;</li>
            <li> - Contribuições diretas ao mockup do projeto visando usabilidade;</li>
            <li> -  Integração de API Rest no Front-end.</li>
          </ul>

        </div>
        <div v-show="situation == 'Ultrapel'">
          <h3>Estágio em Desenvolvimento Front-end - Nova Data Tecnologia LTDA</h3>
          <p>
            Trabalhei ativamente no desenvolvimento e manutenção de sites institucionais, nessa experiência fiz coisas como:
          </p>
          <ul>
            <li> - Desenvolvimento de sites para diversas empresas seguindo layout do figma;</li>
            <li> - Criação de novas funcionalidades e melhorias em sites já existentes;</li>
            <li> - Implementação de boas práticas no front end;</li>
          </ul>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const situation = ref("Novadata")
const isActive = ref(false);

const tabs = ref([
  {
    nome: 'Novadata',
  },
  {
    nome: 'Ultrapel',
  },
])

function handleClickInTab(tab) {
  situation.value = tab
  if(situation.value == tab){
    isActive.value = !isActive.value
  }


}


</script>


<style scoped>

.grid-tabs{
  grid-template-columns: minmax(100px, 250px ) 1fr;
}

.tabs-list li + li{
  margin-top: 1rem;

}
</style>
