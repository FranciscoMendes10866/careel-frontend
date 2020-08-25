<template>
  <div>
    <vs-card>
      <template #title>
        <h3>João Gomes</h3>
      </template>
      <template #img>
        <img
          src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
          alt
        />
      </template>
      <template #text>
        <p>Sofware Developer</p>
      </template>
      <template #interactions>
        <vs-button danger icon>
          <i class="bx bx-heart"></i>
        </vs-button>
        <vs-button class="btn-chat" shadow primary>
          <i class="bx bx-map-pin"></i>
          <span class="span">&nbsp;&nbsp;Coimbra</span>
        </vs-button>
      </template>
    </vs-card>
  </div>
</template>

<script>
export default {}
</script>
