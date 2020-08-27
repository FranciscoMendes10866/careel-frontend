<template>
  <div class="hidden">
    <vs-sidebar v-model="active" absolute reduce open>
      <template #logo>
        <!-- ...img logo -->
      </template>

      <vs-sidebar-item id="home" to="/dashboard">
        <template #icon>
          <i class="bx bxs-home"></i>
        </template>
        Página Principal
      </vs-sidebar-item>

      <vs-sidebar-group>
        <template #header>
          <vs-sidebar-item arrow>
            <template #icon>
              <i class="bx bx-compass"></i>
            </template>
            Descobrir
          </vs-sidebar-item>
        </template>

        <vs-sidebar-item id="by-region" to="/dashboard/discover/region">
          <template #icon>
            <i class="bx bx-map-pin"></i>
          </template>
          Por Região
        </vs-sidebar-item>
        <vs-sidebar-item id="by-profession" to="/dashboard/discover/profession">
          <template #icon>
            <i class="bx bxs-planet"></i>
          </template>
          Por Profissão
        </vs-sidebar-item>
      </vs-sidebar-group>

      <vs-sidebar-group>
        <template #header>
          <vs-sidebar-item arrow>
            <template #icon>
              <i class="bx bx-user"></i>
            </template>
            Perfil
          </vs-sidebar-item>
        </template>

        <vs-sidebar-item id="CV">
          <template #icon>
            <i class="bx bx-file"></i>
          </template>
          Curriculum vitae
        </vs-sidebar-item>
        <vs-sidebar-item id="profile">
          <template #icon>
            <i class="bx bx-barcode-reader"></i>
          </template>
          Identidade
        </vs-sidebar-item>
        <vs-sidebar-item id="education">
          <template #icon>
            <i class="bx bxs-graduation"></i>
          </template>
          Educação
        </vs-sidebar-item>
        <vs-sidebar-item id="experiences">
          <template #icon>
            <i class="bx bxs-backpack"></i>
          </template>
          Experiências
        </vs-sidebar-item>
        <vs-sidebar-item id="abilities">
          <template #icon>
            <i class="bx bxs-medal"></i>
          </template>
          Habilidades
        </vs-sidebar-item>
        <vs-sidebar-item id="languages">
          <template #icon>
            <i class="bx bx-braille"></i>
          </template>
          Línguas
        </vs-sidebar-item>
        <vs-sidebar-item id="portfolio">
          <template #icon>
            <i class="bx bx-package"></i>
          </template>
          Trabalhos
        </vs-sidebar-item>
      </vs-sidebar-group>

      <vs-sidebar-item id="apreciations">
        <template #icon>
          <i class="bx bxs-book-heart"></i>
        </template>
        Apreciações
      </vs-sidebar-item>

      <vs-sidebar-item id="inbox">
        <template #icon>
          <i class="bx bxs-inbox"></i>
        </template>
        Mensagens
      </vs-sidebar-item>

      <vs-sidebar-item id="account">
        <template #icon>
          <i class="bx bxs-cog"></i>
        </template>
        Conta
      </vs-sidebar-item>

      <vs-sidebar-item id="chat">
        <template #icon>
          <i class="bx bx-chat"></i>
        </template>
        Ajuda
      </vs-sidebar-item>

      <template #footer>
        <vs-row justify="space-between">
          <vs-button primary flat>
            <i class="bx bx-log-out-circle"></i>
            <template #animate>Sair</template>
          </vs-button>

          <vs-avatar history danger>
            <img
              src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
              alt
            />
          </vs-avatar>
        </vs-row>
      </template>
    </vs-sidebar>
  </div>
</template>
<script>
export default {
  data: () => ({
    active: 'home',
  }),
}
</script>
