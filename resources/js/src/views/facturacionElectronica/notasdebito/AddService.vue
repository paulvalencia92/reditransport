<template>
  <b-form @submit.prevent="save">

    <b-form-group label="Producto/Servicio">
      <b-form-input v-model="tax.name">
      </b-form-input>
    </b-form-group>

    <b-form-group label="Impuesto">
      <b-form-input v-model="tax.percent">
      </b-form-input>
    </b-form-group>


    <b-form-group label="Precio Unitario">
      <b-form-input v-model="tax.taxable_amount">
      </b-form-input>
    </b-form-group>

    <div class="mt-4 text-right">
      <b-button @click="$bvModal.hide('modal-add-serv')" variant="light">Cerrar</b-button>
      <b-button :disabled="tax.taxable_amount <= 0" type="submit" variant="primary">Agregar</b-button>
    </div>


  </b-form>
</template>

<script>
export default {
  name: "AddService",
  data() {
    return {
      tax: {
        id: '',
        name: '',
        taxable_amount: 0,
        tax_amount: 0,
        percent: 19,
        total: 0

      }
    }
  },
  methods: {
    save() {
      this.addPercent();
      this.$emit('save', this.tax);
    },
    addPercent() {
      const taxableAmount = parseFloat(this.tax.taxable_amount);
      const percent = parseFloat(this.tax.percent);
      const maxAmount = (taxableAmount * percent) / 100;
      this.tax.tax_amount = maxAmount;
      this.tax.taxable_amount = taxableAmount;
      this.tax.total = Math.round(taxableAmount + maxAmount);
    }
  },
  watch: {}
}
</script>

<style scoped>

</style>
