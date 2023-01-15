<template>
  <div>

    <h1>sdkskdjaskdjaljdja</h1>
    <pre>
      {{ route.params.id}}
    </pre>
  </div>
</template>
<script>
  export default {
    name: 'Projeto',
    inheritAttrs: false,
    customOptions: {}
  }
</script>

<script setup>
import { computed, defineComponent, useRoute } from '@nuxtjs/composition-api'

const route = useRoute()


</script>
