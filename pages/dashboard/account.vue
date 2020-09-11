<template>
  <div>
    <vs-row class="screen" align="center" justify="space-around">
      <vs-col w="3">
        <h4>Mudar palavra passe.</h4>
        <ChangePassword />
      </vs-col>
      <vs-col w="3">
        <h4>Mudar email.</h4>
        <ChangeEmail />
      </vs-col>
      <vs-col w="3">
        <h4>Alterar disponibilidade.</h4>
        <ChangeAccountPublic />
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import ChangePassword from '@/components/ChangePassword.vue'
import ChangeEmail from '@/components/ChangeEmail.vue'
import ChangeAccountPublic from '@/components/ChangeAccountPublic.vue'

export default {
  layout: 'dashboard',
  components: {
    ChangePassword,
    ChangeEmail,
    ChangeAccountPublic,
  },
}
</script>

<style>
.screen {
  height: 95vh;
}
</style>
