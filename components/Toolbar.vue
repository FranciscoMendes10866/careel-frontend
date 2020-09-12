<template>
  <div class="hidden">
    <vs-navbar v-model="active" shadow square center-collapsed>
      <template #left>
        <vs-button flat icon @click="activeSidebar = !activeSidebar">
          <i class="bx bx-menu"></i>
        </vs-button>
      </template>
      <template #right>
        <vs-button icon @click="LogOut"
          ><i class="bx bx-log-out-circle"></i
          ><template #animate>&nbsp;Sair.&nbsp;</template></vs-button
        >
      </template>
    </vs-navbar>
    <vs-sidebar v-model="active" absolute :open.sync="activeSidebar">
      <template #logo>
        <!-- ...img logo -->
      </template>
      <vs-sidebar-item id="home" to="/admin">
        <template #icon>
          <i class="bx bx-home"></i>
        </template>
        Página Principal
      </vs-sidebar-item>
      <vs-sidebar-group>
        <template #header>
          <vs-sidebar-item arrow>
            <template #icon>
              <i class="bx bxl-mailchimp"></i>
            </template>
            Newsletter
          </vs-sidebar-item>
        </template>

        <vs-sidebar-item id="talents" to="/admin/newsletter/talents">
          <template #icon>
            <i class="bx bx-meteor"></i>
          </template>
          Talentos
        </vs-sidebar-item>
        <vs-sidebar-item id="employers" to="/admin/newsletter/employers">
          <template #icon>
            <i class="bx bx-coin"></i>
          </template>
          Empregadores
        </vs-sidebar-item>
        <vs-sidebar-item id="all" to="/admin/newsletter">
          <template #icon>
            <i class="bx bx-diamond"></i>
          </template>
          Todos
        </vs-sidebar-item>
      </vs-sidebar-group>
      <vs-sidebar-item id="ban" to="/admin/ban">
        <template #icon>
          <i class="bx bx-shield-x"></i>
        </template>
        Banir
      </vs-sidebar-item>
      <vs-sidebar-item id="stats" to="/admin/stats">
        <template #icon>
          <i class="bx bx-stats"></i>
        </template>
        Estatísticas
      </vs-sidebar-item>
      <template #footer>
        <vs-row justify="space-between">
          <vs-avatar badge-color="danger" badge-position="top-right">
            <i class="bx bxs-magnet"></i>
            <template #badge> 29867 </template>
          </vs-avatar>
        </vs-row>
      </template>
    </vs-sidebar>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  data: () => ({
    active: 'home',
    activeSidebar: false,
  }),
  methods: {
    ...mapActions({
      LogOut: 'auth/LogOut',
    }),
  },
}
</script>
