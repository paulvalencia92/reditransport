<template>
  <div class="main-content">
    <breadcumb :page="'Mantenimiento vehiculos'" :folder="'inventario'"/>


    <!--============================
                BUSCADOR
    ==============================-->
    <b-card>
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


    <div class="text-right mt-2">
      <router-link class="btn btn-primary" :to="{name: 'registrar-mantenimiento-vehiculos'}">Registrar</router-link>
    </div>


    <!--============================
          TABLA
    ==============================-->
    <div class="text-right mt-2">
      <b-card class="mt-4" v-if="maintenances.length">
        <b-table striped hover responsive :items="maintenances" :fields="fields">

          <template v-slot:cell(date)="data">
            {{ data.item.date | formatDate }}
          </template>

          <template v-slot:cell(actions)="data">

            <b-button size="sm" @click="showTable(data.item)" variant="outline-primary">Ver tabla</b-button>
            <b-button :disabled="submitStatus" size="sm" @click="downloadPdf(data.item.id)" variant="outline-danger">
              Descargar pdf
            </b-button>
          </template>

        </b-table>


        <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
        ></b-pagination>


      </b-card>
    </div>


    <!--============================
            MODAL ITEMS
    ==============================-->
    <b-modal ref="modal-mantenaince-vehicle" size="lg" hide-footer
             :title="`Vehiculo ${currentVehicle.car_plate} - Conductor ${currentVehicle.driver}`">
      <b-table :fields="itemsfields" :items="itemsVehicle" striped hover responsive bordered>
      </b-table>
    </b-modal>


    <!-- Spinner-->
    <b-col md="12" class="d-flex justify-content-center" :class="{'m-28' : !submitStatus}">
      <div v-if="submitStatus" class="spinner sm spinner-primary mt-3"></div>
    </b-col>


  </div>
</template>

<script>
import moment from "moment";
import {mapActions, mapMutations, mapState} from "vuex";
import FileDownload from "js-file-download";

export default {
  name: "index",
  created() {
    this.CHANGE_SUBMIT_STATUS(false);
    this.getVehicleManteninace(this.search).then(total => {
      this.rows = total;
    });
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
        {key: 'type', label: 'Tipo de vehículo'},
        {key: 'date', label: 'Fecha de Entrega'},
        {key: 'pase'},
        {key: 'vence'},
        {key: 'categoria'},
        {key: 'observaciones'},
        {key: 'total_gasto'},
        {key: 'actions', label: 'Acciones'},
      ],
      currentVehicle: {
        car_plate: '',
        driver: ''
      },
      itemsVehicle: null,
      itemsfields: [
        {key: 'km'},
        {key: 'fecha'},
        {key: 'descripcion'},
        {key: 'valor_servicio'},
      ]
    }
  },
  methods: {
    ...mapMutations(['CHANGE_SUBMIT_STATUS', 'CLEAR_ERRORS']),
    ...mapActions('vehicleManteinance', ['getVehicleManteninace']),
    searchVehicles() {
      this.getVehicleManteninace(this.search).then(total => {
        this.rows = total;
      });
    },
    reset() {
      this.search.from = '';
      this.search.to = '';
      this.search.car_plate = '';
      this.search.page = 1;
    },
    showTable(data) {
      this.currentVehicle = {car_plate: data.car_plate, driver: data.driver}
      this.itemsVehicle = data.items;
      this.$refs['modal-mantenaince-vehicle'].show();
    },
    async downloadPdf(id) {
      this.CHANGE_SUBMIT_STATUS(true);
      await axios.get(`/api/vehicle-maintenances/generate-pdf/${id}`, {responseType: 'blob'}).then((response) => {
        FileDownload(response.data, id + '-mantenimiento.pdf');
        this.CHANGE_SUBMIT_STATUS(false);
      });

    }
  },
  computed: {
    ...mapState('vehicleManteinance', ['maintenances']),
    ...mapState(['submitStatus'])
  },
  watch: {
    currentPage: function (val) {
      this.search.page = val;
      this.getVehicleManteninace(this.search).then(total => {
        this.rows = total;
      });
    }
  }
}
</script>

<style scoped>

</style>
