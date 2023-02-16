<template>
  <div class="mt-8 md:mt-12">

    <div class="col-2 text-sm md:text-lg max-w-[800px] mx-auto text-center">
      <p>
        Olá, me chamo Altamiro, tenho 27 anos e sou do Rio de Janeiro.
        Atualmente estou cursando o primeiro período em <span>Análise e
          Desenvolvimento</span> de Sistemas na Faculdade Descomplica.
      </p>
      <p class="mt-2">
        Como um programador que é apaixonado pelo o que faz, gosto de aprender novas tecnologias e estar por dentro de todo o
        ecossistema <span>Frontend</span>.
      </p>
      <p class="mt-2">Tenho como objetivo profissional desenvolver aplicações que poderão um dia impactar e facilitar a vida de outras pessoas</p>

      <div class="mt-8">
        <a href="/altamiro-curriculo.pdf" download class="border border-transparent btn-cv py-2 px-4 min-w-[12.5rem] inline-flex items-center justify-center relative h-12 font-medium transition-all bg-primary-pure hover:bg-transparent hover:border-primary-pure">
          Baixar CV
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 m-2" viewBox="0 0 512 512">
            <title>Cloud Download</title>
            <path d="M320 336h76c55 0 100-21.21 100-75.6s-53-73.47-96-75.6C391.11 99.74 329 48 256 48c-69 0-113.44 45.79-128 91.2-60 5.7-112 35.88-112 98.4S70 336 136 336h56M192 400.1l64 63.9 64-63.9M256 224v224.03" fill="none" stroke="var(--color1, #fff)" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
          </svg>

        </a>
      </div>

    </div>

</div>
</template>


<style scoped>
p>span {
  color: #0192E4;
}

.btn-cv {
  --color1: #fff;
  border-radius: 2.25rem;
}

.btn-cv:hover {
  --color1: #0192E4;


}
</style>
