<template>
  <div>
    <b-card class="card-icon text-center mb-30">
      <p class="text-24 mb-2">Vehiculo - <span class="text-primary">{{ vehicle.car_plate }}</span></p>

      <b-list-group v-if="vehicle.documentations.length">
        <b-list-group-item v-for="document in vehicle.documentations" :key="document.id"
                           class="d-flex justify-content-between align-items-center">

          <p class="m-0"><b>{{ document.type }}</b> | <span class="text-muted">Vence:</span>{{ document.expiration_date }}</p>
          <p class="m-0"><span class="text-muted">Doc:</span>{{ document.number }}</p>

          <div>
            <a :href="`/storage/documents/${document.file}`" class="btn btn-primary btn-xs" download>Descargar</a>
            <button @click="showModalFormEditDocument(document)" class="btn btn-outline-primary btn-xs">Actualizar
            </button>
          </div>


        </b-list-group-item>
      </b-list-group>

      <div class="mt-4">
        <i class="i-Letter-Open clickeable" @click="showModalFormAddDocument(vehicle)"></i>
      </div>

    </b-card>

    <!--============================
         FORMULARIO
    ==============================-->
    <b-modal centered :id="`modal-form-document-${vehicle.id}`" title="Guardar documentos" hide-footer>
      <form-document :document="document"></form-document>
    </b-modal>


  </div>

</template>

<script>
import formDocument from "./form";

export default {
  name: "detailsDocuments",
  components: {formDocument},
  props: ['vehicle'],
  data() {
    return {
      document: {
        vehicle_id: this.vehicle.id,
        type: '',
        file: null,
        number: '',
        identity_name: '',
        expiration_date: '',
      },
      draft: {}
    }
  },
  created() {
    this.draft = clone(this.document);
  },
  methods: {
    showModalFormAddDocument() {
      this.document = clone(this.draft);
      this.$bvModal.show(`modal-form-document-${this.vehicle.id}`);
    },
    showModalFormEditDocument(document) {
      this.document = clone(document);
      this.document.file = null;
      this.$bvModal.show(`modal-form-document-${this.vehicle.id}`);
    }
  }
}
</script>

<style scoped>

</style>
