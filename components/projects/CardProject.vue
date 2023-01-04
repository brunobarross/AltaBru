<template>
  <div
    class="card-projeto relative grid md:grid-cols-12 md:items-center"
    :class="variation"
  >
    <div
      class="img rounded-md overflow-hidden relative md:col-span-7 h-[350px]"
    >
      <img
        src="../../assets/img/default.png"
        class="md:bg-cover h-full w-full"
      />
    </div>
    <div
      class="detail p-6 md:p-0 flex flex-col md:justify-center h-full absolute lg:right-0 lg:max-w-[600px]"
    >
      <div class="title flex flex-col md:text-right">
        <span class="text-sm">Featured Project</span>
        <h3 class="text-2xl mt-2 font-semibold">Google Pesquisa</h3>
      </div>
      <div class="description md:text-right mt-4 md:p-4 lg:rounded-md">
        <p class="text-sm md:text-base leading-[150%]">
          Having struggled with understanding how the Spotify OAuth flow works,
          I made the course I wish I could have had. Unlike tutorials that only
          cover a few concepts and leave you with half-baked GitHub.
        </p>
      </div>
      <div class="footer mt-auto md:mt-6">
        <ul class="tecnologies flex items-center md:justify-end">
          <li>Vue</li>
          <li>Tailwind</li>
        </ul>
        <div class="btn-container flex md:justify-end mt-4">
          <TheButton text="Ver mais" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TheButton from "../UI/TheButton.vue";

defineProps(["variation"]);
</script>

<style scoped>
@media (min-width: 768px) {
  .card-projeto.impar .img {
    order: 2;
    grid-column: 6/-1;
  }
  .card-projeto.impar .title {
    text-align: left;
  }

  .card-projeto.impar .detail {
    right: initial;
    left: 0;
  }
  .card-projeto.impar .description {
    text-align: left;
  }

  .card-projeto.impar .tecnologies {
    justify-content: flex-start;
  }

  .card-projeto.impar .btn-container {
    justify-content: flex-start;
  }

  .description {
    background-color:#0F7EFC;
  }

  .img::after {
    content: "";
    background:rgb(27 56 116 / 40%);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: 0.3s ease;
  }
  .img:hover::after {
    background: rgb(27 56 116 / 0)
  }
}

@media (max-width: 539px) {
  .detail {
    background:rgb(27 56 116 / 40%);
  }
}

.title span {
  color: #0192E4;
}
.tecnologies li {
  font-size: 0.875rem;
}

.tecnologies li + li {
  margin-left: 0.5rem;
}
</style>
