<template>
  <div class="main-content">
    <breadcumb page="Rutas" :folder="'Contratos'"/>

    <b-row>
      <b-col lg="4" md="4" sm="12">
        <b-card title="Información contrato">
          <div class="mt-2">
            <b>Número interno</b> {{contract.number}}
          </div>
          <div class="mt-4">
            <b>Conductor 1</b> {{contract.user.full_name}} | {{contract.user.identification_number}}
          </div>
          <div class="mt-2" v-if="contract.user_second_id">
            <b>Conductor 2</b> {{contract.user_second.full_name}} | {{contract.user_second.identification_number}}
          </div>
          <div class="mt-2" v-if="contract.user_third_id">
            <b>Conductor 3</b> {{contract.user_third.full_name}} | {{contract.user_third.identification_number}}
          </div>
          <div class="mt-2" v-if="contract.user_four_id">
            <b>Conductor 4</b> {{contract.user_four.full_name}} | {{contract.user_four.identification_number}}
          </div>
          <div class="mt-4">
            <b>Contratante</b> {{contract.contractor.contractor}}
          </div>
          <div class="mt-2">
            <b>Ubicación</b> {{contract.municipality.name}} - {{contract.department.name}}
          </div>
          <div class="mt-2">
            <b>Desde</b> {{contract.start_date}}
          </div>
          <div class="mt-2">
            <b>Hasta</b> {{contract.end_date}}
          </div>
        </b-card>
        <b-card class="mt-2">
          <Map :key="updateMap" :showRoute="true" />
        </b-card>
      </b-col>
      <b-col lg="8" md="8" sm="12">
        <Form @changeRoute="changeRoute" :contractId="id" />
        <Card :route="route" v-for="(route, index) in routes" :key="route.id" />
      </b-col>
    </b-row>

  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import Map from '../map.vue'
import Card from './card.vue'
import Form from './form.vue'
export default {
  data () {
    return {
      updateMap: null
    }
  },
  name: "indexDocuments",
  props: ['id'],
  components: {
    Map,
    Form,
    Card
  },
  created() {
    this.getContract(this.id);
    this.getRoutes(this.id);
  },
  methods: {
    ...mapActions('contracts', ['getContract']),
    ...mapActions('contractRoutes', ['getRoutes', 'updateRoute', 'createRoute', 'deleteRoute']),
    changeRoute () {
      this.updateMap = Math.random();
    }
  },
  computed: {
    ...mapState('contracts', ['contract']),
    ...mapState('contractRoutes', ['routes'])
  }
}
</script>

<style scoped>

</style>
