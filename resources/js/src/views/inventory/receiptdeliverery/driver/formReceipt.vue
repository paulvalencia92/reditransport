<template>

  <div class="main-content">

    <breadcumb :page="'Registro inventario entrega vehiculos'" :folder="'inventario'"/>

    <b-card class="mb-5">
      <b-row>
        <b-col md="8">
          <b-form-input v-model="carPlate" placeholder="Busca un vehiculo por placa"/>
        </b-col>
        <b-col md="4">
          <b-button :disabled="carPlate.length <= 5" variant="primary" @click="searcByCarPlate()">Buscar</b-button>
          <b-button variant="outline-danger" @click="reset()">Resetear</b-button>
        </b-col>
      </b-row>
    </b-card>


    <b-card title="INVENTARIO DE RECIBO Y ENTREGA DE VEHICULOS"
            v-if="vehicles.length"
            class="mb-5">
      <!--    >-->
      <b-form @submit.prevent="submit">
        <b-row>
          <!--errores de validacion-->
          <b-col md="12">
            <card-error-validation v-if="errorMessages.length"/>
          </b-col>


          <b-col md="6">
            <b-form-group label="Placa" label-for="number_seats">
              <b-form-input
                  class="mb-2"
                  id="operation_card"
                  disabled
                  v-model.trim="payload.car_plate">
              </b-form-input>
            </b-form-group>
          </b-col>


          <b-col md="6">
            <b-form-group label="Tipo de vehiculo" label-for="number_seats">
              <b-form-input
                  class="mb-2"
                  id="operation_card"
                  disabled
                  v-model.trim="payload.type">
              </b-form-input>
            </b-form-group>
          </b-col>


          <b-col md="6">
            <b-form-group label="Conductor" label-for="driver">
              <b-form-select
                  v-model="payload.user_id"
                  :options="userOptions"
                  id="driver">
              </b-form-select>
            </b-form-group>
          </b-col>

          <b-col md="6">
            <b-form-group label="Licencia" label-for="license">
              <b-form-input
                  class="mb-2"
                  id="license"
                  disabled
                  v-model.trim="payload.license">
              </b-form-input>
            </b-form-group>
          </b-col>


          <b-col md="6">
            <b-form-group label="Kilometraje" label-for="km">
              <b-form-input
                  class="mb-2"
                  id="km"
                  v-model.trim="payload.km">
              </b-form-input>
            </b-form-group>
          </b-col>

          <b-col md="6">
            <b-form-group label="Soat" label-for="soat">
              <b-form-input
                  class="mb-2"
                  id="soat"
                  disabled
                  v-model.trim="payload.soat">
              </b-form-input>
            </b-form-group>
          </b-col>


          <b-col md="6">
            <b-form-group label="Extracto Contrato Conductor" label-for="extracto_contrato_conductor">
              <b-form-input
                  class="mb-2"
                  id="extracto_contrato_conductor"
                  v-model="payload.extracto_contrato_conductor">
              </b-form-input>
            </b-form-group>
          </b-col>


          <b-col md="6">
            <b-form-group label="Permisos" label-for="permiso_acceso">
              <b-form-input
                  class="mb-2"
                  id="permiso_acceso"
                  type="date"
                  v-model.trim="payload.permiso_acceso">
              </b-form-input>
            </b-form-group>
          </b-col>


          <b-col md="6">
            <b-form-group label="Seguro Contractual" label-for="contractual">
              <b-form-input
                  class="mb-2"
                  id="contractual"
                  disabled
                  v-model.trim="payload.contractual">
              </b-form-input>
            </b-form-group>
          </b-col>


          <b-col md="6">
            <b-form-group label="Seguro extracontractual" label-for="extra_contractual">
              <b-form-input
                  class="mb-2"
                  id="extra_contractual"
                  disabled
                  v-model.trim="payload.extra_contractual">
              </b-form-input>
            </b-form-group>
          </b-col>


          <b-col md="6">
            <b-form-group label="Fecha de Entrega" label-for="date">
              <b-form-input
                  class="mb-2"
                  id="date"
                  type="date"
                  v-model="payload.date">
              </b-form-input>
            </b-form-group>
          </b-col>

          <b-col md="12">
            <table class="table table-bordered table-hover table-sm  mt-4">
              <template v-for="item in items">
                <thead class="bg-light text-white">
                <tr>
                  <td>{{ item.title }}</td>
                  <td>Q</td>
                  <td>B</td>
                  <td>M</td>
                </tr>
                </thead>
                <tbody>
                <tr v-for="subitem in item.subitems">
                  <td>{{ subitem.name }}</td>
                  <td class="tdInput"><input type="number" v-model="subitem.q" class="form-control tableInput"></td>
                  <td class="tdInput"><input type="number" v-model="subitem.b" class="form-control tableInput"></td>
                  <td class="tdInput"><input type="number" v-model="subitem.m" class="form-control tableInput"></td>
                </tr>
                </tbody>
              </template>
              <!--              <template v-for="item in itemsModule">-->
              <thead class="bg-light text-white">
              <tr>
                <td>{{ itemsModule.title }}</td>
                <td></td>
                <td>SI</td>
                <td>NO</td>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(subitem, index) in itemsModule.subitems">
                <td>{{ subitem.name }}</td>
                <td></td>
                <td>
                  <input
                      class="form-check-input"
                      style="margin-left: 5px"
                      v-model="subitem.si"
                      type="radio"
                      name="isbotiquin"
                      :value="true" checked
                  />
                </td>
                <td>
                  <input
                      class="form-check-input"
                      style="margin-left: 5px"
                      v-model="subitem.si"
                      type="radio"
                      name="isbotiquin"
                      :value="false" checked
                  />
                </td>
              </tr>
              </tbody>
              <!--              </template>-->
            </table>
          </b-col>

          <!-- Spinner-->
          <b-col md="12" class="d-flex justify-content-center" :class="{'m-28' : !submitStatus}">
            <div v-if="submitStatus" class="spinner sm spinner-primary mt-3"></div>
          </b-col>

          <!--Guardar-->
          <b-col md="12" class="text-right">
            <b-button type="submit" variant="primary" :disabled="submitStatus">Guardar</b-button>
          </b-col>

        </b-row>
      </b-form>
    </b-card>
    <b-alert v-else show variant="warning">
      Debe buscar un vehiculo para crear un registro
    </b-alert>
  </div>


