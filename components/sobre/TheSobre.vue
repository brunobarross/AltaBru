<template>
  <div class="mt-10 md:mt-12 flex flex-col md:grid grid-sobre md:items center items-start gap-8">
    <div class="col-1 text-sm md:text-lg text-neutral-300 " data-aos="fade-up" data-aos-delay="150">
      <p>
        Meu nome é Altamiro Bruno, tenho 27 anos, atuo na área de desenvolvimento a mais de 3 anos e curso a faculdade de Análise e Desenvolvimento de Sistemas.
      </p>
      <p class="mt-2">
        Como um desenvolvedor frontend, meu objetivo é criar experiências digitais envolventes e fáceis de usar para os usuários. Para alcançar esse objetivo, utilizo uma variedade de habilidades e ferramentas, incluindo HTML, CSS, JavaScript e frameworks como Vue.js, Nuxt.js, Quasar e React.js.
      </p>
      <p class="mt-2">
        Por fim, sou comprometido em manter-me atualizado com as últimas tendências em design e desenvolvimento frontend, e continuo a aprimorar minhas habilidades para entregar produtos de alta qualidade. Estou ansioso para trabalhar em novos projetos emocionantes e contribuir para o sucesso de sua empresa.
      </p>

    </div>
    <div class="col-2 mx-auto lg:mx-0" data-aos="fade-left" data-aos-delay="250">
      <div class="image-container ">
        <img src="~/assets/img/altamiro.jpg" class="rounded-md w-full h-[350px] object-cover object-top" />
      </div>
    </div>



  </div>
</template>


<style scoped>


@media(min-width: 1024px){
 .grid-sobre {
  grid-template-columns: 1fr .5fr;
}
}

p>span {
  color: #0192E4;
}

.image-container {
  position: relative;
}

.image-container::before {
  content: "";
  position: absolute;
  display: block;
  height: 100%;
  width: 100%;
  background-color: #0192E4;
  mix-blend-mode: soft-light;
  transition: .3s ease;

}

.image-container::after {
  content: "";
  position: absolute;
  display: block;
  height: 100%;
  width: 100%;
  border: 2px solid #0192E4;
  top: 20px;
  left: 20px;
  z-index: -1;
  border-radius: 6px;
  transition: .3s ease;
}

.image-container:hover::before{
  opacity: 0;

}
.image-container:hover::after{
  top: 15px;
  left: 15px;

}


</style>
