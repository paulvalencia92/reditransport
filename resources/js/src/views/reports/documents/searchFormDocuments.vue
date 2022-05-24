<template>
  <b-form @submit.prevent="submit">
    <b-row>


      <b-col md="12">
        <b-row>

          <b-col md="3">
            <b-form-group label="Vehiculos con usuarios asociados" v-slot="{ ariaDescribedby }">
              <b-form-radio-group
                  id="associate"
                  v-model="search.associate"
                  :options="options"
                  :aria-describedby="ariaDescribedby"
                  name="associate">
              </b-form-radio-group>
            </b-form-group>
          </b-col>

          <b-col md="3">
            <b-form-group class="mt-4">
              <b-form-checkbox
                  id="checkbox-1"
                  v-model="search.defeated"
                  name="defeated"
                  :value="true"
                  :unchecked-value="false">
                Documentos Vencidos
              </b-form-checkbox>
            </b-form-group>
          </b-col>

        </b-row>
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
        <span v-if="!search.documents.length" class="text-danger mt-2">Elija por lo menos un documento</span>
      </b-col>

      <!--Acciones-->
      <b-col md="12" class="mt-4 text-right">
        <b-button class="mr-4" variant="danger" @click="resetFilter">Reestablecer filtros</b-button>
        <b-button :disabled="!search.documents.length" variant="primary" type="submit">Generar reporte</b-button>
      </b-col>

    </b-row>
  </b-form>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
  name: "searchFormDocuments",
  created() {
    this.draft = clone(this.search)
  },
  data() {
    return {
      search: {
        associate: 'todos',
        defeated: null,
        documents: []
      },
      draft: {},
      options: [
        {text: 'Sin Asociar ', value: 'sin-asociar'},
        {text: 'Todos', value: 'todos'},
      ]
    }
  },
  methods: {
    ...mapMutations('report', ['ADD_REQUEST', 'CLEAR_DATA']),
    ...mapActions('report', ['getReportDocuments']),
    submit() {
      this.ADD_REQUEST(this.search);
      this.getReportDocuments(this.search);
    },
    resetFilter() {
      this.search = clone(this.draft);
      this.ADD_REQUEST(this.search);
      this.CLEAR_DATA('documents');
    },
  },
  computed: {
    ...mapGetters('vehicleDocument', ['types']),
  }
}
</script>

<style scoped>

</style>
