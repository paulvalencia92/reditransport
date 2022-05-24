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

      <!--IDENTIFICACIÓN-->
      <b-col md="6">
        <b-form-group label="Identificación" label-for="identification_number">
          <b-form-input
              class="mb-2"
              id="identification_number"
              v-model="search.identification_number">
          </b-form-input>
        </b-form-group>
      </b-col>


      <!--NOMBRES-->
      <b-col md="6">
        <b-form-group label="Nombre afiliado" label-for="names">
          <b-form-input
              class="mb-2"
              id="names"
              v-model="search.names">
          </b-form-input>
        </b-form-group>
      </b-col>


      <!--Documentos-->
      <b-col md="12">
        <b-form-group label="Documentos:" v-slot="{ ariaDescribedby }">
          <b-form-checkbox-group
              id="documents"
              v-model="search.documents"
              :options="types"
              :aria-describedby="ariaDescribedby"
              name="documents">
          </b-form-checkbox-group>
        </b-form-group>
      </b-col>

      <!--Acciones-->
      <b-col md="12" class="mt-4 text-right">
        <b-button class="mr-4" variant="danger" @click="resetFilter">Reestablecer filtros</b-button>
        <b-button variant="primary" type="submit">Generar reporte</b-button>
      </b-col>

    </b-row>
  </b-form>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
  name: "searchFormAffiliate",
  created() {
    this.draft = clone(this.search)
  },
  data() {
    return {
      search: {
        from: null,
        to: null,
        identification_number: null,
        names: null,
      },
      draft: {}
    }
  },
  methods: {
    ...mapActions('report', ['getReportDocuments']),
    ...mapMutations('report', ['ADD_REQUEST', 'CLEAR_DATA']),
    submit() {
      this.ADD_REQUEST(this.search);
      this.getReportDocuments(this.search);
    },
    resetFilter() {
      this.search = clone(this.draft);
      this.ADD_REQUEST(this.search);
      this.CLEAR_DATA('affiliates');
    },
  },
  computed: {
    ...mapGetters('vehicleDocument', ['types']),
  }
}
</script>

<style scoped>

</style>
