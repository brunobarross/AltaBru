<template>
  <div class="banner pt-20 md:pt-52 pb-32 lg:py-0 h-full lg:h-screen relative">
    <div class="container-personalizado h-full">
      <div class="flex h-full relative lg:items-center md:justify-center flex-col">
        <div class="banner-wrapper w-full h-full flex flex-col  justify-center">
          <div class="mt-12 mr-0 lg:mr-10">
            <!-- <span class="intro-tag block text-base font-medium  text-primary-pure">&lt; Hello World /&gt;</span> -->
            <span class="intro-tag block md:text-lg font-medium  text-primary-pure mb-2 lg:mb-6" data-aos="fade-up" data-aos-delay="100">Olá, eu sou o</span>
            <h1 class="titulo font-semibold text-neutral-100" data-aos="fade-up" data-aos-delay="150">
              Altamiro <span class="text-primary-pure">Bruno.</span>
            </h1>
            <h3 class="subtitulo font-semibold text-neutral-300 mt-2 md:mt-0" data-aos="fade-up" data-aos-delay="200">
              Desenvolvo sites e aplicações para a Web.
            </h3>
            <p class="text-sm md:text-base  mt-5 max-w-full lg:max-w-[650px] leading-[180%] text-neutral-300 " data-aos="fade-up" data-aos-delay="250">
              Sou um Desenvolvedor <span class="text-primary-pure">Front-end</span> especializado em criar experiências digitais excepcionais. Atualmente, estou focado em criar produtos acessíveis e inovadores que poderão um dia facilitar a vida de muitas pessoas.
            </p>
            <div class="mt-8" data-aos="fade-up" data-aos-delay="300">
              <a href="/altamiro-curriculo.pdf" download class="btn primary lg w-full md:w-auto">
                Baixar CV

                <svg class="w-5 h-5 ml-2 transition-all ">
                  <use xlink:href="@/assets/icons/icons.svg#icon-cloud"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="social flex justify-center md:justify-start lg:justify-center lg:flex-col lg:absolute right-0 mt-6 lg:mt-0" data-aos="fade-left" data-aos-delay="350">
          <a href="https://github.com/brunobarross" target="_blank" class="social-item w-8 h-8 md:w-10 md:h-10  transition-all hover:bg-primary-pure hover:border-transparent">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-4 h-4 md:w-5 md:h-5">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" style="fill: var(--cor-icone, #fff)" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/altamirobruno/" target="_blank" class="social-item w-8 h-8 md:w-10 md:h-10 ml-4 lg:ml-0 lg:mt-4 transition-all hover:bg-primary-pure hover:border-transparent">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24">
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" style="fill: var(--cor-icone, #fff)" />
            </svg>
          </a>
        </div>
      </div>
    </div>
    <a href="#sobre" class="arrow absolute bottom-0 lg:bottom-[5vh] flex justify-center w-full">
      <img src="~/assets/img/icons/arrow-down.svg" class="w-6 h-6" />
    </a>
  </div>
</template>




<style scoped>
.arrow img {
  animation: sobeedesce .3s ease alternate infinite;
}

.social-item {
  display: grid;
  place-items: center;
  border-radius: 100%;
  border: 2px solid #0192E4;
  --cor-icone: white;
  cursor: pointer;
}

.titulo {
  font-size: clamp(2rem, 7vw, 5rem);
  line-height: 120%;

}

.subtitulo {
  font-size: clamp(1.125rem, 3vw, 2.5rem);
  line-height: 100%;


}





@keyframes sobeedesce {
  to {
    transform: translateY(-3px);
  }
}
</style>
