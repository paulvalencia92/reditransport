<template>
  <div>

      <b-form @submit.prevent="submit">

      <card-error-validation v-if="errorMessages.length"/>

      <b-form-group label="Elegir usuario" label-for="type">
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

      <!-- Spinner-->
      <b-col md="12" class="d-flex justify-content-center" :class="{'m-28' : !loading}">
        <div v-if="loading" class="spinner sm spinner-primary mt-3"></div>
      </b-col>

      <!--Guardar-->
      <b-col md="12" class="text-right">
        <b-button type="submit" variant="primary" :disabled="loading">Guardar</b-button>
        <div v-if="loading == true" class="spinner sm spinner-primary"></div>
      </b-col>


    </b-form>

  </div>
</template>

<script>
import {mapState} from "vuex";
import {required} from "vuelidate/lib/validators";
import axios from "axios";
import { ModelSelect } from 'vue-search-select'
export default {
  name: "create",
  props: ['traffic'],
  created() {
    this.getUserWithOutLicense();
    if(this.traffic)
    {
        this.licence.id = this.traffic.id
        this.licence.expiration_date = this.traffic.expiration_date
        this.licence.user_id = this.traffic.user_id
        this.licence.type = this.traffic.type
    }
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
    submit() {
      this.loading = true
      if (this.$v.$invalid) {
        openNotification('Error', 'Por favor complete el formulario correctamente.', 'danger');
        this.loading = false
        return;
      }
      this.updateLicense().then(response => {
        if (response == 201) {
          openNotification();
          this.loading = false
          this.$emit('close')
        }
      })
    },
    async getUserWithOutLicense() {
      const response = await axios.get('/api/users-license');
      response.data.forEach(element => {
        this.users.push({'text': element.full_name, 'value': element.id})
      });
    },
    async updateLicense() {
      const data = buildFormData(this.licence);
      const response = await axios.post('/api/license-trans-admin/update', data);
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
