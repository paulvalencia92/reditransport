<template>
  <div class="main-content">

    <breadcumb :page="'Registro mantenimiento vehiculos'" :folder="'mantenimioento'"/>

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


    <b-card title="INVENTARIO DE MANTENIMIENTO VEHICULOS"
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
            <b-form-group label="Kilometraje" label-for="km">
              <b-form-input
                  class="mb-2"
                  id="km"
                  v-model.trim="payload.km">
              </b-form-input>
            </b-form-group>
          </b-col>


          <b-col md="6">
            <b-form-group label="Fecha" label-for="date">
              <b-form-input
                  class="mb-2"
                  id="date"
                  v-model="payload.date">
              </b-form-input>
            </b-form-group>
          </b-col>


          <b-col md="6">
            <b-form-group label="Pase" label-for="pase">
              <b-form-input
                  class="mb-2"
                  id="pase"
                  v-model="payload.pase">
              </b-form-input>
            </b-form-group>
          </b-col>


          <b-col md="6">
            <b-form-group label="Vence" label-for="vence">
              <b-form-input
                  class="mb-2"
                  id="vence"
                  type="date"
                  v-model="payload.vence">
              </b-form-input>
            </b-form-group>
          </b-col>

          <b-col md="6">
            <b-form-group label="Categoria" label-for="categoria">
              <b-form-input
                  class="mb-2"
                  id="categoria"
                  v-model="payload.categoria">
              </b-form-input>
            </b-form-group>
          </b-col>

          <b-col md="12" class="text-right mt-4">
            <hr>
            <b-button variant="outline-primary" @click="addOption">Agregar</b-button>
          </b-col>

          <b-col md="12">
            <table class="table table-bordered table-hover table-sm  mt-4">
              <thead class="bg-light text-white">
              <tr>
                <th>FECHA</th>
                <th>DESCRIPCION DEL TRABAJO</th>
                <th>KM</th>
                <th>VALOR SERVICIO</th>
                <th>ACCION</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(subitem,index) in payload.items">
                <td class="tdInput"><input type="date" v-model="subitem.fecha" class="form-control tableInput">
                <td class="tdInput"><input v-model="subitem.descripcion" class="form-control tableInput">
                </td>
                <td class="tdInput"><input type="number" v-model="subitem.km" class="form-control tableInput"></td>
                <td class="tdInput"><input v-model="subitem.valor_servicio"
                                           class="form-control tableInput"></td>
                <td><a class="text-danger" style="cursor: pointer" @click.prevent="deleteOption(index)">Eliminar</a>
                </td>
              </tr>
              <tr>
                <td class="bg-gray-100" colspan="4">VALOR TOTAL DEL GASTO</td>
                <td class="tdInput"><input type="number" disabled v-model="payload.total_gasto"
                                           class="form-control tableInput">
                </td>
              </tr>
              </tbody>
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
import {mapActions, mapMutations, mapState} from "vuex";
import moment from "moment";

export default {
  name: "formManteinance",
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
        car_plate: '',
        km: '',
        date: moment().format('YYYY-MM-DD'),
        pase: '',
        vence: '',
        categoria: '',
        items: [
          {
            fecha: '',
            descripcion: '',
            km: '',
            valor_servicio: '',
          },
        ],
        observaciones: '',
        total_gasto: 0,
        type: ''
      },
      carPlate: '',
      drivers: [],
    }
  },
  methods: {
    ...mapActions('vehicle', ['getVehiclesByPlate']),
    ...mapMutations('vehicle', ['SET_VEHICLES']),
    ...mapMutations(['CHANGE_SUBMIT_STATUS', 'CLEAR_ERRORS']),
    ...mapActions('vehicleManteinance', ['registerManteninace']),
    searcByCarPlate() {
      this.getVehiclesByPlate(this.carPlate).then(response => {
        this.setData(response);
      });
    },
    setData(response) {
      this.payload.car_plate = response.car_plate;
      this.payload.type = response.auto_type;

      this.drivers = response.users;

      this.payload.vehicle_id = response.id;
    },
    addOption() {
      this.payload.items.push({
        fecha: '',
        descripcion: '',
        km: '',
        valor_servicio: '',
      })
    },
    deleteOption(index) {
      this.payload.items.splice(index, 1);
    },
    submit() {

      const total = this.payload.items.reduce((total, current) => {
        let val = parseInt(current.valor_servicio);
        return total + val;
      }, 0);

      this.payload.total_gasto = total;
      this.registerManteninace(this.payload).then(response => {
        openNotification();
        this.$router.push({name: 'mantenimiento-vehiculos'});
      })
    }
  },
  computed: {
    ...mapState('vehicle', ['vehicles']),
    ...mapState(['submitStatus', 'errorMessages']),
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
