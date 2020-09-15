<template>
  <div>
    <vs-row class="screen" align="center">
      <vs-col offset="2" w="8" align="center" class="px">
        <vs-table striped>
          <template #thead>
            <vs-tr>
              <vs-th>Sistema Operativo</vs-th>
              <vs-th>Browser</vs-th>
              <vs-th>Data de acesso</vs-th>
              <vs-th>Ações</vs-th>
            </vs-tr>
          </template>
          <template #tbody>
            <vs-tr v-for="(tr, i) in $vs.getPage(devices, page, max)" :key="i">
              <vs-td>{{ tr.device_platform }}</vs-td>
              <vs-td>{{ tr.device_product }}</vs-td>
              <vs-td>{{ tr.login_date }}</vs-td>
              <vs-td>
                <vs-tooltip left danger>
                  <vs-button danger flat icon>
                    <i class="bx bx-lock-alt"></i>
                  </vs-button>
                  <template #tooltip>Bloquear dispositivo.</template>
                </vs-tooltip>
                <!-- Unlock Button -->
                <!-- <vs-tooltip left success>
                  <vs-button success flat icon>
                    <i class="bx bx-lock-open-alt"></i>
                  </vs-button>
                  <template #tooltip>Desbloquear dispositivo.</template>
                </vs-tooltip> -->
              </vs-td>
            </vs-tr>
          </template>
          <template #footer>
            <vs-pagination
              v-model="page"
              :length="$vs.getLength(devices, max)"
            />
          </template>
        </vs-table>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    active: 0,
    page: 1,
    max: 3,
    devices: [],
  }),
  created() {
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
  layout: 'dashboard',
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
