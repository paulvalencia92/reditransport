<template>
  <div class="main-content">
    <breadcumb :page="'Chequeo operacional'" :folder="'inventario'"/>

    <!--============================
            BUSCADOR
    ==============================-->
    <b-card class="mb-5">
      <b-row>

        <b-col md="4">
          <b-form-group label="Desde">
            <b-form-input type="date" v-model="search.from" placeholder="Desde"/>
          </b-form-group>
        </b-col>

        <b-col md="4">
          <b-form-group label="Hasta">
            <b-form-input type="date" v-model="search.to" placeholder="Hasta"/>
          </b-form-group>
        </b-col>

        <b-col md="4">
          <b-form-group label="Placa">
            <b-form-input v-model="search.car_plate" placeholder="Placa"/>
          </b-form-group>
        </b-col>

        <b-col md="4" class="mt-4">
          <b-button variant="primary" @click="searchVehicles()">Buscar</b-button>
          <b-button variant="outline-danger" @click="reset()">Resetear</b-button>
        </b-col>

      </b-row>
    </b-card>


    <div class="text-right">
      <router-link class="btn btn-primary" :to="{name: 'crear-chequeo-operacional'}">Registrar</router-link>
    </div>


    <!--============================
            TABLA
    ==============================-->

    <b-card class="mt-4" v-if="items.length">
      <b-table striped hover responsive :items="items" :fields="fields">

        <template v-slot:cell(date)="data">
          {{ data.item.date | formatDate }}
        </template>

        <template v-slot:cell(actions)="data">

          <b-button size="sm" @click="editInfo(data.item)" variant="outline-primary">Editar</b-button>
          <b-button :disabled="submitStatus" size="sm" @click="downloadPdf(data.item.id)" variant="outline-danger">
            Descargar pdf
          </b-button>
        </template>

      </b-table>
    </b-card>


    <!-- Spinner-->
    <b-col md="12" class="d-flex justify-content-center" :class="{'m-28' : !submitStatus}">
      <div v-if="submitStatus" class="spinner sm spinner-primary mt-3"></div>
    </b-col>


  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";
import moment from "moment";
import FileDownload from "js-file-download";

export default {
  name: "index",
  created() {
    this.getVehicleCheckOper(this.search).then(total => {
      this.rows = total;
    });
    this.SET_VEHICLES([]);
    this.CHANGE_SUBMIT_STATUS(false);
    this.CLEAR_ERRORS();
  },
  data() {
    return {
      search: {
        page: 1,
        from: "",
        to: "",
        car_plate: "",
      },
      currentPage: 1,
      perPage: 20,
      rows: 0,
      fields: [
        {key: 'car_plate', label: 'Vehiculo'},
        {key: 'driver', label: 'Conductor'},
        {key: 'internal_number', label: 'Numero interno'},
        {key: 'date', label: 'Fecha'},
        {key: 'observaciones', label: 'Observaciones'},
        {key: 'actions', label: 'Acciones'},
      ],
    }
  },
  methods: {
    ...mapActions('checkOperational', ['createCheck', 'getVehicleCheckOper']),
    ...mapMutations('vehicle', ['SET_VEHICLES']),
    ...mapMutations(['CHANGE_SUBMIT_STATUS', 'CLEAR_ERRORS']),
    searchVehicles() {
      this.getVehicleCheckOper(this.search).then(total => {
        this.rows = total;
      });
    },
    reset() {
      this.search.from = '';
      this.search.to = '';
      this.search.car_plate = "";
      this.search.page = 1;
    },
    editInfo(item) {
      this.$router.push({name: 'editar-chequeo-operacional', params: {id: item.id}})
    },
    async downloadPdf(id) {
      this.CHANGE_SUBMIT_STATUS(true);
      await axios.get(`/api/vehicle-check-operational/generate-pdf/${id}`, {responseType: 'blob'}).then((response) => {
        FileDownload(response.data, id + '-chequeo.pdf');
        this.CHANGE_SUBMIT_STATUS(false);
      });

    }
  },
  computed: {
    ...mapState(['errorMessages', 'submitStatus']),
    ...mapGetters('checkOperational', ['itemsGetters']),
    ...mapState('checkOperational', ['items']),
    ...mapState('vehicle', ['vehicles']),
    userOptions() {
      return this.drivers.map(driver => {
        return {
          value: driver['id'],
          text: driver['full_name'],
        }
      });
    }
  },
  watch: {
    'payload.user_id': function (value) {
      const selectedUser = this.drivers.find(driver => driver.id == value);
      this.payload.driver = selectedUser['full_name'];
    },
    currentPage: function (val) {
      this.search.page = val;
      this.getVehicleCheckOper(this.search).then(total => {
        this.rows = total;
      });
    }
  }
}
</script>

<style scoped>

</style>
