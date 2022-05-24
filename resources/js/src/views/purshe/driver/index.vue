<template>
  <div class="main-content">
    <breadcumb :page="'Listar pagos'" :folder="'Cartera'"/>

    <b-tabs content-class="mt-3">
      <b-tab @click="status_pay = 'No pago'" title="No pago" active></b-tab>
      <b-tab @click="status_pay = 'Parcialmente pago'" title="Parcialmente pago"></b-tab>
      <b-tab @click="status_pay = 'Pago completo'" title="Pago completo"></b-tab>
    </b-tabs>

    <vue-good-table
        :columns="columns"
        :line-numbers="false"
        :search-options="{
              enabled: true,
              placeholder: 'Search this table'}"
        :pagination-options="{
              enabled: true,
              mode: 'records'}"
        styleClass="tableOne vgt-table"
        :rows="purshes">

      <template slot="table-row" slot-scope="props">
        <div v-if="props.column.field == 'actions'">

          <b-button v-if="props.row.purshe_transaction.length" @click="showHistory(props.row)" variant="outline-light">Ver
            historial
          </b-button>
        </div>
      </template>
    </vue-good-table>


    <!--============================
          MODAL VER HISTORIAL
    ==============================-->
    <b-modal centered ref="modal_history" title="Historial" hide-footer size="lg">
      <div v-if="currentPurshe && currentPurshe.purshe_transaction.length">
        <b-list-group v-for="purshe in currentPurshe.purshe_transaction" :key="purshe.id">
          <b-list-group-item class="d-flex justify-content-between align-items-center">
            <p class="m-0"><b>Tipo: </b>{{ purshe.payment }} - <b>Pagado:</b> {{ purshe.cost }}</p>
            <p class="m-0">Fecha de pagado : {{ purshe.created_at | formatDate}}</p>
            <a class="btn btn-outline-success"
               download
               :href="`/storage/purshes/${purshe.file}`"
               v-if="purshe.file"
               variant="outline-success">
              Descargar
            </a>

          </b-list-group-item>
        </b-list-group>
      </div>
    </b-modal>

<!--    <b-row>-->
    <!--      <b-col v-for="purshe in purshes" :key="purshe.id" md="6">-->
    <!--        <details-purshe :purshe="purshe"/>-->
    <!--      </b-col>-->
    <!--    </b-row>-->

  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import detailsPurshe from "./detailsPurshe";

export default {
  name: "index",
  components: {
    detailsPurshe
  },
  created() {
    this.getMyPurshes(this.status_pay);
  },
  data() {
    return {
      status_pay: 'No pago',
      columns: [
        {label: "Tipo de pago", field: "type"},
        {label: "Detalle", field: "detail"},
        {label: "Fecha de pago", field: "payment_date"},
        {label: "Estado", field: "status_pay"},
        {label: "Total a pagar", field: "cost"},
        {label: "Acciones", field: "actions"},
      ],
      currentPurshe: null
    }
  },
  methods: {
    ...mapActions('purshe', ['getMyPurshes']),
    showHistory(data) {
      this.currentPurshe = data;
      this.$refs['modal_history'].show();
    }
  },
  computed: {
    ...mapState('purshe', ['purshes']),
  },
  watch: {
    'status_pay': function (value) {
      this.getMyPurshes(value);
    }
  }
}
</script>

<style scoped>

</style>
