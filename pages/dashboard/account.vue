<template>
  <div class="screen">
    <vs-row align="center" justify="space-around">
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
    <vs-row align="center" justify="space-around">
      <vs-col w="3">
        <h4>Notícias.</h4>
        <ChangeNewsletter />
      </vs-col>
      <vs-col v-show="whatRole == 'talent'" w="3">
        <h4>Emprego.</h4>
        <ChangeJob />
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import ChangePassword from '@/components/ChangePassword.vue'
import ChangeEmail from '@/components/ChangeEmail.vue'
import ChangeAccountPublic from '@/components/ChangeAccountPublic.vue'
import ChangeNewsletter from '@/components/ChangeNewsletter.vue'
import ChangeJob from '@/components/ChangeJob.vue'

export default {
  layout: 'dashboard',
  components: {
    ChangePassword,
    ChangeEmail,
    ChangeAccountPublic,
    ChangeNewsletter,
    ChangeJob,
  },
  computed: {
    ...mapGetters({
      whatRole: 'auth/whatRole',
    }),
  },
}
</script>

<style>
.screen {
  height: 95vh;
}
</style>
