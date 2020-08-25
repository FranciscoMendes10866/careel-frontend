<template>
  <div>
    <vs-card-group>
      <vs-card v-for="user in Users" :key="user.id" type="5">
        <template #title>
          <h3>{{ user.name }}</h3>
        </template>
        <template #img>
          <img :src="user.pic" alt />
        </template>
        <template #text>
          <p>{{ user.job }}</p>
        </template>
        <template #interactions>
          <vs-button danger icon>
            <i class="bx bx-heart"></i>
          </vs-button>
          <vs-button class="btn-chat" shadow primary>
            <i class="bx bx-map-pin"></i>
            <span class="span">&nbsp;&nbsp;{{ user.location }}</span>
          </vs-button>
        </template>
      </vs-card>
    </vs-card-group>
  </div>
</template>

<script>
export default {
  data: () => ({
    Users: [
      {
        id: 1,
        name: 'João Gomes',
        location: 'Coimbra',
        job: 'Sofware Developer',
        pic:
          'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
      },
      {
        id: 2,
        name: 'Ricardo Malva',
        location: 'Coimbra',
        job: 'Frontend Developer',
        pic:
          'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
      },
      {
        id: 3,
        name: 'Rodrigo Mercador',
        location: 'Coimbra',
        job: 'Backend Developer',
        pic:
          'https://images.unsplash.com/photo-1546015720-b8b30df5aa27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      },
    ],
  }),
}
</script>
