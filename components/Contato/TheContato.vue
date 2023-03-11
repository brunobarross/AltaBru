<template>
  <div class="mx-auto max-w-[450px] mt-10 md:mt-12" data-aos="zoom-in" data-aos-delay="250">
    <form method="POST" target="_blank" @submit.prevent="envioFormulario">
      <div class="input-box">
        <input class="border-b border-neutral-600 bg-transparent px-2 py-2 w-full outline-none focus:border-primary-pure transition-all " name="nome" type="text" placeholder="Seu nome" required v-model="nome" />
      </div>
      <div class="input-box mt-6">
        <input class="border-b border-neutral-600 bg-transparent px-2 py-2  w-full outline-none focus:border-primary-pure transition-all " name="email" type="text" placeholder="Seu e-mail" v-model="email" required />
      </div>
      <div class="input-box mt-6">
        <input class="border-b border-neutral-600 bg-transparent px-2 py-2  w-full outline-none focus:border-primary-pure transition-all " name="telefone" placeholder="Seu telefone" v-maska data-maska="(##) #####-####" required v-model="telefone" />
      </div>
      <div class="text-area-box mt-6">
        <textarea class="border border-neutral-600 bg-transparent px-2 py-2 rounded  w-full h-[7.5rem] resize-none outline-none focus:border-primary-pure transition-all " name="mensagem" id="" cols="30" rows="10" placeholder="Digite sua mensagem..." required v-model="mensagem"></textarea>
      </div>
      <input type="hidden" name="_autoresponse" value="sua mensagem personalizada">
      <div class="btn-container mt-6 flex justify-end">
        <button class="btn primary md">Enviar mensagem</button>
      </div>
      <p class="text-center text-sm mt-6" :class="isSucess ? 'text-green-400' : 'text-red-400'">{{ texto }}</p>
    </form>
  </div>
</template>

<script setup>
import { vMaska } from "maska"
import { ref } from 'vue';



const nome = ref('')
const email = ref('')
const telefone = ref('')
const mensagem = ref('')
const texto = ref('');
const isSucess = ref(false);

function limparFormulario(){
  nome.value = '';
    email.value = '';
    telefone.value = "";
    mensagem.value = "";
}

async function envioFormulario() {
  try {
    const response = await fetch(process.env.formURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome: nome.value, email: email.value, telefone: telefone.value, mensagem: mensagem.value })
    })
    const data = await response.json()
    console.log(data)
    texto.value = 'Mensagem enviada com sucesso, logo entrarei em contato com você!'
    limparFormulario();
    isSucess.value = true


  } catch (error) {
    console.error(error)
    texto.value = error.message;
    isSucess.value = false;
  }

}
</script>

<style lang="scss" scoped></style>
