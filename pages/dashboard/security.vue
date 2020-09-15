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
            <vs-tr v-for="(tr, i) in $vs.getPage(users, page, max)" :key="i">
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
            <vs-pagination v-model="page" :length="$vs.getLength(users, max)" />
          </template>
        </vs-table>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  data: () => ({
    active: 0,
    page: 1,
    max: 3,
    users: [
      {
        id: 1,
        device_platform: 'Mac',
        device_product: 'Firefox',
        login_date: '2020-09-15T15:53:51.079Z',
      },
      {
        id: 2,
        device_platform: 'Windows',
        device_product: 'Opera',
        login_date: '2020-09-15T15:53:51.079Z',
      },
      {
        id: 3,
        device_platform: 'Ubuntu',
        device_product: 'Chromium',
        login_date: '2020-09-15T15:53:51.079Z',
      },
      {
        id: 4,
        device_platform: 'Mac',
        device_product: 'Microsoft Edge',
        login_date: '2020-09-15T15:53:51.079Z',
      },
      {
        id: 5,
        device_platform: 'Fedora',
        device_product: 'Firefox',
        login_date: '2020-09-15T15:53:51.079Z',
      },
      {
        id: 6,
        device_platform: 'Kubuntu',
        device_product: 'Chrome Based',
        login_date: '2020-09-15T15:53:51.079Z',
      },
    ],
  }),
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
