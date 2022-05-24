<template>
  <div class="main-content">
    <breadcumb :page="'Listar pagos'" :folder="'Cartera'"/>

    <b-tabs content-class="mt-3">
      <b-tab @click="payload.status_pay = 'No pago'" title="No pago" active></b-tab>
      <b-tab @click="payload.status_pay = 'Parcialmente pago'" title="Parcialmente pago"></b-tab>
      <b-tab @click="payload.status_pay = 'Pago completo'" title="Pago completo"></b-tab>
    </b-tabs>

    <b-card title="Lista de pagos">

      <b-row class="mb-4">
        <b-col md="2">
          <b-form-select v-model="search.type" :options="optionsSearch"></b-form-select>
        </b-col>
        <b-col md="3">
          <b-form-input id="payment_date" v-model="search.data"
                        placeholder="Escribe el usuario o el número de placa"
                        class="input">
          </b-form-input>
        </b-col>
        <b-col md="4">
          <b-button @click="searchPurshes({ data:search.data, type: search.type })" variant="primary">Buscar</b-button>
          <b-button @click="getPurshes(payload)" >Limpiar filtros</b-button>
        </b-col>
      </b-row>

      <b-table hover :fields="fields" :items="purshes" :per-page="perPage" :current-page="currentPage">
        <template v-slot:cell(uuid)="data">
          {{ data.item.id }}
        </template>

        <template v-slot:cell(subject)="data">
          <span v-if="data.item.user">
            {{ data.item.user.names }} {{ data.item.user.surnames }}
          </span>
          <span v-if="data.item.vehicle">
            {{ data.item.vehicle.car_plate }}
          </span>
        </template>

        <!--1-->
        <template v-slot:cell(file)="data">
          <a download :href="`/storage/purshes/${data.item.file}`" v-if="data.item.file"
          v-b-tooltip.hover title="Descargar factura"
             class="btn btn-outline-success btn-rounded">
            <i class="i-Download"></i>
          </a>
        </template>

        <!--2-->
        <template v-slot:cell(is_pay)="data">
          <b-button :variant="data.item.is_pay ? 'success' : 'danger'" size="sm">
            {{ data.item.is_pay | status }}
          </b-button>
        </template>

        <template v-slot:cell(cost)="data">
            {{ data.item.cost | format_currency }}
        </template>


        <!--3-->
        <template v-slot:cell(actions)="data">
          <b-button :disabled="data.item.status_pay == 'Pago completo'" variant="outline-primary" class="btn-rounded" v-b-tooltip.hover title="Cambiar estado" @click="showModalChangeStatus(data.item.id)"> <i class="i-Shuffle-2"></i> </b-button>
          <b-button variant="outline-success" class="btn-rounded" @click="showModalAddFactura(data.item)" v-b-tooltip.hover title="Realizar pago"><i class="i-Financial"></i></b-button>
          <b-button variant="outline-danger" class="btn-rounded ml-2" v-b-tooltip.hover title="Eliminar pago" @click="showModalDeleteVehicle(data.item.id)"><i class="i-Delete-File"></i></b-button>
        </template>

        <!--3-->
        <template v-slot:cell(history)="data">
          <b-button v-if="data.item.purshe_transaction.length" variant="outline-primary" class="btn-rounded" v-b-tooltip.hover title="Historial de pagos"
                    @click="showHistory(data.item.purshe_transaction)">
                    <i class="i-Receipt"></i>
          </b-button>
        </template>


      </b-table>

      <!--============================
        PAGINACION
      ==============================-->
      <b-pagination
          v-model="payload.page"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table">
      </b-pagination>

      <!--============================
          MODAL VER HISTORIAL
      ==============================-->
      <b-modal centered ref="modal_history" title="Historial" hide-footer size="lg">
        <div v-if="history.length">
          <b-list-group v-for="purshe in history" :key="purshe.id">
            <b-list-group-item class="d-flex justify-content-between align-items-center">
              <p class="m-0"><b>Tipo: </b>{{ purshe.payment }} - <b>Pagado:</b> {{ purshe.cost }}</p>
              <p class="m-0"><b>Fecha de pagado :</b> {{ purshe.created_at | formatDate }}</p>
              <p class="m-0" v-if="purshe.user"><b>Pago realizado por:</b> {{ purshe.user.names }} {{ purshe.user.surnames }}</p>
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
    </b-card>


    <!--============================
         MODAL AGREGAR FACTURA
   ==============================-->
    <b-modal centered ref="modal_add_file" :title="`Factura de pago por $${amountTotal}`" hide-footer>
      <form-add-file :total="amountTotal" :pursheId="currentPursheId" @save="save"></form-add-file>
    </b-modal>

    <!--============================
     MODAL CAMBIAR ESTADO
    ==============================-->
    <b-modal centered ref="modal_change_status" title="Cambiar estado" hide-footer>
      <form-change-status :id="currentPursheId" @save="changeStatus"></form-change-status>
    </b-modal>


  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import formAddFile from "./driver/formAddFile";
