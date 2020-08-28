<template>
  <div>
    <vs-row justify="space-between" align="center">
      <vs-col w="3">
        <!-- Select Component -->
        <vs-select v-model="region" label="Regiões" placeholder="Regiões">
          <vs-option-group>
            <div slot="title">Região Norte</div>
            <vs-option label="Viana do Castelo" value="Viana do Castelo"
              >Viana do Castelo</vs-option
            >
            <vs-option label="Braga" value="Braga">Braga</vs-option>
            <vs-option label="Porto" value="Porto">Porto</vs-option>
            <vs-option label="Vila Real" value="Vila Real">Vila Real</vs-option>
            <vs-option label="Bragança" value="Bragança">Bragança</vs-option>
          </vs-option-group>
          <vs-option-group>
            <div slot="title">Região Centro</div>
            <vs-option label="Aveiro" value="Aveiro">Aveiro</vs-option>
            <vs-option label="Coimbra" value="Coimbra">Coimbra</vs-option>
            <vs-option label="Viseu" value="Viseu">Viseu</vs-option>
            <vs-option label="Guarda" value="Guarda">Guarda</vs-option>
            <vs-option label="Castelo Branco" value="Castelo Branco"
              >Castelo Branco</vs-option
            >
            <vs-option label="Leiria" value="Leiria">Leiria</vs-option>
          </vs-option-group>
          <vs-option-group>
            <div slot="title">Região Sul</div>
            <vs-option label="Santarém" value="Santarém">Santarém</vs-option>
            <vs-option label="Portalegre" value="Portalegre"
              >Portalegre</vs-option
            >
            <vs-option label="Lisboa" value="Lisboa">Lisboa</vs-option>
            <vs-option label="Évora" value="Évora">Évora</vs-option>
            <vs-option label="Setúbal" value="Setúbal">Setúbal</vs-option>
            <vs-option label="Beja" value="Beja">Beja</vs-option>
            <vs-option label="Faro" value="Faro">Faro</vs-option>
          </vs-option-group>
        </vs-select>
      </vs-col>
      <vs-col w="1">
        <!-- Search Button -->
        <vs-button icon>
          <i class="bx bx-search-alt"></i>
        </vs-button>
      </vs-col>
      <vs-col w="5">
        <!-- Empty Col -->
      </vs-col>
      <vs-col w="3">
        <!-- Filter Component -->
        <vs-select
          v-model="filterProfession"
          label="Filtrar"
          filter
          placeholder="Filtrar por Profissão"
        >
          <vs-option-group>
            <div slot="title">Programação</div>
            <vs-option label="Front-end Developer" value="Front-end Developer">
              Front-end Developer
            </vs-option>
            <vs-option label="Back-end Developer" value="Back-end Developer">
              Back-end Developer
            </vs-option>
            <vs-option
              label="Javascript Developer"
              value="Javascript Developer"
            >
              Javascript Developer
            </vs-option>
            <vs-option label="PHP Developer" value="PHP Developer">
              PHP Developer
            </vs-option>
            <vs-option label="Python Developer" value="Python Developer">
              Python Developer
            </vs-option>
            <vs-option label="Ruby Developer" value="Ruby Developer">
              Ruby Developer
            </vs-option>
            <vs-option label="Elixir Developer" value="Elixir Developer">
              Elixir Developer
            </vs-option>
            <vs-option
              label="Full Stack Developer"
              value="Full Stack Developer"
            >
              Full Stack Developer
            </vs-option>
            <vs-option label="Software Developer" value="Software Developer">
              Software Developer
            </vs-option>
            <vs-option label="Software Engineer" value="Software Engineer">
              Software Engineer
            </vs-option>
            <vs-option label="DevOps Engineer" value="DevOps Engineer">
              DevOps Engineer
            </vs-option>
          </vs-option-group>
          <vs-option-group>
            <div slot="title">Design</div>
            <vs-option label="Design Gráfico" value="Design Gráfico">
              Design Gráfico
            </vs-option>
            <vs-option label="Design Editorial" value="Design Editorial">
              Design Editorial
            </vs-option>
            <vs-option label="Design de Produto" value="Design de Produto">
              Design de Produto
            </vs-option>
            <vs-option label="Design de Moda" value="Design de Moda">
              Design de Moda
            </vs-option>
            <vs-option
              label="Design de Interiores"
              value="Design de Interiores"
            >
              Design de Interiores
            </vs-option>
            <vs-option label="Furniture Design" value="Furniture Design">
              Furniture Design
            </vs-option>
            <vs-option label="Packaging Design" value="Packaging Design">
              Packaging Design
            </vs-option>
            <vs-option label="Ilustração" value="Ilustração">
              Ilustração
            </vs-option>
            <vs-option label="Motion Design" value="Motion Design">
              Motion Design
            </vs-option>
            <vs-option label="Multimédia" value="Multimédia">
              Multimédia
            </vs-option>
            <vs-option
              label="Design de Comunicação"
              value="Design de Comunicação"
            >
              Design de Comunicação
            </vs-option>
            <vs-option label="UI/UX Design" value="UI/UX Design">
              UI/UX Design
            </vs-option>
          </vs-option-group>
        </vs-select>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    region: 'Viana do Castelo',
    filterProfession: 'Front-end Developer',
  }),
}
</script>
