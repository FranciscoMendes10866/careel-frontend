<template>
  <div class="center examplex">
    <vs-navbar v-model="active" center-collapsed>
      <template #left>
        <h3>Damasus</h3>
      </template>
      <vs-navbar-item id="talents" :active="active == 'talents'">
        Talentos
      </vs-navbar-item>
      <vs-navbar-item id="employers" :active="active == 'employers'">
        Empresas
      </vs-navbar-item>
      <vs-navbar-item id="about" :active="active == 'about'">
        Sobre
      </vs-navbar-item>
      <vs-navbar-item id="branding" :active="active == 'branding'">
        Branding
      </vs-navbar-item>
      <template #right>
        <vs-button flat to="/app/signin">Iniciar sessão.</vs-button>
        <vs-button to="/app/signup">Criar conta.</vs-button>
      </template>
    </vs-navbar>
  </div>
</template>
<script>
export default {
  data: () => ({
    active: 'talents',
  }),
}
</script>
