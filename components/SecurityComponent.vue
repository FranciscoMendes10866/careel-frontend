<template>
  <vs-row class="screen" align="center">
    <vs-col offset="2" w="8" align="center" class="px">
      <vs-table striped>
        <template #thead>
          <vs-tr>
            <vs-th>Data de acesso</vs-th>
            <vs-th>Sistema</vs-th>
            <vs-th>Plataforma</vs-th>
            <vs-th>Navegador</vs-th>
            <vs-th>Ações</vs-th>
          </vs-tr>
        </template>
        <template #tbody>
          <vs-tr v-for="(tr, i) in $vs.getPage(devices, page, max)" :key="i">
            <vs-td>
              {{ tr.login_date | moment('timezone', 'Europe/Lisbon', 'LLLL') }}
            </vs-td>
            <vs-td>{{ tr.device_platform }}</vs-td>
            <vs-td>{{ tr.device_type }}</vs-td>
            <vs-td>{{ tr.device_product }}</vs-td>
            <vs-td>
              <vs-tooltip v-if="tr.device_allowed == true" right danger>
                <vs-button danger flat icon @click="BlockDevice(tr)">
                  <i class="bx bx-lock-alt"></i>
                </vs-button>
                <template #tooltip>Bloquear dispositivo.</template>
              </vs-tooltip>
              <!-- Unlock Button -->
              <vs-tooltip v-if="tr.device_allowed == false" right success>
                <vs-button success flat icon @click="UnblockDevice(tr)">
                  <i class="bx bx-lock-open-alt"></i>
                </vs-button>
                <template #tooltip>Desbloquear dispositivo.</template>
              </vs-tooltip>
            </vs-td>
          </vs-tr>
        </template>
        <template #footer>
          <vs-pagination v-model="page" :length="$vs.getLength(devices, max)" />
        </template>
      </vs-table>
    </vs-col>
  </vs-row>
</template>

<script>
export default {
  data: () => ({
    device: {
      id: null,
      device_platform: null,
      device_type: null,
      device_product: null,
      device_allowed: null,
    },
    page: 1,
    max: 3,
    devices: [],
  }),
  mounted() {
    this.FetchSecurity()
  },
  methods: {
    FetchSecurity() {
      this.$api
        .get('/account/get_devices', {
          headers: {
            Authorization: `Bearer ${this.$store.state.auth.token}`,
          },
        })
        .then(({ data }) => {
          // eslint-disable-next-line no-console
          this.devices = data.devices
        })
        .catch(() => {
          // eslint-disable-next-line no-console
          console.log('Ocorreu um erro.')
        })
    },
    BlockDevice(tr) {
      this.device = tr
      const componentState = { device_allowed: false }
      this.$api
        .put(`/account/update_device/${tr.id}`, componentState, {
          headers: {
            Authorization: `Bearer ${this.$store.state.auth.token}`,
          },
        })
        // eslint-disable-next-line no-console
        .then(() => this.FetchSecurity())
        // eslint-disable-next-line no-console
        .catch(() => console.log('Deu erro.'))
    },
    UnblockDevice(tr) {
      this.device = tr
      const componentState = { device_allowed: true }
      this.$api
        .put(`/account/update_device/${tr.id}`, componentState, {
          headers: {
            Authorization: `Bearer ${this.$store.state.auth.token}`,
          },
        })
        // eslint-disable-next-line no-console
        .then(() => this.FetchSecurity())
        // eslint-disable-next-line no-console
        .catch(() => console.log('Deu erro.'))
    },
  },
}
</script>

<style lang="stylus" scoped>
.screen {
  height: 95vh;
}

.cl-s {
  color: #17c964;
}

.cl-d {
  color: #f2135d;
}
</style>
