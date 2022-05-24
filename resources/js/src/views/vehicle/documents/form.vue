<template>
  <b-form @submit.prevent="submit">

    <card-error-validation v-if="errorMessages.length"/>

    <!--tipo de documento-->
    <b-form-group label="Tipo de documento" label-for="type">
      <b-form-select
          v-model="document.type"
          :options="types"
          id="settledCities">
      </b-form-select>
    </b-form-group>


    <!--tipo de documento-->
    <b-form-group label="Tipo de documento" label-for="type">
      <b-form-file
          v-model="document.file"
          browse-text="Guardar"
          :state="Boolean(document.file)"
          placeholder="Elija un archivo o suéltelo aquí ... "
          drop-placeholder="Suelta el archivo aquí ...">
      </b-form-file>
    </b-form-group>


    <!--numero-->
    <b-form-group label="Número de documento" label-for="number">
      <b-form-input
          class="mb-2"
          id="number"
          v-model.trim="$v.document.number.$model">
      </b-form-input>
    </b-form-group>

    <!--Nombre entidad-->
    <b-form-group label="Nombre entidad" label-for="identity_name">
      <b-form-input
          class="mb-2"
          id="identity_name"
          v-model.trim="$v.document.identity_name.$model">
      </b-form-input>
    </b-form-group>


    <!--Fecha Vencimiento-->
    <b-form-group label="Fecha Vencimiento" label-for="expiration_date">
      <b-form-input id="expiration_date" v-model="document.expiration_date"
                    class="input"
                    type="date">
      </b-form-input>
    </b-form-group>


    <!-- Spinner-->
    <b-col md="12" class="d-flex justify-content-center" :class="{'m-28' : !submitStatus}">
      <div v-if="submitStatus" class="spinner sm spinner-primary mt-3"></div>
    </b-col>

    <!--Guardar-->
    <b-col md="12" class="text-right">
      <b-button type="submit" variant="primary" :disabled="submitStatus">Guardar</b-button>
    </b-col>


  </b-form>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from "vuex";
import {required} from "vuelidate/lib/validators";

export default {
  name: "formDocument",
  props: ['document'],
  created() {
    this.CLEAR_ERRORS();
    this.CHANGE_SUBMIT_STATUS(false);
  },
  methods: {
    ...mapActions('vehicleDocument', ['saveVehicleDocument', 'updateVehicleDocument']),
    ...mapMutations(['CHANGE_SUBMIT_STATUS', 'CLEAR_ERRORS']),
    submit() {
      if (this.$v.$invalid) {
        openNotification('Error', 'Por favor complete el formulario correctamente.', 'danger');
        return;
      }
      const data = buildFormData(this.document);

      if (data.get('id')) {
        this.updateVehicleDocument(data).then(response => {
          openNotification();
          this.$bvModal.hide(`modal-form-document-${data.get('vehicle_id')}`);
        });
      } else {
        this.saveVehicleDocument(data).then(response => {
          openNotification();
          this.$bvModal.hide(`modal-form-document-${data.get('vehicle_id')}`);
        });
      }

    },

  },
  computed: {
    ...mapState(['errorMessages', 'submitStatus']),
    ...mapGetters('vehicleDocument', ['types']),
  },
  validations: {
    document: {
      type: {
        required
      },
      file: {
        required
      },
      number: {
        required
      },
      identity_name: {
        required
      },
      expiration_date: {
        required
      },
    }
  }

}
</script>

<style scoped>

</style>
