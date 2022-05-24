<template>
  <div
      class="auth-layout-wrap"
      :style="{ backgroundImage: 'url(' + bgImage + ')' }">
    <div class="container ">
      <div class="card o-hidden">
        <div class="row">
          <div class="col-md-12">
            <div class="p-4">
              <div class="auth-logo text-center mb-30">
                <img src="/images/logo-sistema.png"/>
              </div>
              <form-wizard @on-complete="onComplete" color="#A855F7" step-size="sm" back-button-text="Regresar" next-button-text="Siguiente">
                <template v-slot:title>
                  <h4 class="wizard-title">FORMULARIO INSCRIPCIÓN PLATAFORMA SERVIPUBLICO</h4>
                </template>

                <tab-content title="Datos personales propietario" icon="i-Administrator">
                  <form-owner :driver="driver"></form-owner>
                </tab-content>
                <tab-content title="Datos vehiculos" icon="i-Gear">
                  <form-vehicle :driver="driver"></form-vehicle>
                </tab-content>
                <tab-content title="Datos conductor" icon="i-Thumbs-Up-Smiley">
                  <form-driver :driver="driver"></form-driver>
                </tab-content>
                <tab-content title="Documentacion adjunta" icon="i-Thumbs-Up-Smiley">
                  <form-documents :driver="driver"></form-documents>
                </tab-content>
              </form-wizard>
              <b-progress v-if="progressBarState != null" height="10px" :value="progressBarState"  ></b-progress>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import formOwner from './formOwner';
import formVehicle from './formVehicle';
import formDriver from "./formDriver";
import formDocuments from './formDocuments'

export default {
  name: "index",
  components: {
    formOwner,
    formVehicle,
    formDriver,
    formDocuments
  },
  data() {
    return {
      bgImage: require("@/assets/images/photo-wide-4.jpg"),
      signInImage: require("@/assets/images/photo-long-3.jpg"),

      progressBarState: null,

      driver: {
        names: '',
        surnames: '',
        id_type_id: '',
        department_id: '',
        identification_number: '',
        municipality_id: '',
        date_of_birth: '',
        sex: '',
        residence_address: '',
        phone_number: '',
        email: '',
        file_cc: null,

        car_plate: '',
        department_id_vehicle: '',
        municipality_id_vehicle: '',
        internal_number: '',
        enrollment_date: '',
        chassis_number: '',
        engine_number: '',
        model: '',
        brand: '',
        cylinder: '',
        color: '',
        auto_type: '',
        number_seats: '',
        operation_card: '',

        names_driver: '',
        surnames_driver: '',
        id_type_id_driver: '',
        department_id_driver: '',
        identification_number_driver: '',
        municipality_id_driver: '',
        date_of_birth_driver: '',
        sex_driver: '',
        residence_address_driver: '',
        phone_number_driver: '',
        email_driver: '',
        file_cc_driver: null,
        file_license: null,

        soat: null,
        contractual: null,
        extra_contractual: null,
        tarjeta_operacion: null,
        tecnomecanica: null,


      },
    }
  },
  methods: {
    onComplete() {
      this.createPreRegister().then(response => {
        openNotification();
        this.$router.push({name: 'login'})
      });
    },
    async createPreRegister() {
      try {
        const data = buildFormData(this.driver);
        const response = await axios.post('/api/preregister',
          data,
          {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: function( progressEvent ) {
            this.progressBarState = parseInt( Math.round( ( progressEvent.loaded / progressEvent.total ) * 100 ));
            }.bind(this)
          }
        );
        return Promise.resolve('success');
      } catch (e) {
      } finally {
        this.progressBarState = null;
      }
    }
  }
}
</script>

<style scoped>

</style>
