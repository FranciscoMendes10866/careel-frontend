<template>
  <div class="center examplex">
    <vs-navbar v-model="active" center-collapsed>
      <template #left>
        <h3>Damasus</h3>
      </template>
      <vs-navbar-item id="guide" :active="active == 'guide'">
        Guide
      </vs-navbar-item>
      <vs-navbar-item id="docs" :active="active == 'docs'">
        Documents
      </vs-navbar-item>
      <vs-navbar-item id="components" :active="active == 'components'">
        Components
      </vs-navbar-item>
      <vs-navbar-item id="license" :active="active == 'license'">
        license
      </vs-navbar-item>
      <template #right>
        <vs-button flat>Login</vs-button>
        <vs-button>Get Started</vs-button>
      </template>
    </vs-navbar>
  </div>
</template>
<script>
export default {
  data: () => ({
    active: 'guide',
  }),
}
</script>
