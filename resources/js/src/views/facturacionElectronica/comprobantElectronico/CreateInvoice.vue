<template>
  <b-card title="Creación de facturas electronicas">

    <b-form @submit.prevent="submit">
      <b-row>

        <b-col md="12">
          <card-error-validation v-if="errorMessages.length"/>
        </b-col>


        <b-col md="4">
          <b-form-group label="Tipo de factura">
            <b-form-select v-model="payload.type_document_id" :options="typesInvoices"/>
          </b-form-group>
        </b-col>

        <b-col md="4">
          <b-form-group label="Resolución">
            <b-form-select v-model="payload.resolution_number">
              <b-form-select-option :key="item.id" v-for="item in resolutions" :value="item.resolution">
                {{ item.resolution }}
              </b-form-select-option>
            </b-form-select>
          </b-form-group>
        </b-col>

        <b-col md="4">
          <b-form-group label="Numero">
            <b-form-input disabled v-model="payload.number">
            </b-form-input>
          </b-form-group>
        </b-col>

        <b-col md="6">
          <b-form-group label="Nombre del cliente">
            <model-select v-model="payload.user_id" :options="customerOptions"/>
          </b-form-group>
        </b-col>

        <b-col md="6">
          <b-form-group label="Asignar vehiculo">
            <b-form-select v-model="payload.vehicle_id" :options="vehicleOptions"/>
          </b-form-group>
        </b-col>


        <b-col md="12">
          <b-form-group label="Notas">
            <b-form-textarea
                id="textarea"
                v-model="payload.notes"
                rows="3"
                max-rows="6"
            />
          </b-form-group>
        </b-col>

        <b-col md="12" class="my-4">
          <p class="m-0">METODO DE PAGO</p>
          <hr class="m-0">
        </b-col>


        <b-col md="3">
          <b-form-group label="Forma de pago">
            <b-form-select v-model="payload.payment_form.payment_form_id">
              <b-form-select-option value="1">Contado</b-form-select-option>
              <b-form-select-option value="2">Crédito</b-form-select-option>
            </b-form-select>
          </b-form-group>
        </b-col>


        <b-col md="3" v-if="payload.payment_form.payment_form_id == '2'">
          <b-form-group label="Duracion en dias">
            <b-form-input type="number" v-model="payload.payment_form.duration_measure">
            </b-form-input>
          </b-form-group>
        </b-col>


        <b-col md="3">
          <b-form-group label="Medio de pago">
            <b-form-select v-model="payload.payment_form.payment_method_id">
              <b-form-select-option :key="item.id" v-for="item in paymentMethods" :value="item.id">{{
                  item.name
                }}
              </b-form-select-option>
            </b-form-select>
          </b-form-group>
        </b-col>


        <b-col md="3">
          <b-form-group label="Fec de pago">
            <b-form-input v-model="payload.payment_form.date" type="date">
            </b-form-input>
          </b-form-group>
        </b-col>


        <b-col md="3">
          <b-form-group label="Fec. Vencimiento">
            <b-form-input v-model="payload.payment_form.payment_due_date" type="date">
            </b-form-input>
          </b-form-group>
        </b-col>


        <b-col md="12" class="my-4">
          <b-row>
            <b-col>
              <b-button @click="$bvModal.show('modal-add-serv')" variant="outline-primary">Agregar cobro</b-button>
            </b-col>
          </b-row>
        </b-col>


      </b-row>
    </b-form>

    <!--============================
       Table
    ==============================-->
    <table-services @recalculated="calculatedValues" :items="payload.tax_totals"></table-services>

    <hr>

    <div v-if="payload.tax_totals.length > 0" class="text-right mt-4">
      <p class="lead m-0">Total Venta {{ payload.legal_monetary_totals.tax_exclusive_amount }}</p>
      <p class="lead m-0">Impuestos {{ payload.iva }}</p>
      <div class="lead m-0"><h2 class="display-5">Total</h2> {{ payload.legal_monetary_totals.payable_amount }}</div>
    </div>


    <div class="text-right mt-4">
      <router-link :to="{name:'comprobante'}" class="btn btn-outline-google mr-2">Volver</router-link>
      <b-button v-if="payload.tax_totals.length > 0" variant="primary" @click="submit()">Guardar</b-button>
    </div>


    <!--============================
         MODAL ADD SERVICE
    ==============================-->
    <b-modal title="Servicio o producto" id="modal-add-serv" hide-footer>
      <add-service @save="saveService"></add-service>
    </b-modal>



  </b-card>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";
import {ModelSelect} from 'vue-search-select';
import AddService from "./AddService";
import TableServices from "./TableServices";
import {required, requiredIf} from "vuelidate/lib/validators";

