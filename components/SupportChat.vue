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
        &nbsp;&nbsp;Suporte
      </vs-button>
      <template #tooltip>
        <div class="content-tooltip">
          <h4 class="center">Alguma dúvida?</h4>
          <vs-input v-model="supportEmail" type="email" placeholder="Email" />
          <vs-input
            v-model="supportEmail"
            class="mg"
            type="text"
            placeholder="Mensagem"
          />
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
  right: 0;
  bottom: 0;
  margin-right: 50px;
  margin-bottom: 30px;
}
.mg {
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
