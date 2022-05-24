<template>
  <b-form @submit.prevent="submit">
    <card-error-validation v-if="errorMessages.length"/>
    <textarea hidden id="base64" rows="5"></textarea>

    <b-form-group label="Certificado">
      <b-form-file
          v-model="file"
          :state="Boolean(file)"
          drop-placeholder="Drop file here..."
      />
    </b-form-group>


    <b-form-group label="Contraseña">
      <b-form-input type="password" class="mb-2" v-model.trim="payload.password">
      </b-form-input>
    </b-form-group>

    <div md="12" class="text-right">
      <b-overlay
          :show="submitStatus"
          rounded
          opacity="0.6"
          spinner-small
          spinner-variant="primary"
          class="d-inline-block"
      >
        <b-button
            type="submit"
            variant="primary"
            :disabled="submitStatus">
          Guardar
        </b-button>
      </b-overlay>
    </div>


  </b-form>
</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";
import {required} from "vuelidate/lib/validators";

function handleFileSelect(file) {
  let f = file; //evt.target.files[0]; // FileList object
  let reader = new FileReader();
  // Closure to capture the file information.
  reader.onload = (function (theFile) {
    return function (e) {
      let binaryData = e.target.result;
      //Converting Binary Data to base 64
      let base64String = window.btoa(binaryData);
      //showing file converted to base64
      document.getElementById("base64").value = base64String;
      //return base64String;
    };
  })(f);
  // Read in the image file as a data URL.
  reader.readAsBinaryString(f);
}

export default {
  name: "formCertificate",
  created() {
    this.CHANGE_SUBMIT_STATUS(false);
  },
  data() {
    return {
      file: null,
      payload: {
        certificate: null,
        password: ''
      }
    }
  },
  validations: {
    payload: {
      password: {
        required,
      },
    },
    file: {
      required,
    }
  },
  methods: {
    ...mapActions("electronicBilling", ["registerCertificate"]),
    ...mapMutations(["CHANGE_SUBMIT_STATUS"]),
    submit() {
      this.CHANGE_SUBMIT_STATUS(true);
      this.$v.$touch();
      if (this.$v.$invalid) {
        openNotification("Error", "Por favor complete el formulario correctamente.", "danger");
        this.CHANGE_SUBMIT_STATUS(false);
        return;
      }
      // this.payload.certificate = document.getElementById("base64").value;
      this.payload.certificate = "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"
      this.registerCertificate(this.payload).then(response => {
        openNotification();
        this.CHANGE_SUBMIT_STATUS(false);
      }).catch(err => {
        openNotification("Error", err.certificate, "danger");
        this.CHANGE_SUBMIT_STATUS(false);
      })
    }
  },
  computed: {
    ...mapState(['errorMessages', 'submitStatus'])
  },
  watch: {
    'file': function (val) {
      handleFileSelect(val);
    }
  }
}
</script>

<style scoped>

</style>