</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";
import {minLength, maxLength, required, numeric, between} from "vuelidate/lib/validators";
import moment from "moment";


export default {
  name: "form-vehicle",
  created() {
    this.SET_VEHICLES([]);
    this.CHANGE_SUBMIT_STATUS(false);
    this.CLEAR_ERRORS();
  },
  data() {
    return {
      payload: {
        vehicle_id: '',
        user_id: '',
        km: '',
        extracto_contrato_conductor: '',
        date: moment().format('YYYY-MM-DD'),
        items: [],

        car_plate: '',
        type: '',
        driver: '',
        license: '',
        soat: '',
        contractual: '',
        extra_contractual: '',
        permiso_acceso: '',
      },

      carPlate: "",
      drivers: [],
      itemsModule:
          {
            title: 'BOTIQUIN',
            subitems: [
              {
                name: '(Ver instructivo)',
                si: null,
                no: null,
              }
            ]
          }
    }

  },
  validations: {
    payload: {
      vehicle_id: {
        required,
      },
      user_id: {
        required,
      },
      km: {
        required,
      },
      extracto_contrato_conductor: {
        required,
      },
      date: {
        required,
      },
      car_plate: {
        required,
      },
      type: {
        required,
      },
      driver: {
        required,
      },
      license: {
        required,
      },
      soat: {
        required,
      },
      contractual: {
        required,
      },
      extra_contractual: {
        required,
      },
      permiso_acceso: {
        required,
      },

    },
  },
  methods: {
    ...mapMutations(['CHANGE_SUBMIT_STATUS', 'CLEAR_ERRORS']),
    ...mapMutations('vehicle', ['SET_VEHICLES']),
    ...mapActions('vehicle', ['getVehiclesByPlate']),
    ...mapActions('vehiclereceiptdelivery', ['createVehicleReceiptDelivery']),
    submit() {
      this.CHANGE_SUBMIT_STATUS(true);
      this.$v.$touch();
      if (this.$v.$invalid) {
        openNotification('Error', 'Por favor complete el formulario correctamente.', 'danger');
        return;
      }
      if (this.itemsModule.subitems[0].si) {
        this.itemsModule.subitems[0].si = 'X';
        this.itemsModule.subitems[0].no = '';
      } else {
        this.itemsModule.subitems[0].si = '';
        this.itemsModule.subitems[0].no = 'X';
      }

      this.items.push(this.itemsModule);
      this.payload.items = this.items;

      this.createVehicleReceiptDelivery(this.payload).then(response => {
        openNotification();
        this.$router.push({name: 'recibo-entrega-vehiculos'})
      }).finally(() => {
        this.CHANGE_SUBMIT_STATUS(false);
      });


      this.$emit('save', this.payload)
    },
    searcByCarPlate() {
      this.getVehiclesByPlate(this.carPlate).then(response => {
        this.setData(response);
      });
    },
    setData(response) {
      this.payload.car_plate = response.car_plate;
      this.payload.type = response.auto_type;

      const soat = response['documentations'].find(item => item.type == 'SOAT');
      this.payload.soat = soat.hasOwnProperty('expiration_date') ? soat.expiration_date : 'No data';

      const extra_contractual = response['documentations'].find(item => item.type == 'EXTRA-CONTRACTUAL');
      this.payload.extra_contractual = extra_contractual.hasOwnProperty('expiration_date') ? soat.expiration_date : 'No data';

      const contractual = response['documentations'].find(item => item.type == 'CONTRACTUAL');
      this.payload.contractual = contractual.hasOwnProperty('expiration_date') ? soat.expiration_date : 'No data';

      this.drivers = response.users;

      this.payload.vehicle_id = response.id;
    },
    reset() {
      this.carPlate = "";
      this.getVehiclesByPlate(this.carPlate);
    }
  },
  computed: {
    ...mapState(['submitStatus', 'errorMessages']),
    ...mapGetters('vehiclereceiptdelivery', ['items']),
    ...mapState('vehicle', ['vehicles']),
    userOptions() {
      return this.drivers.map(driver => {
        return {
          value: driver['id'],
          text: driver['full_name'],
        }
      });
    }
  },
  watch: {
    'payload.user_id': function (value) {
      const selectedUser = this.drivers.find(driver => driver.id == value);
      this.payload.driver = selectedUser.full_name;
      if (selectedUser['license_tran']) {
        this.payload.license = selectedUser['license_tran'].expiration_date
      } else {
        this.payload.license = 'No tiene licencia'
      }
    }
  }
}
</script>

<style scoped>
.tdInput {
  padding: 0 !important;
}


.tableInput {
  width: 100%;
  border: none;
  background: transparent;
}

.tableInput:focus {
  border: none;
}
</style>
