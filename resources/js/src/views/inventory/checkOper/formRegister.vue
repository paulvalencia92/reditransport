<template>
  <div class="main-content">
    <breadcumb :page="'Chequeo operacional'" :folder="'inventario'"/>


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


    <b-card title="CHEQUEO PREOPERACIONAL"
            v-if="vehicles.length"
            class="mb-5">
      <!--      -->

      <b-form @submit.prevent="submit">

        <b-row>


          <!--errores de validacion-->
          <b-col md="12">
            <card-error-validation v-if="errorMessages.length"/>
          </b-col>


          <b-col md="6">
            <b-form-group label="Fecha" label-for="date">
              <b-form-input
                  class="mb-2"
                  id="date"
                  type="date"
                  v-model.trim="payload.date">
              </b-form-input>
            </b-form-group>
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
            <b-form-group label="Numero interno" label-for="internal_number">
              <b-form-input
                  class="mb-2"
                  id="internal_number"
                  disabled
                  v-model.trim="payload.internal_number">
              </b-form-input>
            </b-form-group>
          </b-col>


          <b-col md="6">
            <b-form-group label="Modalidad" label-for="modalidad">
              <b-form-input
                  class="mb-2"
                  id="modalidad"
                  disabled
                  v-model.trim="payload.modalidad">
              </b-form-input>
            </b-form-group>
          </b-col>


          <b-col md="6">
            <b-form-group label="Conductor responsable" label-for="driver">
              <b-form-select
                  v-model="payload.user_id"
                  :options="userOptions"
                  id="driver">
              </b-form-select>
            </b-form-group>
          </b-col>


          <b-col md="6">
            <b-form-group label="Lugar" label-for="place">
              <b-form-input
                  class="mb-2"
                  id="place"
                  v-model.trim="payload.place">
              </b-form-input>
            </b-form-group>
          </b-col>


          <b-col md="12" class="my-4">
            <hr>
          </b-col>

          <b-col md="12">
            <table class="table table-bordered table-hover table-sm  mt-4">
              <thead>
              <tr class="bg-gray-100">
                <td class="text-center" rowspan="2">DESCRIPCION</td>
                <td colspan="2">L</td>
                <td colspan="2">M</td>
                <td colspan="2">MI</td>
                <td colspan="2">J</td>
                <td colspan="2">V</td>
                <td colspan="2">S</td>
                <td colspan="2">D</td>
              </tr>
              <tr class="bg-danger">
                <td>B</td>
                <td>M</td>
                <td>B</td>
                <td>M</td>
                <td>B</td>
                <td>M</td>
                <td>B</td>
                <td>M</td>
                <td>B</td>
                <td>M</td>
                <td>B</td>
                <td>M</td>
                <td>B</td>
                <td>M</td>
              </tr>

              </thead>
              <template v-for="item in payload.items">
                <tbody>
                <tr>
                  <td>{{ item.title }}</td>
                  <template v-for="subitem in item.subitems">

                    <td>
                      <input
                          class="form-check-input"
                          style="margin-left: 5px"
                          v-model="subitem.b"
                          type="radio"
                          :value="true" checked
                      />
                    </td>
                    <td>
                      <input
                          class="form-check-input"
                          style="margin-left: 5px"
                          v-model="subitem.b"
                          type="radio"
                          :value="false" checked
                      />
                    </td>
                  </template>
                </tr>
                </tbody>

              </template>

            </table>
          </b-col>

          <b-col md="12">
            <b-form-group label="Observaciones" label-for="observaciones">
              <b-form-textarea
                  id="observaciones"
                  v-model="payload.observaciones"
                  rows="3"
                  max-rows="6">
              </b-form-textarea>
            </b-form-group>
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

  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";
import moment from "moment";

export default {
  name: "index",
  created() {
    this.payload.items = clone(this.itemsGetters);
    this.SET_VEHICLES([]);
    this.CHANGE_SUBMIT_STATUS(false);
    this.CLEAR_ERRORS();
  },
  data() {
    return {
      carPlate: '',
      drivers: [],
      payload: {
        vehicle_id: '',
        user_id: '',
        date: moment().format('YYYY-MM-DD'),
        car_plate: '',
        internal_number: '',
        modalidad: 'SERVICIO ESPECIAL',
        driver: '',
        place: '',
        observaciones: '',
        items: []
      },

    }
  },
  methods: {
    ...mapActions('vehicle', ['getVehiclesByPlate']),
    ...mapActions('checkOperational', ['createCheck']),
    ...mapMutations('vehicle', ['SET_VEHICLES']),
    ...mapMutations(['CHANGE_SUBMIT_STATUS', 'CLEAR_ERRORS']),
    submit() {
      this.createCheck(this.payload).then(response =>{
        openNotification();
        this.$router.push({name:'chequeo-operacional'});
      })
    },
    searcByCarPlate() {
      this.getVehiclesByPlate(this.carPlate).then(response => {
        this.setData(response);
      });
    },
    setData(response) {
      this.payload.car_plate = response.car_plate;
      this.payload.internal_number = response.internal_number;

      this.drivers = response.users;

      this.payload.vehicle_id = response.id;
    },
    reset() {
      this.carPlate = "";
      this.getVehiclesByPlate(this.carPlate);
    }
  },
  computed: {
    ...mapState(['errorMessages', 'submitStatus']),
    ...mapGetters('checkOperational', ['itemsGetters']),
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
      this.payload.driver = selectedUser['full_name'];
    }
  }
}
</script>

<style scoped>

</style>
