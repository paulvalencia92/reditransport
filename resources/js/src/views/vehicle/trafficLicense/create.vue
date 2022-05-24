<template>
  <div class="main-content">
    <breadcumb :page="'Vehiculos'" :folder="'Asignar licencia'"/>

    <div class="row">
      <div class="col-md-5 offset-md-3">
        <b-card>
          <b-form @submit.prevent="submit">

            <card-error-validation v-if="errorMessages.length"/>

            <b-form-group label="Elegir conductor" label-for="type">
              <model-select
                  v-model="licence.user_id"
                  :options="users"
              />
            </b-form-group>
            <b-form-group label="Agregar documento" label-for="type">
              <b-form-file
                  v-model="licence.file"
                  browse-text="Guardar"
                  :state="Boolean(licence.file)"
                  placeholder="Elija un archivo o suéltelo aquí ... "
                  drop-placeholder="Suelta el archivo aquí ...">
              </b-form-file>
            </b-form-group>

            <div class="row">
              <div class="col-6">
                <b-form-group label="Fecha Vencimiento" label-for="expiration_date">
                  <b-form-input id="expiration_date" v-model="licence.expiration_date"
                                class="input"
                                type="date">
                  </b-form-input>
                </b-form-group>
              </div>
              <div class="col-6">
                <b-form-group label="Elige tipo de licencia" label-for="type">
                  <model-select
                      v-model="licence.type"
                      :options="types"
                  />
                </b-form-group>
              </div>
            </div>

            <!--Guardar-->
            <b-col md="12" class="text-right">
              <router-link :to="{name:'licencia-transito'}" class="btn btn-outline-info mr-2" :disabled="loading">Volver</router-link>
              <b-button type="submit" variant="primary" :disabled="loading">Guardar</b-button>
              <div v-if="loading == true" class="spinner sm spinner-primary"></div>
            </b-col>


          </b-form>
        </b-card>
      </div>
    </div>


  </div>
</template>

<script>
import {mapMutations, mapState} from "vuex";
import {required} from "vuelidate/lib/validators";
import axios from "axios";
import {ModelSelect} from 'vue-search-select'

export default {
  name: "create",
  created() {
    this.getUserWithOutLicense();
    this.CLEAR_ERRORS();
    this.CHANGE_SUBMIT_STATUS(false);
  },
  components: {
    ModelSelect
  },
  data() {
    return {
      licence: {
        file: null,
        expiration_date: '',
        user_id: null,
        type: null
      },
      users: [],
      loading: false,
      types: [
        {value: 'B1', text: 'B1'},
        {value: 'B2', text: 'B2'},
        {value: 'B3', text: 'B3'},
        {value: 'C1', text: 'C1'},
        {value: 'C2', text: 'C2'},
        {value: 'C3', text: 'C3'},
      ]
    }
  },
  validations: {
    licence: {
      expiration_date: {
        required
      },
      file: {
        required
      },
      user_id: {
        required
      },
      type: {
        required
      }
    }
  },
  methods: {
    ...mapMutations(['CLEAR_ERRORS', 'CHANGE_SUBMIT_STATUS']),
    submit() {
      this.loading = true
      if (this.$v.$invalid) {
        openNotification('Error', 'Por favor complete el formulario correctamente.', 'danger');
        this.loading = false
        return;
      }
      this.saveLicense().then(response => {
        if (response == 201) {
          openNotification();
          this.loading = false
          this.$router.push({name: 'licencia-transito'})
        }
      })
    },
    async getUserWithOutLicense() {
      const response = await axios.get('/api/users-license');
      if (!response.data.length) {
        openNotification('No hay conductores disponibles para registrar licencia', 'Si desea actualizar la licencia debe realizarlo en la tabla y elegir el conductor al cual le desea actualizar la licencia', 'warning', 10000)
      }
      response.data.forEach(element => {
        this.users.push({'text': element.full_name, 'value': element.id})
      });
    },
    async saveLicense() {
      const data = buildFormData(this.licence);
      const response = await axios.post('/api/license-trans-admin', data);
      return Promise.resolve(response.status)

    }
  },
  computed: {
    ...mapState(['errorMessages', 'submitStatus']),
  },
}
</script>

<style scoped>

</style>
