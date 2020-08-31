<template>
  <div class="container">
    <!-- Hero landing -->
    <vs-row class="row" align="center">
      <vs-col lg="6" md="6" sm="12" xs="12">
        <h1>
          Escolha o emprego
          <span>que ama</span>.
        </h1>
        <p class="mt-30">
          Damasus é uma plataforma de empregos voltada para o mercado de
          tecnologia e design. Crie um perfil e deixe que empregadores se
          candidatem a ti.
        </p>
        <vs-button to="/app/signup" class="mt-40" floating size="xl"
          >Começar agora!</vs-button
        >
      </vs-col>
      <vs-col lg="6" md="6" sm="12" xs="12">
        <img
          src="https://res.cloudinary.com/dj5iihhqv/image/upload/v1598835554/DAMASUS/sapiens_lifmft.png"
          alt
        />
      </vs-col>
    </vs-row>
    <!-- Ideal Role -->
    <vs-row class="row-rest" align="center">
      <vs-col lg="6" md="6" sm="12" xs="12">
        <img
          src="https://res.cloudinary.com/dj5iihhqv/image/upload/v1598836119/sapiens_1_iakz06.png"
          alt
        />
      </vs-col>
      <vs-col lg="6" md="6" sm="12" xs="12">
        <h1>Junte-se a uma empresa com o seu cargo desejado.</h1>
        <p class="mt-30">
          Com esta plataforma, a procura do seu emprego ideal tornou-se mais
          fácil. Encontre o perfil da empresa que deseja, assim que vir algo que
          lhe chama o interesse, dê um like!
        </p>
        <vs-button to="/app/signup" class="mt-40" floating size="large"
          >Experimente!</vs-button
        >
      </vs-col>
    </vs-row>
    <!-- Tools -->
    <vs-row class="row-rest" align="center">
      <vs-col lg="6" md="6" sm="12" xs="12">
        <h1>Trabalhe com as ferramentas que mais ama.</h1>
        <p class="mt-30">
          Seja programador de Javascript, Go, ou Figma, ou Adobe Photoshop, ou
          qualquer outra coisa. No Damasus vai poder encontrar diversos perfis
          de empresas que estão interessados trabalhar com as mais ferramentas e
          tecnologias.
        </p>
        <vs-button to="/app/signup" class="mt-40" floating size="large"
          >Experimente!</vs-button
        >
      </vs-col>
      <vs-col lg="6" md="6" sm="12" xs="12">
        <img
          src="https://res.cloudinary.com/dj5iihhqv/image/upload/v1598836599/sapiens_2_ixichk.png"
          alt
        />
      </vs-col>
    </vs-row>
    <!-- Location -->
    <vs-row class="row-rest" align="center">
      <vs-col lg="6" md="6" sm="12" xs="12">
        <img
          src="https://res.cloudinary.com/dj5iihhqv/image/upload/v1598836948/sapiens_3_fjtjfz.png"
          alt
        />
      </vs-col>
      <vs-col lg="6" md="6" sm="12" xs="12">
        <h1>Escolha as suas localizações ideais para trabalhar.</h1>
        <p class="mt-30">
          Do mesma maneira que podem usufruir do cargo que mais desejam, ainda
          pode ter a chance de encontrar uma empresa que esteja interessado em
          empregá-lo na região do país que mais gostaria de trabalhar.
        </p>
        <vs-button to="/app/signup" class="mt-40" floating size="large"
          >Iniciar processo</vs-button
        >
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  layout: 'default',
}
</script>

<style scoped>
h1 {
  font-size: 40px;
  font-weight: 400;
}
span {
  font-weight: 800;
}
.row {
  margin-top: 50px;
  padding-top: 70px;
  padding-bottom: 70px;
}
.row-rest {
  padding-top: 70px;
  padding-bottom: 70px;
}
.container {
  max-width: 0 auto;
  margin: 0px;
  padding-left: 50px;
  padding-right: 50px;
}
p {
  font-weight: 500;
  font-size: 18px;
  line-height: 29px;
  color: lightslategray;
}
.mt-40 {
  margin-top: 40px;
}
.mt-30 {
  margin-top: 30px;
}
img {
  background: no-repeat;
  width: 550px;
}
</style>
