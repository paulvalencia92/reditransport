<template>
  <div>
    <b-table bordered :fields="fields" :items="vehicles">
      <template v-slot:cell(documents)="data">
        <b-button v-if="data.item.documentations.length"
                  @click="showModalDocuments(data.item.documentations)"
                  size="sm"
                  variant="primary">Ver
        </b-button>
        <span v-else>No hay documentos</span>
      </template>
    </b-table>

    <b-modal centered ref="modal-documents" title="Vehiculos asociados al afiliado" size="lg">
      <documents-table :documents="currentDocuments"/>
    </b-modal>
  </div>

</template>

<script>
import documentsTable from "./documentsTable";

export default {
  name: "vehiclesTable",
  components: {documentsTable},
  props: ['vehicles'],
  data() {
    return {
      fields: [
        {key: 'car_plate', label: 'Placa'},
        {key: 'brand', label: 'Marca'},
        {key: 'color', label: 'Color'},
        {key: 'number_seats', label: 'Numero de puestos'},
        {key: 'auto_type', label: 'Tipo de auto'},
        {key: 'documents', label: 'Documentos'},
      ],
      currentDocuments: [],
    }
  },
  methods: {
    showModalDocuments(documents) {
      this.currentDocuments = documents;
      this.$refs['modal-documents'].show();
    }
  }
}
</script>

<style scoped>

</style>
