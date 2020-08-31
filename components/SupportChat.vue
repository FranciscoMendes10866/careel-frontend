<template>
  <div>
    <vs-tooltip v-model="activeTooltip1" top shadow not-hover class="bottom">
      <vs-button
        size="xl"
        circle
        danger
        floating
        @click="activeTooltip1 = true"
      >
        <i class="bx bxs-chat"></i>
        &nbsp;&nbsp;Dúvidas
      </vs-button>
      <template #tooltip>
        <div class="content-tooltip">
          <h4 class="center">Qual é a sua dúvida?</h4>
          <vs-input type="email" placeholder="Email" />
          <vs-input class="mg" type="text" placeholder="Mensagem" />
          <footer>
            <vs-button primary block @click="activeTooltip1 = false"
              >Enviar.</vs-button
            >
            <vs-button transparent dark block @click="activeTooltip1 = false"
              >Cancelar</vs-button
            >
          </footer>
        </div>
      </template>
    </vs-tooltip>
  </div>
</template>

<script>
export default {
  data: () => ({
    activeTooltip1: false,
  }),
}
</script>

<style>
.bottom {
  position: fixed;
  right: 70px;
  bottom: 30px;
  z-index: 50;
}
.mg {
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
