<template>
  <div class="hidden">
    <vs-sidebar v-model="active" absolute hover-expand reduce open>
      <template #logo>
        <!-- ...img logo -->
      </template>
      <vs-sidebar-item id="home" to="/sponsor">
        <template #icon>
          <i class="bx bx-home"></i>
        </template>
        Home
      </vs-sidebar-item>

      <vs-sidebar-item id="market" to="/sponsor/plans">
        <template #icon>
          <i class="bx bx-grid-alt"></i>
        </template>
        Planos
      </vs-sidebar-item>

      <vs-sidebar-item id="security" to="/sponsor/security">
        <template #icon>
          <i class="bx bx-check-shield"></i>
        </template>
        Segurança
      </vs-sidebar-item>

      <vs-sidebar-item id="chat" to="/sponsor/help">
        <template #icon>
          <i class="bx bx-chat"></i>
        </template>
        Dúvidas
      </vs-sidebar-item>

      <template #footer>
        <vs-row justify="space-between">
          <vs-button primary flat @click="LogOut">
            <i class="bx bx-log-out-circle"></i>
            <template #animate>Sair</template>
          </vs-button>

          <vs-avatar badge-color="danger" badge-position="top-right">
            <i class="bx bx-bell"></i>
            <template #badge> 28 </template>
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
  }),
  methods: {
    ...mapActions({
      LogOut: 'auth/LogOut',
    }),
  },
}
</script>
