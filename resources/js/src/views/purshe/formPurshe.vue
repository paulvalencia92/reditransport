<template>
  <b-form @submit.prevent="submit">
    <b-row>

      <b-col md="12">
        <card-error-validation v-if="errorMessages.length"/>
      </b-col>

      <b-col md="4">
        <b-form-group label="Seleccione a que se le creara la cartera" v-slot="{ ariaDescribedby }">
          <b-form-radio-group
            id="radio-group-2"
            v-model="selected"
            name="radio-sub-component"
          >
          <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="type" value="vehicle">Vehiculo
          </b-form-radio>
          <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="type" value="user">Usuario
          </b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </b-col>

      <b-col md="4">
        <b-form-group label="Seleccione tipo de cobro" v-slot="{ ariaDescribedby }">
          <b-form-radio-group
            id="radio-group-1"
            v-model="purshe.type"
            name="radio-sub-component1"
          >
          <b-form-radio v-model="purshe.type" :aria-describedby="ariaDescribedby" name="purshe.type" value="unico">Único
          </b-form-radio>
          <b-form-radio v-model="purshe.type" :aria-describedby="ariaDescribedby" name="purshe.type" value="recurrente">Recurrente
          </b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </b-col>

       <b-col md="4">
        <b-form-group label="Total a pagar">
          <b-form-input
              class="mb-2"
              type="number"
              label="Total"
              v-model="purshe.cost">
          </b-form-input>
        </b-form-group>
      </b-col>


      <b-col md="12" v-if="purshe.type == 'recurrente'">
        <b-form-group
            label="Elegir meses"
            v-slot="{ ariaDescribedby }">
          <b-form-checkbox-group
              v-model="purshe.months"
              :options="optionsMonths"
              :aria-describedby="ariaDescribedby"
              name="flavour-1a"
          ></b-form-checkbox-group>
        </b-form-group>
      </b-col>


      <b-col md="6" v-if="purshe.type == 'recurrente'">
        <b-form-group label="Dia de cobro" label-for="Dia de cobro">
          <b-form-input id="payment_date" v-model="purshe.day"
                        class="input"
                        type="number">
          </b-form-input>
        </b-form-group>
      </b-col>


      <b-col md="6" v-else>
        <b-form-group label="Fecha máxima de pago" label-for="Fecha de pago">
          <b-form-input id="payment_date" v-model="purshe.payment_date"
                        class="input"
                        type="date">
          </b-form-input>
        </b-form-group>
      </b-col>


      <b-col md="6">

        <b-form-group v-if="selected == 'vehicle'" label="Busca vehículo por placa" label-for="vehicle_id">
          <model-select v-model="purshe.vehicle_id"
              :options="vehicleOptions"
          />
        </b-form-group>

        <b-form-group v-else-if="selected == 'user'" label="Dueño del vehículo o conductor" label-for="user_id">
          <model-select v-model="purshe.user_id"
              :options="userOptions"
          />
        </b-form-group>

        <b-form-group v-else label="Elije vehiculo o usuario" label-for="blank">
          <b-form-select v-model="purshe.user_id">
            <b-form-select-option :value="null" disabled>Elija una opcion</b-form-select-option>
          </b-form-select>
        </b-form-group>
      </b-col>


      <b-col md="12">
        <b-form-group label="Detalles del cobro" label-for="detail">
          <b-form-textarea
              id="textarea"
              v-model="purshe.detail"
              placeholder="Ingrese un detalle si asi lo desea..."
              rows="3"
              max-rows="6">
          </b-form-textarea>
        </b-form-group>
      </b-col>

     


      <b-col md="12" class="text-right">
        <b-button type="submit" variant="primary"
                  :disabled="submitStatus === 'PENDING' || (purshe.user_id == null && purshe.vehicle_id == null)">
          Guardar
        </b-button>
      </b-col>

      <b-col md="12">
        <div v-once class="typo__p" v-if="submitStatus === 'PENDING'">
          <div class="spinner sm spinner-primary mt-3"></div>
        </div>
      </b-col>


    </b-row>
  </b-form>
</template>

<script>
import {email, minLength, required} from "vuelidate/lib/validators";
import axios from "axios";
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";
import { ModelSelect } from 'vue-search-select'

export default {
  name: "formPurshe",
  components: {
    ModelSelect
  },
  props: {
    purshe: {
      required: true,
      type: Object
    }
  },
  created() {
    this.CHANGE_SUBMIT_STATUS(null);
  },
  data() {
    return {
      userOptions: [],
      selected: null,
      optionsMonths: [
        {text: 'Enero', value: 1},
        {text: 'Febrero', value: 2},
        {text: 'Marzo', value: 3},
        {text: 'Abril', value: 4},
        {text: 'Mayo', value: 5},
        {text: 'Junio', value: 6},
        {text: 'Julio', value: 7},
        {text: 'Agosto', value: 8},
        {text: 'Septiembre', value: 9},
        {text: 'Octubre', value: 10},
        {text: 'Noviembre', value: 11},
        {text: 'Diciembre', value: 12},
      ]
    }
  },
  validations: {
    purshe: {
      type: {
        required
      }
    },
  },

  methods: {
    ...mapMutations(['CHANGE_SUBMIT_STATUS']),
    ...mapActions('vehicle', ['getVehicles']),
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        openNotification('Error', 'Por favor complete el formulario correctamente.', 'danger');
        return;
      }
      this.CHANGE_SUBMIT_STATUS('PENDING');
      this.$emit('save', this.purshe)
    },
    async getUserswithVehicles() {
      const response = await axios.get('/api/users/has-vehicles');
      this.userOptions = response.data;
    }
  },
  computed: {
    ...mapState(['errorMessages', 'submitStatus']),
    ...mapState('user', ['users']),
    ...mapGetters('vehicle', ['vehicleOptions'])
  },
  watch: {
    selected: function (value) {
      if (value == 'user') {
        this.getUserswithVehicles();
      } else if (value == 'vehicle') {
        this.getVehicles();
      }
    },
    'purshe.user_id': function (value) {
      if (value) {
        this.purshe.vehicle_id = null;
      }

    },
    'purshe.vehicle_id': function (value) {
      if (value) {
        this.purshe.user_id = null;
      }
    }
  }
}
</script>

<style>
.spinner.sm {
  height: 2em;
  width: 2em;
}
</style>
