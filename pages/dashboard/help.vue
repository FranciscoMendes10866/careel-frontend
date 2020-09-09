<template>
  <div>
    <vs-row class="screen" align="center" justify="center">
      <vs-col w="2">
        <vs-input primary placeholder="Assunto" />
      </vs-col>
      <vs-col w="2">
        <vs-input primary placeholder="Mensagem" />
      </vs-col>
      <vs-col w="1">
        <vs-button> <i class="bx bxs-paper-plane"></i>&nbsp;Enviar </vs-button>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
}
</script>

<style lang="stylus">
.margin {
  margin-bottom: 40px;
}

.screen {
  height: 97vh;
}
</style>