export default {
  name: "formCompr",
  created() {
    this.CLEAR_ERRORS();
    this.getCustomers();
    this.getPaymentMethods().then(data => this.paymentMethods = data);
  },
  components: {ModelSelect, AddService, TableServices},
  data() {
    return {
      payload: {
        number: '990000000',
        user_id: '',
        type_document_id: '',
        resolution_number: '',
        notes: '',
        vehicle_id: '',
        customer: {},
        payment_form: {
          payment_form_id: '',
          payment_method_id: '',
          payment_due_date: '',
          duration_measure: '',
        },
        legal_monetary_totals: {
          line_extension_amount: 0,
          tax_exclusive_amount: 0,
          tax_inclusive_amount: 0,
          payable_amount: 0,
        },
        tax_totals: [],
        iva: 0,
        invoice_lines: []
      },
      paymentMethods: [],
      resolutions: [],
    }
  },

  methods: {
    ...mapMutations(['CLEAR_ERRORS']),
    ...mapActions('user', ['getCustomers']),
    ...mapActions('electronicBilling', ['getPaymentMethods']),
    ...mapActions('invoices', ['createInvoice', 'getLatestInvoice']),
    ...mapActions('vehicle', ['getVehiclesByCustomer']),
    ...mapMutations(['CHANGE_SUBMIT_STATUS', 'CLEAR_ERRORS']),
    submit() {
      this.CHANGE_SUBMIT_STATUS(true);
      this.generate();
      this.$v.$touch();
      if (this.$v.$invalid) {
        openNotification(
            "Error",
            "Por favor complete el formulario correctamente.",
            "danger"
        );
        this.CHANGE_SUBMIT_STATUS(false);
        return;
      }
      this.createInvoice(this.payload).then(status => {
        if (status == 201) {
          openNotification();
          this.$router.push({name: 'comprobante'})
        }
      }).catch(err => {
        openNotification('Error', 'No se pudo crear la factura', 'danger');
        this.CHANGE_SUBMIT_STATUS(false);
        return;
      });
    },
    saveService(data) {
      this.payload.tax_totals.push(data);
      this.payload.tax_totals.forEach((item, index) => item.id = index + 1);
      this.$bvModal.hide('modal-add-serv');
      this.calculatedValues();
    },
    calculatedValues() {
      const total1 = this.payload.tax_totals.reduce((total, current) => {
        return total + current.taxable_amount;
      }, 0);

      this.payload.legal_monetary_totals.line_extension_amount = total1;
      this.payload.legal_monetary_totals.tax_exclusive_amount = total1;

      const total2 = this.payload.tax_totals.reduce((total, current) => {
        return total + current.total;
      }, 0);

      this.payload.legal_monetary_totals.tax_inclusive_amount = total2;
      this.payload.legal_monetary_totals.payable_amount = total2;
      this.payload.iva = this.payload.tax_totals.reduce((total, current) => total + current.tax_amount, 0);
    },
    generate() {
      this.payload.invoice_lines = [];
      this.payload.tax_totals.forEach(item => {
        item.tax_id = item.id;
        this.payload.invoice_lines.push({
          unit_measure_id: 1,
          invoiced_quantity: 1,
          line_extension_amount: item.taxable_amount,
          free_of_charge_indicator: false,
          tax_totals: [item],
          description: 'Servicio ' + item.name,
          notes: '',
          code: item.name,
          type_item_identification_id: 1,
          price_amount: item.total,
          base_quantity: 1
        })
      });

    },
    async getResolution(type_document_id) {
      const response = await axios.get('/api/dian/resolution', {params: {type_document_id}});
      if (!response.data.length) {
        this.resolutions = [];
        openNotification('Error', 'No hay una resolucion activa para este tipo de factura', 'danger');
        return;
      }
      this.resolutions = response.data;
    }
  },
  computed: {
    ...mapState(['errorMessages', 'submitStatus']),
    ...mapState('user', ['users']),
    ...mapGetters('user', ['customerOptions']),
    ...mapGetters('electronicBilling', ['typesInvoices']),
    ...mapGetters('vehicle', ['vehicleOptions'])
  },
  watch: {
    'payload.user_id': function (val) {
      const customer = this.users.find(user => user.user_id == val);
      this.payload.customer = customer;
      this.getVehiclesByCustomer(val);
    },
    'payload.type_document_id': function (val) {
      this.getResolution(val);
    },
    'payload.resolution_number': function (val) {
      this.getLatestInvoice(this.payload.type_document_id).then(response => {
        if (response.hasOwnProperty('id')) {
          let number = parseInt(response.number);
          number += 1
          this.payload.number = number;
          return;
        }
      })
      const activeResolution = this.resolutions.find(item => item.resolution == val);
      this.payload.number = activeResolution.from;
    }
  },
  validations: {
    payload: {
      number: {
        required
      },
      user_id: {
        required
      },
      type_document_id: {
        required
      },
      resolution_number: {
        required
      },
      payment_form: {
        payment_form_id: {
          required
        },
        payment_method_id: {
          required
        },
        payment_due_date: {
          required
        },
        duration_measure: {
          required: requiredIf(function () {
            return this.payload.payment_form.payment_form_id == '2'
          })
        },
      },
      legal_monetary_totals: {
        line_extension_amount: {
          required
        },
        tax_exclusive_amount: {
          required,
        },
        tax_inclusive_amount: {
          required,
        },
        payable_amount: {
          required,
        }
      }
    },
  }
}
</script>

<style scoped>

</style>
