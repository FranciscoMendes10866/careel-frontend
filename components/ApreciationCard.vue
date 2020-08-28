<template>
  <vs-card type="1">
    <template #title>
      <h3>Manuela Mendonça</h3>
    </template>
    <template #img>
      <img
        src="https://images.unsplash.com/photo-1473027118777-040f756769fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
        alt
      />
    </template>
    <template #text>
      <p>Design de Moda.</p>
    </template>
    <template #interactions>
      <vs-tooltip left dark>
        <vs-button shadow icon>
          <i class="bx bxs-bomb"></i>
        </vs-button>
        <template #tooltip>Deixar de seguir.</template>
      </vs-tooltip>
      <vs-tooltip top primary>
        <vs-button primary icon>
          <i class="bx bx-message-square-detail"></i>
        </vs-button>
        <template #tooltip>Enviar mensagem.</template>
      </vs-tooltip>
      <vs-tooltip right danger>
        <vs-button danger icon>
          <i class="bx bx-bug-alt"></i>
        </vs-button>
        <template #tooltip>Denúnciar.</template>
      </vs-tooltip>
    </template>
  </vs-card>
</template>

<script>
export default {}
</script>
