<template>
  <div class="container">
    <!-- Hero landing -->
    <vs-row class="row" align="center" justify="center">
      <vs-col lg="6" md="6" sm="12" xs="12">
        <h1>Contrua a sua <span>equipa de sonho</span>.</h1>
        <p class="mt-30">
          Damasus é a forma mais rápida e fácil de encontrar profissionais na
          área do desenvolvimento web e de Design.
        </p>
        <vs-button to="/app/signup" class="mt-40" floating size="xl"
          >Começar agora!</vs-button
        >
      </vs-col>
      <vs-col lg="5" md="5" sm="12" xs="12">
        <img
          src="https://res.cloudinary.com/dj5iihhqv/image/upload/v1598886957/DAMASUS/sapiens_nzjc6b.png"
          alt
        />
      </vs-col>
    </vs-row>
    <!-- Ideal Role -->
    <vs-row class="row-rest" align="center" justify="center">
      <vs-col lg="5" md="5" sm="12" xs="12" class="mr-30">
        <img
          src="https://res.cloudinary.com/dj5iihhqv/image/upload/v1598887054/DAMASUS/sapiens_1_cjsk4o.png"
          alt
        />
      </vs-col>
      <vs-col lg="6" md="6" sm="12" xs="12">
        <h1>Tenha acesso a profissionais ativos todos os dias.</h1>
        <p class="mt-30">
          Todos os dias, novos profissionais aparecem na sua lista de
          descoberta. Conecte-se apenas com aqueles com quem se identifica!
        </p>
        <vs-button to="/app/signup" class="mt-40" floating size="large"
          >Experimente!</vs-button
        >
      </vs-col>
    </vs-row>
    <!-- Tools -->
    <vs-row class="row-rest" align="center" justify="center">
      <vs-col lg="6" md="6" sm="12" xs="12">
        <h1>Formula inovadora de recrutamento de profissionais.</h1>
        <p class="mt-30">
          Encontre candidatos quando quiserem ser encontrados! Não necessita de
          passar novamente pela fase de seleção com a qual estava acostumado.
          Simplesmente veja os perfis dos candidatos e dê like apenas naqueles
          que se identifiquem na cultura da sua empresa.
        </p>
        <vs-button to="/app/signup" class="mt-40" floating size="large"
          >Experimente!</vs-button
        >
      </vs-col>
      <vs-col lg="5" md="5" sm="12" xs="12">
        <img
          src="https://res.cloudinary.com/dj5iihhqv/image/upload/v1598887169/DAMASUS/sapiens_2_pdk5gp.png"
          alt
        />
      </vs-col>
    </vs-row>
    <!-- Location -->
    <vs-row class="row-rest" align="center" justify="center">
      <vs-col lg="5" md="5" sm="12" xs="12">
        <img
          src="https://res.cloudinary.com/dj5iihhqv/image/upload/v1598887244/DAMASUS/sapiens_3_soc7qf.png"
          alt
        />
      </vs-col>
      <vs-col lg="6" md="6" sm="12" xs="12" class="ml-20">
        <h1>Uma plataforma de emprego totalmente gratuita.</h1>
        <p class="mt-30">
          Já chega de contratar empresas que filtravam o número de candidatos
          ideais à sua empresa! O Damasus tem um look e feeling semelhante a uma
          rede social. Encontre você mesmo, profissionais e conecte-se com eles!
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
.ml-20 {
  margin-left: 20px;
}
.mr-30 {
  margin-right: 30px;
}
img {
  background: no-repeat;
  width: 550px;
}
</style>
