<template>
  <b-card>
    <p><b>Dia de pago:</b> {{ purshe.payment_date }}</p>
    <p><b>Meses:</b></p>
    <ul v-if="purshe.months">
      <li v-for="month in purshe.months">
        {{ month | months }}
      </li>
    </ul>
    <p><b>Cuotas:</b> {{ purshe.fee }}</p>
    <p><b>Tipo de pago:</b> {{ purshe.payment }}</p>
    <p><b>Detalle:</b> {{ purshe.detail }}</p>
    <b-button variant="primary">{{ purshe.status_pay }}</b-button>
    <b-button v-if="purshe.purshe_transaction.length" @click="showHistory" variant="outline-light">Ver historial
    </b-button>

    <div class="text-right">
      <!--      <a class="btn btn-outline-success"-->
      <!--         download-->
      <!--         :href="`/storage/purshes/${purshe.file}`"-->
      <!--         v-if="purshe.file"-->
      <!--         variant="outline-success">-->
      <!--        Descargar {{ purshe.file }}-->
      <!--      </a>-->
<!--      <b-button @click="showFormAddFile" size="sm" variant="outline-primary">Anexar factura de pago</b-button>-->
    </div>


    <!--============================
      MODAL AGREGAR FACTURA
    ==============================-->
    <b-modal centered ref="modal_add_file" title="Agregar factura de pago" hide-footer>
      <form-add-file :pursheId="purshe.id" @save="save"></form-add-file>
    </b-modal>

    <!--============================
      MODAL VER HISTORIAL
    ==============================-->
    <b-modal centered ref="modal_history" title="Historial" hide-footer size="lg">
      <div v-if="purshe.purshe_transaction.length">
        <b-list-group v-for="purshe in purshe.purshe_transaction" :key="purshe.id">
          <b-list-group-item class="d-flex justify-content-between align-items-center">
            <p class="m-0"><b>Tipo: </b>{{ purshe.payment }} - <b>Pagado:</b> {{ purshe.cost }}</p>
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
</template>

<script>
import formAddFile from "./formAddFile";
import {mapActions} from "vuex";

export default {
  name: "detailsPurshe",
  components: {
    formAddFile
  },
  props: ['purshe'],
  methods: {
    ...mapActions('purshe', ['saveFilePurshe']),
    showFormAddFile() {
      this.$refs['modal_add_file'].show();
    },
    save(formData) {
      this.saveFilePurshe(formData).then(response => {
        openNotification();
        this.$refs['modal_add_file'].hide();
      })
    },
    showHistory() {
      this.$refs['modal_history'].show();
    }
  },
  filters: {
    status(value) {
      return value ? 'Pagado' : 'Pendiente'
    },
    months(value) {
      let month;
      if (value == 1) {
        month = 'Enero'
      }
      if (value == 2) {
        month = 'Febrero'
      }
      if (value == 3) {
        month = 'Marzo'
      }
      if (value == 4) {
        month = 'Abril'
      }
      if (value == 5) {
        month = 'Mayo'
      }
      if (value == 6) {
        month = 'Junio'
      }
      if (value == 7) {
        month = 'Julio'
      }
      if (value == 8) {
        month = 'Agosto'
      }
      if (value == 9) {
        month = 'Septiembre'
      }
      if (value == 10) {
        month = 'Octubre'
      }
      if (value == 11) {
        month = 'Noviembre'
      }
      if (value == 12) {
        month = 'Diciembre'
      }
      return month;
    },
  }
}
</script>

<style scoped>

</style>
