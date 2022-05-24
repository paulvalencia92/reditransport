<template>
  <section>

    <div class="text-right">
      <router-link class="btn btn-primary" :to="{name:'notas-debito-registrar'}">Registrar nota debito</router-link>
    </div>

    <div class="mt-4" v-if="errorMessages.length">
      <card-error-validation/>
    </div>

    <b-overlay :show="submitStatus" rounded="sm">
      <b-card title="Lista de facturas" class="mt-4">
        <b-table striped hover responsive :fields="fields" :items="invoices">
          <template v-slot:cell(type_document_id)="data">
            {{ data.item.type_document_id | typeDocument }}
          </template>
          <template v-slot:cell(actions)="data">

            <b-button
                @click="modalConfirmEmitInvoice(data.item.id)"
                size="xs"
                variant="success">
              Emitir
            </b-button>
            <!--Si la factura ya ha sido emitida-->
            <template v-if="data.item.status == 1">
              <a class="btn btn-outline-dark btn-xs" :href="`http://127.0.0.1:8000/storage/${data.item.file}`" download>Descargar</a>
            </template>


          </template>
        </b-table>
      </b-card>
    </b-overlay>

  </section>

</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: "comprobanteElectronico",
  created() {
    const types = [5]
    this.getInvoiceByType({types});
    this.CHANGE_SUBMIT_STATUS(false)
  },
  data() {
    return {
      fields: [
        {key: 'user.full_name', label: 'Usuario'},
        {key: 'vehicle.car_plate', label: 'Vehiculo'},
        {key: 'number', label: 'Número factura'},
        {key: 'type_document_id', label: 'Tipo de factura'},
        {key: 'resolution_number', label: 'Resolución'},
        {key: 'notes', label: 'Notas'},
        {key: 'estado', label: 'Estado'},
        {key: 'actions', label: 'Acciones'},
      ]
    }
  },
  methods: {
    ...mapMutations(['CHANGE_SUBMIT_STATUS']),
    ...mapActions('invoices', ['getInvoiceByType', 'emitDebitNote']),
    modalConfirmEmitInvoice(id) {
      this.$bvModal
          .msgBoxConfirm("¿Está seguro de emitir la factura?", {
            size: "sm",
            buttonSize: "sm",
            okVariant: "success",
            okTitle: "Emitir",
            cancelTitle: "Cancelar",
            cancelVariant: "outline-danger",
            footerClass: "p-2",
            hideHeaderClose: false,
            centered: true
          }).then(value => {
        if (!value) return;
        this.CHANGE_SUBMIT_STATUS(true)
        this.emitDebitNote(id)
            .then(response => {
              openNotification("Hecho", response);
              this.CHANGE_SUBMIT_STATUS(false)
            })
            .catch(err => {
              openNotification('Error', err, 'danger');
              this.CHANGE_SUBMIT_STATUS(false)
            });
      })
    },
  },
  computed: {
    ...mapState(['errorMessages', 'submitStatus']),
    ...mapGetters('electronicBilling', ['typeOrganization']),
    ...mapState('invoices', ['invoices'])
  },
  filters: {
    typeDocument(val) {
      let type;
      if (val == 1) {
        type = "Factura de Venta Nacional"
      } else if (val == 12) {
        type = "Factura electrónica de Venta - tipo 04"
      }
      return type;
    }
  }
}
</script>

<style scoped>

</style>
