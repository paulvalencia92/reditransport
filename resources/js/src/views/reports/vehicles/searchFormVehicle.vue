<template>
  <b-form @submit.prevent="submit">
    <b-row>
      <!--DESDE-->
      <b-col md="6">
        <b-form-group label="Desde" label-for="from">
          <b-form-datepicker id="from" v-model="search.from" class="mb-2"></b-form-datepicker>
        </b-form-group>
      </b-col>

      <!--HASTA-->
      <b-col md="6">
        <b-form-group label="Hasta" label-for="to">
          <b-form-datepicker id="to" v-model="search.to" class="mb-2"></b-form-datepicker>
        </b-form-group>
      </b-col>

      <!--NUMERO INTERNO-->
      <b-col md="4">
        <b-form-group label="Numero interno" label-for="internal_number">
          <b-form-input
              class="mb-2"
              id="internal_number"
              v-model="search.internal_number">
          </b-form-input>
        </b-form-group>
      </b-col>

      <!--PLACA-->
      <b-col md="4">
        <b-form-group label="Placa">
          <b-form-input
              class="mb-2"
              label="Nombres"
              v-model.trim="search.car_plate">
          </b-form-input>
        </b-form-group>
      </b-col>


      <!--CIUDAD RADICADO-->
      <b-col md="4">
        <b-form-group label="CIUDAD RADICADO" label-for="settledCities">
          <b-form-select
              v-model="search.settled_city"
              :options="settledCities"
              id="settledCities">
          </b-form-select>
        </b-form-group>
      </b-col>


      <b-col md="12" class="mt-4 text-right">
        <b-button class="mr-4" variant="danger" @click="resetFilter">Reestablecer filtros</b-button>
        <b-button variant="primary" type="submit">Generar reporte</b-button>
      </b-col>

    </b-row>
  </b-form>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";
import mapValues from "lodash/mapValues";

export default {
  name: "searchFormVehicle",
  data() {
    return {
      search: {
        from: null,
        to: null,
        internal_number: null,
        car_plate: null,
        settled_city: null,
      }
    }
  },
  methods: {
    ...mapActions('report', ['getReportVehicles']),
    ...mapMutations('report', ['ADD_REQUEST']),
    resetFilter() {
      this.search = mapValues(this.search, () => null);
      this.ADD_REQUEST(this.search);
    },
    submit() {
      this.ADD_REQUEST(this.search);
      this.getReportVehicles(this.search);
    }
  },
  computed: {
    ...mapGetters('vehicle', ['settledCities']),
  }
}
</script>

<style scoped>

</style>