import formChangeStatus from "./formChangeStatus";

export default {
  name: "listPurshs",
  components: {
    formAddFile,
    formChangeStatus
  },
  created() {
    this.getPurshes(this.payload).then(response => {
      this.rows = response.total;
    });
  },
  data() {
    return {
      fields: [
        {key: 'uuid', label: ' ID Factura'},
        {key: 'subject', label: 'Adeudado por'},
        {key: 'detail', label: 'Detalle'},
        {key: 'payment_date', label: 'Fecha de pago'},
        {key: 'payment', label: 'Tipo de pago'},
        {key: 'status_pay', label: 'Estado'},
        {key: 'cost', label: 'Total a pagar'},
        {key: 'file', label: 'Factura de pago'},
        {key: 'actions', label: 'Acciones'},
        {key: 'history', label: 'Historial'},
      ],
      optionsSearch: [
        {value: '2', text: 'ID Factura'},
        {value: '0', text: 'Vehículo'},
        {value: '1', text: 'Usuario'},
        {value: '3', text: 'Detalle'},
      ],
      search: {
        type: null,
        data: null
      },
      history: [],
      currentPursheId: '',
      status_pay: 'No pago',
      perPage: 10,
      rows: 0,
      currentPage: 1,
      payload: {
        page: 1,
        status_pay: 'No pago'
      },
      amountTotal: 0,
      uuid: ''
    }
  },
  methods: {
    ...mapActions('purshe', ['getPurshes', 'toggleStatus', 'saveFilePurshe', 'searchPurshes', 'deletePurche']),
    showModalDeleteVehicle(vehicleId) {
      this.$bvModal
          .msgBoxConfirm("una vez ejecutada la acción no podra recuperar la información", {
            title: `¿Está seguro de eliminar la factura?`,
            size: "sm",
            buttonSize: "sm",
            okVariant: "danger",
            okTitle: "Eliminar",
            cancelTitle: "NO",
            footerClass: "p-2",
            hideHeaderClose: false,
            centered: true
          })
          .then(value => {
            if (value){
              this.deletePurche(vehicleId).then(response => {
                openNotification('Factura eliminada corrrectamente', 'Se ha eliminado la ruta');
              });
            }
          })
    },
    showModalChangeStatus(id) {
      this.currentPursheId = id;
      this.$refs['modal_change_status'].show();
    },
    changeStatus(data) {
      this.toggleStatus(data).then(response => {
        openNotification();
        this.$refs['modal_change_status'].hide();
      });
    },
    showHistory(history) {
      this.history = history;
      this.$refs['modal_history'].show();
    },
    showModalAddFactura(data) {
      this.amountTotal = data.cost;
      this.currentPursheId = data.id;
      this.$refs['modal_add_file'].show();
    },
    save(formData) {
      this.saveFilePurshe(formData).then(response => {
        openNotification();
        this.$refs['modal_add_file'].hide();
      })
    },
  },
  computed: {
    ...mapState('purshe', ['purshes']),
  },
  filters: {
    status(value) {
      return value ? 'Pagado' : 'Pendiente'
    },
    transform(value) {
      return value.padStart(4, '0')
    }
  },
  watch: {
    'payload.status_pay': function (value) {
      this.getPurshes(this.payload).then(response => {
        this.rows = response.total;
      });
    },
    'payload.page': function (value) {
      this.payload.page = value;
      this.getPurshes(this.payload).then(response => {
        this.rows = response.total;
      });
    }
  }
}
</script>

<style scoped>

</style>
