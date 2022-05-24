<template>
  <div class="main-content">
    <breadcumb page="Documentación" :folder="'vehiculos'"/>

    <b-card class="mb-5">
      <b-row>
        <b-col md="8">
          <b-form-input v-model="search.name" placeholder="Busca un vehiculo por placa"/>
        </b-col>
        <b-col md="4">
          <b-button :disabled="search.name.length <= 5" variant="primary" @click="searcByCarPlate()">Buscar</b-button>
          <b-button variant="outline-danger" @click="reset()">Resetear</b-button>
        </b-col>
      </b-row>

    </b-card>

    <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
    ></b-pagination>

    <b-row>
      <b-col lg="6" md="6" sm="6" v-for="vehicle in vehiclesDocuments" :key="vehicle.id">
        <detail :vehicle="vehicle">
          <template v-slot:btn-form.document></template>
        </detail>
      </b-col>
    </b-row>

  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import detail from "./details";

export default {
  name: "indexDocuments",
  components: {detail},
  created() {
    if (!this.viewPermissions()) {
      this.$router.push({name: 'not-found'});
    }
    this.getVehiclesDocuments(this.search).then(total => {
      this.rows = total;
    });
    ;
  },
  data() {
    return {
      search: {
        page: 1,
        name: ""
      },
      currentPage: 1,
      perPage: 20,
      rows: 0,
    }
  },
  methods: {
    ...mapActions('vehicleDocument', ['getVehiclesDocuments', 'getVehiclesDocumentsByPlate']),
    viewPermissions() {
      return this.abilities.includes('*') || this.abilities.includes('vehiculos-documentacion');
    },
    searcByCarPlate() {
      this.getVehiclesDocuments(this.search);
    },
    reset() {
      this.search.name = "";
      this.getVehiclesDocuments(this.search);
    }
  },
  computed: {
    ...mapState('vehicleDocument', ['vehiclesDocuments']),
    ...mapState('auth', ['abilities'])
  },
  watch: {
    currentPage: function (val) {
      this.search.page = val;
      this.getVehiclesDocuments(this.search);
    }
  }
}
</script>

<style scoped>

</style>
