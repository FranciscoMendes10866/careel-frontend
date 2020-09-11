<template>
  <div>
    <vs-input v-model="localEmail" primary placeholder="Insira o novo email" />
  </div>
</template>

<script>
export default {
  data: () => ({
    localEmail: '',
  }),
}
</script>
