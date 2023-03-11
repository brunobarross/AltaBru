<template>
  <div class="mx-auto max-w-[450px] mt-8 md:mt-12" data-aos="zoom-in" data-aos-delay="250">
    <form action="https://formsubmit.co/altamiro_bruno@yahoo.com.br" method="POST" target="_blank">
      <div class="input-box">
        <input class="border-b border-neutral-600 bg-transparent px-2 py-2 w-full outline-none focus:border-primary-pure transition-all " name="nome" type="text" placeholder="Seu nome" />
      </div>
      <div class="input-box mt-6">
        <input class="border-b border-neutral-600 bg-transparent px-2 py-2  w-full outline-none focus:border-primary-pure transition-all " name="email" type="text" placeholder="Seu e-mail" />
      </div>
      <div class="input-box mt-6">
        <input class="border-b border-neutral-600 bg-transparent px-2 py-2  w-full outline-none focus:border-primary-pure transition-all " name="telefone" type="text" placeholder="Seu telefone" />
      </div>
      <div class="text-area-box mt-6">
        <textarea class="border border-neutral-600 bg-transparent px-2 py-2 rounded  w-full h-[7.5rem] resize-none outline-none focus:border-primary-pure transition-all " name="mensagem" id="" cols="30" rows="10" placeholder="Digite sua mensagem..."></textarea>
      </div>
      <input type="hidden" name="_autoresponse" value="sua mensagem personalizada">
      <div class="btn-container mt-6 flex justify-end">
          <button class="btn primary md">Enviar mensagem</button>
      </div>
    </form>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>
