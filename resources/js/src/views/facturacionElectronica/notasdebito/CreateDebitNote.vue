<template>
  <b-card title="Notas debito">
    <b-form @submit.prevent="submit">
      <b-row>

        <b-col md="12">
          <card-error-validation v-if="errorMessages.length"/>
        </b-col>


        <!--Factura-->
        <b-col md="4">
          <b-form-group label="Factura">
            <b-form-select v-model="payload.billing_reference.uuid">
              <b-form-select-option :key="item.id" v-for="item in invoices" :value="item.cufe">
                {{ item.number }}
              </b-form-select-option>
            </b-form-select>
          </b-form-group>
        </b-col>


        <!--Resoluciones-->
        <b-col md="4">
          <b-form-group label="Resolución">
            <b-form-select v-model="payload.resolution_number">
              <b-form-select-option :key="item.id" v-for="item in resolutions" :value="item.resolution">
                {{ item.resolution }}
              </b-form-select-option>
            </b-form-select>
          </b-form-group>
        </b-col>


        <!--Numero consecutivo resolucion-->
        <b-col md="4">
          <b-form-group label="Numero">
            <b-form-input disabled v-model="payload.number">
            </b-form-input>
          </b-form-group>
        </b-col>


        <!--Fecha de elaboración-->
        <b-col md="4">
          <b-form-group label="Fecha de elaboración">
            <b-form-input v-model="payload.billing_reference.issue_date" type="date">
            </b-form-input>
          </b-form-group>
        </b-col>


        <!--Cliente-->
        <b-col md="6">
          <b-form-group label="Nombre del cliente">
            <b-form-input :value="customerName" disabled>
            </b-form-input>
          </b-form-group>
        </b-col>


        <!--Descripcion nota credito-->
        <b-col md="12">
          <b-form-group label="PRUEBA DE MOTIVO NOTA CREDITO">
            <b-form-textarea
                id="textarea"
                v-model="payload.notes"
                rows="3"
                max-rows="6"
            />
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
     MODAL ADD SERVICE
    ==============================-->
    <b-modal title="Servicio o producto" id="modal-add-serv" hide-footer>
      <add-service @save="saveService"></add-service>
    </b-modal>


    <!--============================
          Table
    ==============================-->
    <table-services
        @recalculated="calculatedValues"
        :items="payload.tax_totals"
    />

    <hr>

    <div v-if="payload.tax_totals.length > 0" class="text-right mt-4">
      <p class="lead m-0">Total Venta {{ payload.requested_monetary_totals.tax_exclusive_amount }}</p>
      <p class="lead m-0">Impuestos {{ payload.iva }}</p>
      <div class="lead m-0"><h2 class="display-5">Total</h2> {{ payload.requested_monetary_totals.payable_amount }}
      </div>
    </div>

    <!--    <div v-if="payload.tax_totals.length > 0" class="text-right mt-4">-->
    <div class="text-right mt-4">
      <b-button variant="primary" @click="submit()">Guardar</b-button>
    </div>


  </b-card>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";
import {ModelSelect} from 'vue-search-select';
import AddService from "./AddService";
import TableServices from "./TableServices";
import {required} from "vuelidate/lib/validators";

export default {
  name: "formNotCred",
  components: {ModelSelect, AddService, TableServices},
  created() {
    this.CLEAR_ERRORS();
    const types = [1, 2]
    this.getInvoiceByType({types});
    this.CHANGE_SUBMIT_STATUS(false)
    this.getResolution(5);
  },
  data() {
    return {
      payload: {
        user_id: '',
        billing_reference: {
          number: 'SETP990000384',
          uuid: '',
          issue_date: '',
        },
        notes: '',
        customer: null,
        resolution_number: '',
        prefix: '',
        number: '',
        type_document_id: 5,
        tax_totals: [],
        requested_monetary_totals: {
          line_extension_amount: 0,
          tax_exclusive_amount: 0,
          tax_inclusive_amount: 0,
          payable_amount: 0,
        },
        debit_note_lines: [],
        invoice_id: ''
      },
      customerName: ''
    }
  },
  methods: {
    ...mapMutations(['CLEAR_ERRORS']),
    ...mapActions('user', ['getCustomers']),
    ...mapActions('invoices', ['createInvoice', 'getInvoiceByType', 'createInvoice', 'getLatestInvoice']),
    ...mapActions('electronicBilling', ['getResolution']),
    ...mapMutations(['CHANGE_SUBMIT_STATUS']),
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

      this.payload.requested_monetary_totals.line_extension_amount = total1;
      this.payload.requested_monetary_totals.tax_exclusive_amount = total1;

      const total2 = this.payload.tax_totals.reduce((total, current) => {
        return total + current.total;
      }, 0);

      this.payload.requested_monetary_totals.tax_inclusive_amount = total2;
      this.payload.requested_monetary_totals.payable_amount = total2;
      this.payload.iva = this.payload.tax_totals.reduce((total, current) => total + current.tax_amount, 0);
    },
    submit() {
      this.generate();
      this.$v.$touch();
      if (this.$v.$invalid) {
        openNotification(
            "Error",
            "Por favor complete el formulario correctamente.",
            "danger"
        );
        return;
      }

      this.createInvoice(this.payload).then(status => {
        if (status == 201) {
          openNotification();
          this.$router.push({name: 'notas-credito'})
        }
      }).catch(err => {
        openNotification('Error', 'No se pudo crear la factura', 'danger');
        this.CHANGE_SUBMIT_STATUS(false);
        return;
      });


    },
    generate() {
      this.payload.debit_note_lines = [];
      this.payload.tax_totals.forEach(item => {
        item.tax_id = item.id;
        this.payload.debit_note_lines.push({
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
  },
  computed: {
    ...mapState(['errorMessages', 'submitStatus']),
    ...mapState('user', ['users']),
    ...mapState('invoices', ['invoices']),
    ...mapState('electronicBilling', ['resolutions']),
    ...mapGetters('user', ['customerOptions']),
  },
  watch: {
    'payload.billing_reference.uuid': function (val) {
      const invoice = this.invoices.find(item => item.cufe == val);
      this.payload.invoice_id = invoice.id;
      this.payload.customer = invoice.customer;
      this.payload.user_id = invoice.customer.user_id;
      this.customerName = invoice.customer.name;
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
      billing_reference: {
        // number: {
        //   required
        // },
        uuid: {
          required
        },
        issue_date: {
          required
        }
      },
      customer: {
        required
      },
      resolution_number: {
        required
      },
      // prefix: {
      //   required
      // },
      number: {
        required
      },
      type_document_id: {
        required
      },
      requested_monetary_totals: {
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
      },
    },
  },
}
</script>

<style scoped>

</style>
