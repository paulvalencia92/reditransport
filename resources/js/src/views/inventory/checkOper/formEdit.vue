<template>
  <div class="main-content">
    <breadcumb :page="'Chequeo operacional'" :folder="'inventario'"/>


    <b-card v-if="payload" title="CHEQUEO PREOPERACIONAL"
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
                  disabled
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
              <b-form-input
                  class="mb-2"
                  id="driver"
                  disabled
                  v-model.trim="payload.driver">
              </b-form-input>
            </b-form-group>
          </b-col>


          <b-col md="6">
            <b-form-group label="Lugar" label-for="place">
              <b-form-input
                  class="mb-2"
                  id="place"
                  disabled
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
                  disabled
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
            <b-button type="submit" variant="primary" :disabled="submitStatus">Actualizar</b-button>
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
  name: "formEdit",
  props: ['id'],
  created() {
    this.getCheckOperDetail(this.id).then(response => {
      this.payload = response;
    })
    this.CHANGE_SUBMIT_STATUS(false);
    this.CLEAR_ERRORS();
  },
  data() {
    return {
      carPlate: '',
      payload: null,
    }
  },
  methods: {
    ...mapActions('vehicle', ['getVehiclesByPlate']),
    ...mapActions('checkOperational', ['getCheckOperDetail', 'updateCheck']),
    ...mapMutations('vehicle', ['SET_VEHICLES']),
    ...mapMutations(['CHANGE_SUBMIT_STATUS', 'CLEAR_ERRORS']),
    submit() {
      this.updateCheck(this.payload).then(response => {
        openNotification();
        this.$router.push({name: 'chequeo-operacional'});
      })
    },
    searcByCarPlate() {
      this.getVehiclesByPlate(this.carPlate).then(response => {
        this.setData(response);
      });
    },
  },
  computed: {
    ...mapState(['errorMessages', 'submitStatus']),
    ...mapGetters('checkOperational', ['itemsGetters']),
    ...mapState('vehicle', ['vehicles']),
  },
}
</script>

<style scoped>

</style>
